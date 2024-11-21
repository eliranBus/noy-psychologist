const sitemap = require("sitemap");

const hostname = "https://www.pitriyeda.com";

const urls = [
  { url: "/", changefreq: "daily", priority: 1 },
  {
    url: "/information/where-mushrooms-grow",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/taste-and-smell-in-mushrooms",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/structure-and-terms",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/what-is-a-mushroom",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/partnership/mycorrhizae",
    changefreq: "monthly",
    priority: 0.8,
  },
  { url: "/information/hebrew-names", changefreq: "monthly", priority: 0.8 },
  {
    url: "/information/in-memory-of-prof-binyamini",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/what-is-mushroom/why-is-it-called-a-mushroom",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/nutritional-values-in-a-mushroom",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/various-phenomena/mushrooms-after-fire",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/similar-but-different-identification-marks",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/similar-but-different-identification-marks/large-brown-mushrooms",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/similar-but-different-identification-marks/large-white-mushrooms",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/mushrooms-counting",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/eating-mushrooms",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/various-phenomena/glowing-in-mushrooms",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/various-phenomena/the-witch-circles",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/various-phenomena/spore-spreading",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/food-and-medicine",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/taxonomy/what-is-taxonomy",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/taxonomy/the-hebrew-and-scientific-names-who-and-how-are-determined",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/taxonomy/fungi-and-mold",
    changefreq: "monthly",
    priority: 0.8,
  },
  { url: "/information/radioactivity", changefreq: "monthly", priority: 0.8 },
  {
    url: "/information/scientific-collection-and-micologists-in-israel",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/recommended-websites-for-study",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/mushroom-growing-buying-and-selling",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/mushroom-growing-buying-and-selling/how-to-grow-edible-mushrooms-at-home",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/mushroom-growing-buying-and-selling/commersial-growing-for-consumption-and-medicine",
    changefreq: "monthly",
    priority: 0.8,
  },
  { url: "/information/partnership", changefreq: "monthly", priority: 0.8 },
  { url: "/information/taxonomy", changefreq: "monthly", priority: 0.8 },
  {
    url: "/information/collecting-and-photographing",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/structure-and-parts-of-the-mushroom",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/glossary-of-terms",
    changefreq: "monthly",
    priority: 0.8,
  },
  { url: "/information/habitates", changefreq: "monthly", priority: 0.8 },
  {
    url: "/information/habitates/habitates-in-israel",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/habitates/medium-of-growth",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/literature-books-and-links-to-articles",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/nutritional-and-medicinal-value-for-humans",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/glossary-of-terms/in-hebrew-and-english",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/nutritional-and-medicinal-value-for-humans/edible-species-in-israel",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/various-phenomena/teardrop-in-mushrooms",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/nutritional-and-medicinal-value-for-humans/edible-species-in-israel",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/nutritional-and-medicinal-value-for-humans/nutritional-values-in-mushrooms",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/nutritional-and-medicinal-value-for-humans/smell-and-taste-of-mushrooms",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/value-of-mushrooms-in-the-natural-world",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/folklore-art-and-superstitions",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/folklore-art-and-superstitions/stories-and-beliefes",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/what-is-mushroom",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/toxic-species-and-guidelines-for-treatment",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/toxic-species-and-guidelines-for-treatment/the-toxins-in-the-mushrooms-and-how-they-affect",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/toxic-species-and-guidelines-for-treatment/mushrooms-absorb-dangerous-substances",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/various-phenomena",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/various-phenomena/succation-in-fungi",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/collectingAndPhotographing/the-rules-for-collecting-correctly-in-nature",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/collectingAndPhotographing/how-to-photograph-a-mushroom-for-identification-purposes",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/scientific-collection-and-micologists-in-israel/sceintific-collection-value-tlv-university",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/scientific-collection-and-micologists-in-israel/sceintific-collection-value-in-micology",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/information/scientific-collection-and-micologists-in-israel/micologists-in-israel",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/type/oznit-hakelach",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/auricularia",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/pyronema",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/marasmiellus",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/marasmius",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/amanita",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/leucocoprinus",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/lyophyllum",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/myriostoma",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/collybia",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/laccaria",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/geoglossum",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/hypholoma",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/laetiporus",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/disciseda",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/russula",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/melanoleuca",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/cortinarius",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/fomes",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/resupinus",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/xerocomus",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/gyroporus",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/dacrymyces",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/montagnites",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/volvariella",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/suillus",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/crepidotus",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/boletus",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/symocibe",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/lycoperdon",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/macrolepiota",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/vascellum",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/scleroderma",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/macowanites",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/hystrerangium",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/coprinus",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/coprinellus",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/coprinopsis",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/patara",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/atheniella",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/hemimycena",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/hydronocybe",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/tremella",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/battarrea",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/bovista",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/cantharellus",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/gymnopilus",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/lactarius",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/trametes",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/phellinus",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/crinipellis",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/flammulina",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/gamtzutz-haruti",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/hymenopellis",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/bolbitius",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/pholiota",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/stropharia",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/daldinia",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/large-white-mushrooms",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/terena",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/tephrocybe",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/entoloma",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/galerina",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/kmehit",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/hygrocybe",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/lohevet",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/agrocybe",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/cyclocybe",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/polyporus",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/cerioporus",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/podaix",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/gloeophyllum",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/atzitzit-limonit-lavkanit",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/mycena",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/pitririot",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/phallus",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/chlorophyllum",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/colus",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/agaricus",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/lepista",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/geastrum",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/cordyceps",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/tznuma-vetznumit",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/psathyrella",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/ganoderma",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/tulostoma",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/pluteus",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/types-and-species/type-identification/type/cyathus",
    changefreq: "monthly",
    priority: 0.8,
  },
];

const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});

const fs = require("fs");
fs.writeFileSync("./public/sitemap.xml", sitemapInstance.toString());
