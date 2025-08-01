import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import gidmit1 from "../../../assets/images/gidmit1.jpg";
import gidmit2 from "../../../assets/images/gidmit2.jpg";
import gidmit3 from "../../../assets/images/gidmit3.jpg";
import gidmit4 from "../../../assets/images/gidmit4.jpg";
import gidmit5 from "../../../assets/images/gidmit5.jpg";
import gidmit6 from "../../../assets/images/gidmit6.jpg";
import gidmit7 from "../../../assets/images/gidmit7.jpg";
import gidmit8 from "../../../assets/images/gidmit8.jpg";
import gidmit9 from "../../../assets/images/gidmit9.jpg";
import BackButton from "../../backButton";

const Gidmit = () => {
  return (
    <div className="inner-section" id="gidmit">
      <Helmet>
        <title>פטרידע - הפטריה גידמית</title>
        <meta
          name="description"
          content="הפטריה גידמית - Gymnopilus – (Flamula): תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="gidmit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="gidmitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="gidmitText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="gidmitText3Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="gidmitText4" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={gidmit1} alt="גידמית" />
              <p>
                <MultiLingualContent contentID="gidmitImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={gidmit2} alt="גידמית" />
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="gidmitText5Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="gidmitText6" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={gidmit3} alt="גידמית" />
              <p>
                <MultiLingualContent contentID="gidmitImg2" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={gidmit4} alt="גידמית" />
              <p>
                <MultiLingualContent contentID="gidmitImg3" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={gidmit5} alt="גידמית" />
              <p>
                <MultiLingualContent contentID="gidmitImg4" />
              </p>
            </div>
          </div>
          <p>
            <MultiLingualContent contentID="gidmitText7" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="gidmitText8Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="gidmitText9" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={gidmit6} alt="גידמית" />
              <p>
                <MultiLingualContent contentID="gidmitImg5" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={gidmit7} alt="גידמית" />
              <p>
                <MultiLingualContent contentID="gidmitImg5" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={gidmit8} alt="גידמית" />
              <p>
                <MultiLingualContent contentID="gidmitImg5" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="gidmitText10Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="gidmitText11" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={gidmit9} alt="גידמית" />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Gidmit;
