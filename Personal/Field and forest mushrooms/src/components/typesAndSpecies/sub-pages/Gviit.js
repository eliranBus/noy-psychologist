import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import gviit1 from "../../../assets/images/gviit1.jpeg";
import gviit2 from "../../../assets/images/gviit2.jpeg";
import BackButton from "../../backButton";

const Gviit = () => {
  return (
    <div className="inner-section" id="gviit">
      <Helmet>
        <title>פטרידע - הפטריה גביעית</title>
        <meta
          name="description"
          content="הפטריה גבינית - Helvella: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="gviit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="gviitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="gviitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="gviitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="gviitText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="gviitText5" />
          </p>
          <br />
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="gviitText6Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="gviitText7" />
          </p>
          <br />
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={gviit1} alt="גביעית" />
              <p>
                <MultiLingualContent contentID="gviitImg1" />
              </p>
            </div>
          </div>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="gviitText8Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="gviitText9" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={gviit2} alt="גביעית" />
            <p>
              <MultiLingualContent contentID="gviitImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Gviit;
