import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import lavkanit from "../../../assets/images/lavkanit.jpg";
import lohevet from "../../../assets/images/lohevet.jpg";
import decorative from "../../../assets/decoratives/1.png";

const MediumOfGrowth = () => {
  return (
    <div className="inner-section" id="mediumOfGrowth">
      <Helmet>
        <title>פטרידע - על איזה מצע גדלות הפטריות</title>
        <meta name="description" />
      </Helmet>
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="mediumOfGrowth" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="mediumOfGrowthText1" />
          </p>
          <br />
          <LazyLoadImage src={decorative} alt="" className="" />
          <br />
          <p>
            <MultiLingualContent contentID="mediumOfGrowthText2" />
          </p>
          <p>
            <MultiLingualContent contentID="mediumOfGrowthText3" />
          </p>
          <p>
            <MultiLingualContent contentID="mediumOfGrowthText4" />
          </p>
          <p>
            <MultiLingualContent contentID="mediumOfGrowthText5" />
          </p>
          <p>
            <MultiLingualContent contentID="mediumOfGrowthText6" />
          </p>
          <p>
            <MultiLingualContent contentID="mediumOfGrowthText7" />
          </p>
          <p>
            <MultiLingualContent contentID="mediumOfGrowthText8" />
          </p>
          <p>
            <MultiLingualContent contentID="mediumOfGrowthText9" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={lavkanit} alt="לבקנית" />
              <p>
                <MultiLingualContent contentID="mediumOfGrowthImg1" />
              </p>
            </div>
          </div>
          <p>
            <MultiLingualContent contentID="mediumOfGrowthText10" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="mediumOfGrowthText11" />
          </p>
          <p>
            <MultiLingualContent contentID="mediumOfGrowthText12" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={lohevet} alt="לוהבת" />
              <p>
                <MultiLingualContent contentID="mediumOfGrowthImg2" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default MediumOfGrowth;
