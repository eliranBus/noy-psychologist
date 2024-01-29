import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import yashur from "../../../assets/images/yashur.jpg";

const HebrewNames = () => {
  return (
    <div className="inner-section" id="plantMushroomBond">
      <div className="goBackWrapper">
        <a href="/" className="goBack">
          <span>&#8594;</span>
          <MultiLingualContent contentID="goBack" />
        </a>
      </div>
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
            <img src={yashur} alt="ישעור אפור = ישעורית אפורה" />
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
