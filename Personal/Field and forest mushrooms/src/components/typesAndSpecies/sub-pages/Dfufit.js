import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import dfufit1 from "../../../assets/images/dfufit1.jpg";
import dfufit2 from "../../../assets/images/dfufit2.jpg";
import dfufit3 from "../../../assets/images/dfufit3.jpg";
import BackButton from "../../backButton";

const Dfufit = () => {
  return (
    <div className="inner-section" id="dfufit">
      <Helmet>
        <title>פטרידע - הפטריה דפופית</title>
        <meta
          name="description"
          content="הפטריה דפופית - Gyrophragmium + Montagnites: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="dfufit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="dfufitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="dfufitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="dfufitText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="dfufitText4Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="dfufitText5" />
          </p>
          <p>
            <MultiLingualContent contentID="dfufitText6" />
          </p>
          <p>
            <MultiLingualContent contentID="dfufitText7" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={dfufit1} alt="דפופית" />
              <p>
                <MultiLingualContent contentID="dfufitImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={dfufit2} alt="דפופית" />
              <p>
                <MultiLingualContent contentID="dfufitImg2" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={dfufit3} alt="דפופית" />
              <p>
                <MultiLingualContent contentID="dfufitImg3" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Dfufit;
