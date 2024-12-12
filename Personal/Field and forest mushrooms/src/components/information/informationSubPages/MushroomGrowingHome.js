import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import growMushrooms1 from "../../../assets/images/growmushrooms1.jpg";
import growMushrooms2 from "../../../assets/images/growmushrooms2.jpg";
import growMushrooms3 from "../../../assets/images/growmushrooms3.jpg";

const MushroomGrowingHome = () => {
  return (
    <div className="inner-section" id="howToGrowMushrooms">
      <Helmet>
        <title>פטרידע - כיצד נגדל פטריות מאכל בבית</title>
        <meta name="description" />
      </Helmet>
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="howToGrowMushrooms" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="howToGrowMushroomsText1" />
          </p>
          <p>
            <MultiLingualContent contentID="howToGrowMushroomsText2" />
          </p>
          <p>
            <MultiLingualContent contentID="howToGrowMushroomsText3" />
          </p>
          <p>
            <MultiLingualContent contentID="howToGrowMushroomsText4" />
          </p>
          <p>
            <MultiLingualContent contentID="howToGrowMushroomsText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="howToGrowMushroomsText6" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={growMushrooms1} alt="גידול פטריות" />
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={growMushrooms2} alt="גידול פטריות" />
              <p>
                <MultiLingualContent contentID="howToGrowMushroomsImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={growMushrooms3} alt="גידול פטריות" />
              <p>
                <MultiLingualContent contentID="howToGrowMushroomsImg2" />
              </p>
            </div>
          </div>
          <p>
            <MultiLingualContent contentID="howToGrowMushroomsText8" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="howToGrowMushroomsText7" />
          </p>
          <br />
          <a
            href="https://www.youtube.com/watch?v=l6yavIWHmeM"
            target="_blank"
            rel="noreferrer"
          >
            <MultiLingualContent contentID="howToGrowMushroomsText9Link" />
          </a>
          <a
            href="https://www.facebook.com/growmushroomathome"
            target="_blank"
            rel="noreferrer"
          >
            <MultiLingualContent contentID="howToGrowMushroomsText10Link" />
          </a>
        </div>
      </>
    </div>
  );
};

export default MushroomGrowingHome;
