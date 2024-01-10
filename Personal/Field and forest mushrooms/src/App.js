import React, { useState } from "react";
import { LanguageContext } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Folklore from "./components/Folklore";
import Contact from "./components/Contact";
import Location from "./components/Location";
import Footer from "./components/Footer";
import BurgerMenu from "./components/BurgerMenu";
import { getStorageLanguage } from "./utilities";
import "./style/app.css";

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
        <Navbar open={open} setOpen={setOpen} />
        <Header />
        <About />
        <Gallery />
        <Folklore />
        <Contact />
        <Location />
        <Footer />
        <BurgerMenu open={open} setOpen={setOpen} />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
