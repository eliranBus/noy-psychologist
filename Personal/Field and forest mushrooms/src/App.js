import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { LanguageContext } from "./context/LanguageContext";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Folklore from "./components/folklore/Folklore";
import Information from "./components/information/Information";
import Footer from "./components/Footer";
import BurgerMenu from "./components/BurgerMenu";
import { getStorageLanguage } from "./assets/utilities";
import WhereMushroomsGrow from "./components/information/sub-pages/WhereMushroomsGrow";
import "./style/app.css";
import TasteAndSmellInMushrooms from "./components/information/sub-pages/TasteAndSmell";
import StructureAndTerms from "./components/information/sub-pages/StructureAndTerms";
import WhatIsMushroom from "./components/information/sub-pages/WhatIsMushroom";
import TripToSwitzerland from "./components/toursAndConferences.js/sub-pages/TripToSwitzerland";
import PlantMushroomBond from "./components/information/sub-pages/PlantMushroomBond";
import HebrewNames from "./components/information/sub-pages/HebrewName";
import InMemorialOfProf from "./components/information/sub-pages/InMemoryOfProf";
import WhyIsItCalledAMushroom from "./components/information/sub-pages/WhyIsItCalledAMushroom";
import NutritionalValueInAMushroom from "./components/information/sub-pages/NutritionalValueInAMushroom";
import ItalyConference from "./components/toursAndConferences.js/sub-pages/ItalyConference";
import TypesAndSpecies from "./components/typesAndSpecies/TypesAndSpecies";
import MushroomsAfterFire from "./components/information/sub-pages/MushroomsAfterFire";
import ToursAndConferences from "./components/toursAndConferences.js/ToursAndConferences";
import MushroomsInOdemForest from "./components/observations/sub-pages/MushroomsInOdemForest";
import StudyTourToCyprus from "./components/toursAndConferences.js/sub-pages/StudyTourToCyprus";
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
import MushroomsWorkshopInMountMeron from "./components/toursAndConferences.js/sub-pages/MushroomsWorkshopInMountMeron";
import MushroomsInTheCarmel from "./components/observations/sub-pages/MushroomsInTheCarmel";
import MushroomsInWestGalil from "./components/observations/sub-pages/MushroomsInWestGalil";
import YehudaAndModiin from "./components/observations/sub-pages/YehudaAndModiin";
import MenasheMountains from "./components/observations/sub-pages/MenasheMountains";
import Shomron from "./components/observations/sub-pages/Shomron";
import AznonitYehuda from "./components/typesAndSpecies/sub-pages/AznonitYehuda";
import Amanitas from "./components/typesAndSpecies/sub-pages/Amanitas";
import Orania from "./components/typesAndSpecies/sub-pages/Orania";
import Gvionit from "./components/typesAndSpecies/sub-pages/Gvionit";
import GidmitVelehavit from "./components/typesAndSpecies/sub-pages/GidmitVelehavit";
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

const storageLanguage = getStorageLanguage();

function App() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState(
    storageLanguage ? storageLanguage : "Hebrew"
  );

  function hebrewLanguage() {
    setLanguage("Hebrew");
  }

  function englishLanguage() {
    setLanguage("English");
  }

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
            <Gallery />
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
          <Route exact path="/information/why-is-it-called-a-mushroom">
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
          <Route exact path="/information/taxonomy">
            <Taxonomy />
          </Route>
          <Route exact path="/information/radioactivity">
            <Radioactivity />
          </Route>
          {/* <Route exact path="/tours-and-conferences/italy-conference">
            <ItalyConference />
          </Route>
          <Route exact path="/tours-and-conferences/trip-to-switzerland">
            <TripToSwitzerland />
          </Route>
          <Route exact path="/tours-and-conferences/study-tour-to-cyprus">
            <StudyTourToCyprus />
          </Route>
          <Route
            exact
            path="/tours-and-conferences/mushrooms-workshop-in-mount-meron"
          >
            <MushroomsWorkshopInMountMeron />
          </Route> */}
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
          <Route exact path="/types-and-species/oznit-hakelach">
            <MushroomsInTheGilboa />
          </Route>
          <Route exact path="/types-and-species/aznonit-yehuda">
            <AznonitYehuda />
          </Route>
          <Route exact path="/types-and-species/amanitas">
            <Amanitas />
          </Route>
          <Route exact path="/types-and-species/orania">
            <Orania />
          </Route>
          <Route exact path="/types-and-species/gvionit">
            <Gvionit />
          </Route>
          <Route exact path="/types-and-species/gdamin-velehabit">
            <GidmitVelehavit />
          </Route>
          <Route exact path="/types-and-species/gamtzutz-haruti">
            <Gamtzutz />
          </Route>
          <Route exact path="/types-and-species/large-white-mushrooms">
            <LargeWhiteMushrooms />
          </Route>
          <Route exact path="/types-and-species/yafanit-khula">
            <Yafanit />
          </Route>
          <Route exact path="/types-and-species/kumtit">
            <Kumtit />
          </Route>
          <Route exact path="/types-and-species/kmehit">
            <Kmehit />
          </Route>
          <Route exact path="/types-and-species/levadit">
            <Levadit />
          </Route>
          <Route exact path="/types-and-species/lahit">
            <Lahit />
          </Route>
          <Route exact path="/types-and-species/lohevet">
            <Lohevet />
          </Route>
          <Route exact path="/types-and-species/niranit">
            <Niranit />
          </Route>
          <Route exact path="/types-and-species/nakvuvanit">
            <Nakvuvanit />
          </Route>
          <Route exact path="/types-and-species/sadanit">
            <Sadanit />
          </Route>
          <Route exact path="/types-and-species/dafdefanit">
            <Dafdefanit />
          </Route>
          <Route exact path="/types-and-species/atzitzit-limonit-lavkanit">
            <Limonit />
          </Route>
          <Route exact path="/types-and-species/patara-shorshit">
            <Patara />
          </Route>
          <Route exact path="/types-and-species/pitririot">
            <Patririot />
          </Route>
          <Route exact path="/types-and-species/pinit-merushetet">
            <Pinit />
          </Route>
          <Route exact path="/types-and-species/pinit-vekishurit">
            <PinitVekishurit />
          </Route>
          <Route exact path="/types-and-species/pkua-hadura">
            <Pkua />
          </Route>
          <Route exact path="/types-and-species/cordyceps">
            <Cordyceps />
          </Route>
          <Route exact path="/types-and-species/tznuma-vetznumit">
            <Tznuma />
          </Route>
          <Route exact path="/types-and-species/shavririt">
            <Shavririt />
          </Route>
          <Route exact path="/types-and-species/behukit">
            <Behukit />
          </Route>
          <Route exact path="/types-and-species/metzila">
            <Metzila />
          </Route>
        </Switch>
        <Footer />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
