import React from "react";
import MultiLingualContent from "../languages/MultiLingualContent";
import headerBg from "../assets/images/main.jpg";
import mushroomSvg from "../assets/images/mushroomSvg.png";

const Header = () => {
  return (
    <header id="header">
      <img src={headerBg} className="bg-img" alt="mushroom" />
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
