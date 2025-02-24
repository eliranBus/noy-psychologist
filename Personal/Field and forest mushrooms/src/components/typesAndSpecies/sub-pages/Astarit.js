import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import astarit1 from "../../../assets/images/astarit1.jpeg";
import astarit2 from "../../../assets/images/astarit2.jpeg";
import BackButton from "../../backButton";

const Astarit = () => {
  return (
    <div className="inner-section" id="astarit">
      <Helmet>
        <title>פטרידע - הפטריה אסתרית</title>
        <meta
          name="description"
          content="הפטריה אסתרית - Asteraeus: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="astarit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="astaritText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="astaritText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="astaritText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="astaritText4Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="astaritText5" />
          </p>
          <p>
            <MultiLingualContent contentID="astaritText6" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={astarit1} alt="אסתרית" />
            <p>
              <MultiLingualContent contentID="astaritImg1" />
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={astarit2} alt="אסתרית" />
            <p>
              <MultiLingualContent contentID="astaritImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Astarit;
