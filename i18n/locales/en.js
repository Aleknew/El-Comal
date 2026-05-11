(function () {
  window.ElComalLocales = window.ElComalLocales || {};
  window.ElComalLocales.en = {
    name: "English",
    shortName: "EN",
    meta: {
      title: "El Comal - Ancestral Oaxacan Cuisine",
      description: "El Comal, ancestral Oaxacan cuisine: authentic flavors, warm hospitality and dishes served with tradition.",
    },
    nav: { menu: "Menu", dishes: "Dishes", space: "Space", reviews: "Reviews", contact: "Contact", reservations: "Book" },
    hero: {
      eyebrow: "Ancestral Oaxacan cuisine",
      copy: "Rooted flavors of corn and fire, served with quiet elegance in a warm house made for unhurried meals.",
      reserve: "Book a table",
      viewMenu: "View menu",
    },
    intro: {
      mark: "Authentic. Elegant. Warm. Rooted.",
      copy: "El Comal honors Oaxacan cuisine through honest ingredients, ancestral technique and close hospitality that turns each visit into a small ritual.",
    },
    space: {
      kicker: "01 / Space",
      title: "A patio lit by warm light, clay and lingering conversation.",
      copy: "The experience brings together walls with memory, simple tables, greenery and amber light. The interior keeps an artisanal feeling without losing the brand's refined pulse.",
      details: {
        atmosphere: { label: "Atmosphere", value: "Intimate and natural" },
        cuisine: { label: "Cuisine", value: "Ancestral Oaxacan" },
        rhythm: { label: "Rhythm", value: "Dinner, drinks, long conversations" },
      },
    },
    menu: {
      kicker: "02 / Menu",
      categories: "Categories",
      availability: "Check availability",
      groupTitles: {
        boca: "To start",
        costa: "From the coast",
        huerto: "From the garden",
        comal: "From the comal",
        nortenos: "Northern classics",
        olla: "Stews and sauces",
      },
      groups: [
        {
          id: "boca",
          title: "To start",
          items: [
            ["Guacamole Patrio", "Avocado, tomato, cilantro, onion, salt and lime", "€10.50"],
            ["Guacamole del Comal", "Avocado, onion, cilantro, pork rinds, plantain chips and roasted serrano chili", "€12.50"],
            ["Mixtecan Totopos", "Fried corn, cheddar cheese, beans, tomato, onion, grilled beef, cilantro and fresh cheese", "€14.50"],
            ["Milpa Totopos", "Fried corn, cheddar cheese, beans, tomato, onion, cilantro, fresh cheese and guacamole", "€13.50"],
            ["Squash Blossom Tetela", "Corn tortilla stuffed with quesillo and squash blossom, roasted tomato sauce, cream and fresh cheese", "€10.50"],
            ["Aunt Judit's Platter", "Crispy chicken taco, minced meat quesadilla and Yucatecan salbute", "€15.50"],
            ["Grandma's Platter", "Bacon picadita, chamorro gordita and grilled meat sincronizada", "€17.50"],
          ],
        },
        {
          id: "costa",
          title: "From the coast",
          items: [
            ["Return to Life", "Mixed seafood, tomato, onion, cilantro, avocado and secret sauce", "€20.50"],
            ["Campechana Ceviche", "Cilantro, onion, tomato, Clamato and mixed seafood", "€18.50"],
            ["Tropical Tostada", "Crispy corn tortilla, avocado, shrimp, tuna, onion, tomato, mango, cilantro and lime", "€15.50"],
          ],
        },
        {
          id: "huerto",
          title: "From the garden",
          items: [
            ["Colibrí Salad", "Mixed greens, seasonal fruit, tamarind and tajín vinaigrette", "€13.50"],
            ["Caesar Salad", "Lettuce, anchovies or chicken, parmesan, croutons and Caesar dressing", "€12.50"],
            ["Mestiza Salad", "Mixed greens, seasonal fruit, goat cheese, serrano ham, caramelized walnuts, cherry tomatoes and cheese in sauce", "€14.50"],
            ["Tequila-Cured Trout Salad", "Fish, tequila, avocado, lettuce, cherry tomatoes and serrano ranch dressing", "€15.50"],
          ],
        },
        {
          id: "comal",
          title: "From the comal to the table",
          items: [
            ["Tacos Pastor (3pcs)", "Corn tortillas, pineapple-marinated pork, charcoal-grilled, onion, cilantro and radish", "€12.50"],
            ["Secreto Tacos (3pcs)", "Corn tortillas, grilled pork, onion, cilantro and radish", "€12.50"],
            ["Arrachera Tacos (3pcs)", "Corn tortillas, grilled beef, onion, cilantro and radish", "€13.50"],
            ["Pork Rib Tacos (3pcs)", "Corn tortillas, shredded pot-cooked pork, onion, cilantro and radish", "€10.50"],
            ["Mexican-Style Chicken Tacos (3pcs)", "Corn tortillas, spiced shredded chicken, onion, cilantro and radish", "€10.50"],
            ["Tinga Poblana Tacos (3pcs)", "Chicken, pork, chorizo, julienned onion, red tomato, green tomatillo and chipotle chili", "€11.50"],
            ["Beef Barbacoa Tacos (3pcs)", "Steamed shredded beef, onion, cilantro and radish", "€13.50"],
          ],
        },
        {
          id: "nortenos",
          title: "Northern classics",
          items: [
            ["Chihuahua Burrito", "Wheat tortilla, beans, cheese, tomato, onion, cilantro, guacamole, grilled beef and Mexican chimichurri", "€15.50"],
            ["Durango Burrito", "Wheat tortilla, guacamole, cheeses, lettuce, braised chicken, cilantro and pistachio pesto", "€14.50"],
            ["Baja California Burrito", "Wheat tortilla, tuna or shrimp, beans, cheese, peppers and cherry tomatoes", "€15.50"],
          ],
        },
        {
          id: "olla",
          title: "From our pot and sauce",
          items: [
            ["Green Enchiladas with Tasajo (3pcs)", "Corn tortillas, green tomatillo, cheese, onion, sour cream, avocado, cilantro and beef steak", "€15.50"],
            ["Chicken Enmoladas (3pcs)", "Corn tortillas, shredded chicken, chili and nut sauce, onion, avocado and cilantro", "€14.50"],
            ["Enfrijoladas with Fried Egg (3pcs)", "Corn tortillas, tomato, onion, avocado, cilantro and egg", "€15.50"],
            ["Cochinita Pibil with Rice", "Achiote-marinated shredded pork, banana leaf, orange, habanero-macerated onion and white rice", "€15.50"],
            ["Green Pistachio Pipián", "Green tomatillo, aromatic herbs and pistachio, pork and white rice", "€18.50"],
            ["Oaxacan Black Mole", "Chili paste, seeds, nuts and fruit, white rice and chicken", "€17.50"],
            ["Cantina-Style Chamorro", "Braised pork shank, variety of chilies in sauce and tomato, with vegetables", "€16.50"],
          ],
        },
      ],
    },
    flavors: {
      kicker: "03 / Flavors",
      title: "Heritage served slowly.",
      copy: "Mole, corn, sauces, fresh herbs and house desserts appear in a cuisine of depth, not artifice.",
      cards: {
        root: { label: "Root", title: "Masa, tortilla and comal", copy: "Corn as the center of the table and an artisanal gesture." },
        fire: { label: "Fire", title: "Sauces and stews", copy: "Measured heat, bright acidity and deep bases." },
        sweet: { label: "Sweet", title: "House desserts", copy: "Family recipes with a clean, elegant finish." },
      },
    },
    gallery: {
      kicker: "04 / Dishes",
      title: "Color, corn and fire on the table.",
      copy: "A gallery designed to grow with real kitchen photography: warm close-ups, quiet backgrounds and dishes that let the product speak.",
    },
    reviews: {
      kicker: "05 / Google",
      title: "What stays with you after the meal.",
      googleLink: "View on Google",
      cards: {
        latest: { label: "Google Reviews", copy: "Read the latest verified opinions directly on Google Maps." },
        share: { label: "Your review", copy: "Share your experience after visiting and help other guests find us." },
        profile: { label: "Google Maps", copy: "The Google profile keeps public reviews, photos and location information." },
      },
    },
    reservations: { kicker: "Reservations", title: "A table, a light, an Oaxacan night.", call: "Call now", write: "Write" },
    contact: {
      kicker: "06 / Contact",
      title: "Find us in the center of Calella.",
      addressLabel: "Address",
      phoneLabel: "Phone",
      hoursLabel: "Hours",
      hoursDays: "Monday, Thursday, Friday, Saturday and Sunday",
      hoursClosed: "Closed Tuesday and Wednesday",
    },
    footer: {
      tagline: "Ancestral Oaxacan cuisine",
      copy: "Carrer de la Riera, 16, Calella. Open for lunch, dinner and gatherings with a taste of origin.",
    },
  };
})();