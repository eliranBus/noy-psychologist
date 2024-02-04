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
import MushroomsInOdemForest from "./components/toursAndConferences.js/sub-pages/MushroomsInOdemForest";
import StudyTourToCyprus from "./components/toursAndConferences.js/sub-pages/StudyTourToCyprus";
import MushroomsInTheGilboa from "./components/toursAndConferences.js/sub-pages/MushroomsInTheGilboa";
import SimilarButDifferent from "./components/information/sub-pages/SimilarButDifferent";
import PhotographingMushrooms from "./components/information/sub-pages/PhotographingMushrooms";
import MushroomsCounting from "./components/information/sub-pages/MushroomsCounting";
import EatingMushrooms from "./components/information/sub-pages/EatingMushrooms";
import SuccessionInMushrooms from "./components/information/sub-pages/SuccessionInMushrooms";
import FoodAndMedicine from "./components/information/sub-pages/FoodAndMedicine";
import Taxonomy from "./components/information/sub-pages/Taxonomy";
import Radioactivity from "./components/information/sub-pages/Radioactivity";
import Literture from "./components/Litertue";
import Observations from "./components/observations/Observations";
import SharonShfela from "./components/observations/sub-pages/SharonShfela";

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
            <Gallery />
            <Folklore />
            <Information />
            <TypesAndSpecies />
            <ToursAndConferences />
            <Literture />
            <Observations />
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
          <Route exact path="/tours-and-conferences/italy-conference">
            <ItalyConference />
          </Route>
          <Route exact path="/tours-and-conferences/trip-to-switzerland">
            <TripToSwitzerland />
          </Route>
          <Route exact path="/tours-and-conferences/mushrooms-in-odem-forest">
            <MushroomsInOdemForest />
          </Route>
          <Route exact path="/tours-and-conferences/study-tour-to-cyprus">
            <StudyTourToCyprus />
          </Route>
          <Route exact path="/tours-and-conferences/mushrooms-in-the-gilboa">
            <MushroomsInTheGilboa />
          </Route>
          <Route exact path="/observations/sharon-shfela">
            <SharonShfela />
          </Route>
        </Switch>
        <Footer />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
