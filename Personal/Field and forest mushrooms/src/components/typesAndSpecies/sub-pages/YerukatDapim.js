import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import yerukatDapim1 from "../../../assets/images/yerukatDapim1.jpg";
import yerukatDapim2 from "../../../assets/images/yerukatDapim2.jpg";
import yerukatDapim3 from "../../../assets/images/yerukatDapim3.jpg";
import BackButton from "../../backButton";

const YerukatDapim = () => {
  return (
    <div className="inner-section" id="yerukatDapim">
      <Helmet>
        <title>פטרידע - הפטריה ירוקת הדפים</title>
        <meta
          name="description"
          content="הפטריה ירוקת הדפים - Molybdites Chlorophyllum: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="yerukatDapim" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="yerukatDapimText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="yerukatDapimText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="yerukatDapimText3" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={yerukatDapim1} alt="ירוקת-דפים" />
              <p>
                <MultiLingualContent contentID="yerukatDapimImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={yerukatDapim2} alt="ירוקת-דפים" />
              <p>
                <MultiLingualContent contentID="yerukatDapimImg2" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={yerukatDapim3} alt="ירוקת-דפים" />
              <p>
                <MultiLingualContent contentID="yerukatDapimImg3" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default YerukatDapim;
