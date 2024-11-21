import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import resisit1 from "../../../assets/images/resisit1.jpg";
import resisit2 from "../../../assets/images/resisit2.jpg";
import BackButton from "../../backButton";

const Resisit = () => {
  return (
    <div className="inner-section" id="resisit">
      <Helmet>
        <title>פטרידע - הפטריה רסיסית</title>
        <meta
          name="description"
          content="הפטריה רסיסית - Dacrymyces: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="resisit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="resisitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="resisitText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="resisitText3Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="resisitText4" />
          </p>
          <p>
            <MultiLingualContent contentID="resisitText5" />
          </p>
          <p>
            <MultiLingualContent contentID="resisitText6" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={resisit1}
              alt={<MultiLingualContent contentID="resisitImg1" />}
            />
            <p>
              <MultiLingualContent contentID="resisitImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={resisit2}
              alt={<MultiLingualContent contentID="resisitImg2" />}
            />
            <p>
              <MultiLingualContent contentID="resisitImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Resisit;
