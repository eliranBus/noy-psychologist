import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import sadanit from "../../../assets/images/sadanit.jpg";

const Sadanit = () => {
  return (
    <div className="inner-section" id="sadanit">
      <div className="goBackWrapper">
        <a href="/" className="goBack">
          <span>&#8594;</span>
          <MultiLingualContent contentID="goBack" />
        </a>
      </div>
      <h2>
        <MultiLingualContent contentID="sadanit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="sadanitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="sadanitText2" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={sadanit}
              alt={<MultiLingualContent contentID="sadanitImg1" />}
            />
            <p>
              <MultiLingualContent contentID="sadanitImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Sadanit;
