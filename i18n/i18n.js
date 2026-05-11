(function () {
  const config = window.ElComalI18nConfig || {};
  const locales = window.ElComalLocales || {};
  const defaultLanguage = config.defaultLanguage || "es";
  const enabledLanguages = config.enabledLanguages || Object.keys(locales);
  const storageKey = "el-comal-language";
  let activeMenuGroup = 0;

  function isObject(value) {
    return value && typeof value === "object" && !Array.isArray(value);
  }

  function mergeDeep(base, override) {
    if (Array.isArray(base) || Array.isArray(override)) {
      return override === undefined ? base : override;
    }

    const result = { ...(base || {}) };
    Object.keys(override || {}).forEach((key) => {
      result[key] = isObject(result[key]) && isObject(override[key])
        ? mergeDeep(result[key], override[key])
        : override[key];
    });
    return result;
  }

  function getValue(source, path) {
    return path.split(".").reduce((value, key) => (value == null ? value : value[key]), source);
  }

  function getDictionary(language) {
    const dictionary = mergeDeep(locales[defaultLanguage], locales[language] || {});
    const translatedGroups = locales[language] && locales[language].menu && locales[language].menu.groupTitles;

    if (translatedGroups && dictionary.menu && dictionary.menu.groups) {
      dictionary.menu.groups = dictionary.menu.groups.map((group, index) => ({
        ...group,
        title: translatedGroups[group.id] || translatedGroups[index] || group.title,
      }));
    }

    return dictionary;
  }

  function getInitialLanguage() {
    const saved = localStorage.getItem(storageKey);
    const browser = (navigator.language || "").slice(0, 2);

    if (enabledLanguages.includes(saved)) return saved;
    if (enabledLanguages.includes(browser)) return browser;
    return defaultLanguage;
  }

  function setTextContent(dictionary) {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = getValue(dictionary, element.dataset.i18n);
      if (typeof value === "string") {
        element.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
      element.dataset.i18nAttr.split(",").forEach((pair) => {
        const [attr, path] = pair.split(":").map((item) => item.trim());
        const value = getValue(dictionary, path);
        if (attr && typeof value === "string") {
          element.setAttribute(attr, value);
        }
      });
    });

    if (dictionary.meta && dictionary.meta.title) {
      document.title = dictionary.meta.title;
    }
  }

  function renderLanguageSwitcher(language) {
    const switcher = document.querySelector("[data-language-switcher]");
    if (!switcher) return;

    switcher.innerHTML = enabledLanguages
      .filter((code) => locales[code])
      .map((code) => {
        const locale = locales[code];
        const active = code === language ? " is-active" : "";
        return `<button class="language-option${active}" type="button" data-lang="${code}" aria-label="${locale.name}">${locale.shortName || code.toUpperCase()}</button>`;
      })
      .join("");

    switcher.querySelectorAll("[data-lang]").forEach((button) => {
      button.addEventListener("click", () => applyLanguage(button.dataset.lang));
    });
  }

  function renderMenu(dictionary) {
    const tabs = document.querySelector("[data-menu-tabs]");
    const panels = document.querySelector("[data-menu-panels]");
    const groups = dictionary.menu && dictionary.menu.groups ? dictionary.menu.groups : [];
    if (!tabs || !panels || !groups.length) return;

    if (activeMenuGroup >= groups.length) activeMenuGroup = 0;

    tabs.innerHTML = groups
      .map((group, index) => {
        const active = index === activeMenuGroup ? " is-active" : "";
        return `<button class="menu-tab${active}" type="button" role="tab" data-menu-index="${index}">${group.title}</button>`;
      })
      .join("");

    const group = groups[activeMenuGroup];
    panels.innerHTML = `
      <div class="menu-panel is-active">
        <h3>${group.title}</h3>
        <ul class="menu-items">
          ${group.items
            .map(([name, description, price]) => `
              <li>
                <div><strong>${name}</strong><span>${description}</span></div>
                <em>${price}</em>
              </li>
            `)
            .join("")}
        </ul>
      </div>
    `;

    tabs.querySelectorAll("[data-menu-index]").forEach((button) => {
      button.addEventListener("click", () => {
        activeMenuGroup = Number(button.dataset.menuIndex);
        renderMenu(dictionary);
      });
    });
  }

  function applyLanguage(language) {
    const nextLanguage = enabledLanguages.includes(language) && locales[language] ? language : defaultLanguage;
    const dictionary = getDictionary(nextLanguage);

    document.documentElement.lang = nextLanguage;
    localStorage.setItem(storageKey, nextLanguage);
    setTextContent(dictionary);
    renderLanguageSwitcher(nextLanguage);
    renderMenu(dictionary);
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(getInitialLanguage());
  });
})();
