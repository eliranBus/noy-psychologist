import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import sadanit from "../../../assets/images/sadanit.jpg";
import BackButton from "../../backButton";

const Sadanit = () => {
  return (
    <div className="inner-section" id="sadanit">
      <BackButton path="/#types-and-species" />
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
