import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import achlamit1 from "../../../assets/images/achlamit1.jpg";
import achlamit2 from "../../../assets/images/achlamit2.jpg";
import BackButton from "../../backButton";

const Achlamit = () => {
  return (
    <div className="inner-section" id="achlamit">
      <Helmet>
        <title>פטרידע - הפטריה אחלמית</title>
        <meta
          name="description"
          content="הפטריה אחלמית - Lepista: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="achlamit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="achlamitText0" />
          </p>
          <p>
            <MultiLingualContent contentID="achlamitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="achlamitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="achlamitText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="achlamitText4Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="achlamitText5" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="achlamitText6Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="achlamitText7" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="achlamitText8Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="achlamitText9" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={achlamit1} alt="אחלמית" />
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={achlamit2} alt="אחלמית" />
            <p>
              <MultiLingualContent contentID="achlamitImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Achlamit;
