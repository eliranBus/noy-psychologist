import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import oran from "../../../assets/images/oran.jpg";

const Orania = () => {
  return (
    <div className="inner-section" id="orania">
      <div className="goBackWrapper">
        <a href="/" className="goBack">
          <span>&#8594;</span>
          <MultiLingualContent contentID="goBack" />
        </a>
      </div>
      <h2>
        <MultiLingualContent contentID="orania" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="oraniaText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="oraniaText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="oraniaText3" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={oran}
              alt={<MultiLingualContent contentID="oraniaImg1" />}
            />
            <p>
              <MultiLingualContent contentID="oraniaImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Orania;
