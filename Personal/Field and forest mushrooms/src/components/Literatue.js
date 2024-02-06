import React from "react";
import MultiLingualContent from "../languages/MultiLingualContent";
import roger from "../assets/images/roger.jpg";
import mazza from "../assets/images/mazza.jpg";

const Literature = () => {
  return (
    <div className="section" id="literature">
      <div className="about-wrapper inner-section">
        <h2>
          <MultiLingualContent contentID="literature" />
        </h2>
        <p>
          <MultiLingualContent contentID="literatureText1" />
        </p>
        <p>
          <b>
            <MultiLingualContent contentID="literatureText2" />
          </b>
        </p>
        <ul className="LiteratureBullets">
          <li>
            <MultiLingualContent contentID="literatureBullet1" />
          </li>
          <li>
            <MultiLingualContent contentID="literatureBullet2" />
          </li>
          <li>
            <MultiLingualContent contentID="literatureBullet3" />
          </li>
          <li>
            <MultiLingualContent contentID="literatureBullet4" />
          </li>
          <li>
            <MultiLingualContent contentID="literatureBullet5" />
          </li>
          <li>
            <MultiLingualContent contentID="literatureBullet6" />
          </li>
          <li>
            <MultiLingualContent contentID="literatureBullet7" />
          </li>
          <li>
            <MultiLingualContent contentID="literatureBullet8" />
          </li>
          <li>
            <MultiLingualContent contentID="literatureBullet9" />
          </li>
        </ul>
        <div className="informationImages">
          <div className="imgWrapper">
            <img src={roger} alt="Roger Phillips - Mushrooms" />
          </div>
        </div>
        <p>
          <b>
            <MultiLingualContent contentID="literatureText3" />
          </b>
        </p>
        <ul className="LiteratureBullets">
          <li>
            <MultiLingualContent contentID="literatureBullet10" />
          </li>
          <li>
            <MultiLingualContent contentID="literatureBullet11" />
          </li>
          <li>
            <MultiLingualContent contentID="literatureBullet12" />
          </li>
          <li>
            <MultiLingualContent contentID="literatureBullet13" />
          </li>
          <li>
            <MultiLingualContent contentID="literatureBullet15" />
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

export default Literature;
