import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import shchumit1 from "../../../assets/images/shchumit1.jpeg";
import BackButton from "../../backButton";

const Shchumit = () => {
  return (
    <div className="inner-section" id="shchumit">
      <Helmet>
        <title>פטרידע - הפטריה שחומית</title>
        <meta
          name="description"
          content="הפטריה שחומית - Melanogaster: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="shchumit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="shchumitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shchumitText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="shchumitText3Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shchumitText4" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={shchumit1}
              alt={<MultiLingualContent contentID="shchumitImg1" />}
            />
            <p>
              <MultiLingualContent contentID="shchumitImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Shchumit;
