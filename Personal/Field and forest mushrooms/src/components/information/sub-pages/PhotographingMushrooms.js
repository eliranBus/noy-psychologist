import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import coin from "../../../assets/images/coin.jpg";
import BackButton from "../../backButton";

const PhotographingMushrooms = () => {
  return (
    <div className="inner-section" id="photographingMushrooms">
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="photographingMushrooms" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="photographingMushroomsText1" />
          </p>
          <br />
          <ul>
            <li>
              <MultiLingualContent contentID="photographingMushroomsBullet1" />
            </li>
            <li>
              <MultiLingualContent contentID="photographingMushroomsBullet2" />
            </li>
            <li>
              <MultiLingualContent contentID="photographingMushroomsBullet3" />
            </li>
            <li>
              <MultiLingualContent contentID="photographingMushroomsBullet4" />
            </li>
          </ul>
          <br />

          <p>
            <MultiLingualContent contentID="photographingMushroomsText2" />
          </p>
          <p>
            <MultiLingualContent contentID="photographingMushroomsText3" />
          </p>
          <p>
            <MultiLingualContent contentID="photographingMushroomsText4" />
          </p>
          <p>
            <MultiLingualContent contentID="photographingMushroomsText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="photographingMushroomsText6" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <img
                src={coin}
                alt={
                  <MultiLingualContent contentID="photographingMushroomsImg1" />
                }
              />
              <p>
                <MultiLingualContent contentID="photographingMushroomsImg1" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default PhotographingMushrooms;
