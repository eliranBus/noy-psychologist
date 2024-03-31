import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import gdamit1 from "../../../assets/images/gdamit1.jpg";
import gdamit2 from "../../../assets/images/gdamit2.jpg";
import gdamit3 from "../../../assets/images/gdamit3.jpg";
import gdamit4 from "../../../assets/images/gdamit4.jpg";
import BackButton from "../../backButton";

const GidmitVelehavit = () => {
  return (
    <div className="inner-section" id="gidmitVelehavit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="gidmitVelehavit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="gidmitVelehavitText1" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="gidmitVelehavitText2Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="gidmitVelehavitText3" />
          </p>
          <br />
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="gidmitVelehavitText4Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="gidmitVelehavitText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="gidmitVelehavitText6" />
          </p>
          <ul>
            <li>
              <b>
                <MultiLingualContent contentID="gidmitVelehavitText6Bullet1Bold" />
              </b>
              <MultiLingualContent contentID="gidmitVelehavitText6Bullet1" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="gidmitVelehavitText6Bullet2Bold" />
              </b>
              <MultiLingualContent contentID="gidmitVelehavitText6Bullet2" />
            </li>
          </ul>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={gdamit1}
              alt={<MultiLingualContent contentID="gidmitVelehavitTextImg1" />}
            />
            <p>
              <MultiLingualContent contentID="gidmitVelehavitTextImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={gdamit2}
              alt={<MultiLingualContent contentID="gidmitVelehavitTextImg2" />}
            />
            <p>
              <MultiLingualContent contentID="gidmitVelehavitTextImg2" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={gdamit3}
              alt={<MultiLingualContent contentID="gidmitVelehavitTextImg3" />}
            />
            <p>
              <MultiLingualContent contentID="gidmitVelehavitTextImg3" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={gdamit4}
              alt={<MultiLingualContent contentID="gidmitVelehavitTextImg4" />}
            />
            <p>
              <MultiLingualContent contentID="gidmitVelehavitTextImg4" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default GidmitVelehavit;
