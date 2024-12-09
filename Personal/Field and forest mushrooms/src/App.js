import React, { useEffect, useState, useRef } from "react";
import { Switch, Route } from "react-router-dom";
import { LanguageContext } from "./context/LanguageContext";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Folklore from "./components/folklore/Folklore";
import Information from "./components/information/Information";
import Footer from "./components/Footer";
import BurgerMenu from "./components/BurgerMenu";
import { getStorageLanguage, scrollToTop } from "./assets/utilities";
import WhereMushroomsGrow from "./components/information/sub-pages/WhereMushroomsGrow";
import "./style/app.css";
import StructureAndTerms from "./components/information/sub-pages/StructureAndTerms";
import WhatIsMushroom from "./components/information/sub-pages/WhatIsMushroom";
import PlantMushroomBond from "./components/information/sub-pages/PlantMushroomBond";
import HebrewNames from "./components/information/sub-pages/HebrewName";
import WhyIsItCalledAMushroom from "./components/information/sub-pages/WhyIsItCalledAMushroom";
import NutritionalValueInAMushroom from "./components/information/sub-pages/NutritionalValueInAMushroom";
import TypesAndSpecies from "./components/typesAndSpecies/TypesAndSpecies";
import MushroomsAfterFire from "./components/information/sub-pages/MushroomsAfterFire";
import MushroomsInTheGilboa from "./components/observations/sub-pages/MushroomsInTheGilboa";
import SimilarButDifferent from "./components/information/sub-pages/SimilarButDifferent";
import PhotographingMushrooms from "./components/information/sub-pages/PhotographingMushrooms";
import EatingMushrooms from "./components/information/sub-pages/EatingMushrooms";
import SuccessionInMushrooms from "./components/information/sub-pages/SuccessionInMushrooms";
import Taxonomy from "./components/information/sub-pages/Taxonomy";
import Radioactivity from "./components/information/sub-pages/Radioactivity";
import Literature from "./components/Literatue";
import AznonitYehuda from "./components/typesAndSpecies/sub-pages/AznonitYehuda";
import Amanitas from "./components/typesAndSpecies/sub-pages/Amanitas";
import Orania from "./components/typesAndSpecies/sub-pages/Orania";
import Gvionit from "./components/typesAndSpecies/sub-pages/Gvionit";
import Gidmit from "./components/typesAndSpecies/sub-pages/Gidmit";
import Gamtzutz from "./components/typesAndSpecies/sub-pages/Gamtzutz";
import LargeWhiteMushrooms from "./components/typesAndSpecies/sub-pages/LargeWhiteMushrooms";
import Yafanit from "./components/typesAndSpecies/sub-pages/Yafanit";
import Kumtit from "./components/typesAndSpecies/sub-pages/Kumtit";
import Kmehit from "./components/typesAndSpecies/sub-pages/Kmehit";
import Levadit from "./components/typesAndSpecies/sub-pages/Levadit";
import Lahit from "./components/typesAndSpecies/sub-pages/Lahit";
import Lohevet from "./components/typesAndSpecies/sub-pages/Lohevet";
import Niranit from "./components/typesAndSpecies/sub-pages/Niranit";
import Nakvuvanit from "./components/typesAndSpecies/sub-pages/Nakvuvanit";
import Sadanit from "./components/typesAndSpecies/sub-pages/Sadanit";
import Limonit from "./components/typesAndSpecies/sub-pages/Limonit";
import Patara from "./components/typesAndSpecies/sub-pages/Patara";
import Patririot from "./components/typesAndSpecies/sub-pages/Patririot";
import Pinit from "./components/typesAndSpecies/sub-pages/Pinit";
import Pkua from "./components/typesAndSpecies/sub-pages/Pkua";
import Cordyceps from "./components/typesAndSpecies/sub-pages/Cordyceps";
import Tznuma from "./components/typesAndSpecies/sub-pages/Tznuma";
import Shavririt from "./components/typesAndSpecies/sub-pages/Shavririt";
import Behukit from "./components/typesAndSpecies/sub-pages/Behukit";
import Metzila from "./components/typesAndSpecies/sub-pages/Metzila";
import Dafdefanit from "./components/typesAndSpecies/sub-pages/Dafdefanit";
import FeaturesScreen from "./components/features/index";
import MissingDataPage from "./components/missingDataPage/missingDataPage";
import Lehavit from "./components/typesAndSpecies/sub-pages/Lehavit";
import Dardasit from "./components/typesAndSpecies/sub-pages/Dardasit";
import Kaduriot from "./components/typesAndSpecies/sub-pages/Kaduriot";
import Kaduriot2 from "./components/typesAndSpecies/sub-pages/Kaduriot2";
import Karsanit from "./components/typesAndSpecies/sub-pages/Karsanit";
import Hysterit from "./components/typesAndSpecies/sub-pages/Hysterit";
import Dioit from "./components/typesAndSpecies/sub-pages/Dioit";
import Shalhofit from "./components/typesAndSpecies/sub-pages/Shalhofit";
import MultiLingualContent from "./languages/MultiLingualContent";
import Krishit from "./components/typesAndSpecies/sub-pages/Krishit";
import Klonsit from "./components/typesAndSpecies/sub-pages/Klonsit";
import Tzmadit from "./components/typesAndSpecies/sub-pages/Tzmadit";
import InformationSubPage from "./components/information/InformationSubPage";
import TlvUniversityCollection from "./components/information/informationSubPages/TlvUniversityCollection";
import MicologistsInIsrael from "./components/information/informationSubPages/MicologistsInIsrael";
import MediumOfGrowth from "./components/information/informationSubPages/MediumOfGrowth";
import ScientificNames from "./components/information/informationSubPages/ScientificNames";
import ToxicMushrooms from "./components/information/informationSubPages/ToxicMushrooms";
import Kochvanit from "./components/typesAndSpecies/sub-pages/Kochvanit";
import YerukatDapim from "./components/typesAndSpecies/sub-pages/YerukatDapim";
import Kishurit from "./components/typesAndSpecies/sub-pages/Kishurit";
import Achlamit from "./components/typesAndSpecies/sub-pages/Achlamit";
import Mitranit from "./components/typesAndSpecies/sub-pages/Mitranit";
import Natufa from "./components/typesAndSpecies/sub-pages/Natufa";
import Madafit from "./components/typesAndSpecies/sub-pages/Madafit";
import Tzmudit from "./components/typesAndSpecies/sub-pages/Tzmudit";
import Zifanit from "./components/typesAndSpecies/sub-pages/Zifanit";
import Glalit from "./components/typesAndSpecies/sub-pages/Glalit";
import Kashkeshanit from "./components/typesAndSpecies/sub-pages/Kashkeshanit";
import Kashtanit from "./components/typesAndSpecies/sub-pages/Kashtanit";
import Avnatit from "./components/typesAndSpecies/sub-pages/Avnatit";
import EdibleSpeciesInIsreal from "./components/typesAndSpecies/sub-pages/EdibleSpeciesInIsreal";
import Atzitzit from "./components/typesAndSpecies/sub-pages/Atzitzit";
import Dfunit from "./components/typesAndSpecies/sub-pages/Dfunit";
import Sarafit from "./components/typesAndSpecies/sub-pages/Sarafit";
import Nakuvit from "./components/typesAndSpecies/sub-pages/Nakuvit";
import Haririt from "./components/typesAndSpecies/sub-pages/Haririt";
import CollectingRules from "./components/information/informationSubPages/CollectingRules";
import Resisit from "./components/typesAndSpecies/sub-pages/Resisit";
import Nartikanit from "./components/typesAndSpecies/sub-pages/Nartikanit";
import Leshonit from "./components/typesAndSpecies/sub-pages/Leshonit";
import Gachonit from "./components/typesAndSpecies/sub-pages/Gachonit";
import CollectionInMicology from "./components/information/informationSubPages/CollectionInMicology";
import Dfufit from "./components/typesAndSpecies/sub-pages/Dfufit";
import MushroomGrowingHome from "./components/information/informationSubPages/MushroomGrowingHome";
import MushroomGrowingCommersial from "./components/information/informationSubPages/MushroomGrowingCommersial";
import Pchusit from "./components/typesAndSpecies/sub-pages/Pchusit";
import Shcharcharit from "./components/typesAndSpecies/sub-pages/Shcharcharit";
import Hinoma from "./components/typesAndSpecies/sub-pages/Hinoma";
import Avukit from "./components/typesAndSpecies/sub-pages/Avukit";
import Afarkadanit from "./components/typesAndSpecies/sub-pages/Afarkadanit";
import Aforit from "./components/typesAndSpecies/sub-pages/Aforit";
import Adumit from "./components/typesAndSpecies/sub-pages/Adumit";
import Gushit from "./components/typesAndSpecies/sub-pages/Gushit";
import Ktifanit from "./components/typesAndSpecies/sub-pages/Ktifanit";
import Ravpumit from "./components/typesAndSpecies/sub-pages/Ravpumit";
import Pumit from "./components/typesAndSpecies/sub-pages/Pumit";
import Terms from "./components/information/sub-pages/Terms";
import TeardropInMushrooms from "./components/information/informationSubPages/TeardropInMushrooms";
import Asimonit from "./components/typesAndSpecies/sub-pages/Asimonit";
import Tznumit from "./components/typesAndSpecies/sub-pages/Tznumit";
import Shalhevet from "./components/typesAndSpecies/sub-pages/Shalhevet";
import FungiAndMold from "./components/information/informationSubPages/FungiAndMold";
import SmellAndTasteOfMushrooms from "./components/information/sub-pages/SmellAndTasteOfMushrooms";
import GlowingInMushrooms from "./components/information/sub-pages/GlowingInMushrooms";
import Harifit from "./components/typesAndSpecies/sub-pages/Harifit";
import SporeSpreading from "./components/information/sub-pages/SporeSpreading";
import TheWitchCircle from "./components/information/sub-pages/TheWitchCircle";
import Absorb from "./components/information/informationSubPages/Absorb";
import Oznit from "./components/typesAndSpecies/sub-pages/Oznit";
import Kishutit from "./components/typesAndSpecies/sub-pages/Kishutit";
import ImportanceAndRole from "./components/information/sub-pages/ImportanceAndRole";
import Gviit from "./components/typesAndSpecies/sub-pages/Gviit";
import Mardait from "./components/typesAndSpecies/sub-pages/Mardait";
import Shchumit from "./components/typesAndSpecies/sub-pages/Shchumit";
import Pkait from "./components/typesAndSpecies/sub-pages/Pkait";
import Taburit from "./components/typesAndSpecies/sub-pages/Taburit";
import Harutit from "./components/typesAndSpecies/sub-pages/Harutit";
import Matriyanit from "./components/typesAndSpecies/sub-pages/Matriyanit";
import Diskanit from "./components/typesAndSpecies/sub-pages/Diskanit";
import Shinonit from "./components/typesAndSpecies/sub-pages/Shinonit";
import Shinanit from "./components/typesAndSpecies/sub-pages/Shinanit";

const storageLanguage = getStorageLanguage();

function App() {
  const backToTop = useRef();
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState(
    storageLanguage ? storageLanguage : "Hebrew"
  );

  const amountScrolled = 250;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const hebrewLanguage = () => {
    setLanguage("Hebrew");
  };

  const englishLanguage = () => {
    setLanguage("English");
  };

  const handleScroll = (e) => {
    if (window.scrollY > amountScrolled) {
      backToTop.current.classList.add("show");
    } else {
      backToTop.current.classList.remove("show");
    }
  };

  const handleGoToTop = () => scrollToTop();

  return (
    <div
      className="App"
      style={{
        direction: language === "Hebrew" ? "rtl" : "ltr",
        fontFamily: language === "Hebrew" ? "MPLUSRounded1c" : "JosefinSlab",
      }}
    >
      <LanguageContext.Provider
        value={{ language, hebrewLanguage, englishLanguage }}
      >
        <button onClick={handleGoToTop} ref={backToTop} className="back-to-top">
          <MultiLingualContent contentID="backToTop" />
        </button>
        <Switch>
          <Route exact path="/">
            <Navbar open={open} setOpen={setOpen} />
            <BurgerMenu open={open} setOpen={setOpen} />
            <Header />
            <About />
            <TypesAndSpecies />
            <Information />
            <Folklore />
            <Literature />
          </Route>
          <Route exact path="/information/where-mushrooms-grow">
            <WhereMushroomsGrow />
          </Route>
          <Route exact path="/information/structure-and-terms">
            <StructureAndTerms />
          </Route>
          <Route exact path="/information/what-is-a-mushroom">
            <WhatIsMushroom />
          </Route>
          <Route exact path="/information/partnership/mycorrhizae">
            <PlantMushroomBond />
          </Route>
          <Route exact path="/information/hebrew-names">
            <HebrewNames />
          </Route>
          <Route
            exact
            path="/information/what-is-mushroom/why-is-it-called-a-mushroom"
          >
            <WhyIsItCalledAMushroom />
          </Route>
          <Route
            exact
            path="/information/mushroomsValue/mushrooms-importance-and-role"
          >
            <ImportanceAndRole />
          </Route>
          <Route
            exact
            path="/information/what-is-mushroom/why-is-it-called-a-mushroom"
          >
            <WhyIsItCalledAMushroom />
          </Route>
          <Route exact path="/information/nutritional-values-in-a-mushroom">
            <NutritionalValueInAMushroom />
          </Route>
          <Route
            exact
            path="/information/various-phenomena/mushrooms-after-fire"
          >
            <MushroomsAfterFire />
          </Route>
          <Route
            exact
            path="/information/similar-but-different-identification-marks"
          >
            <InformationSubPage subtitleName="similarButDifferent" />
          </Route>
          <Route
            exact
            path="/information/similar-but-different-identification-marks/large-brown-mushrooms"
          >
            <SimilarButDifferent />
          </Route>
          <Route
            exact
            path="/information/similar-but-different-identification-marks/large-white-mushrooms"
          >
            <LargeWhiteMushrooms />
          </Route>
          <Route exact path="/information/eating-mushrooms">
            <EatingMushrooms />
          </Route>
          <Route
            exact
            path="/information/various-phenomena/glowing-in-mushrooms"
          >
            <GlowingInMushrooms />
          </Route>
          <Route exact path="/information/various-phenomena/the-witch-circles">
            <TheWitchCircle />
          </Route>
          <Route exact path="/information/various-phenomena/spore-spreading">
            <SporeSpreading />
          </Route>
          <Route exact path="/information/taxonomy/what-is-taxonomy">
            <Taxonomy />
          </Route>
          <Route
            exact
            path="/information/taxonomy/the-hebrew-and-scientific-names-who-and-how-are-determined"
          >
            <ScientificNames />
          </Route>
          <Route exact path="/information/taxonomy/fungi-and-mold">
            <FungiAndMold />
          </Route>
          <Route exact path="/information/radioactivity">
            <Radioactivity />
          </Route>
          <Route
            exact
            path="/information/scientific-collection-and-micologists-in-israel"
          >
            <InformationSubPage subtitleName="scientificCollection" />
          </Route>
          <Route exact path="/information/recommended-websites-for-study">
            <InformationSubPage subtitleName="recommendedSites" />
          </Route>
          <Route exact path="/information/mushroom-growing-buying-and-selling">
            <InformationSubPage subtitleName="mushroomGrowing" />
          </Route>
          <Route
            exact
            path="/information/mushroom-growing-buying-and-selling/how-to-grow-edible-mushrooms-at-home"
          >
            <MushroomGrowingHome />
          </Route>
          <Route
            exact
            path="/information/mushroom-growing-buying-and-selling/commersial-growing-for-consumption-and-medicine"
          >
            <MushroomGrowingCommersial />
          </Route>
          <Route exact path="/information/partnership">
            <InformationSubPage subtitleName="partnership" />
          </Route>
          <Route exact path="/information/taxonomy">
            <InformationSubPage subtitleName="taxonomy" />
          </Route>
          <Route exact path="/information/collecting-and-photographing">
            <InformationSubPage subtitleName="collectingAndPhotographing" />
          </Route>
          <Route exact path="/information/structure-and-parts-of-the-mushroom">
            <InformationSubPage subtitleName="structureAndPartsOfTheMushroom" />
          </Route>
          <Route exact path="/information/glossary-of-terms">
            <InformationSubPage subtitleName="glossaryOfTerms" />
          </Route>
          <Route exact path="/information/habitates">
            <InformationSubPage subtitleName="habitates" />
          </Route>
          <Route exact path="/information/habitates/habitates-in-israel">
            <MushroomsInTheGilboa />
          </Route>
          <Route exact path="/information/habitates/medium-of-growth">
            <MediumOfGrowth />
          </Route>
          <Route
            exact
            path="/information/literature-books-and-links-to-articles"
          >
            <InformationSubPage subtitleName="literature" />
          </Route>
          <Route
            exact
            path="/information/nutritional-and-medicinal-value-for-humans"
          >
            <InformationSubPage subtitleName="nutritional" />
          </Route>
          <Route
            exact
            path="/information/glossary-of-terms/in-hebrew-and-english"
          >
            <Terms />
          </Route>
          <Route
            exact
            path="/information/nutritional-and-medicinal-value-for-humans/edible-species-in-israel"
          >
            <EdibleSpeciesInIsreal />
          </Route>
          <Route
            exact
            path="/information/various-phenomena/teardrop-in-mushrooms"
          >
            <TeardropInMushrooms />
          </Route>
          <Route
            exact
            path="/information/nutritional-and-medicinal-value-for-humans/edible-species-in-israel"
          >
            <EdibleSpeciesInIsreal />
          </Route>
          <Route
            exact
            path="/information/nutritional-and-medicinal-value-for-humans/nutritional-values-in-mushrooms"
          >
            <NutritionalValueInAMushroom />
          </Route>
          <Route
            exact
            path="/information/nutritional-and-medicinal-value-for-humans/smell-and-taste-of-mushrooms"
          >
            <SmellAndTasteOfMushrooms />
          </Route>
          <Route
            exact
            path="/information/value-of-mushrooms-in-the-natural-world"
          >
            <InformationSubPage subtitleName="mushroomsValue" />
          </Route>
          <Route exact path="/information/what-is-mushroom">
            <InformationSubPage subtitleName="whatIsMushroom" />
          </Route>
          <Route
            exact
            path="/information/toxic-species-and-guidelines-for-treatment"
          >
            <InformationSubPage subtitleName="toxicity" />
          </Route>
          <Route
            exact
            path="/information/toxic-species-and-guidelines-for-treatment/the-toxins-in-the-mushrooms-and-how-they-affect"
          >
            <ToxicMushrooms />
          </Route>
          <Route
            exact
            path="/information/toxic-species-and-guidelines-for-treatment/mushrooms-absorb-dangerous-substances"
          >
            <Absorb />
          </Route>
          <Route exact path="/information/various-phenomena">
            <InformationSubPage subtitleName="variousPhenomena" />
          </Route>
          <Route exact path="/information/various-phenomena/succation-in-fungi">
            <SuccessionInMushrooms />
          </Route>
          <Route
            exact
            path="/information/collectingAndPhotographing/the-rules-for-collecting-correctly-in-nature"
          >
            <CollectingRules />
          </Route>
          <Route
            exact
            path="/information/collectingAndPhotographing/how-to-photograph-a-mushroom-for-identification-purposes"
          >
            <PhotographingMushrooms />
          </Route>
          <Route
            exact
            path="/information/scientific-collection-and-micologists-in-israel/sceintific-collection-value-tlv-university"
          >
            <TlvUniversityCollection />
          </Route>
          <Route
            exact
            path="/information/scientific-collection-and-micologists-in-israel/sceintific-collection-value-in-micology"
          >
            <CollectionInMicology />
          </Route>
          <Route
            exact
            path="/information/scientific-collection-and-micologists-in-israel/micologists-in-israel"
          >
            <MicologistsInIsrael />
          </Route>
          <Route exact path="/types-and-species/type-identification/:typeId">
            <FeaturesScreen />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/type/oznit-hakelach"
          >
            <MushroomsInTheGilboa />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/auricularia"
          >
            <AznonitYehuda />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/pyronema"
          >
            <Shalhevet />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/marasmiellus"
          >
            <Tznumit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/inonotus"
          >
            <Kishutit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/pleurotus"
          >
            <Oznit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/marasmius"
          >
            <Tznuma />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/amanita"
          >
            <Amanitas />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/leucocoprinus"
          >
            <Atzitzit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/lyophyllum"
          >
            <Dfunit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/myriostoma"
          >
            <Ravpumit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/collybia"
          >
            <Asimonit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/laccaria"
          >
            <Sarafit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/geoglossum"
          >
            <Leshonit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/hypholoma"
          >
            <Gachonit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/laetiporus"
          >
            <Nakuvit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/disciseda"
          >
            <Pchusit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/russula"
          >
            <Harifit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/melanoleuca"
          >
            <Shcharcharit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/cortinarius"
          >
            <Hinoma />
          </Route>
          <Route exact path="/types-and-species/type-identification/type/fomes">
            <Avukit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/resupinus"
          >
            <Afarkadanit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/xerocomus"
          >
            <Levadit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/gyroporus"
          >
            <Haririt />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/dacrymyces"
          >
            <Resisit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/montagnites"
          >
            <Dfufit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/volvariella"
          >
            <Nartikanit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/suillus"
          >
            <Orania />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/crepidotus"
          >
            <Dardasit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/boletus"
          >
            <Gushit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/symocibe"
          >
            <Dardasit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/lycoperdon"
          >
            <Kaduriot />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/macrolepiota"
          >
            <Mitranit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/vascellum"
          >
            <Kaduriot />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/scleroderma"
          >
            <Kaduriot />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/macowanites"
          >
            <Karsanit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/hystrerangium"
          >
            <Hysterit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/coprinus"
          >
            <Dioit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/coprinellus"
          >
            <Dioit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/coprinopsis"
          >
            <Dioit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/patara"
          >
            <Patara />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/atheniella"
          >
            <Patara />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/hemimycena"
          >
            <Patara />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/hydronocybe"
          >
            <Shalhofit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/tremella"
          >
            <Krishit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/battarrea"
          >
            <Klonsit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/bovista"
          >
            <Kaduriot2 />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/cantharellus"
          >
            <Gvionit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/melanogaster"
          >
            <Shchumit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/rizopogon"
          >
            <Pkait />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/omphalotus"
          >
            <Taburit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/conocybe"
          >
            <Harutit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/helvella"
          >
            <Gviit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/leptopodia"
          >
            <Mardait />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/gymnopilus"
          >
            <Gidmit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/lactarius"
          >
            <Natufa />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/trametes"
          >
            <Madafit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/phellinus"
          >
            <Tzmudit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/crinipellis"
          >
            <Zifanit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/flammulina"
          >
            <Lehavit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/gamtzutz-haruti"
          >
            <Gamtzutz />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/hymenopellis"
          >
            <Tzmadit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/bolbitius"
          >
            <Glalit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/pholiota"
          >
            <Kashkeshanit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/stropharia"
          >
            <Avnatit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/daldinia"
          >
            <Kashtanit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/large-white-mushrooms"
          >
            <LargeWhiteMushrooms />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/terena"
          >
            <Yafanit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/tephrocybe"
          >
            <Aforit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/entoloma"
          >
            <Adumit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/galerina"
          >
            <Kumtit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/kmehit"
          >
            <Kmehit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/hygrocybe"
          >
            <Lahit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/chuphophyllus"
          >
            <Lahit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/lohevet"
          >
            <Lohevet />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/agrocybe"
          >
            <Niranit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/cyclocybe"
          >
            <Niranit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/polyporus"
          >
            <Nakvuvanit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/cerioporus"
          >
            <Nakvuvanit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/podaix"
          >
            <Sadanit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/gloeophyllum"
          >
            <Dafdefanit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/atzitzit-limonit-lavkanit"
          >
            <Limonit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/mycena"
          >
            <Patara />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/pitririot"
          >
            <Patririot />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/phallus"
          >
            <Pinit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/chlorophyllum"
          >
            <YerukatDapim />
          </Route>
          <Route exact path="/types-and-species/type-identification/type/colus">
            <Kishurit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/agaricus"
          >
            <Pkua />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/lepista"
          >
            <Achlamit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/geastrum"
          >
            <Kochvanit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/cordyceps"
          >
            <Cordyceps />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/tznuma-vetznumit"
          >
            <Tznuma />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/psathyrella"
          >
            <Shavririt />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/ganoderma"
          >
            <Behukit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/tulostoma"
          >
            <Pumit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/lepiota"
          >
            <Matriyanit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/pluteus"
          >
            <Ktifanit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/cyathus"
          >
            <Metzila />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/discina"
          >
            <Diskanit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/hydnellum"
          >
            <Shinonit />
          </Route>
          <Route
            exact
            path="/types-and-species/type-identification/type/Hydnum"
          >
            <Shinanit />
          </Route>
          <Route path="*">
            <MissingDataPage />
          </Route>
        </Switch>
        <Footer />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
