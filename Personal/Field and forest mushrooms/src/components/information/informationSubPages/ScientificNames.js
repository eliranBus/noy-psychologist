import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import yashurit from "../../../assets/images/yashur.jpg";

const ScientificNames = () => {
  return (
    <div className="inner-section" id="scientificNames">
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="scientificHebrewNames" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="scientificHebrewNamesText1Bold" />
            </b>
            <MultiLingualContent contentID="scientificHebrewNamesText2" />
          </p>
          <p>
            <MultiLingualContent contentID="scientificHebrewNamesText3" />
          </p>
          <p>
            <MultiLingualContent contentID="scientificHebrewNamesText4" />
          </p>
          <p>
            <MultiLingualContent contentID="StoriesAndBeliefsText4" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="scientificHebrewNamesText5Bold" />
            </b>
            <MultiLingualContent contentID="scientificHebrewNamesText6" />
          </p>
          <p>
            <MultiLingualContent contentID="scientificHebrewNamesText7" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="scientificHebrewNamesText8" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <img
                src={yashurit}
                alt={
                  <MultiLingualContent contentID="scientificHebrewNamesImg1" />
                }
              />
              <p>
                <MultiLingualContent contentID="scientificHebrewNamesImg1" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ScientificNames;
