import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import nartikanit1 from "../../../assets/images/nartikanit1.jpg";
import nartikanit2 from "../../../assets/images/nartikanit2.jpg";
import nartikanit3 from "../../../assets/images/nartikanit3.jpg";
import nartikanit4 from "../../../assets/images/nartikanit4.jpg";
import nartikanit5 from "../../../assets/images/nartikanit5.jpg";
import BackButton from "../../backButton";

const Nartikanit = () => {
  return (
    <div className="inner-section" id="nartikanit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="nartikanit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="nartikanitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="nartikanitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="nartikanitText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="nartikanitText4Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="nartikanitText5" />
          </p>
          <p>
            <MultiLingualContent contentID="nartikanitText6" />
          </p>
          <p>
            <MultiLingualContent contentID="nartikanitText7" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={nartikanit1}
              alt={<MultiLingualContent contentID="nartikanitImg1" />}
            />
            <p>
              <MultiLingualContent contentID="nartikanitImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={nartikanit2}
              alt={<MultiLingualContent contentID="nartikanitImg2" />}
            />
            <p>
              <MultiLingualContent contentID="nartikanitImg2" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="nartikanitText8Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="nartikanitText9" />
          </p>
          <p>
            <MultiLingualContent contentID="nartikanitText10" />
          </p>
          <p>
            <MultiLingualContent contentID="nartikanitText11" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={nartikanit3}
              alt={<MultiLingualContent contentID="nartikanitImg3" />}
            />
            <p>
              <MultiLingualContent contentID="nartikanitImg3" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={nartikanit4}
              alt={<MultiLingualContent contentID="nartikanitImg4" />}
            />
            <p>
              <MultiLingualContent contentID="nartikanitImg4" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="nartikanitText12Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="nartikanitText13" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={nartikanit5}
              alt={<MultiLingualContent contentID="nartikanitImg5" />}
            />
            <p>
              <MultiLingualContent contentID="nartikanitImg5" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Nartikanit;
