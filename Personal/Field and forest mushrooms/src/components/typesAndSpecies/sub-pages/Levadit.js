import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import levadit1 from "../../../assets/images/levadit1.jpg";
import levadit2 from "../../../assets/images/levadit2.jpg";
import levadit3 from "../../../assets/images/levadit3.jpg";
import levadit4 from "../../../assets/images/levadit4.jpg";
import BackButton from "../../backButton";

const Levadit = () => {
  return (
    <div className="inner-section" id="levadit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="levadit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="levaditText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="levaditText2" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={levadit1}
              alt={<MultiLingualContent contentID="levaditImg1" />}
            />
            <p>
              <MultiLingualContent contentID="levaditImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={levadit2}
              alt={<MultiLingualContent contentID="levaditImg2" />}
            />
            <p>
              <MultiLingualContent contentID="levaditImg2" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={levadit3}
              alt={<MultiLingualContent contentID="levaditImg3" />}
            />
            <p>
              <MultiLingualContent contentID="levaditImg3" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={levadit4}
              alt={<MultiLingualContent contentID="levaditImg4" />}
            />
            <p>
              <MultiLingualContent contentID="levaditImg4" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Levadit;
