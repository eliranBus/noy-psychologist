import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import etzionit1 from "../../../assets/images/etzionit1.jpeg";
import etzionit2 from "../../../assets/images/etzionit2.jpeg";
import BackButton from "../../backButton";

const Etzionit = () => {
  return (
    <div className="inner-section" id="etzionit">
      <Helmet>
        <title>פטרידע - הפטריה עציונית</title>
        <meta
          name="description"
          content="הפטריה עציונית - Xylaria: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="etzionit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="etzionitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="etzionitText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="etzionitText3Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="etzionitText4" />
          </p>
          <p>
            <MultiLingualContent contentID="etzionitText5" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={etzionit1} alt="עציונית" />
              <p>
                <MultiLingualContent contentID="etzionitImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={etzionit2} alt="עציונית" />
              <p>
                <MultiLingualContent contentID="etzionitImg2" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Etzionit;
