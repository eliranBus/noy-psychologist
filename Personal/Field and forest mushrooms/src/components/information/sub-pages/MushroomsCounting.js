import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import wet from "../../../assets/images/wet.jpg";
import BackButton from "../../backButton";

const MushroomsCounting = () => {
  return (
    <div className="inner-section" id="mushroomsCounting">
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="mushroomsCounting" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="mushroomsCountingText1" />
          </p>
          <p>
            <MultiLingualContent contentID="mushroomsCountingText2" />
          </p>
          <p>
            <MultiLingualContent contentID="mushroomsCountingText3" />
          </p>
          <p>
            <MultiLingualContent contentID="mushroomsCountingText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="mushroomsCountingText5" />
          </p>
          <br />
          <ul>
            <li>
              <MultiLingualContent contentID="mushroomsCountingBullet1" />
            </li>
            <li>
              <MultiLingualContent contentID="mushroomsCountingBullet2" />
            </li>
            <li>
              <MultiLingualContent contentID="mushroomsCountingBullet3" />
            </li>
          </ul>
          <br />
          <p>
            <MultiLingualContent contentID="mushroomsCountingText6" />
          </p>
          <p>
            <MultiLingualContent contentID="mushroomsCountingText7" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={wet} alt="wet mushroom" />
          </div>
        </div>
      </>
    </div>
  );
};

export default MushroomsCounting;
