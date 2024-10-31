import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import pchusit1 from "../../../assets/images/pchusit1.jpg";
import BackButton from "../../backButton";

const Pchusit = () => {
  return (
    <div className="inner-section" id="pchusit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="pchusit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="pchusitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="pchusitText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="pchusitText3Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="pchusitText4" />
          </p>
          <p>
            <MultiLingualContent contentID="pchusitText5" />
          </p>
          <p>
            <MultiLingualContent contentID="pchusitText6" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={pchusit1}
              alt={<MultiLingualContent contentID="pchusitImg1" />}
            />
            <p>
              <MultiLingualContent contentID="pchusitImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Pchusit;
