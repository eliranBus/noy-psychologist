import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import asimanit from "../../../assets/images/asimanit.jpg";
import deathAmanita from "../../../assets/images/deathAmanita.jpg";
import gushit from "../../../assets/images/gushit.jpg";
import matranit from "../../../assets/images/matranit.jpg";
import gdamit from "../../../assets/images/gdamit.jpg";
import BackButton from "../../backButton";

const MushroomsInOdemForest = () => {
  return (
    <div className="inner-section" id="mushroomsInOdemForest">
      <BackButton path="/#observations" />
      <h2>
        <MultiLingualContent contentID="mushroomsInOdemForest" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="mushroomsInOdemForestText1" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={asimanit}
              alt={
                <MultiLingualContent contentID="mushroomsInOdemForestImg1" />
              }
            />
            <p>
              <MultiLingualContent contentID="mushroomsInOdemForestImg1" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="mushroomsInOdemForestText2" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={deathAmanita}
              alt={
                <MultiLingualContent contentID="mushroomsInOdemForestImg2" />
              }
            />
            <p>
              <MultiLingualContent contentID="mushroomsInOdemForestImg2" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="mushroomsInOdemForestText3" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={gushit}
              alt={
                <MultiLingualContent contentID="mushroomsInOdemForestImg3" />
              }
            />
            <p>
              <MultiLingualContent contentID="mushroomsInOdemForestImg3" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="mushroomsInOdemForestText4" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={matranit}
              alt={
                <MultiLingualContent contentID="mushroomsInOdemForestImg4" />
              }
            />
            <p>
              <MultiLingualContent contentID="mushroomsInOdemForestImg4" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="mushroomsInOdemForestText5" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={gdamit}
              alt={
                <MultiLingualContent contentID="mushroomsInOdemForestImg5" />
              }
            />
            <p>
              <MultiLingualContent contentID="mushroomsInOdemForestImg5" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default MushroomsInOdemForest;
