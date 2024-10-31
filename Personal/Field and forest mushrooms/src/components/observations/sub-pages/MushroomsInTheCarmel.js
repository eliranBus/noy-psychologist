import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import carmel1 from "../../../assets/images/carmel1.jpg";
import carmel2 from "../../../assets/images/carmel2.jpg";
import carmel3 from "../../../assets/images/hadura.jpg";

const MushroomsInTheCarmel = () => {
  return (
    <div className="inner-section" id="mushroomsInTheCarmel">
      <h2>
        <MultiLingualContent contentID="mushroomsInTheCarmel" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="mushroomsInTheCarmelText1" />
          </p>
          <p>
            <MultiLingualContent contentID="mushroomsInTheCarmelText2" />
          </p>
          <p>
            <MultiLingualContent contentID="mushroomsInTheCarmelText3" />
          </p>
          <p>
            <MultiLingualContent contentID="mushroomsInTheCarmelText4" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <img
                src={carmel1}
                alt={
                  <MultiLingualContent contentID="mushroomsInTheCarmelImg1" />
                }
              />
              <p>
                <MultiLingualContent contentID="mushroomsInTheCarmelImg1" />
              </p>
            </div>{" "}
            <div className="imgWrapper">
              <img
                src={carmel2}
                alt={
                  <MultiLingualContent contentID="mushroomsInTheCarmelImg2" />
                }
              />
              <p>
                <MultiLingualContent contentID="mushroomsInTheCarmelImg2" />
              </p>
            </div>
            <div className="imgWrapper">
              <img
                src={carmel3}
                alt={
                  <MultiLingualContent contentID="mushroomsInTheCarmelImg3" />
                }
              />
              <p>
                <MultiLingualContent contentID="mushroomsInTheCarmelImg3" />
              </p>
            </div>
          </div>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="mushroomsInTheCarmelText5Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="mushroomsInTheCarmelText6" />
          </p>
          <ul>
            <li>
              <b>
                <MultiLingualContent contentID="mushroomsInTheCarmelBullet1Bold" />
              </b>
              <MultiLingualContent contentID="mushroomsInTheCarmelBullet1" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="mushroomsInTheCarmelBullet2Bold" />
              </b>
              <MultiLingualContent contentID="mushroomsInTheCarmelBullet2" />
            </li>

            <li>
              <b>
                <MultiLingualContent contentID="mushroomsInTheCarmelBullet3Bold" />
              </b>
              <MultiLingualContent contentID="mushroomsInTheCarmelBullet3" />
            </li>

            <li>
              <b>
                <MultiLingualContent contentID="mushroomsInTheCarmelBullet4Bold" />
              </b>
              <MultiLingualContent contentID="mushroomsInTheCarmelBullet4" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="mushroomsInTheCarmelBullet5Bold" />
              </b>
              <MultiLingualContent contentID="mushroomsInTheCarmelBullet5" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="mushroomsInTheCarmelBullet6Bold" />
              </b>
              <MultiLingualContent contentID="mushroomsInTheCarmelBullet6" />
            </li>
          </ul>
        </div>
      </>
    </div>
  );
};

export default MushroomsInTheCarmel;
