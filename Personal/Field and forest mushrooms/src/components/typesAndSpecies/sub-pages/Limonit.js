import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import limonit from "../../../assets/images/limonit.jpg";

const Limonit = () => {
  return (
    <div className="inner-section" id="limonit">
      <div className="goBackWrapper">
        <a href="/" className="goBack">
          <span>&#8594;</span>
          <MultiLingualContent contentID="goBack" />
        </a>
      </div>
      <h2>
        <MultiLingualContent contentID="limonit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="limonitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="limonitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="limonitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="limonitText4" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img src={limonit} alt="עציצית לימונית" />
          </div>
        </div>
      </>
    </div>
  );
};

export default Limonit;
