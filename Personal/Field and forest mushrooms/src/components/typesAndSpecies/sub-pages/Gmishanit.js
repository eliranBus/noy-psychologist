import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import gmishanit1 from "../../../assets/images/gmishanit1.jpeg";
import gmishanit2 from "../../../assets/images/gmishanit2.jpeg";
import BackButton from "../../backButton";

const Gmishanit = () => {
  return (
    <div className="inner-section" id="gmishanit">
      <Helmet>
        <title>פטרידע - הפטריה גמישנית</title>
        <meta
          name="description"
          content="הפטריה גמישנית - Lentinus: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="gmishanit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="gmishanitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="gmishanitText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="gmishanitText3Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="gmishanitText4" />
          </p>
          <p>
            <MultiLingualContent contentID="gmishanitText5" />
          </p>
          <p>
            <MultiLingualContent contentID="gmishanitText6" />
          </p>
          <p>
            <MultiLingualContent contentID="gmishanitText7" />
          </p>
          <p>
            <MultiLingualContent contentID="gmishanitText8" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={gmishanit1} alt="גמישנית" />
              <p>
                <MultiLingualContent contentID="gmishanitImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={gmishanit2} alt="גמישנית" />
              <p>
                <MultiLingualContent contentID="gmishanitImg2" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Gmishanit;
