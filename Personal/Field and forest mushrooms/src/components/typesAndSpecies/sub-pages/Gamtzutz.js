import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import gamtzutz from "../../../assets/images/gamtzutz.jpg";

const Gamtzutz = () => {
  return (
    <div className="inner-section" id="gamtzutz">
      <div className="goBackWrapper">
        <a href="/" className="goBack">
          <span>&#8594;</span>
          <MultiLingualContent contentID="goBack" />
        </a>
      </div>
      <h2>
        <MultiLingualContent contentID="gamtzutz" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="gamtzuzText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="gamtzuzText2" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={gamtzutz}
              alt={<MultiLingualContent contentID="gamtzutz" />}
            />
          </div>
        </div>
      </>
    </div>
  );
};

export default Gamtzutz;
