import React from "react";
import MultiLingualContent from "../languages/MultiLingualContent";
import background from "../assets/decoratives/1.png";
import mushroomSvg from "../assets/images/header/mushroomSvg.png";
import dot from "../assets/images/dot.svg";
import twoDots from "../assets/images/two-dots.svg";
import logo from "../assets/images/header/logo.png";

const Header = () => {
  return (
    <header id="header">
      <img src={background} className="bg-img" alt="mushroom" />
      <img src={logo} alt="logo" className="logoPng" />
      <h1 className="header-logo">
        <img src={mushroomSvg} alt="mushroom svg" className="svg" />
        <MultiLingualContent contentID="logo" />
        <img src={dot} alt="" className="header-dot" />
        <img src={twoDots} alt="" className="header-two-dots" />
        <img src={dot} alt="" className="header-second-dot" />
      </h1>
      <h1 className="header-welcome">
        <MultiLingualContent contentID="header1" />
      </h1>
    </header>
  );
};

export default Header;
