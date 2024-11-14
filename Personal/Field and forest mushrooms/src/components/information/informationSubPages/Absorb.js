import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import toxic from "../../../assets/images/toxic.jpg";

const Absorb = () => {
  return (
    <div className="inner-section" id="absorb">
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="absorb" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="absorbText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="absorbText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="absorbText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="absorbText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="absorbText5" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <img src={toxic} alt="toxic" />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Absorb;
