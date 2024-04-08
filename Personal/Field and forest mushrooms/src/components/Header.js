import React from "react";
import MultiLingualContent from "../languages/MultiLingualContent";
import background from "../assets/images/header/background2.jpg";
import mushroomSvg from "../assets/images/header/mushroomSvg.png";
import logo from "../assets/images/header/logo.png";

const Header = () => {
  return (
    <header id="header">
      <img src={background} className="bg-img" alt="mushroom" />
      <img src={logo} alt="logo" className="logoPng" />
      <h1 className="header-welcome">
        <MultiLingualContent contentID="header1" />
      </h1>
      <h1 className="header-logo">
        <img src={mushroomSvg} alt="mushroom svg" className="svg" />
        <MultiLingualContent contentID="logo" />
      </h1>
    </header>
  );
};

export default Header;
