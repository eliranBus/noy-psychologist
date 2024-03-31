import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import tznuma1 from "../../../assets/images/tznuma1.jpg";
import tznuma2 from "../../../assets/images/tznuma2.jpg";
import BackButton from "../../backButton";

const Tznuma = () => {
  return (
    <div className="inner-section" id="tznuma">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="tznuma" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="tznumaText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="tznumaText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="tznumaText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="tznumaText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="tznumaText5" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={tznuma1}
              alt={<MultiLingualContent contentID="tznumaImg1" />}
            />
            <p>
              <MultiLingualContent contentID="tznumaImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={tznuma2}
              alt={<MultiLingualContent contentID="tznumaImg2" />}
            />
            <p>
              <MultiLingualContent contentID="tznumaImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Tznuma;
