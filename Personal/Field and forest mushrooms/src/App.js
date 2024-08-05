import React, { useEffect, useState, useRef } from "react";
import { Switch, Route } from "react-router-dom";
import { LanguageContext } from "./context/LanguageContext";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/Header";
import About from "./components/About";
// import Gallery from "./components/Gallery";
import Folklore from "./components/folklore/Folklore";
import Information from "./components/information/Information";
import Footer from "./components/Footer";
import BurgerMenu from "./components/BurgerMenu";
import { getStorageLanguage, scrollToTop } from "./assets/utilities";
import WhereMushroomsGrow from "./components/information/sub-pages/WhereMushroomsGrow";
import "./style/app.css";
import TasteAndSmellInMushrooms from "./components/information/sub-pages/TasteAndSmell";
import StructureAndTerms from "./components/information/sub-pages/StructureAndTerms";
import WhatIsMushroom from "./components/information/sub-pages/WhatIsMushroom";
import PlantMushroomBond from "./components/information/sub-pages/PlantMushroomBond";
import HebrewNames from "./components/information/sub-pages/HebrewName";
import InMemorialOfProf from "./components/information/sub-pages/InMemoryOfProf";
import WhyIsItCalledAMushroom from "./components/information/sub-pages/WhyIsItCalledAMushroom";
import NutritionalValueInAMushroom from "./components/information/sub-pages/NutritionalValueInAMushroom";
import TypesAndSpecies from "./components/typesAndSpecies/TypesAndSpecies";
import MushroomsAfterFire from "./components/information/sub-pages/MushroomsAfterFire";
import MushroomsInOdemForest from "./components/observations/sub-pages/MushroomsInOdemForest";
import MushroomsInTheGilboa from "./components/observations/sub-pages/MushroomsInTheGilboa";
import SimilarButDifferent from "./components/information/sub-pages/SimilarButDifferent";
import PhotographingMushrooms from "./components/information/sub-pages/PhotographingMushrooms";
import MushroomsCounting from "./components/information/sub-pages/MushroomsCounting";
import EatingMushrooms from "./components/information/sub-pages/EatingMushrooms";
import SuccessionInMushrooms from "./components/information/sub-pages/SuccessionInMushrooms";
import FoodAndMedicine from "./components/information/sub-pages/FoodAndMedicine";
import Taxonomy from "./components/information/sub-pages/Taxonomy";
import Radioactivity from "./components/information/sub-pages/Radioactivity";
import Literature from "./components/Literatue";
import Observations from "./components/observations/Observations";
import SharonShfela from "./components/observations/sub-pages/SharonShfela";
import BinyaminaMeddow from "./components/observations/sub-pages/BinyaminaMeddow";
import MushroomsInTheCarmel from "./components/observations/sub-pages/MushroomsInTheCarmel";
import MushroomsInWestGalil from "./components/observations/sub-pages/MushroomsInWestGalil";
import YehudaAndModiin from "./components/observations/sub-pages/YehudaAndModiin";
import MenasheMountains from "./components/observations/sub-pages/MenasheMountains";
import Shomron from "./components/observations/sub-pages/Shomron";
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
import PinitVekishurit from "./components/typesAndSpecies/sub-pages/PinitVekishurit";
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
import ScientificCollection from "./components/information/InformationSubPage";
import InformationSubPage from "./components/information/InformationSubPage";
import TlvUniversityCollection from "./components/information/informationSubPages/TlvUniversityCollection";
import MicologistsInIsrael from "./components/information/informationSubPages/MicologistsInIsrael";
import MediumOfGrowth from "./components/information/informationSubPages/MediumOfGrowth";
import MushroomsInStories from "./components/information/informationSubPages/MushroomsInStories";
import ScientificNames from "./components/information/informationSubPages/ScientificNames";
import ToxicMushrooms from "./components/information/informationSubPages/ToxicMushrooms";
import Kochvanit from "./components/typesAndSpecies/sub-pages/Kochvanit";
import YerukatDapim from "./components/typesAndSpecies/sub-pages/YerukatDapim";
import Kishurit from "./components/typesAndSpecies/sub-pages/Kishurit";
import Achlamit from "./components/typesAndSpecies/sub-pages/Achlamit";
import Mitranit from "./components/typesAndSpecies/sub-pages/Mitranit";
import Natufa from "./components/typesAndSpecies/sub-pages/Natufa";

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
        <a onClick={handleGoToTop} ref={backToTop} className="back-to-top">
          <MultiLingualContent contentID="backToTop" />
        </a>
        <Switch>
          <Route exact path="/">
            <Navbar open={open} setOpen={setOpen} />
            <BurgerMenu open={open} setOpen={setOpen} />
            <Header />
            <About />
            <TypesAndSpecies />
            <Information />
            <Observations />
            <Folklore />
            <Literature />
            {/* <Gallery /> */}
            {/* <ToursAndConferences /> */}
          </Route>
          <Route exact path="/information/where-mushrooms-grow">
            <WhereMushroomsGrow />
          </Route>
          <Route exact path="/information/taste-and-smell-in-mushrooms">
            <TasteAndSmellInMushrooms />
          </Route>
          <Route exact path="/information/structure-and-terms">
            <StructureAndTerms />
          </Route>
          <Route exact path="/information/what-is-a-mushroom">
            <WhatIsMushroom />
          </Route>
          <Route exact path="/information/plant-mushroom-bond">
            <PlantMushroomBond />
          </Route>
          <Route exact path="/information/hebrew-names">
            <HebrewNames />
          </Route>
          <Route exact path="/information/in-memory-of-prof-binyamini">
            <InMemorialOfProf />
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
          <Route exact path="/information/mushrooms-after-fire">
            <MushroomsAfterFire />
          </Route>
          <Route exact path="/information/similar-but-different">
            <SimilarButDifferent />
          </Route>
          <Route exact path="/information/photographing-mushrooms">
            <PhotographingMushrooms />
          </Route>
          <Route exact path="/information/mushrooms-counting">
            <MushroomsCounting />
          </Route>
          <Route exact path="/information/eating-mushrooms">
            <EatingMushrooms />
          </Route>
          <Route exact path="/information/succession-in-mushrooms">
            <SuccessionInMushrooms />
          </Route>
          <Route exact path="/information/food-and-medicine">
            <FoodAndMedicine />
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
            path="/information/similar-but-different-identification-marks"
          >
            <SimilarButDifferent />
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
            path="/information/nutritional-and-medicinal-value-for-humans/edible-species-in-israel"
          >
            <NutritionalValueInAMushroom />
          </Route>
          <Route
            exact
            path="/information/value-of-mushrooms-in-the-natural-world"
          >
            <InformationSubPage subtitleName="mushroomsValue" />
          </Route>
          <Route exact path="/information/folklore-art-and-superstitions">
            <InformationSubPage subtitleName="folkloreArtAndSuperstitions" />
          </Route>
          <Route
            exact
            path="/information/folklore-art-and-superstitions/stories-and-beliefes"
          >
            <MushroomsInStories />
          </Route>
          <Route exact path="/information/what-is-mushroom">
            <InformationSubPage subtitleName="whatIsMushroom" />
          </Route>
          <Route
            exact
            path="/information/toxic-species-and-guidelines-for-treatment"
          >
            <ToxicMushrooms />
          </Route>
          <Route exact path="/information/various-phenomena">
            <InformationSubPage subtitleName="variousPhenomena" />
          </Route>
          <Route exact path="/information/selected-and-rare-observations">
            <test />
          </Route>
          <Route
            exact
            path="/information/scientific-collection-and-micologists-in-israel/sceintific-collection-value-tlv-university"
          >
            <TlvUniversityCollection />
          </Route>
          <Route
            exact
            path="/information/scientific-collection-and-micologists-in-israel/micologists-in-israel"
          >
            <MicologistsInIsrael />
          </Route>
          <Route exact path="/observations/sharon-shfela">
            <SharonShfela />
          </Route>
          <Route exact path="/observations/binyamina-meddow">
            <BinyaminaMeddow />
          </Route>
          <Route exact path="/observations/mushrooms-in-odem-forest">
            <MushroomsInOdemForest />
          </Route>
          <Route exact path="/observations/mushrooms-in-the-gilboa">
            <MushroomsInTheGilboa />
          </Route>
          <Route exact path="/observations/mushrooms-in-the-carmel">
            <MushroomsInTheCarmel />
          </Route>
          <Route exact path="/observations/mushrooms-in-west-galil">
            <MushroomsInWestGalil />
          </Route>
          <Route exact path="/observations/yehuda-and-modiin">
            <YehudaAndModiin />
          </Route>
          <Route exact path="/observations/menashe-mountains">
            <MenasheMountains />
          </Route>
          <Route exact path="/observations/shomron">
            <Shomron />
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
            path="/types-and-species/type-identification/type/amanitas"
          >
            <Amanitas />
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
            path="/types-and-species/type-identification/type/levadit"
          >
            <Levadit />
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
            path="/types-and-species/type-identification/type/cyathus"
          >
            <Metzila />
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
