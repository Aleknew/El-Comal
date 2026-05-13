(function () {
  window.ElComalLocales = window.ElComalLocales || {};
  window.ElComalLocales.de = {
    name: "Deutsch",
    shortName: "DE",
    meta: {
      title: "El Comal - Traditionelle oaxacanische Küche",
      description: "El Comal, traditionelle oaxacanische Küche: authentische Aromen, herzliche Gastfreundschaft und Gerichte, die mit Respekt vor den Wurzeln zubereitet werden.",
    },
    nav: { menu: "Speisekarte", dishes: "Gerichte", space: "Raum", reviews: "Bewertungen", contact: "Kontakt", reservations: "Reservieren" },
    hero: {
      eyebrow: "Traditionelle oaxacanische Küche",
      copy: "Die Aromen von Mais, Feuer und Wurzeln, in aller Ruhe und Eleganz serviert, in einem warmen Zuhause, in dem man sich Zeit lässt.",
      reserve: "Tisch reservieren",
      viewMenu: "Speisekarte ansehen",
    },
    intro: {
      title: "Oaxaca in jedem Detail.",
      copy: "Handgemachte Tortilla, mexikanische Seele, erfahrene Hände. Probieren Sie, was diejenigen zubereiten, die den Geschmack ihres Landes am besten kennen.",
      dishes: {
        dish1: "Grüne Chilaquiles mit Grillrindfleisch.",
        dish2: "Chilaquiles mit schwarzem Mole",
        dish3: "Enchiladas und Tostada de Tinga",
      },
    },
    space: {
      kicker: "Raum",
      title: "Ein Patio mit warmem Licht, Lehm und langen Gesprächen.",
      copy: "Hier vereinen sich Wände mit Geschichte, schlichte Tische, Grünpflanzen und bernsteinfarbenes Licht. Das Interieur bewahrt handwerkliche Wärme und die edle Zurückhaltung der Marke.",
      details: {
        atmosphere: { label: "Atmosphäre", value: "Intim und natürlich" },
        cuisine: { label: "Küche", value: "Traditionelle oaxacanische" },
        rhythm: { label: "Rhythmus", value: "Abendessen, Getränke, Sobremesa" },
      },
    },
    menu: {
      kicker: "Speisekarte",
      categories: "Kategorien",
      availability: "Verfügbarkeit prüfen",
      groupTitles: {
        boca: "Zum Start",
        costa: "Von der Küste",
        huerto: "Aus dem Garten",
        comal: "Vom Comal",
        nortenos: "Nördliche Klassiker",
        olla: "Eintöpfe und Saucen",
      },
      groups: [
        {
          id: "boca",
          title: "Zum Start",
          items: [
            ["Guacamole Patrio", "Avocado, Tomate, Koriander, Zwiebel, Salz und Limette", "10,50 €"],
            ["Guacamole del Comal", "Avocado, Zwiebel, Koriander, Schweineschwarten, Bananenchips und geröstete Serrano-Chilis", "12,50 €"],
            ["Mixtekische Totopos", "Frittierter Mais, Cheddar-Käse, Bohnen, Tomate, Zwiebel, gegrilltes Rindfleisch, Koriander und frischer Käse", "14,50 €"],
            ["Totopos de la Milpa", "Frittierter Mais, Cheddar-Käse, Bohnen, Tomate, Zwiebel, Koriander, frischer Käse und Guacamole", "13,50 €"],
            ["Tetela mit Kürbisblüte", "Maistortilla mit Quesillo und Kürbisblüte, Sauce aus gerösteten Tomaten, Sahne und frischem Käse", "10,50 €"],
            ["Tante Judits Teller", "Knuspriger Hähnchen-Taco, Quesadilla mit Hackfleisch und Yucatán-Salbute", "15,50 €"],
            ["Großmutters Teller", "Picadita mit Speck, Gordita mit Chamorro und Sincronizada mit gegrilltem Fleisch", "17,50 €"],
          ],
        },
        {
          id: "costa",
          title: "Von der Küste",
          items: [
            ["Rückkehr ins Leben", "Meeresfrüchte-Mix, Tomate, Zwiebel, Koriander, Avocado und geheime Sauce", "20,50 €"],
            ["Campechana-Ceviche", "Koriander, Zwiebel, Tomate, Clamato und Meeresfrüchte-Mix", "18,50 €"],
            ["Tropische Tostada", "Knusprige Maistortilla, Avocado, Garnelen, Thunfisch, Zwiebel, Tomate, Mango, Koriander und Limette", "15,50 €"],
          ],
        },
        {
          id: "huerto",
          title: "Aus dem Garten",
          items: [
            ["Kolibri-Salat", "Gemischter Salat, saisonale Früchte, Tamarinden-Tahini-Dressing", "13,50 €"],
            ["Caesar-Salat", "Salat, Sardellen oder Hähnchen, Parmesan, Croutons und Caesar-Dressing", "12,50 €"],
            ["Mestiza-Salat", "Gemischter Salat, saisonale Früchte, Ziegenkäse, Serrano-Schinken, karamellisierte Nüsse, Kirschtomaten und Käsesauce", "14,50 €"],
            ["Tequila-gereifter Forellensalat", "Fisch, Tequila, Avocado, Salat, Kirschtomaten und Serrano-Ranch-Dressing", "15,50 €"],
          ],
        },
        {
          id: "comal",
          title: "Vom Comal auf den Tisch",
          items: [
            ["Tacos al Pastor (3 Stk.)", "Maistortillas, mit Ananas marinierte Schweinefleisch, gegrillt, Zwiebel, Koriander und Rettich", "12,50 €"],
            ["Secreto-Tacos (3 Stk.)", "Maistortillas, gegrilltes Schweinefleisch, Zwiebel, Koriander und Rettich", "12,50 €"],
            ["Arrachera-Tacos (3 Stk.)", "Maistortillas, gegrilltes Rindfleisch, Zwiebel, Koriander und Rettich", "13,50 €"],
            ["Schweinerippchen-Tacos (3 Stk.)", "Maistortillas, geschmortes Schweinefleisch, Zwiebel, Koriander und Rettich", "10,50 €"],
            ["Mexikanische Hähnchen-Tacos (3 Stk.)", "Maistortilla, gewürztes Hähnchen, Zwiebel, Koriander und Rettich", "10,50 €"],
            ["Tinga Poblana-Tacos (3 Stk.)", "Hähnchen, Schweinefleisch, Chorizo, Zwiebelstreifen, rote Tomate, grüne Tomatillo und Chipotle-Chili", "11,50 €"],
            ["Barbacoa-Tacos (3 Stk.)", "Gedämpftes Rindfleisch, Zwiebel, Koriander und Rettich", "13,50 €"],
          ],
        },
        {
          id: "nortenos",
          title: "Nördliche Klassiker",
          items: [
            ["Chihuahua-Burrito", "Weizentortilla, Bohnen, Käse, Tomate, Zwiebel, Koriander, Guacamole, gegrilltes Rindfleisch und mexikanisches Chimichurri", "15,50 €"],
            ["Durango-Burrito", "Weizentortilla, Guacamole, Käse, Salat, geschmortes Hähnchen, Koriander-Pistazien-Pesto", "14,50 €"],
            ["Baja California-Burrito", "Weizentortilla, Thunfisch oder Garnelen, Bohnen, Käse, Paprika und Kirschtomaten", "15,50 €"],
          ],
        },
        {
          id: "olla",
          title: "Aus unserem Topf und unserer Sauce",
          items: [
            ["Grüne Enchiladas mit Tasajo (3 Stk.)", "Maistortillas, grüne Tomatillo, Käse, Zwiebel, Sauerrahm, Avocado, Koriander und Rindersteak", "15,50 €"],
            ["Enmoladas mit Hähnchen (3 Stk.)", "Maistortillas, Hähnchen, Chili-Nuss-Sauce, Zwiebel, Avocado und Koriander", "14,50 €"],
            ["Enfrijoladas mit Spiegelei (3 Stk.)", "Maistortillas, Tomate, Zwiebel, Avocado, Koriander und Ei", "15,50 €"],
            ["Cochinita Pibil mit Reis", "Schweinefleisch in Achiote, Bananenblatt, Orange, Habanero-Zwiebel und weißer Reis", "15,50 €"],
            ["Grüner Pistazien-Pipián", "Grüne Tomatillo, aromatische Kräuter und Pistazien, Schweinefleisch und weißer Reis", "18,50 €"],
            ["Oaxacanischer schwarzer Mole", "Chili-Paste, Samen, Nüsse und Früchte, weißer Reis und Hähnchen", "17,50 €"],
            ["Cantina-Chamorro", "Geschmorte Schweinshaxe, Sauce aus verschiedenen Chilisorten und Tomate, mit Gemüse", "16,50 €"],
          ],
        },
      ],
    },
    flavors: {
      kicker: "Aromen",
      title: "Erbe, ohne Eile serviert.",
      copy: "Mole, Mais, Saucen, frische Kräuter und hausgemachte Desserts ergeben eine tiefgründige Küche ohne unnötige Theatralik.",
      cards: {
        root: { label: "Wurzeln", title: "Masa, Tortilla und Comal", copy: "Mais als Mittelpunkt des Tisches und handwerkliche Geste." },
        fire: { label: "Feuer", title: "Saucen und Schmorgerichte", copy: "Wohl dosierte Hitze, lebendige Säure und tiefe Grundlagen." },
        sweet: { label: "Süßes", title: "Hausgemachte Desserts", copy: "Familienrezepte mit einem sauberen und eleganten Finale." },
      },
    },
    gallery: {
      kicker: "Gerichte",
      title: "Farbe, Mais und Feuer auf dem Tisch.",
      copy: "Eine Galerie für echte Küchenfotografie: warme Nahaufnahmen, ruhiger Hintergrund und Gerichte, die für sich selbst sprechen.",
    },
    reviews: {
      kicker: "Bewertungen",
      title: "Was nach dem Abendessen bleibt.",
      googleLink: "Auf Google ansehen",
      cards: {
        review1: { label: "Maria G.", copy: "\"Authentisches mexikanisches Essen. Die Tacos al Pastor und Chilaquiles sind unglaublich. Hervorragender Service und ein sehr gemütlicher Ort.\"" },
        review2: { label: "Carlos R.", copy: "\"Ohne Zweifel das beste mexikanische Restaurant in der Gegend. Die Aromen entführen einen direkt nach Mexiko. 100% zu empfehlen.\"" },
        review3: { label: "Laura M.", copy: "\"Ausgezeichneter Service und leckeres Essen. Wir haben den Mole und Margaritas probiert, alles war hervorragend. Wir kommen auf jeden Fall wieder.\"" },
      },
    },
    reservations: { kicker: "Reservierung", title: "Ein Tisch, warmes Licht und ein oaxacanischer Abend.", call: "Anrufen", write: "Schreiben" },
    contact: {
      kicker: "Kontakt",
      title: "Finden Sie uns im Zentrum von Calella.",
      addressLabel: "Adresse",
      phoneLabel: "Telefon",
      hoursLabel: "Öffnungszeiten",
      hoursDays: "Montag, Donnerstag, Freitag, Samstag und Sonntag",
      hoursClosed: "Dienstag und Mittwoch geschlossen",
    },
    footer: {
      tagline: "Traditionelle oaxacanische Küche",
      copy: "Carrer de la Riera, 16, Calella. Geöffnet für Mittagessen, Abendessen und Treffen mit dem Geschmack der Wurzeln.",
    },
    legalBar: {
      text: "Rechtliche Hinweise",
    },
    legalModal: {
      header: "<em>Diese Informationen werden gemäß spanischem Recht auf Spanisch bereitgestellt.</em>",
    },
  };
})();