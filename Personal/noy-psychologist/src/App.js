import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Location from "./components/Location";
import Footer from "./components/Footer";
import BurgerMenu from "./components/BurgerMenu";
import "./style/app.css";
import ProfessionalExperiance from "./components/ProfessionalExperiance";
import AcademicEducation from "./components/AcademicEducation";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="App"
      style={{
        direction: "rtl",
        fontFamily: "MPLUSRounded1c",
      }}
    >
      <>
        <Navbar open={open} setOpen={setOpen} />
        <Header />
        <About />
        <ProfessionalExperiance />
        <AcademicEducation />
        <Contact />
        <Location />
        <Footer />
        <BurgerMenu open={open} setOpen={setOpen} />
      </>
    </div>
  );
}

export default App;
