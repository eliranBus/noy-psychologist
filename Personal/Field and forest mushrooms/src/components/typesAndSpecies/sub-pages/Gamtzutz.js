import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import gamtzutz from "../../../assets/images/gamtzutz.jpg";
import BackButton from "../../backButton";

const Gamtzutz = () => {
  return (
    <div className="inner-section" id="gamtzutz">
      <BackButton path="/#types-and-species" />
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
