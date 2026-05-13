(function () {
  window.ElComalLocales = window.ElComalLocales || {};
  window.ElComalLocales.es = {
    name: "Español",
    shortName: "ES",
    meta: {
      title: "El Comal - Cocina ancestral oaxaqueña",
      description:
        "El Comal, cocina ancestral oaxaqueña: sabores auténticos, hospitalidad cálida y platos servidos con tradición.",
    },
    nav: {
      menu: "Menú",
      dishes: "Platos",
      space: "Espacio",
      reviews: "Opiniones",
      contact: "Contacto",
      reservations: "Reservas",
    },
    hero: {
      eyebrow: "Cocina ancestral oaxaqueña",
      copy: "Sabores de raíz, maíz y fuego servidos con elegancia serena en una casa cálida para comer sin prisa.",
      reserve: "Reserva tu mesa",
      viewMenu: "Ver menú",
    },
    intro: {
      title: "Oaxaca en cada detalle.",
      copy: "Tortilla artesana, alma mexicana, manos expertas. Prueba lo hecho por quién mejor conoce el sabor de su tierra.",
      dishes: {
        dish1: "Chilaquiles verdes con carne asada.",
        dish2: "Chilaquiles con mole negro",
        dish3: "Enchiladas y tostada de tinga",
      },
    },
    space: {
      kicker: "Espacio",
      title: "Un patio encendido por luz, barro y sobremesa.",
      copy: "La experiencia combina muros con memoria, mesas sencillas, vegetación y luz ámbar. El interior mantiene una sensación artesanal sin perder el pulso refinado de la marca.",
      details: {
        atmosphere: { label: "Atmósfera", value: "Íntima y natural" },
        cuisine: { label: "Cocina", value: "Oaxaqueña ancestral" },
        rhythm: { label: "Ritmo", value: "Cena, copas, sobremesa" },
      },
    },
    menu: {
      kicker: "Menú",
      categories: "Categorías",
      availability: "Consultar disponibilidad",
      groups: [
        {
          id: "boca",
          title: "Para abrir boca",
          items: [
            ["Guacamole Patrio", "Aguacate, tomate, cilantro, cebolla, sal y limón", "10,50 €"],
            [
              "Guacamole del Comal",
              "Aguacate, cebolla, cilantro, chicharrón, chips de plátano macho y chile serrano tatemado",
              "12,50 €",
            ],
            [
              "Totopos mixtecos",
              "Maíz frito, queso cheddar, frijoles, tomate, cebolla, carne asada, cilantro y queso fresco",
              "14,50 €",
            ],
            [
              "Totopos de la Milpa",
              "Maíz frito, queso cheddar, frijoles, tomate, cebolla, cilantro, queso fresco y guacamole",
              "13,50 €",
            ],
            [
              "Tetela de Flor de Calabaza",
              "Tortilla de maíz rellena de quesillo y flor de calabaza, salsa de tomate tatemado, crema y queso fresco",
              "10,50 €",
            ],
            ["Surtido de la tía Judit", "Taco dorado de pollo, quesadilla de carne picada y salbute yucateco", "15,50 €"],
            ["Surtido de la abuela", "Picadita de panceta, gordita de chamorro y sincronizada de carne asada", "17,50 €"],
          ],
        },
        {
          id: "costa",
          title: "De la costa",
          items: [
            ["Vuelve a la vida", "Mezcla de marisco, tomate, cebolla, cilantro, aguacate y salsa secreta", "20,50 €"],
            ["Ceviche campechano", "Cilantro, cebolla, tomate, Clamato y combinado de marisco", "18,50 €"],
            [
              "Tostada tropical",
              "Tortilla crujiente de maíz, aguacate, camarón, atún, cebolla, tomate, mango, cilantro y lima",
              "15,50 €",
            ],
          ],
        },
        {
          id: "huerto",
          title: "Del Huerto",
          items: [
            ["Ensalada Colibrí", "Mezclum, fruta de temporada, vinagreta de tamarindo y tajín", "13,50 €"],
            ["Ensalada César", "Lechuga, anchoas o pollo, parmesano, pan frito y salsa César", "12,50 €"],
            [
              "Ensalada mestiza",
              "Mezclum, fruta de temporada, queso de cabra, jamón serrano, nueces caramelizadas, tomatito cherry y queso en salsa",
              "14,50 €",
            ],
            [
              "Ensalada de trucha curada al tequila",
              "Pescado, tequila, aguacate, lechugas, tomatito cherry y salsa ranch de serranito",
              "15,50 €",
            ],
          ],
        },
        {
          id: "comal",
          title: "Del comal a la mesa",
          items: [
            ["Tacos Pastor (3u)", "Tortillas de maíz, cerdo macerado con piña, cocción brasa, cebolla, cilantro y rábano", "12,50 €"],
            ["Tacos de secreto (3u)", "Tortillas de maíz, cerdo a la brasa, cebolla, cilantro y rábano", "12,50 €"],
            ["Tacos de arrachera (3u)", "Tortillas de maíz, ternera a la brasa, cebolla, cilantro y rábano", "13,50 €"],
            ["Tacos de costilla de cerdo (3u)", "Tortillas de maíz, cerdo desmechado de la cazuela, cebolla, cilantro y rábano", "10,50 €"],
            ["Tacos de pollo a la mexicana (3u)", "Tortilla de maíz, pollo desmechado con especias, cebolla, cilantro y rábano", "10,50 €"],
            ["Tacos de Tinga poblana (3u)", "Pollo, cerdo, chorizo, cebolla juliana, tomate rojo, tomatillo verde y chile chipotle", "11,50 €"],
            ["Tacos de barbacoa de ternera (3u)", "Ternera desmechada cocida al vapor, cebolla, cilantro y rábano", "13,50 €"],
          ],
        },
        {
          id: "nortenos",
          title: "Los norteños",
          items: [
            ["Burrito Chihuahua", "Tortilla de trigo, frijoles, queso, tomate, cebolla, cilantro, guacamole, ternera a la brasa y chimichurri mexicano", "15,50 €"],
            ["Burrito Durango", "Tortilla de trigo, guacamole, quesos, lechuga, pollo braseado, pesto de cilantro y pistacho", "14,50 €"],
            ["Burrito Baja California", "Tortilla de trigo, atún o camarón, frijoles, queso, pimientos y tomatito cherry", "15,50 €"],
          ],
        },
        {
          id: "olla",
          title: "De nuestra olla y salsa",
          items: [
            ["Enchiladas verdes con tasajo (3u)", "Tortillas de maíz, tomatillo verde, queso, cebolla, crema agria, aguacate, cilantro y bistec de ternera", "15,50 €"],
            ["Enmoladas rellenas de pollo (3u)", "Tortillas de maíz, pollo desmechado, salsa de chiles y frutos secos, cebolla, aguacate y cilantro", "14,50 €"],
            ["Entomatadas con huevo frito (3u)", "Tortillas de maíz, tomate, cebolla, aguacate, cilantro y huevo", "15,50 €"],
            ["Cochinita pibil con arroz", "Cerdo desmechado en achiote, hoja de plátano, naranja, cebolla macerada en habanero y arroz blanco", "15,50 €"],
            ["Pipián verde de pistacho", "Tomatillo verde, hierbas aromáticas y pistacho, cerdo y arroz blanco", "18,50 €"],
            ["Mole negro oaxaqueño", "Pasta de chiles, semillas, frutos secos y fruta, arroz blanco y pollo", "17,50 €"],
            ["Chamorro cantinero", "Codillo braseado, variedad de chiles en salsa y tomate, con verdurita", "16,50 €"],
          ],
        },
      ],
    },
    flavors: {
      kicker: "Sabores",
      title: "Herencia servida con calma.",
      copy: "Mole, maíz, salsas, hierbas frescas y postres de casa aparecen en una cocina de profundidad, no de artificio.",
      cards: {
        root: { label: "Raíz", title: "Masa, tortilla y comal", copy: "El maíz como centro de la mesa y gesto artesanal." },
        fire: { label: "Fuego", title: "Salsas y guisos", copy: "Calor medido, acidez viva y fondos profundos." },
        sweet: { label: "Dulce", title: "Postres de casa", copy: "Recetas familiares con final limpio y elegante." },
      },
    },
    gallery: {
      kicker: "Platos",
      title: "Color, maíz y fuego en la mesa.",
      copy: "Una galería pensada para crecer con fotografías reales de la cocina: primeros planos cálidos, fondos sobrios y platos que dejen hablar al producto.",
    },
    reviews: {
      kicker: "Opiniones",
      title: "Lo que se recuerda después de la mesa.",
      googleLink: "Ver en Google",
      cards: {
        latest: { label: "Google Reviews", copy: "Consulta las últimas opiniones verificadas directamente en Google Maps." },
        share: { label: "Tu opinión", copy: "Comparte tu experiencia después de la visita y ayuda a otros comensales a encontrarnos." },
        profile: { label: "Google Maps", copy: "El perfil de Google mantiene la información pública de reseñas, fotos y ubicación." },
      },
    },
    reservations: {
      kicker: "Reservas",
      title: "Una mesa, una luz, una noche oaxaqueña.",
      call: "Llamar ahora",
      write: "Escribir",
    },
    contact: {
      kicker: "Contacto",
      title: "Encuéntranos en el centro de Calella.",
      addressLabel: "Dirección",
      phoneLabel: "Teléfono",
      hoursLabel: "Horario",
      hoursDays: "Lunes, jueves, viernes, sábado y domingo",
      hoursClosed: "Martes y miércoles cerrado",
    },
    footer: {
      tagline: "Cocina ancestral oaxaqueña",
      copy: "Carrer de la Riera, 16, Calella. Abierto para comidas, cenas y encuentros con sabor de origen.",
    },
  };
})();
