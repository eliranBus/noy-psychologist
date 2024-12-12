import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import krishit1 from "../../../assets/images/krishit1.jpg";
import krishit2 from "../../../assets/images/krishit2.jpg";
import krishit3 from "../../../assets/images/krishit3.jpg";
import krishit4 from "../../../assets/images/krishit4.jpg";
import BackButton from "../../backButton";

const Krishit = () => {
  return (
    <div className="inner-section" id="krishit">
      <Helmet>
        <title>פטרידע - הפטריה קרישית</title>
        <meta
          name="description"
          content="הפטריה קרישית - Tremella: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="krishit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="krishitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="krishitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="krishitText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="krishitText4Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="krishitText5" />
          </p>
          <p>
            <MultiLingualContent contentID="krishitText6" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={krishit1} alt="קרישית" />
              <p>
                <MultiLingualContent contentID="krishitImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={krishit2} alt="קרישית" />
              <p>
                <MultiLingualContent contentID="krishitImg2" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="krishitText6Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="krishitText7" />
          </p>
          <p>
            <MultiLingualContent contentID="krishitText8" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={krishit3} alt="קרישית" />
              <p>
                <MultiLingualContent contentID="krishitImg3" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={krishit4} alt="קרישית" />
              <p>
                <MultiLingualContent contentID="krishitImg4" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Krishit;
