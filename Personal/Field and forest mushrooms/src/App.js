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
        </Switch>
        <Footer />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
