import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import shasuit1 from "../../../assets/images/shasuit1.jpeg";
import shasuit2 from "../../../assets/images/shasuit2.jpeg";

const Shasuit = () => {
  return (
    <div className="inner-section" id="shasuit">
      <Helmet>
        <title>פטרידע - הפטריה שסועית</title>
        <meta
          name="description"
          content="הפטריה שסועית - Schizophyllum: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="shasuit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="shasuitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shasuitText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="shasuitText3Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="shasuitText4" />
          </p>
          <p>
            <MultiLingualContent contentID="shasuitText5" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={shasuit1} alt="שסועית" />
            <p>
              <MultiLingualContent contentID="shasuitImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={shasuit2} alt="שסועית" />
            <p>
              <MultiLingualContent contentID="shasuitImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Shasuit;
