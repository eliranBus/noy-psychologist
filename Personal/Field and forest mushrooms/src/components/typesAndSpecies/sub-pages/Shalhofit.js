import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import shalhofit1 from "../../../assets/images/shalhofit1.jpg";
import shalhofit2 from "../../../assets/images/shalhofit2.jpg";
import BackButton from "../../backButton";

const Shalhofit = () => {
  return (
    <div className="inner-section" id="shalhofit">
      <Helmet>
        <title>פטרידע - הפטריה שלחופית</title>
        <meta
          name="description"
          content="הפטריה שלחופית - Hydronocybe: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="shalhofit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="shalhofitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shalhofitText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="shalhofitText2Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shalhofitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shalhofitText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shalhofitText5" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={shalhofit1} alt="שברירית" />
            <p>
              <MultiLingualContent contentID="shalhofitImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={shalhofit2} alt="שברירית" />
            <p>
              <MultiLingualContent contentID="shalhofitImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Shalhofit;
