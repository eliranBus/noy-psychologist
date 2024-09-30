import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import yashurit from "../../../assets/images/yashur.jpg";
import decorative from "../../../assets/decoratives/4.png";

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
          <br />
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="scientificHebrewNamesText9Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="scientificHebrewNamesText10" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="scientificHebrewNamesText11" />
          </p>
          <p>
            <MultiLingualContent contentID="scientificHebrewNamesText12" />
          </p>
          <p>
            <MultiLingualContent contentID="scientificHebrewNamesText13" />
          </p>
          <p>
            <MultiLingualContent contentID="scientificHebrewNamesText14" />
          </p>
          <p>
            <MultiLingualContent contentID="scientificHebrewNamesText15" />
          </p>
          <p>
            <MultiLingualContent contentID="scientificHebrewNamesText16" />
          </p>
          <p>
            <MultiLingualContent contentID="scientificHebrewNamesText17" />
          </p>
          <p>
            <MultiLingualContent contentID="scientificHebrewNamesText18" />
          </p>
          <p>
            <MultiLingualContent contentID="scientificHebrewNamesText19" />
          </p>
          <p>
            <MultiLingualContent contentID="scientificHebrewNamesText20" />
          </p>
          <p>
            <MultiLingualContent contentID="scientificHebrewNamesText21" />
          </p>
          <p>
            <MultiLingualContent contentID="scientificHebrewNamesText22" />
          </p>
          <p>
            <MultiLingualContent contentID="scientificHebrewNamesText23" />
          </p>
          <p>
            <MultiLingualContent contentID="scientificHebrewNamesText24" />
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
      <img src={decorative} alt="" className="decorative-names" />
    </div>
  );
};

export default ScientificNames;
