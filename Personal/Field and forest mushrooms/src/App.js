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
import TripToSwitzerland from "./components/information/sub-pages/TripToSwitzerland";
import PlantMushroomBond from "./components/information/sub-pages/PlantMushroomBond";
import HebrewNames from "./components/information/sub-pages/HebrewName";
import InMemorialOfProf from "./components/information/sub-pages/InMemoryOfProf";
import WhyIsItCalledAMushroom from "./components/information/sub-pages/WhyIsItCalledAMushroom";

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
          <Route exact path="/information/trip-to-switzerland">
            <TripToSwitzerland />
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
        </Switch>
        <Footer />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
