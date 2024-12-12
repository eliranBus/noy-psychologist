import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import diskanit1 from "../../../assets/images/diskanit1.jpeg";
import diskanit2 from "../../../assets/images/diskanit2.jpeg";
import BackButton from "../../backButton";

const Diskanit = () => {
  return (
    <div className="inner-section" id="diskanit">
      <Helmet>
        <title>פטרידע - הפטריה דיסקנית-קינמונית</title>
        <meta
          name="description"
          content="הפטריה דיקנית קינמונית - Discina perlata: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="diskanit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="diskanitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="diskanitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="diskanitText3" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={diskanit1} alt="דיסקנית" />
              <p>
                <MultiLingualContent contentID="diskanitImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={diskanit2} alt="דיסקנית" />
              <p>
                <MultiLingualContent contentID="diskanitImg2" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Diskanit;
