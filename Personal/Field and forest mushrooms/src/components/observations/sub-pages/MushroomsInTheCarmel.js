import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import hadura from "../../../assets/images/hadura.jpg";
import haduraSingle from "../../../assets/images/haduraSingle.jpg";

const MushroomsInTheCarmel = () => {
  return (
    <div className="inner-section" id="mushroomsInTheCarmel">
      <div className="goBackWrapper">
        <a href="/" className="goBack">
          <span>&#8594;</span>
          <MultiLingualContent contentID="goBack" />
        </a>
      </div>
      <h2>
        <MultiLingualContent contentID="mushroomsInTheCarmel" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="mushroomsInTheCarmelDate" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="mushroomsInTheCarmelText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="mushroomsInTheCarmelText2" />
          </p>
          <br />
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
            <li>
              <b>
                <MultiLingualContent contentID="mushroomsInTheCarmelBullet7Bold" />
              </b>
              <MultiLingualContent contentID="mushroomsInTheCarmelBullet7" />
            </li>
          </ul>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={hadura}
              alt={<MultiLingualContent contentID="mushroomsInTheCarmelImg1" />}
            />
            <p>
              <MultiLingualContent contentID="mushroomsInTheCarmelImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={haduraSingle}
              alt={<MultiLingualContent contentID="mushroomsInTheCarmelImg2" />}
            />
            <p>
              <MultiLingualContent contentID="mushroomsInTheCarmelImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default MushroomsInTheCarmel;
