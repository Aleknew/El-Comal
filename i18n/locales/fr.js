(function () {
  window.ElComalLocales = window.ElComalLocales || {};
  window.ElComalLocales.fr = {
    name: "Français",
    shortName: "FR",
    meta: {
      title: "El Comal - Cuisine ancestrale d'Oaxaca",
      description: "El Comal, cuisine ancestrale d'Oaxaca : saveurs authentiques, hospitalité chaleureuse et plats servis avec tradition.",
    },
    nav: { menu: "Menu", dishes: "Plats", space: "Lieu", reviews: "Avis", contact: "Contact", reservations: "Réserver" },
    hero: {
      eyebrow: "Cuisine ancestrale d'Oaxaca",
      copy: "Des saveurs de racine, de maïs et de feu, servies avec une élégance sereine dans une maison chaleureuse où l'on prend son temps.",
      reserve: "Réserver une table",
      viewMenu: "Voir le menu",
    },
    intro: {
      title: "Oaxaca dans chaque détail.",
      copy: "Tortilla artisanale, âme mexicaine, mains expertes. Goûtez ce qui est fait par ceux qui connaissent le mieux la saveur de leur terre.",
      dishes: {
        dish1: "Chilaquiles verts avec bœuf grillé.",
        dish2: "Chilaquiles au mole noir",
        dish3: "Enchiladas et tostada de tinga",
      },
    },
    space: {
      kicker: "Lieu",
      title: "Un patio éclairé par la lumière, l'argile et la conversation.",
      copy: "L'expérience réunit des murs chargés de mémoire, des tables simples, de la végétation et une lumière ambrée. L'intérieur garde une sensation artisanale sans perdre l'élégance de la marque.",
      details: {
        atmosphere: { label: "Atmosphère", value: "Intime et naturelle" },
        cuisine: { label: "Cuisine", value: "Oaxaquénienne ancestrale" },
        rhythm: { label: "Rythme", value: "Dîner, verres, conversation" },
      },
    },
    menu: {
      kicker: "Menu",
      categories: "Catégories",
      availability: "Vérifier la disponibilité",
      groupTitles: {
        boca: "Pour commencer",
        costa: "De la côte",
        huerto: "Du jardin",
        comal: "Du comal",
        nortenos: "Classiques du nord",
        olla: "Mijotés et sauces",
      },
      groups: [
        {
          id: "boca",
          title: "Pour commencer",
          items: [
            ["Guacamole Patrio", "Avocat, tomate, coriandre, oignon, sel et citron vert", "10,50 €"],
            ["Guacamole del Comal", "Avocat, oignon, coriandre, chicharrón, chips de banane plantain et piment serrano torréfié", "12,50 €"],
            ["Totopos mixtecos", "Maïs frit, cheddar, haricots, tomate, oignon, bœuf grillé, coriandre et fromage frais", "14,50 €"],
            ["Totopos de la Milpa", "Maïs frit, cheddar, haricots, tomate, oignon, coriandre, fromage frais et guacamole", "13,50 €"],
            ["Tetela à la fleur de courge", "Tortilla de maïs farcie de quesillo et fleur de courge, sauce tomate torréfiée, crème et fromage frais", "10,50 €"],
            ["Assortiment de tante Judit", "Taco croustillant au poulet, quesadilla à la viande hachée et salbute yucatèque", "15,50 €"],
            ["Assortiment de grand-mère", "Picadita au lard, gordita au chamorro et sincronizada au bœuf grillé", "17,50 €"],
          ],
        },
        {
          id: "costa",
          title: "De la côte",
          items: [
            ["Retour à la vie", "Mélange de fruits de mer, tomate, oignon, coriandre, avocat et sauce secrète", "20,50 €"],
            ["Ceviche campechano", "Coriandre, oignon, tomate, Clamato et mélange de fruits de mer", "18,50 €"],
            ["Tostada tropicale", "Tortilla de maïs croustillante, avocat, crevette, thon, oignon, tomate, mangue, coriandre et citron vert", "15,50 €"],
          ],
        },
        {
          id: "huerto",
          title: "Du jardin",
          items: [
            ["Salade Colibrí", "Mesclun, fruit de saison, vinaigrette au tamarin et tajín", "13,50 €"],
            ["Salade César", "Laitue, anchois ou poulet, parmesan, pain frit et sauce César", "12,50 €"],
            ["Salade métisse", "Mesclun, fruit de saison, chèvre, jambon serrano, noix caramélisées, tomate cerise et fromage en sauce", "14,50 €"],
            ["Salade de truite marinée au tequila", "Poisson, tequila, avocat, laitue, tomate cerise et sauce ranch au serranito", "15,50 €"],
          ],
        },
        {
          id: "comal",
          title: "Du comal à la table",
          items: [
            ["Tacos Pastor (3pcs)", "Tortillas de maïs, porc mariné à l'ananas, cuisson au brasier, oignon, coriandre et radis", "12,50 €"],
            ["Tacos de secreto (3pcs)", "Tortillas de maïs, porc grillé, oignon, coriandre et radis", "12,50 €"],
            ["Tacos d'arrachera (3pcs)", "Tortillas de maïs, bœuf grillé, oignon, coriandre et radis", "13,50 €"],
            ["Tacos de côte de porc (3pcs)", "Tortillas de maïs, porc effiloché de la cocotte, oignon, coriandre et radis", "10,50 €"],
            ["Tacos de poulet à la mexicaine (3pcs)", "Tortilla de maïs, poulet effiloché aux épices, oignon, coriandre et radis", "10,50 €"],
            ["Tacos de Tinga poblana (3pcs)", "Poulet, porc, chorizo, oignon julienne, tomate rouge, tomatille verte et piment chipotle", "11,50 €"],
            ["Tacos de barbacoa de bœuf (3pcs)", "Bœuf effiloché cuit à la vapeur, oignon, coriandre et radis", "13,50 €"],
          ],
        },
        {
          id: "nortenos",
          title: "Classiques du nord",
          items: [
            ["Burrito Chihuahua", "Tortilla de blé, haricots, fromage, tomate, oignon, coriandre, guacamole, bœuf grillé et chimichurri mexicain", "15,50 €"],
            ["Burrito Durango", "Tortilla de blé, guacamole, fromages, laitue, poulet braisé, pesto de coriandre et pistache", "14,50 €"],
            ["Burrito Basse-Californie", "Tortilla de blé, thon ou crevette, haricots, fromage, poivrons et tomate cerise", "15,50 €"],
          ],
        },
        {
          id: "olla",
          title: "De notre pot et sauce",
          items: [
            ["Enchiladas vertes au tasajo (3pcs)", "Tortillas de maïs, tomatille verte, fromage, oignon, crème aigre, avocat, coriandre et steak de bœuf", "15,50 €"],
            ["Enmoladas farcies au poulet (3pcs)", "Tortillas de maïs, poulet effiloché, sauce aux piments et fruits secs, oignon, avocat et coriandre", "14,50 €"],
            ["Entomatadas à l'œuf frit (3pcs)", "Tortillas de maïs, tomate, oignon, avocat, coriandre et œuf", "15,50 €"],
            ["Cochinita pibil avec riz", "Porc effiloché à l'achiote, feuille de bananier, orange, oignon macéré au habanero et riz blanc", "15,50 €"],
            ["Pipián vert de pistache", "Tomatille verte, herbes aromatiques et pistache, porc et riz blanc", "18,50 €"],
            ["Mole noir d'Oaxaca", "Pâte de piments, graines, fruits secs et fruit, riz blanc et poulet", "17,50 €"],
            ["Chamorro cantinero", "Jarret braisé, variété de piments en sauce et tomate, avec légumes", "16,50 €"],
          ],
        },
      ],
    },
    flavors: {
      kicker: "Saveurs",
      title: "Un héritage servi avec calme.",
      copy: "Mole, maïs, sauces, herbes fraîches et desserts maison composent une cuisine de profondeur, sans artifice.",
      cards: {
        root: { label: "Racine", title: "Masa, tortilla et comal", copy: "Le maïs comme centre de la table et geste artisanal." },
        fire: { label: "Feu", title: "Sauces et mijotés", copy: "Chaleur mesurée, acidité vive et bases profondes." },
        sweet: { label: "Doux", title: "Desserts maison", copy: "Recettes familiales avec une finale nette et élégante." },
      },
    },
    gallery: {
      kicker: "Plats",
      title: "Couleur, maïs et feu à table.",
      copy: "Une galerie pensée pour grandir avec de vraies photos de cuisine : gros plans chaleureux, fonds sobres et plats qui laissent parler le produit.",
    },
    reviews: {
      kicker: "Avis",
      title: "Ce qui reste après le repas.",
      googleLink: "Voir sur Google",
      cards: {
        review1: { label: "Maria G.", copy: "\"Nourriture mexicaine authentique. Les tacos al pastor et les chilaquiles sont incroyables. Un service merveilleux et un endroit très accueillant.\"" },
        review2: { label: "Carlos R.", copy: "\"Sans aucun doute le meilleur restaurant mexicain de la région. Les saveurs vous transportent directement au Mexique. Recommandé à 100%.\"" },
        review3: { label: "Laura M.", copy: "\"Excellent service et nourriture délicieuse. Nous avons goûté le mole et les margaritas, tout était spectaculaire. Nous reviendrons à coup sûr.\"" },
      },
    },
    reservations: { kicker: "Réservations", title: "Une table, une lumière, une nuit oaxaquénienne.", call: "Appeler", write: "Écrire" },
    contact: {
      kicker: "Contact",
      title: "Retrouvez-nous au centre de Calella.",
      addressLabel: "Adresse",
      phoneLabel: "Téléphone",
      hoursLabel: "Horaires",
      hoursDays: "Lundi, jeudi, vendredi, samedi et dimanche",
      hoursClosed: "Fermé mardi et mercredi",
    },
    footer: {
      tagline: "Cuisine ancestrale d'Oaxaca",
      copy: "Carrer de la Riera, 16, Calella. Ouvert pour les déjeuners, dîners et rencontres au goût d'origine.",
    },
    legalBar: {
      text: "Mentions légales et confidentialité",
    },
    legalModal: {
      header: "<em>Ces informations sont fournies en espagnol conformément à la loi espagnole.</em>",
    },
  };
})();