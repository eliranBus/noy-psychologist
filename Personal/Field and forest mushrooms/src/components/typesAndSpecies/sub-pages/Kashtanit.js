import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import kashtanit1 from "../../../assets/images/kashtanit1.jpg";
import kashtanit2 from "../../../assets/images/kashtanit2.jpg";
import kashtanit3 from "../../../assets/images/kashtanit3.jpg";
import BackButton from "../../backButton";

const Kashtanit = () => {
  return (
    <div className="inner-section" id="kashtanit">
      <Helmet>
        <title>פטרידע - הפטריה קשתנית</title>
        <meta
          name="description"
          content="הפטריה קשתנית - Daldinia: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="kashtanit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="kashtanitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="kashtanitText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="kashtanitText3Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="kashtanitText4" />
          </p>
          <p>
            <MultiLingualContent contentID="kashtanitText5" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={kashtanit1} alt="קשתנית" />
              <p>
                <MultiLingualContent contentID="kashtanitImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={kashtanit2} alt="קשתנית" />
              <p>
                <MultiLingualContent contentID="kashtanitImg2" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={kashtanit3} alt="קשתנית" />
              <p>
                <MultiLingualContent contentID="kashtanitImg3" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Kashtanit;
