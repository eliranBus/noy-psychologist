import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import orania1 from "../../../assets/images/orania1.jpg";
import orania2 from "../../../assets/images/orania2.jpg";
import orania3 from "../../../assets/images/orania3.jpg";
import BackButton from "../../backButton";

const Orania = () => {
  return (
    <div className="inner-section" id="orania">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="orania" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="oraniaText0" />
          </p>
          <p>
            <MultiLingualContent contentID="oraniaText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="oraniaText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="oraniaText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="oraniaText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="oraniaText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="oraniaText6" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="oraniaText7Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="oraniaText7" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <img
                src={orania1}
                alt={<MultiLingualContent contentID="oraniaImg1" />}
              />
              <p>
                <MultiLingualContent contentID="oraniaImg1" />
              </p>
            </div>
          </div>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="oraniaText8Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="oraniaText8" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <img
                src={orania2}
                alt={<MultiLingualContent contentID="oraniaImg2" />}
              />
              <p>
                <MultiLingualContent contentID="oraniaImg2" />
              </p>
            </div>
          </div>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="oraniaText9Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="oraniaText9" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <img
                src={orania3}
                alt={<MultiLingualContent contentID="oraniaImg3" />}
              />
              <p>
                <MultiLingualContent contentID="oraniaImg3" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Orania;
