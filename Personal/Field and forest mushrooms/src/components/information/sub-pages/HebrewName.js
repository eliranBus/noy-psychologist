import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import yashur from "../../../assets/images/yashur.jpg";
import BackButton from "../../backButton";

const HebrewNames = () => {
  return (
    <div className="inner-section" id="hebrewNamesTitle">
      <Helmet>
        <title>פטרידע - מקור השמות בעברית</title>
        <meta name="description" />
      </Helmet>
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="hebrewNamesTitle" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="hebrewNamesText1" />
          </p>
          <p>
            <MultiLingualContent contentID="hebrewNamesText2" />
          </p>
          <p>
            <MultiLingualContent contentID="hebrewNamesText3" />
          </p>
          <p>
            <MultiLingualContent contentID="hebrewNamesText4" />
          </p>
          <p>
            <MultiLingualContent contentID="hebrewNamesText5" />
          </p>
          <p>
            <MultiLingualContent contentID="hebrewNamesText6" />
          </p>
          <p>
            <MultiLingualContent contentID="hebrewNamesText7" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={yashur} alt="ישעור אפור = ישעורית אפורה" />
            <p>
              <MultiLingualContent contentID="hebrewNamesImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default HebrewNames;
