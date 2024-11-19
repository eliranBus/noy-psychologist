import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import aznonitYehuda from "../../../assets/images/aznonitYehuda.jpg";
import aznit from "../../../assets/images/aznit.jpg";
import gushitToxic from "../../../assets/images/gushitToxic.jpg";
import BackButton from "../../backButton";

const EatingMushrooms = () => {
  return (
    <div className="inner-section" id="eatingMushrooms">
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="eatingMushrooms" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="eatingMushroomsText1" />
            <MultiLingualContent contentID="eatingMushroomsText2" />
          </p>
          <p>
            <MultiLingualContent contentID="eatingMushroomsText3" />
          </p>
          <p>
            <MultiLingualContent contentID="eatingMushroomsText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="eatingMushroomsText5" />
          </p>
          <p>
            <MultiLingualContent contentID="eatingMushroomsText6" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="eatingMushroomsText7" />
          </p>
          <p>
            <MultiLingualContent contentID="eatingMushroomsText8" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="eatingMushroomsText9" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="eatingMushroomsText10" />
          </p>
          <p>
            <MultiLingualContent contentID="eatingMushroomsText11" />
          </p>
          <p>
            <MultiLingualContent contentID="eatingMushroomsText12" />
          </p>
          <p>
            <MultiLingualContent contentID="eatingMushroomsText13" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="eatingMushroomsText14" />
          </p>
          <p>
            <MultiLingualContent contentID="eatingMushroomsText15" />
          </p>
          <p>
            <MultiLingualContent contentID="eatingMushroomsText16" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="eatingMushroomsText17" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={aznonitYehuda}
              alt={<MultiLingualContent contentID="eatingMushroomsImg1" />}
            />
            <p>
              <MultiLingualContent contentID="eatingMushroomsImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={aznit}
              alt={<MultiLingualContent contentID="eatingMushroomsImg2" />}
            />
            <p>
              <MultiLingualContent contentID="eatingMushroomsImg2" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={gushitToxic}
              alt={<MultiLingualContent contentID="eatingMushroomsImg3" />}
            />
            <p>
              <MultiLingualContent contentID="eatingMushroomsImg3" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default EatingMushrooms;
