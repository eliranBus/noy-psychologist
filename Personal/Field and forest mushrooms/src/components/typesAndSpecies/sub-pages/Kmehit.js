import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import kmehit from "../../../assets/images/kmehit.jpg";
import BackButton from "../../backButton";

const Kmehit = () => {
  return (
    <div className="inner-section" id="kmehit">
      <Helmet>
        <title>פטרידע - הפטריה כמהית</title>
        <meta
          name="description"
          content="הפטריה כמהית - Tirmania nivea: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="kmehit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="kmehitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kmehitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kmehitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kmehitText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kmehitText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kmehitText6" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kmehitText7" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kmehitText8" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kmehitText9" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kmehitText10" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={kmehit} alt="קמחית" />
            <p>
              <MultiLingualContent contentID="kmehitImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Kmehit;
