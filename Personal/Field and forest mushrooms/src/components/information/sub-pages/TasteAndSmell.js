import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import tzitzanit from "../../../assets/images/tzitzanit.jpg";
import pinit from "../../../assets/images/pinit.jpg";
import harifit from "../../../assets/images/harifit.jpg";

const TasteAndSmellInMushrooms = () => {
  return (
    <div className="inner-section" id="tasteAndSmell">
      <div className="goBackWrapper">
        <a href="/" className="goBack">
          <span>&#8594;</span>
          <MultiLingualContent contentID="goBack" />
        </a>
      </div>
      <h2>
        <MultiLingualContent contentID="tasteAndSmellTitle" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="tasteAndSmellText1" />
          </p>
          <p>
            <MultiLingualContent contentID="tasteAndSmellText2" />
          </p>
          <p>
            <MultiLingualContent contentID="tasteAndSmellText3" />
          </p>
          <p>
            <MultiLingualContent contentID="tasteAndSmellText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="tasteAndSmellText5" />
          </p>
          <p>
            <MultiLingualContent contentID="tasteAndSmellText6" />
          </p>
          <p>
            <MultiLingualContent contentID="tasteAndSmellText7" />
          </p>
          <p>
            <MultiLingualContent contentID="tasteAndSmellText8" />
          </p>
          <p>
            <MultiLingualContent contentID="tasteAndSmellText9" />
          </p>
          <p>
            <MultiLingualContent contentID="tasteAndSmellText10" />
          </p>
          <p>
            <MultiLingualContent contentID="tasteAndSmellText11" />
          </p>
          <p>
            <MultiLingualContent contentID="tasteAndSmellText12" />
          </p>
          <p>
            <MultiLingualContent contentID="tasteAndSmellText13" />
          </p>
          <p>
            <MultiLingualContent contentID="tasteAndSmellText14" />
          </p>
          <p>
            <MultiLingualContent contentID="tasteAndSmellText15" />
          </p>
          <p>
            <MultiLingualContent contentID="tasteAndSmellText16" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img src={tzitzanit} alt="ציצנית שטוחה" />
            <p>
              <MultiLingualContent contentID="tasteAndSmellImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img src={pinit} alt="פינית מבאישה" />
            <p>
              <MultiLingualContent contentID="tasteAndSmellImg2" />
            </p>
          </div>
          <div className="imgWrapper">
            <img src={harifit} alt="חריפית יבשה" />
            <p>
              <MultiLingualContent contentID="tasteAndSmellImg3" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default TasteAndSmellInMushrooms;
