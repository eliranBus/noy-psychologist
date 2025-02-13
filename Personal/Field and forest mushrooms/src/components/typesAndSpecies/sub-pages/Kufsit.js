import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import kufsit1 from "../../../assets/images/kufsit1.jpeg";
import BackButton from "../../backButton";

const Kufsit = () => {
  return (
    <div className="inner-section" id="kufsit">
      <Helmet>
        <title>פטרידע - הפטריה קופסית</title>
        <meta
          name="description"
          content="הפטריה קופסית - Geopyxis: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="kufsit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="kufsitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kufsitText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="kufsitText3Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="kufsitText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kufsitText5" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={kufsit1} alt="קופסית" />
            <p>
              <MultiLingualContent contentID="kufsitImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Kufsit;
