import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import niranit1 from "../../../assets/images/niranit1.jpg";
import niranit2 from "../../../assets/images/niranit2.jpg";

const Niranit = () => {
  return (
    <div className="inner-section" id="niranit">
      <div className="goBackWrapper">
        <a href="/" className="goBack">
          <span>&#8594;</span>
          <MultiLingualContent contentID="goBack" />
        </a>
      </div>
      <h2>
        <MultiLingualContent contentID="niranit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="niranitText1" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="niranitText2Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="niranitText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="niranitText3Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="niranitText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="niranitText4Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="niranitText4" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="niranitText5Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="niranitText5" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={niranit1}
              alt={<MultiLingualContent contentID="niranitImg1" />}
            />
            <p>
              <MultiLingualContent contentID="niranitImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={niranit2}
              alt={<MultiLingualContent contentID="niranitImg2" />}
            />
            <p>
              <MultiLingualContent contentID="niranitImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Niranit;
