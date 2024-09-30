import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import resisit1 from "../../../assets/images/resisit1.jpg";
import resisit2 from "../../../assets/images/resisit2.jpg";
import BackButton from "../../backButton";

const Resisit = () => {
  return (
    <div className="inner-section" id="resisit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="resisit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="resisitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="resisitText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="resisitText3Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="resisitText4" />
          </p>
          <p>
            <MultiLingualContent contentID="resisitText5" />
          </p>
          <p>
            <MultiLingualContent contentID="resisitText6" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={resisit1}
              alt={<MultiLingualContent contentID="resisitImg1" />}
            />
            <p>
              <MultiLingualContent contentID="resisitImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={resisit2}
              alt={<MultiLingualContent contentID="resisitImg2" />}
            />
            <p>
              <MultiLingualContent contentID="resisitImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Resisit;
