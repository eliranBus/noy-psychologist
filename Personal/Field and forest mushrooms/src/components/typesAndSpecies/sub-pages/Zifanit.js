import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import zifanit1 from "../../../assets/images/zifanit1.jpg";
import zifanit2 from "../../../assets/images/zifanit2.jpg";
import BackButton from "../../backButton";

const Zifanit = () => {
  return (
    <div className="inner-section" id="zifanit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="zifanit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="zifanitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="zifanitText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="zifanitText3Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="zifanitText4" />
          </p>
          <p>
            <MultiLingualContent contentID="zifanitText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="zifanitText6" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={zifanit1}
              alt={<MultiLingualContent contentID="zifanitImg1" />}
            />
            <p>
              <MultiLingualContent contentID="zifanitImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={zifanit2}
              alt={<MultiLingualContent contentID="zifanitImg2" />}
            />
            <p>
              <MultiLingualContent contentID="zifanitImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Zifanit;
