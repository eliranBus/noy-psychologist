import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import afarkadanit1 from "../../../assets/images/afarkadanit1.jpg";
import afarkadanit2 from "../../../assets/images/afarkadanit2.jpeg";
import BackButton from "../../backButton";

const Afarkadanit = () => {
  return (
    <div className="inner-section" id="afarkadanit">
      <Helmet>
        <title>פטרידע - הפטריה אפרקדנית</title>
        <meta
          name="description"
          content="הפטריה אפרקדנית - Resupinus: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="afarkadanit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="afarkadanitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="afarkadanitText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="afarkadanitText3Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="afarkadanitText4" />
          </p>
          <p>
            <MultiLingualContent contentID="afarkadanitText5" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={afarkadanit1}
              alt={<MultiLingualContent contentID="afarkadanitImg1" />}
            />
            <p>
              <MultiLingualContent contentID="afarkadanitImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={afarkadanit2}
              alt={<MultiLingualContent contentID="afarkadanitImg2" />}
            />
            <p>
              <MultiLingualContent contentID="afarkadanitImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Afarkadanit;
