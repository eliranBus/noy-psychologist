import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import arrhenia1 from "../../../assets/images/arrhenia1.jpeg";
import arrhenia2 from "../../../assets/images/arrhenia2.jpeg";
import arrhenia3 from "../../../assets/images/arrhenia3.jpeg";
import arrhenia4 from "../../../assets/images/arrhenia4.jpeg";
import BackButton from "../../backButton";

const Arrhenia = () => {
  return (
    <div className="inner-section" id="arrhenia">
      <Helmet>
        <title>פטרידע - הפטריה ארהניה</title>
        <meta
          name="description"
          content="הפטריה ארהניה - Arrhenia: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="arrhenia" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="arrheniaText1" />
          </p>
          <p>
            <MultiLingualContent contentID="arrheniaText2" />
          </p>
          <p>
            <MultiLingualContent contentID="arrheniaText3" />
          </p>
          <p>
            <MultiLingualContent contentID="arrheniaText4" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="arrheniaText5Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="arrheniaText6" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={arrhenia1} alt="ארהניה" />
              <p>
                <MultiLingualContent contentID="arrheniaImg1" />
              </p>
            </div>
          </div>
          <br />
          <p>
            <MultiLingualContent contentID="arrheniaText7" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={arrhenia2} alt="ארהניה" />
            <p>
              <MultiLingualContent contentID="arrheniaImg2" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={arrhenia3} alt="ארהניה" />
            <p>
              <MultiLingualContent contentID="arrheniaImg3" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={arrhenia4} alt="ארהניה" />
            <p>
              <MultiLingualContent contentID="arrheniaImg4" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Arrhenia;
