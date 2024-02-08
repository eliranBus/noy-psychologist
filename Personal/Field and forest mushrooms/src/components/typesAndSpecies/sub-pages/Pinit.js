import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import pinit from "../../../assets/images/pinit.png";

const Pinit = () => {
  return (
    <div className="inner-section" id="pinit">
      <div className="goBackWrapper">
        <a href="/" className="goBack">
          <span>&#8594;</span>
          <MultiLingualContent contentID="goBack" />
        </a>
      </div>
      <h2>
        <MultiLingualContent contentID="pinit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="pinitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="pinitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="pinitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="pinitText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="pinitText5" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={pinit}
              alt={<MultiLingualContent contentID="pinitImg1" />}
            />
            <p>
              <MultiLingualContent contentID="pinitImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Pinit;
