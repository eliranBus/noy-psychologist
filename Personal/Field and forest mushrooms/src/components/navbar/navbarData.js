export const navItems = [
  {
    id: 1,
    title: "about",
    path: "#about",
    cName: "nav-text-link about",
  },
  {
    id: 2,
    title: "typesAndSpecies",
    path: "#types-and-species",
    cName: "nav-text-link typesAndSpecies",
  },
  {
    id: 3,
    title: "information",
    path: "#information",
    cName: "nav-text-link information",
    children: [
      {
        id: 1,
        title: "scientificCollection",
        path: "/information/scientific-collection-and-micologists-in-israel",
        cName: "submenu-item",
        children: [
          {
            id: 1,
            title: "sceintificCollectionValue",
            path: "/information/scientific-collection-and-micologists-in-israel/sceintific-collection-value-tlv-university",
            cName: "submenu-item",
          },
          {
            id: 2,
            title: "sceintificCollectionMicology",
            path: "/information/scientific-collection-and-micologists-in-israel/sceintific-collection-value-in-micology",
            cName: "submenu-item",
          },
          {
            id: 3,
            title: "geneticalTests",
            path: "/information/scientific-collection-and-micologists-in-israel/genetical-tests",
            cName: "submenu-item",
          },
          {
            id: 4,
            title: "micologists",
            path: "/information/scientific-collection-and-micologists-in-israel/micologists-in-israel",
            cName: "submenu-item",
          },
        ],
      },
      {
        id: 3,
        title: "mushroomGrowing",
        path: "/information/mushroom-growing-buying-and-selling",
        cName: "submenu-item",
        children: [
          {
            id: 1,
            title: "howToGrowMushrooms",
            path: "/information/mushroom-growing-buying-and-selling/how-to-grow-edible-mushrooms-at-home",
            cName: "submenu-item",
          },
          {
            id: 2,
            title: "growingForMedicine",
            path: "/information/mushroom-growing-buying-and-selling/commersial-growing-for-consumption-and-medicine",
            cName: "submenu-item",
          },
        ],
      },
      {
        id: 4,
        title: "similarButDifferent",
        path: "/information/similar-but-different-identification-marks",
        cName: "submenu-item",
        children: [
          {
            id: 1,
            title: "largeBrown",
            path: "/information/similar-but-different-identification-marks/large-brown-mushrooms",
            cName: "submenu-item",
          },
          {
            id: 2,
            title: "largeWhite",
            path: "/information/similar-but-different-identification-marks/large-white-mushrooms",
            cName: "submenu-item",
          },
        ],
      },
      {
        id: 5,
        title: "partnership",
        path: "/information/partnership",
        cName: "submenu-item",
        children: [
          {
            id: 1,
            title: "mycorrhizae",
            path: "/information/partnership/mycorrhizae",
            cName: "submenu-item",
          },
        ],
      },
      {
        id: 6,
        title: "taxonomy",
        path: "/information/taxonomy",
        cName: "submenu-item",
        children: [
          {
            id: 1,
            title: "whatIsTaxonomy",
            path: "/information/taxonomy/what-is-taxonomy",
            cName: "submenu-item",
          },
          {
            id: 2,
            title: "hebrewNames",
            path: "/information/taxonomy/the-hebrew-and-scientific-names-who-and-how-are-determined",
            cName: "submenu-item",
          },
          {
            id: 3,
            title: "fungiAndMold",
            path: "/information/taxonomy/fungi-and-mold",
            cName: "submenu-item",
          },
        ],
      },
      {
        id: 7,
        title: "collectingAndPhotographing",
        path: "/information/collecting-and-photographing",
        cName: "submenu-item",
        children: [
          {
            id: 1,
            title: "collectingRules",
            path: "/information/collectingAndPhotographing/the-rules-for-collecting-correctly-in-nature",
            cName: "submenu-item",
          },
          {
            id: 2,
            title: "collectingAndDrying",
            path: "/information/collectingAndPhotographing/collecting-and-drying-for-consumption",
            cName: "submenu-item",
          },
          {
            id: 3,
            title: "howToPhotographAMushroom",
            path: "/information/collectingAndPhotographing/how-to-photograph-a-mushroom-for-identification-purposes",
            cName: "submenu-item",
          },
        ],
      },
      {
        id: 8,
        title: "structureAndPartsOfTheMushroom",
        path: "/information/structure-and-parts-of-the-mushroom",
        cName: "submenu-item",
        children: [
          {
            id: 1,
            title: "shapesAndPartsCap",
            path: "/information/structure-and-parts-of-the-mushroom/shapes-and-parts-of-cap-mushrooms",
            cName: "submenu-item",
          },
          {
            id: 2,
            title: "shapesAndParts",
            path: "/information/structure-and-parts-of-the-mushroom/shapes-and-parts-of-other-mushrooms",
            cName: "submenu-item",
          },
        ],
      },
      {
        id: 9,
        title: "glossaryOfTerms",
        path: "/information/glossary-of-terms",
        cName: "submenu-item",
        children: [
          {
            id: 1,
            title: "inHebrewAndEnglish",
            path: "/information/glossary-of-terms/in-hebrew-and-english",
            cName: "submenu-item",
          },
        ],
      },
      {
        id: 10,
        title: "habitates",
        path: "/information/habitates",
        cName: "submenu-item",
        children: [
          {
            id: 1,
            title: "habitatesOfGrowth",
            path: "/information/habitates/habitates-in-israel",
            cName: "submenu-item",
          },
          {
            id: 2,
            title: "mediumOfGrowth",
            path: "/information/habitates/medium-of-growth",
            cName: "submenu-item",
          },
          {
            id: 3,
            title: "weatherConditions",
            path: "/information/habitates/weather-conditions",
            cName: "submenu-item",
          },
        ],
      },
      {
        id: 12,
        title: "nutritional",
        path: "/information/nutritional-and-medicinal-value-for-humans",
        cName: "submenu-item",
        children: [
          {
            id: 1,
            title: "substances",
            path: "/information/nutritional-and-medicinal-value-for-humans/substances-and-their-effect-in-medicine",
            cName: "submenu-item",
          },
          {
            id: 2,
            title: "adibles",
            path: "/information/nutritional-and-medicinal-value-for-humans/edible-species-in-israel",
            cName: "submenu-item",
          },
          {
            id: 3,
            title: "nutritionalValueInAMushroom",
            path: "/information/nutritional-and-medicinal-value-for-humans/nutritional-values-in-mushrooms",
            cName: "submenu-item",
          },
          {
            id: 4,
            title: "smellAndTasteOfMushrooms",
            path: "/information/nutritional-and-medicinal-value-for-humans/smell-and-taste-of-mushrooms",
            cName: "submenu-item",
          },
        ],
      },
      {
        id: 13,
        title: "mushroomsValue",
        path: "/information/value-of-mushrooms-in-the-natural-world",
        cName: "submenu-item",
        children: [
          {
            id: 1,
            title: "importance",
            path: "/information/mushroomsValue/mushrooms-importance-and-role",
            cName: "submenu-item",
          },
        ],
      },
      {
        id: 15,
        title: "whatIsMushroom",
        path: "/information/what-is-mushroom",
        cName: "submenu-item",
        children: [
          {
            id: 1,
            title: "whyIsItCalledAMushroom",
            path: "/information/what-is-mushroom/why-is-it-called-a-mushroom",
            cName: "submenu-item",
          },
        ],
      },
      {
        id: 16,
        title: "toxicity",
        path: "/information/toxic-species-and-guidelines-for-treatment",
        cName: "submenu-item",
        children: [
          {
            id: 1,
            title: "toxinsInMushrooms",
            path: "/information/toxic-species-and-guidelines-for-treatment/the-toxins-in-the-mushrooms-and-how-they-affect",
            cName: "submenu-item",
          },
          {
            id: 2,
            title: "absorb",
            path: "/information/toxic-species-and-guidelines-for-treatment/mushrooms-absorb-dangerous-substances",
            cName: "submenu-item",
          },
        ],
      },
      {
        id: 17,
        title: "variousPhenomena",
        path: "/information/various-phenomena",
        cName: "submenu-item",
        children: [
          {
            id: 1,
            title: "witchCircles",
            path: "/information/various-phenomena/the-witch-circles",
            cName: "submenu-item",
          },
          {
            id: 2,
            title: "tearDropsInMushrooms",
            path: "/information/various-phenomena/teardrop-in-mushrooms",
            cName: "submenu-item",
          },
          {
            id: 3,
            title: "colorChanges",
            path: "/information/various-phenomena/color-changes-external-and-internal",
            cName: "submenu-item",
          },
          {
            id: 4,
            title: "mushroomsAfterFire",
            path: "/information/various-phenomena/mushrooms-after-fire",
            cName: "submenu-item",
          },
          {
            id: 5,
            title: "successionInFungi",
            path: "/information/various-phenomena/succation-in-fungi",
            cName: "submenu-item",
          },
          {
            id: 6,
            title: "glowingInMushrooms",
            path: "/information/various-phenomena/glowing-in-mushrooms",
            cName: "submenu-item",
          },
          {
            id: 7,
            title: "sporeSpreading",
            path: "/information/various-phenomena/spore-spreading",
            cName: "submenu-item",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "folklore",
    path: "#folklore",
    cName: "nav-text-link folklore",
  },
  {
    id: 5,
    title: "literature",
    path: "#literature",
    cName: "nav-text-link literature",
  },
];
