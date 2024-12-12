import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import orania1 from "../../../assets/images/orania1.jpeg";
import orania2 from "../../../assets/images/orania2.jpeg";
import orania3 from "../../../assets/images/orania3.jpg";
import BackButton from "../../backButton";

const Orania = () => {
  return (
    <div className="inner-section" id="orania">
      <Helmet>
        <title>פטרידע - הפטריה אורנייה</title>
        <meta
          name="description"
          content="הפטריה אורנייה - Suillus: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="orania" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="oraniaText0" />
          </p>
          <p>
            <MultiLingualContent contentID="oraniaText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="oraniaText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="oraniaText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="oraniaText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="oraniaText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="oraniaText6" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="oraniaText7Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="oraniaText7" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={orania1} alt="ארנייה" />
              <p>
                <MultiLingualContent contentID="oraniaImg1" />
              </p>
            </div>
          </div>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="oraniaText8Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="oraniaText8" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={orania2} alt="ארנייה" />
              <p>
                <MultiLingualContent contentID="oraniaImg2" />
              </p>
            </div>
          </div>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="oraniaText9Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="oraniaText9" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={orania3} alt="ארנייה" />
              <p>
                <MultiLingualContent contentID="oraniaImg3" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Orania;
