import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
            <b>
              <MultiLingualContent contentID="successionInMushroomsText2Bold" />
            </b>
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
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="successionInMushroomsText5Bold" />
            </b>
            <MultiLingualContent contentID="successionInMushroomsText5" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={gush}
                alt={
                  <MultiLingualContent contentID="successionInMushroomsImg1" />
                }
              />
              <p>
                <MultiLingualContent contentID="successionInMushroomsImg1" />
              </p>
            </div>
          </div>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="successionInMushroomsText6Bold" />
            </b>
            <MultiLingualContent contentID="successionInMushroomsText6" />
          </p>
          <br />
        </div>
      </>
    </div>
  );
};

export default SuccessionInMushrooms;
