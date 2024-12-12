import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import tznuma1 from "../../../assets/images/tznuma1.jpg";
import tznuma2 from "../../../assets/images/tznuma2.jpg";
import tznuma3 from "../../../assets/images/tznuma3.jpg";
import tznuma4 from "../../../assets/images/tznuma4.jpg";
import tznuma5 from "../../../assets/images/tznuma5.jpg";
import tznuma6 from "../../../assets/images/tznuma6.jpg";
import BackButton from "../../backButton";

const Tznuma = () => {
  return (
    <div className="inner-section" id="tznuma">
      <Helmet>
        <title>פטרידע - הפטריה צנומה</title>
        <meta
          name="description"
          content="הפטריה צנומה - Marasmius: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="tznuma" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="tznumaText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="tznumaText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="tznumaText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="tznumaText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="tznumaText5" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="tznumaText6Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="tznumaText7" />
          </p>
          <p>
            <MultiLingualContent contentID="tznumaText8" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={tznuma1} alt="צנומה" />
            <p>
              <MultiLingualContent contentID="tznumaImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={tznuma2} alt="צנומה" />
            <p>
              <MultiLingualContent contentID="tznumaImg2" />
            </p>
          </div>
        </div>
        <p>
          <b>
            <MultiLingualContent contentID="tznumaText9Bold" />
          </b>
        </p>
        <p>
          <MultiLingualContent contentID="tznumaText10" />
        </p>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={tznuma3} alt="צנומה" />
            <p>
              <MultiLingualContent contentID="tznumaImg3" />
            </p>
          </div>
        </div>
        <p>
          <b>
            <MultiLingualContent contentID="tznumaText11Bold" />
          </b>
        </p>
        <p>
          <MultiLingualContent contentID="tznumaText12" />
        </p>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={tznuma4} alt="צנומה" />
            <p>
              <MultiLingualContent contentID="tznumaImg4" />
            </p>
          </div>
        </div>
        <p>
          <b>
            <MultiLingualContent contentID="tznumaText13Bold" />
          </b>
        </p>
        <p>
          <MultiLingualContent contentID="tznumaText14" />
        </p>
        <p>
          <MultiLingualContent contentID="tznumaText15" />
        </p>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={tznuma5} alt="צנומה" />
            <p>
              <MultiLingualContent contentID="tznumaImg5" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={tznuma6} alt="צנומה" />
            <p>
              <MultiLingualContent contentID="tznumaImg6" />
            </p>
          </div>
        </div>
        <p>
          <b>
            <MultiLingualContent contentID="tznumaText16Bold" />
          </b>
        </p>
        <p>
          <MultiLingualContent contentID="tznumaText17" />
        </p>
        <p>
          <MultiLingualContent contentID="tznumaText18" />
        </p>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={tznuma6} alt="צנומה" />
            <p>
              <MultiLingualContent contentID="tznumaImg6" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Tznuma;
