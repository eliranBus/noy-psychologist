import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import yafanit from "../../../assets/images/yafanit.jpg";

const Yafanit = () => {
  return (
    <div className="inner-section" id="yafanit">
      <div className="goBackWrapper">
        <a href="/" className="goBack">
          <span>&#8594;</span>
          <MultiLingualContent contentID="goBack" />
        </a>
      </div>
      <h2>
        <MultiLingualContent contentID="yafanit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="yafanitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="yafanitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="yafanitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="yafanitText4" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={yafanit}
              alt={<MultiLingualContent contentID="yafanitImg1" />}
            />
            <p>
              <MultiLingualContent contentID="yafanitImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Yafanit;
