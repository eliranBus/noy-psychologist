import React, { Suspense, useEffect, useState, useRef } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LanguageContext } from "./context/LanguageContext";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Folklore from "./components/folklore/Folklore";
import Information from "./components/information/Information";
import Footer from "./components/Footer";
import BurgerMenu from "./components/BurgerMenu";
import { getStorageLanguage, scrollToTop } from "./assets/utilities";
import TypesAndSpecies from "./components/typesAndSpecies/TypesAndSpecies";
import "./style/app.css";

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
      backToTop?.current?.classList.add("show");
    } else {
      backToTop?.current?.classList.remove("show");
    }
  };

  const handleGoToTop = () => scrollToTop();

  const Orania = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Orania")
  );
  const GlowingInMushrooms = React.lazy(() =>
    import("./components/information/sub-pages/GlowingInMushrooms")
  );
  const Harifit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Harifit")
  );
  const SporeSpreading = React.lazy(() =>
    import("./components/information/sub-pages/SporeSpreading")
  );
  const TheWitchCircle = React.lazy(() =>
    import("./components/information/sub-pages/TheWitchCircle")
  );
  const Absorb = React.lazy(() =>
    import("./components/information/informationSubPages/Absorb")
  );
  const Oznit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Oznit")
  );
  const Kishutit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Kishutit")
  );
  const ImportanceAndRole = React.lazy(() =>
    import("./components/information/sub-pages/ImportanceAndRole")
  );
  const Gviit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Gviit")
  );
  const Mardait = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Mardait")
  );
  const Shchumit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Shchumit")
  );
  const Pkait = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Pkait")
  );
  const Taburit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Taburit")
  );
  const Harutit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Harutit")
  );
  const Matriyanit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Matriyanit")
  );
  const Diskanit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Diskanit")
  );
  const Shinonit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Shinonit")
  );
  const Shinanit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Shinanit")
  );
  const Arrhenia = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Arrhenia")
  );
  const Etzionit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Etzionit")
  );
  const Gmishanit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Gmishanit")
  );
  const Yashurit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Yashurit")
  );
  const Mashpachanit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Mashpachanit")
  );
  const CapMushroomParts = React.lazy(() =>
    import("./components/information/sub-pages/CapMushroomParts")
  );
  const Kamronit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Kamronit")
  );
  const Shasuit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Shasuit")
  );
  const Tzitzanit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Tzitzanit")
  );
  const Lavkanit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Lavkanit")
  );
  const Marzevit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Marzevit")
  );
  const Kshichit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Kshichit")
  );
  const Kearit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Kearit")
  );
  const Kaarurit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Kaarurit")
  );
  const Menifatit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Menifatit")
  );
  const Kufsit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Kufsit")
  );
  const Shkuit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Shkuit")
  );
  const Altit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Altit")
  );
  const Siflonit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Siflonit")
  );
  const Astarit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Astarit")
  );
  const Gushanit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Gushanit")
  );
  const Tznuma = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Tznuma")
  );
  const Shavririt = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Shavririt")
  );
  const Behukit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Behukit")
  );
  const Metzila = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Metzila")
  );
  const Dafdefanit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Dafdefanit")
  );
  const FeaturesScreen = React.lazy(() =>
    import("./components/features/index")
  );
  const MissingDataPage = React.lazy(() =>
    import("./components/missingDataPage/missingDataPage")
  );
  const Lehavit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Lehavit")
  );
  const Dardasit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Dardasit")
  );
  const Kaduriot = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Kaduriot")
  );
  const Kaduriot2 = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Kaduriot2")
  );
  const Karsanit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Karsanit")
  );
  const Hysterit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Hysterit")
  );
  const Dioit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Dioit")
  );
  const Shalhofit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Shalhofit")
  );
  const MultiLingualContent = React.lazy(() =>
    import("./languages/MultiLingualContent")
  );
  const Krishit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Krishit")
  );
  const Klonsit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Klonsit")
  );
  const Tzmadit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Tzmadit")
  );
  const InformationSubPage = React.lazy(() =>
    import("./components/information/InformationSubPage")
  );
  const TlvUniversityCollection = React.lazy(() =>
    import(
      "./components/information/informationSubPages/TlvUniversityCollection"
    )
  );
  const MicologistsInIsrael = React.lazy(() =>
    import("./components/information/informationSubPages/MicologistsInIsrael")
  );
  const MediumOfGrowth = React.lazy(() =>
    import("./components/information/informationSubPages/MediumOfGrowth")
  );
  const ScientificNames = React.lazy(() =>
    import("./components/information/informationSubPages/ScientificNames")
  );
  const ToxicMushrooms = React.lazy(() =>
    import("./components/information/informationSubPages/ToxicMushrooms")
  );
  const Kochvanit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Kochvanit")
  );
  const YerukatDapim = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/YerukatDapim")
  );
  const Kishurit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Kishurit")
  );
  const Achlamit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Achlamit")
  );
  const Mitranit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Mitranit")
  );
  const Natufa = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Natufa")
  );
  const Madafit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Madafit")
  );
  const Tzmudit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Tzmudit")
  );
  const Zifanit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Zifanit")
  );
  const Glalit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Glalit")
  );
  const Kashkeshanit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Kashkeshanit")
  );
  const Kashtanit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Kashtanit")
  );
  const Avnatit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Avnatit")
  );
  const EdibleSpeciesInIsreal = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/EdibleSpeciesInIsreal")
  );
  const Atzitzit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Atzitzit")
  );
  const Dfunit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Dfunit")
  );
  const Sarafit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Sarafit")
  );
  const Nakuvit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Nakuvit")
  );
  const Haririt = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Haririt")
  );
  const CollectingRules = React.lazy(() =>
    import("./components/information/informationSubPages/CollectingRules")
  );
  const Resisit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Resisit")
  );
  const Nartikanit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Nartikanit")
  );
  const Leshonit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Leshonit")
  );
  const Gachonit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Gachonit")
  );
  const CollectionInMicology = React.lazy(() =>
    import("./components/information/informationSubPages/CollectionInMicology")
  );
  const Dfufit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Dfufit")
  );
  const MushroomGrowingHome = React.lazy(() =>
    import("./components/information/informationSubPages/MushroomGrowingHome")
  );
  const MushroomGrowingCommersial = React.lazy(() =>
    import(
      "./components/information/informationSubPages/MushroomGrowingCommersial"
    )
  );
  const Pchusit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Pchusit")
  );
  const Shcharcharit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Shcharcharit")
  );
  const Hinoma = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Hinoma")
  );
  const Avukit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Avukit")
  );
  const Afarkadanit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Afarkadanit")
  );
  const Aforit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Aforit")
  );
  const Adumit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Adumit")
  );
  const Gushit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Gushit")
  );
  const Ktifanit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Ktifanit")
  );
  const Ravpumit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Ravpumit")
  );
  const Pumit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Pumit")
  );
  const Terms = React.lazy(() =>
    import("./components/information/sub-pages/Terms")
  );
  const TeardropInMushrooms = React.lazy(() =>
    import("./components/information/informationSubPages/TeardropInMushrooms")
  );
  const Asimonit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Asimonit")
  );
  const Tznumit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Tznumit")
  );
  const Shalhevet = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Shalhevet")
  );
  const FungiAndMold = React.lazy(() =>
    import("./components/information/informationSubPages/FungiAndMold")
  );
  const SmellAndTasteOfMushrooms = React.lazy(() =>
    import("./components/information/sub-pages/SmellAndTasteOfMushrooms")
  );
  const MushroomsAfterFire = React.lazy(() =>
    import("./components/information/sub-pages/MushroomsAfterFire")
  );
  const MushroomsInTheGilboa = React.lazy(() =>
    import("./components/observations/sub-pages/MushroomsInTheGilboa")
  );
  const SimilarButDifferent = React.lazy(() =>
    import("./components/information/sub-pages/SimilarButDifferent")
  );
  const PhotographingMushrooms = React.lazy(() =>
    import("./components/information/sub-pages/PhotographingMushrooms")
  );
  const EatingMushrooms = React.lazy(() =>
    import("./components/information/sub-pages/EatingMushrooms")
  );
  const SuccessionInMushrooms = React.lazy(() =>
    import("./components/information/sub-pages/SuccessionInMushrooms")
  );
  const Taxonomy = React.lazy(() =>
    import("./components/information/sub-pages/Taxonomy")
  );
  const Radioactivity = React.lazy(() =>
    import("./components/information/sub-pages/Radioactivity")
  );
  const Literature = React.lazy(() => import("./components/Literatue"));
  const AznonitYehuda = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/AznonitYehuda")
  );
  const Amanitas = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Amanitas")
  );
  const Gvionit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Gvionit")
  );
  const Gidmit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Gidmit")
  );
  const Gamtzutz = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Gamtzutz")
  );
  const LargeWhiteMushrooms = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/LargeWhiteMushrooms")
  );
  const Yafanit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Yafanit")
  );
  const Kumtit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Kumtit")
  );
  const Kmehit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Kmehit")
  );
  const Levadit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Levadit")
  );
  const Lahit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Lahit")
  );
  const Lohevet = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Lohevet")
  );
  const Niranit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Niranit")
  );
  const Nakvuvanit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Nakvuvanit")
  );
  const Sadanit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Sadanit")
  );
  const Limonit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Limonit")
  );
  const Patara = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Patara")
  );
  const Patririot = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Patririot")
  );
  const Pinit = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Pinit")
  );
  const Pkua = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Pkua")
  );
  const Cordyceps = React.lazy(() =>
    import("./components/typesAndSpecies/sub-pages/Cordyceps")
  );
  const WhereMushroomsGrow = React.lazy(() =>
    import("./components/information/sub-pages/WhereMushroomsGrow")
  );
  const StructureAndTerms = React.lazy(() =>
    import("./components/information/sub-pages/StructureAndTerms")
  );
  const WhatIsMushroom = React.lazy(() =>
    import("./components/information/sub-pages/WhatIsMushroom")
  );
  const PlantMushroomBond = React.lazy(() =>
    import("./components/information/sub-pages/PlantMushroomBond")
  );
  const HebrewNames = React.lazy(() =>
    import("./components/information/sub-pages/HebrewName")
  );
  const WhyIsItCalledAMushroom = React.lazy(() =>
    import("./components/information/sub-pages/WhyIsItCalledAMushroom")
  );
  const NutritionalValueInAMushroom = React.lazy(() =>
    import("./components/information/sub-pages/NutritionalValueInAMushroom")
  );

  return (
    <Suspense fallback={<></>}>
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
          <button
            onClick={handleGoToTop}
            ref={backToTop}
            className="back-to-top"
          >
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
              path="/information/literature-books-and-links-to-articles"
            >
              <Redirect to="/" />
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
            <Route
              exact
              path="/information/various-phenomena/the-witch-circles"
            >
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
            <Route
              exact
              path="/information/mushroom-growing-buying-and-selling"
            >
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
            <Route
              exact
              path="/information/structure-and-parts-of-the-mushroom"
            >
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
            <Route
              exact
              path="/information/various-phenomena/succation-in-fungi"
            >
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
              path="/types-and-species/type-identification/type/chroogomphus"
            >
              <Kamronit />
            </Route>
            <Route
              exact
              path="/types-and-species/type-identification/type/gomphidius"
            >
              <Kamronit />
            </Route>
            <Route
              exact
              path="/types-and-species/type-identification/type/sarcosphaera"
            >
              <Kearit />
            </Route>
            <Route
              exact
              path="/types-and-species/type-identification/type/marcelleina"
            >
              <Kaarurit />
            </Route>
            <Route
              exact
              path="/types-and-species/type-identification/type/thelephora"
            >
              <Menifatit />
            </Route>
            <Route
              exact
              path="/types-and-species/type-identification/type/geopyxis"
            >
              <Kufsit />
            </Route>
            <Route
              exact
              path="/types-and-species/type-identification/type/geopora"
            >
              <Shkuit />
            </Route>
            <Route
              exact
              path="/types-and-species/type-identification/type/schizophyllum"
            >
              <Shasuit />
            </Route>
            <Route
              exact
              path="/information/structure-and-parts-of-the-mushroom/shapes-and-parts-of-cap-mushrooms"
            >
              <CapMushroomParts />
            </Route>
            <Route
              exact
              path="/types-and-species/type-identification/type/clitocybe"
            >
              <Mashpachanit />
            </Route>
            <Route
              exact
              path="/types-and-species/type-identification/type/lyophyllum"
            >
              <Dfunit />
            </Route>
            <Route
              exact
              path="/types-and-species/type-identification/type/sarcoscypha"
            >
              <Siflonit />
            </Route>
            <Route
              exact
              path="/types-and-species/type-identification/type/asteraeus"
            >
              <Astarit />
            </Route>
            <Route
              exact
              path="/types-and-species/type-identification/type/leccinum"
            >
              <Gushanit />
            </Route>
            <Route
              exact
              path="/types-and-species/type-identification/type/asteraeus"
            >
              <Astarit />
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
              path="/types-and-species/type-identification/type/tricholoma"
            >
              <Yashurit />
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
            <Route
              exact
              path="/types-and-species/type-identification/type/fomes"
            >
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
              path="/types-and-species/type-identification/type/lentinus"
            >
              <Gmishanit />
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
              path="/types-and-species/type-identification/type/hoenbuelia"
            >
              <Marzevit />
            </Route>
            <Route
              exact
              path="/types-and-species/type-identification/type/stereum"
            >
              <Kshichit />
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
              path="/types-and-species/type-identification/type/hebeloma"
            >
              <Tzitzanit />
            </Route>
            <Route
              exact
              path="/types-and-species/type-identification/type/leucoagaricus"
            >
              <Lavkanit />
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
            <Route
              exact
              path="/types-and-species/type-identification/type/colus"
            >
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
              path="/types-and-species/type-identification/type/chamaemyces"
            >
              <Matriyanit />
            </Route>
            <Route
              exact
              path="/types-and-species/type-identification/type/clavaria"
            >
              <Altit />
            </Route>
            <Route
              exact
              path="/types-and-species/type-identification/type/clavulina"
            >
              <Altit />
            </Route>
            <Route
              exact
              path="/types-and-species/type-identification/type/ramaria"
            >
              <Altit />
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
            <Route
              exact
              path="/types-and-species/type-identification/type/Arrhenia"
            >
              <Arrhenia />
            </Route>
            <Route
              exact
              path="/types-and-species/type-identification/type/xylaria"
            >
              <Etzionit />
            </Route>
            <Route path="*">
              <MissingDataPage />
            </Route>
          </Switch>
          <Footer />
        </LanguageContext.Provider>
      </div>
    </Suspense>
  );
}

export default App;
