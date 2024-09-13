import React from "react";
import { Link } from "react-router-dom";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import sarafit1 from "../../../assets/images/sarafit1.jpg";
import sarafit2 from "../../../assets/images/sarafit2.jpg";
import BackButton from "../../backButton";

const Sarafit = () => {
  return (
    <div className="inner-section" id="sarafit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="sarafit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="sarafitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="sarafitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="sarafitText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="sarafitText4Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="sarafitText5" />
          </p>
          <p>
            <MultiLingualContent contentID="sarafitText6" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <img
                src={sarafit1}
                alt={<MultiLingualContent contentID="sarafitImg1" />}
              />
              <p>
                <MultiLingualContent contentID="sarafitImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <img
                src={sarafit2}
                alt={<MultiLingualContent contentID="sarafitImg2" />}
              />
              <p>
                <MultiLingualContent contentID="sarafitImg2" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Sarafit;
