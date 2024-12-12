import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import avukit1 from "../../../assets/images/avukit1.jpg";
import avukit2 from "../../../assets/images/avukit2.jpg";
import BackButton from "../../backButton";

const Avukit = () => {
  return (
    <div className="inner-section" id="avukit">
      <Helmet>
        <title>פטרידע - הפטריה אבוקית</title>
        <meta
          name="description"
          content="הפטריה אבוקית - Fomes: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="avukit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="avukitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="avukitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="avukitText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="avukitText4Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="avukitText5" />
          </p>
          <p>
            <MultiLingualContent contentID="avukitText6" />
          </p>
          <p>
            <MultiLingualContent contentID="avukitText7" />
          </p>
          <p>
            <MultiLingualContent contentID="avukitText8" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={avukit1} alt="אבוקית" />
            <p>
              <MultiLingualContent contentID="avukitImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={avukit2} alt="אבוקית" />
            <p>
              <MultiLingualContent contentID="avukitImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Avukit;
