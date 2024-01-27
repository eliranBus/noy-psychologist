import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import lavkanit from "../../../assets/images/lavkanit.jpg";
import lohavet from "../../../assets/images/lohevet.jpg";

const WhereMushroomsGrow = () => {
  return (
    <div className="inner-section" id="whereMushroomsGrow">
      <div className="goBackWrapper">
        <a href="/" className="goBack">
          <span>&#8594;</span>
          <MultiLingualContent contentID="goBack" />
        </a>
      </div>
      <h2>
        <MultiLingualContent contentID="whereMushroomsGrow" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="whereMushroomsGrowText1" />
          </p>
          <p>
            <MultiLingualContent contentID="whereMushroomsGrowText2" />
          </p>
          <p>
            <MultiLingualContent contentID="whereMushroomsGrowText3" />
          </p>
          <p>
            <MultiLingualContent contentID="whereMushroomsGrowText4" />
          </p>
          <p>
            <MultiLingualContent contentID="whereMushroomsGrowText5" />
          </p>
          <p>
            <MultiLingualContent contentID="whereMushroomsGrowText6" />
          </p>
          <p>
            <MultiLingualContent contentID="whereMushroomsGrowText7" />
          </p>
          <p>
            <MultiLingualContent contentID="whereMushroomsGrowText8" />
          </p>
          <p>
            <MultiLingualContent contentID="whereMushroomsGrowText9" />
          </p>
          <p>
            <MultiLingualContent contentID="whereMushroomsGrowText10" />
          </p>
          <p>
            <MultiLingualContent contentID="whereMushroomsGrowText11" />
          </p>
          <p>
            <MultiLingualContent contentID="whereMushroomsGrowText12" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="whereMushroomsGrowText13" />
          </p>
          <p>
            <MultiLingualContent contentID="whereMushroomsGrowText14" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img src={lavkanit} alt="לבקנית האגוזים" />
            <p>
              <MultiLingualContent contentID="whereMushroomsGrowImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img src={lohavet} alt="לבקנית האגוזים" />
            <p>
              <MultiLingualContent contentID="whereMushroomsGrowImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default WhereMushroomsGrow;
