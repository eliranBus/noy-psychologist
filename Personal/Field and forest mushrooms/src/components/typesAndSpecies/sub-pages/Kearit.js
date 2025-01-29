import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import kearit1 from "../../../assets/images/kearit1.jpeg";
import BackButton from "../../backButton";

const Kearit = () => {
  return (
    <div className="inner-section" id="kearit">
      <Helmet>
        <title>פטרידע - הפטריה קערית</title>
        <meta
          name="description"
          content="הפטריה קערית - Sarcosphaera: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="kearit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="kearitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kearitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kearitText3" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="kearitText4Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="kearitText5" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={kearit1} alt="קערית" />
            <p>
              <MultiLingualContent contentID="kearitImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Kearit;
