import React from "react";
import MultiLingualContent from "../languages/MultiLingualContent";
import roger from "../assets/images/roger.jpg";
import mazza from "../assets/images/mazza.jpg";

const Literture = () => {
  return (
    <div className="section" id="literture">
      <div className="about-wrapper inner-section">
        <h2>
          <MultiLingualContent contentID="literture" />
        </h2>
        <p>
          <MultiLingualContent contentID="litertureText1" />
        </p>
        <p>
          <b>
            <MultiLingualContent contentID="litertureText2" />
          </b>
        </p>
        <ul className="LitertureBullets">
          <li>
            <MultiLingualContent contentID="litertureBullet1" />
          </li>
          <li>
            <MultiLingualContent contentID="litertureBullet2" />
          </li>
          <li>
            <MultiLingualContent contentID="litertureBullet3" />
          </li>
          <li>
            <MultiLingualContent contentID="litertureBullet4" />
          </li>
          <li>
            <MultiLingualContent contentID="litertureBullet5" />
          </li>
          <li>
            <MultiLingualContent contentID="litertureBullet6" />
          </li>
          <li>
            <MultiLingualContent contentID="litertureBullet7" />
          </li>
          <li>
            <MultiLingualContent contentID="litertureBullet8" />
          </li>
          <li>
            <MultiLingualContent contentID="litertureBullet9" />
          </li>
        </ul>
        <div className="informationImages">
          <div className="imgWrapper">
            <img src={roger} alt="Roger Phillips - Mushrooms" />
          </div>
        </div>
        <p>
          <b>
            <MultiLingualContent contentID="litertureText3" />
          </b>
        </p>
        <ul className="LitertureBullets">
          <li>
            <MultiLingualContent contentID="litertureBullet10" />
          </li>
          <li>
            <MultiLingualContent contentID="litertureBullet11" />
          </li>
          <li>
            <MultiLingualContent contentID="litertureBullet12" />
          </li>
          <li>
            <MultiLingualContent contentID="litertureBullet13" />
          </li>
          <li>
            <MultiLingualContent contentID="litertureBullet15" />
          </li>
        </ul>
        <div className="informationImages">
          <div className="imgWrapper">
            <img src={mazza} alt="Riccardo Mazza - I Funghi" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Literture;
