import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import madafit1 from "../../../assets/images/madafit1.jpg";
import madafit2 from "../../../assets/images/madafit2.jpg";
import madafit3 from "../../../assets/images/madafit3.jpg";
import BackButton from "../../backButton";

const Madafit = () => {
  return (
    <div className="inner-section" id="madafit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="madafit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="madafitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="madafitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="madafitText3" />
          </p>
          <p>
            <MultiLingualContent contentID="madafitText4" />
          </p>
          <p>
            <MultiLingualContent contentID="madafitText5" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="madafitText6Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="madafitText7" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={madafit1}
              alt={<MultiLingualContent contentID="madafitImg1" />}
            />
            <p>
              <MultiLingualContent contentID="madafitImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={madafit2}
              alt={<MultiLingualContent contentID="madafitImg2" />}
            />
            <p>
              <MultiLingualContent contentID="madafitImg2" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="madafitText8Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="madafitText9" />
          </p>
          <p>
            <MultiLingualContent contentID="madafitText10" />
            <b>
              <MultiLingualContent contentID="madafitText10Bold" />
            </b>
            <MultiLingualContent contentID="madafitText11" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={madafit3}
              alt={<MultiLingualContent contentID="madafitImg3" />}
            />
            <p>
              <MultiLingualContent contentID="madafitImg3" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Madafit;
