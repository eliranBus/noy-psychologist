import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import patara1 from "../../../assets/images/patara1.jpg";
import patara2 from "../../../assets/images/patara2.jpg";
import patara3 from "../../../assets/images/patara3.jpg";
import patara4 from "../../../assets/images/patara4.jpg";
import patara5 from "../../../assets/images/patara5.jpg";
import patara6 from "../../../assets/images/patara6.jpg";
import patara7 from "../../../assets/images/patara7.jpg";
import patara8 from "../../../assets/images/patara8.jpg";
import patara9 from "../../../assets/images/patara9.jpg";
import patara10 from "../../../assets/images/patara10.jpg";
import patara11 from "../../../assets/images/patara11.jpg";
import BackButton from "../../backButton";

const Patara = () => {
  return (
    <div className="inner-section" id="patara">
      <Helmet>
        <title>פטרידע - הפטריה פטרה</title>
        <meta
          name="description"
          content="הפטריה פטרה - Atheniella + Hemimycena+ Mycena: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="patara" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="pataraText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="pataraText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="pataraText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="pataraText4Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="pataraText4" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={patara1} alt="פטרה" />
            <p>
              <MultiLingualContent contentID="pataraImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={patara2} alt="פטרה" />
            <p>
              <MultiLingualContent contentID="pataraImg2" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="pataraText5Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="pataraText5" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={patara3} alt="פטרה" />
            <p>
              <MultiLingualContent contentID="pataraImg3" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={patara4} alt="פטרה" />
            <p>
              <MultiLingualContent contentID="pataraImg4" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="pataraText6Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="pataraText6" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={patara5} alt="פטרה" />
            <p>
              <MultiLingualContent contentID="pataraImg5" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={patara6} alt="פטרה" />
            <p>
              <MultiLingualContent contentID="pataraImg6" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="pataraText7Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="pataraText7" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={patara7} alt="פטרה" />
            <p>
              <MultiLingualContent contentID="pataraImg7" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="pataraText8Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="pataraText8" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={patara8} alt="פטרה" />
            <p>
              <MultiLingualContent contentID="pataraImg8" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="pataraText9Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="pataraText9" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={patara9} alt="פטרה" />
            <p>
              <MultiLingualContent contentID="pataraImg9" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="pataraText10Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="pataraText10" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={patara10} alt="פטרה" />
            <p>
              <MultiLingualContent contentID="pataraImg10" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="pataraText11Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="pataraText11" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={patara11} alt="פטרה" />
            <p>
              <MultiLingualContent contentID="pataraImg11" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="pataraText12Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="pataraText12" />
          </p>
        </div>
      </>
      <br />
    </div>
  );
};

export default Patara;
