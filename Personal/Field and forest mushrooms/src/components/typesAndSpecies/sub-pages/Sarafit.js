import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import sarafit1 from "../../../assets/images/sarafit1.jpg";
import sarafit2 from "../../../assets/images/sarafit2.jpg";
import BackButton from "../../backButton";

const Sarafit = () => {
  return (
    <div className="inner-section" id="sarafit">
      <Helmet>
        <title>פטרידע - הפטריה שרפית</title>
        <meta
          name="description"
          content="הפטריה שרפית - Laccaria: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="sarafit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="sarafitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="sarafitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="sarafitText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="sarafitText4Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="sarafitText5" />
          </p>
          <p>
            <MultiLingualContent contentID="sarafitText6" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={sarafit1} alt="שרפית" />
              <p>
                <MultiLingualContent contentID="sarafitImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={sarafit2} alt="שרפית" />
              <p>
                <MultiLingualContent contentID="sarafitImg2" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Sarafit;
