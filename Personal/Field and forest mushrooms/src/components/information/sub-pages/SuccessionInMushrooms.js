import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import gush from "../../../assets/images/gush.jpg";
import pkua from "../../../assets/images/pkua.jpg";
import BackButton from "../../backButton";

const SuccessionInMushrooms = () => {
  return (
    <div className="inner-section" id="successionInMushrooms">
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="successionInMushrooms" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="successionInMushroomsText1" />
          </p>
          <p>
            <MultiLingualContent contentID="successionInMushroomsText2" />
          </p>
          <p>
            <MultiLingualContent contentID="successionInMushroomsText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="successionInMushroomsText4Bold" />
            </b>
            <MultiLingualContent contentID="successionInMushroomsText4" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="successionInMushroomsText5Bold" />
            </b>
            <MultiLingualContent contentID="successionInMushroomsText5" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="successionInMushroomsText6Bold" />
            </b>
            <MultiLingualContent contentID="successionInMushroomsText6" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="successionInMushroomsText7Bold" />
            </b>
            <MultiLingualContent contentID="successionInMushroomsText7" />
          </p>
          <br />

          <p>
            <MultiLingualContent contentID="successionInMushroomsText8" />
          </p>
          <br />
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={gush}
              alt={
                <MultiLingualContent contentID="successionInMushroomsImg1" />
              }
            />
            <p>
              <MultiLingualContent contentID="successionInMushroomsImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={pkua}
              alt={
                <MultiLingualContent contentID="successionInMushroomsImg2" />
              }
            />
            <p>
              <MultiLingualContent contentID="successionInMushroomsImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default SuccessionInMushrooms;
