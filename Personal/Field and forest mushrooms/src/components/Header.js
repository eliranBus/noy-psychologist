import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../languages/MultiLingualContent";
import background from "../assets/decoratives/1.png";
import mushroomSvg from "../assets/images/header/mushroomSvg.png";
import dot from "../assets/images/dot.svg";
import twoDots from "../assets/images/two-dots.svg";
import logo from "../assets/images/header/logo.png";

const Header = () => {
  return (
    <header id="header">
      <Helmet>
        <title>פטרידע - פורטל ללימוד פטריות ישראל</title>
        <meta name="description" content="מסך כניסה לאתר פטרידע" />
      </Helmet>
      <LazyLoadImage src={background} className="bg-img" alt="mushroom" />
      <LazyLoadImage src={logo} alt="logo" className="logoPng" />
      <h1 className="header-logo">
        <LazyLoadImage src={mushroomSvg} alt="mushroom svg" className="svg" />
        <MultiLingualContent contentID="logo" />
        <LazyLoadImage src={dot} alt="" className="header-dot" />
        <LazyLoadImage src={twoDots} alt="" className="header-two-dots" />
        <LazyLoadImage src={dot} alt="" className="header-second-dot" />
      </h1>
      <h1 className="header-welcome">
        <MultiLingualContent contentID="header1" />
      </h1>
    </header>
  );
};

export default Header;
