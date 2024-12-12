import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import gamtzutz from "../../../assets/images/gamtzutz.jpg";
import BackButton from "../../backButton";

const Gamtzutz = () => {
  return (
    <div className="inner-section" id="gamtzutz">
      <Helmet>
        <title>פטרידע - הפטריה גמצוץ</title>
        <meta name="description" content="הפטריה גמצוץ :תאור, זיהוי ותמונות" />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="gamtzutz" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="gamtzuzText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="gamtzuzText2" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={gamtzutz} alt="גמצוץ" />
          </div>
        </div>
      </>
    </div>
  );
};

export default Gamtzutz;
