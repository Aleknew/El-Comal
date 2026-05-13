(function () {
  window.ElComalLocales = window.ElComalLocales || {};
  window.ElComalLocales.ca = {
    name: "Català",
    shortName: "CA",
    meta: {
      title: "El Comal - Cuina ancestral oaxaquenya",
      description: "El Comal, cuina ancestral oaxaquenya: sabors autèntics, hospitalitat càlida i plats servits amb tradició.",
    },
    nav: { menu: "Menú", dishes: "Plats", space: "Espai", reviews: "Opinions", contact: "Contacte", reservations: "Reserves" },
    hero: {
      eyebrow: "Cuina ancestral oaxaquenya",
      copy: "Sabors d'arrel, blat de moro i foc servits amb elegància serena en una casa càlida per menjar sense pressa.",
      reserve: "Reserva taula",
      viewMenu: "Veure menú",
    },
    intro: {
      title: "Oaxaca en cada detall.",
      copy: "Truita artesana, ànima mexicana, mans expertes. Tasta allò fet per qui millor coneix el sabor de la seva terra.",
      dishes: {
        dish1: "Chilaquiles verds amb carn a la brasa.",
        dish2: "Chilaquiles amb mole negre",
        dish3: "Enchiladas i tostada de tinga",
      },
    },
    space: {
      kicker: "Espai",
      title: "Un pati encès per llum, fang i sobretaula.",
      copy: "L'experiència combina murs amb memòria, taules senzilles, vegetació i llum ambre. L'interior manté una sensació artesanal sense perdre el pols refinat de la marca.",
      details: {
        atmosphere: { label: "Atmosfera", value: "Íntima i natural" },
        cuisine: { label: "Cuina", value: "Oaxaquenya ancestral" },
        rhythm: { label: "Ritme", value: "Sopar, copes, sobretaula" },
      },
    },
    menu: {
      kicker: "Menú",
      categories: "Categories",
      availability: "Consultar disponibilitat",
      groupTitles: {
        boca: "Per començar",
        costa: "De la costa",
        huerto: "De l'hort",
        comal: "Del comal",
        nortenos: "Els del nord",
        olla: "Olla i salsa",
      },
      groups: [
        {
          id: "boca",
          title: "Per començar",
          items: [
            ["Guacamole Patrio", "Alvocat, tomàquet, coriandre, ceba, sal i llima", "10,50 €"],
            ["Guacamole del Comal", "Alvocat, ceba, coriandre, xixarró, xips de plàtan mascle i xili serrano torrat", "12,50 €"],
            ["Totopos mixtecos", "Blat de moro fregit, formatge cheddar, mongetes, tomàquet, ceba, carn a la brasa, coriandre i formatge fresc", "14,50 €"],
            ["Totopos de la Milpa", "Blat de moro fregit, formatge cheddar, mongetes, tomàquet, ceba, coriandre, formatge fresc i guacamole", "13,50 €"],
            ["Tetela de Flor de Carbassa", "Tortilla de blat de moro farcida de quesillo i flor de carbassa, salsa de tomàquet torrat, crema i formatge fresc", "10,50 €"],
            ["Surtit de la tia Judit", "Taco cruixent de pollastre, quesadilla de carn picada i salbute yucatec", "15,50 €"],
            ["Surtit de l'àvia", "Picadita de cansalada, gordita de chamorro i sincronitzada de carn a la brasa", "17,50 €"],
          ],
        },
        {
          id: "costa",
          title: "De la costa",
          items: [
            ["Torna a la vida", "Barreja de marisc, tomàquet, ceba, coriandre, alvocat i salsa secreta", "20,50 €"],
            ["Ceviche campechano", "Coriandre, ceba, tomàquet, Clamato i barreja de marisc", "18,50 €"],
            ["Tostada tropical", "Tortilla cruixent de blat de moro, alvocat, gambeta, tonyina, ceba, tomàquet, mango, coriandre i llima", "15,50 €"],
          ],
        },
        {
          id: "huerto",
          title: "De l'hort",
          items: [
            ["Amanida Colibrí", "Mezclum, fruita de temporada, vinagreta de tamarinde i tajín", "13,50 €"],
            ["Amanida Cèsar", "Enciam, anxoves o pollastre, parmesà, pa fregit i salsa Cèsar", "12,50 €"],
            ["Amanida mestissa", "Mezclum, fruita de temporada, formatge de cabra, pernil serrà, nous caramel·litzades, tomàquet cherry i formatge en salsa", "14,50 €"],
            ["Amanida de truita curada al tequila", "Peix, tequila, alvocat, enciam, tomàquet cherry i salsa ranch de serranito", "15,50 €"],
          ],
        },
        {
          id: "comal",
          title: "Del comal a la taula",
          items: [
            ["Tacos Pastor (3u)", "Tortilles de blat de moro, porc macerat amb pinya, cocció a la brasa, ceba, coriandre i rave", "12,50 €"],
            ["Tacos de secreto (3u)", "Tortilles de blat de moro, porc a la brasa, ceba, coriandre i rave", "12,50 €"],
            ["Tacos d'arrachera (3u)", "Tortilles de blat de moro, vedella a la brasa, ceba, coriandre i rave", "13,50 €"],
            ["Tacos de costella de porc (3u)", "Tortilles de blat de moro, porc desfet de la cassola, ceba, coriandre i rave", "10,50 €"],
            ["Tacos de pollastre a la mexicana (3u)", "Tortilla de blat de moro, pollastre desfet amb espècies, ceba, coriandre i rave", "10,50 €"],
            ["Tacos de Tinga poblana (3u)", "Pollastre, porc, xoriço, ceba juliana, tomàquet vermell, tomatillo verd i xili chipotle", "11,50 €"],
            ["Tacos de barbacoa de vedella (3u)", "Vedella desfeta cuita al vapor, ceba, coriandre i rave", "13,50 €"],
          ],
        },
        {
          id: "nortenos",
          title: "Els del nord",
          items: [
            ["Burrito Chihuahua", "Tortilla de blat, mongetes, formatge, tomàquet, ceba, coriandre, guacamole, vedella a la brasa i chimichurri mexicà", "15,50 €"],
            ["Burrito Durango", "Tortilla de blat, guacamole, formatges, enciam, pollastre brasejat, pesto de coriandre i pistatxo", "14,50 €"],
            ["Burrito Baixa Califòrnia", "Tortilla de blat, tonyina o gambeta, mongetes, formatge, pebrots i tomàquet cherry", "15,50 €"],
          ],
        },
        {
          id: "olla",
          title: "De la nostra olla i salsa",
          items: [
            ["Enchiladas verdes amb tasajo (3u)", "Tortilles de blat de moro, tomatillo verd, formatge, ceba, crema agra, alvocat, coriandre i bistec de vedella", "15,50 €"],
            ["Enmolades farcides de pollastre (3u)", "Tortilles de blat de moro, pollastre desfet, salsa de xilis i fruits secs, ceba, alvocat i coriandre", "14,50 €"],
            ["Entomatades amb ou ferrat (3u)", "Tortilles de blat de moro, tomàquet, ceba, alvocat, coriandre i ou", "15,50 €"],
            ["Cochinita pibil amb arròs", "Porc desfet en achiote, fulla de plàtan, taronja, ceba macerada en habanero i arròs blanc", "15,50 €"],
            ["Pipián verd de pistatxo", "Tomatillo verd, herbes aromàtiques i pistatxo, porc i arròs blanc", "18,50 €"],
            ["Mole negre oaxaqueny", "Pasta de xilis, llavors, fruits secs i fruita, arròs blanc i pollastre", "17,50 €"],
            ["Chamorro cantiner", "Codillo brasejat, varietat de xilis en salsa i tomàquet, amb verdures", "16,50 €"],
          ],
        },
      ],
    },
    flavors: {
      kicker: "Sabors",
      title: "Herència servida amb calma.",
      copy: "Mole, blat de moro, salses, herbes fresques i postres de casa apareixen en una cuina de profunditat, no d'artifici.",
      cards: {
        root: { label: "Arrel", title: "Massa, tortilla i comal", copy: "El blat de moro com a centre de la taula i gest artesanal." },
        fire: { label: "Foc", title: "Salses i guisats", copy: "Calor mesurada, acidesa viva i fons profunds." },
        sweet: { label: "Dolç", title: "Postres de casa", copy: "Receptes familiars amb final net i elegant." },
      },
    },
    gallery: {
      kicker: "Plats",
      title: "Color, blat de moro i foc a taula.",
      copy: "Una galeria pensada per créixer amb fotografies reals de la cuina: primers plans càlids, fons sobris i plats que deixin parlar el producte.",
    },
    reviews: {
      kicker: "Opinions",
      title: "El que es recorda després de la taula.",
      googleLink: "Veure a Google",
      cards: {
        review1: { label: "Maria G.", copy: "\"Menjar mexicà autèntic. Els tacos al pastor i els chilaquiles són increïbles. El tracte és meravellós i el local molt acollidor.\"" },
        review2: { label: "Carlos R.", copy: "\"Sens dubte el millor restaurant mexicà de la zona. Els sabors et transporten directament a Mèxic. Recomanable 100%.\"" },
        review3: { label: "Laura M.", copy: "\"Excel·lent servei i menjar deliciós. Vam provar el mole i les margarites, tot espectacular. Repetirem segur.\"" },
      },
    },
    reservations: { kicker: "Reserves", title: "Una taula, una llum, una nit oaxaquenya.", call: "Trucar ara", write: "Escriure" },
    contact: {
      kicker: "Contacte",
      title: "Troba'ns al centre de Calella.",
      addressLabel: "Adreça",
      phoneLabel: "Telèfon",
      hoursLabel: "Horari",
      hoursDays: "Dilluns, dijous, divendres, dissabte i diumenge",
      hoursClosed: "Dimarts i dimecres tancat",
    },
    footer: {
      tagline: "Cuina ancestral oaxaquenya",
      copy: "Carrer de la Riera, 16, Calella. Obert per dinars, sopars i trobades amb sabor d'origen.",
    },
    legalBar: {
      text: "Avís legal i privacitat",
    },
    legalModal: {
      content: `<h2>Avís Legal i Política de Privacitat</h2>
<p>En compliment de la Llei 34/2002, d'11 de juliol, de Serveis de la Societat de la Informació i de Comerç Electrònic (LSSI-CE) i del Reglament (UE) 2016/679 (RGPD), es facilita la informació següent.</p>

<h3>1. Dades identificatives del titular</h3>
<p><strong>Titular:</strong> [NOM DEL RESTAURANT O RAÓ SOCIAL]<br>
<strong>Domicili:</strong> [ADREÇA COMPLETA, CODI POSTAL, CIUTAT, PROVÍNCIA]<br>
<strong>NIF/CIF:</strong> [NÚMERO]<br>
<strong>Correu electrònic:</strong> [EMAIL DE CONTACTE]<br>
<strong>Telèfon:</strong> [NÚMERO DE TELÈFON]</p>

<h3>2. Objecte del lloc web</h3>
<p>El present lloc web té caràcter merament informatiu i la seva finalitat és donar a conèixer l'activitat, ubicació i dades de contacte de l'establiment.</p>

<h3>3. Propietat intel·lectual</h3>
<p>Els continguts d'aquest lloc web, incloent textos, imatges i disseny, són propietat del titular o han estat utilitzats amb autorització. Queda prohibida la seva reproducció total o parcial sense autorització expressa.</p>

<h3>4. Protecció de dades i privacitat</h3>
<p>Aquest lloc web no disposa de formularis de registre, subscripció ni cap altre mecanisme de recollida de dades personals. No s'utilitzen cookies d'anàlisi, publicitat ni seguiment, ni s'integren serveis de tercers que puguin recopilar dades dels visitants.</p>
<p>L'únic mitjà de contacte disponible és el botó de WhatsApp, l'ús del qual és completament voluntari. En cas que l'usuari iniciï una conversa a través de WhatsApp, el tractament de les dades facilitades en aquesta comunicació queda subjecte a la política de privacitat de WhatsApp LLC / Meta Platforms Ireland Limited, aliena al titular d'aquest lloc.</p>

<h3>5. Drets dels usuaris</h3>
<p>Vostè té dret a accedir, rectificar i suprimir les seves dades, així com altres drets reconeguts en el RGPD i en la Llei Orgànica 3/2018 (LOPDGDD). Per exercir-los, pot dirigir-se a: [EMAIL DE CONTACTE]</p>
<p>Així mateix, té dret a presentar una reclamació davant l'Agència Espanyola de Protecció de Dades (www.aepd.es).</p>

<h3>6. Responsabilitat</h3>
<p>El titular no es responsabilitza dels possibles danys o perjudicis que poguessin derivar-se d'interferències, interrupcions o desconnexions del sistema de telecomunicacions que produeixin la suspensió o cancel·lació del servei web.</p>

<h3>7. Legislació aplicable i modificacions</h3>
<p>Les presents condicions es regeixen per la legislació espanyola vigent. El titular es reserva el dret a actualitzar aquest document en qualsevol moment. Es recomana revisar-lo periòdicament.</p>`,
    },
  };
})();