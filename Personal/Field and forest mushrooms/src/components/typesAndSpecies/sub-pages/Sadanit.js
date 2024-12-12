import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import sadanit1 from "../../../assets/images/sadanit1.jpg";
import sadanit2 from "../../../assets/images/sadanit2.jpg";
import sadanit3 from "../../../assets/images/sadanit3.jpg";
import sadanit4 from "../../../assets/images/sadanit4.jpg";
import BackButton from "../../backButton";

const Sadanit = () => {
  return (
    <div className="inner-section" id="sadanit">
      <Helmet>
        <title>פטרידע - הפטריה סדנית</title>
        <meta
          name="description"
          content="הפטריה סדנית - Podaix: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="sadanit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="sadanitText1" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="sadanitText2Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="sadanitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="sadanitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="sadanitText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="sadanitText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="sadanitText6" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={sadanit1} alt="סדנית" />
            <p>
              <MultiLingualContent contentID="sadanitImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={sadanit2} alt="סדנית" />
            <p>
              <MultiLingualContent contentID="sadanitImg2" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={sadanit3} alt="סדנית" />
            <p>
              <MultiLingualContent contentID="sadanitImg3" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={sadanit4} alt="סדנית" />
            <p>
              <MultiLingualContent contentID="sadanitImg4" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Sadanit;
