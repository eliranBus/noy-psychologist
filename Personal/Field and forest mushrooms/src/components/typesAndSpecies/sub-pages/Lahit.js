import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import lahit1 from "../../../assets/images/lahit1.jpg";
import lahit2 from "../../../assets/images/lahit2.jpg";
import lahit3 from "../../../assets/images/lahit3.jpg";
import lahit4 from "../../../assets/images/lahit4.jpg";

const Lahit = () => {
  return (
    <div className="inner-section" id="lahit">
      <div className="goBackWrapper">
        <a href="/" className="goBack">
          <span>&#8594;</span>
          <MultiLingualContent contentID="goBack" />
        </a>
      </div>
      <h2>
        <MultiLingualContent contentID="lahit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="lahitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="lahitText2" />
          </p>
          <br />
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="lahitBulletTitle1" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="lahitBullet1" />
          </p>
          <br />
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="lahitBulletTitle2" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="lahitBullet2" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={lahit1}
              alt={<MultiLingualContent contentID="lahitImg1" />}
            />
            <p>
              <MultiLingualContent contentID="lahitImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={lahit2}
              alt={<MultiLingualContent contentID="lahitImg2" />}
            />
            <p>
              <MultiLingualContent contentID="lahitImg2" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={lahit3}
              alt={<MultiLingualContent contentID="lahitImg3" />}
            />
            <p>
              <MultiLingualContent contentID="lahitImg3" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={lahit4}
              alt={<MultiLingualContent contentID="lahitImg4" />}
            />
            <p>
              <MultiLingualContent contentID="lahitImg4" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Lahit;
