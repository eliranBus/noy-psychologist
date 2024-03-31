import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import amanit from "../../../assets/images/amanit.jpg";
import gvionit from "../../../assets/images/gvionit.jpg";
import market from "../../../assets/images/market.jpg";
import BackButton from "../../backButton";

const TripToSwitzerland = () => {
  return (
    <div className="inner-section" id="tripToSwitzerland">
      <BackButton />
      <h2>
        <MultiLingualContent contentID="tripToSwitzerland" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="tripToSwitzerlandText1" />
          </p>
          <p>
            <MultiLingualContent contentID="tripToSwitzerlandText2" />
          </p>
          <p>
            <MultiLingualContent contentID="tripToSwitzerlandText3" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img src={amanit} alt="amanita" />
            <p>
              <MultiLingualContent contentID="tripToSwitzerlandImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img src={gvionit} alt="גביעונית נאכלת" />
            <p>
              <MultiLingualContent contentID="tripToSwitzerlandImg2" />
            </p>
          </div>
          <div className="imgWrapper">
            <img src={market} alt="דוכן בשוק מקומי" />
            <p>
              <MultiLingualContent contentID="tripToSwitzerlandImg3" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default TripToSwitzerland;
