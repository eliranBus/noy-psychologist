import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import lavkanit from "../../../assets/images/lavkanit.jpg";
import lohevet from "../../../assets/images/lohevet.jpg";

const MediumOfGrowth = () => {
  return (
    <div className="inner-section" id="mediumOfGrowth">
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
              <img
                src={lavkanit}
                alt={<MultiLingualContent contentID="mediumOfGrowthImg1" />}
              />
              <p>
                <MultiLingualContent contentID="mediumOfGrowthImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <img
                src={lohevet}
                alt={<MultiLingualContent contentID="mediumOfGrowthImg2" />}
              />
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
