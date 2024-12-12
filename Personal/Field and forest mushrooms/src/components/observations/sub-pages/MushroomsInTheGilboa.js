import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import oznitHakelach from "../../../assets/images/oznitHakelach.jpg";
import BackButton from "../../backButton";
import YehudaHills from "./YehudaHills";
import MushroomsInOdemForest from "./MushroomsInOdemForest";
import BinyaminaMeddow from "./BinyaminaMeddow";
import MushroomsInTheCarmel from "./MushroomsInTheCarmel";

const MushroomsInTheGilboa = () => {
  return (
    <div className="inner-section" id="mushroomsInTheGilboa">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="mushroomsInTheGilboa" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="mushroomsInTheGilboaText1" />
          </p>
          <p>
            <MultiLingualContent contentID="mushroomsInTheGilboaText2" />
          </p>
          <p>
            <MultiLingualContent contentID="mushroomsInTheGilboaText3" />
          </p>
          <p>
            <MultiLingualContent contentID="mushroomsInTheGilboaText4" />
          </p>
          <p>
            <MultiLingualContent contentID="mushroomsInTheGilboaText41" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="mushroomsInTheGilboaText5" />
            <b>
              <MultiLingualContent contentID="mushroomsInTheGilboaText5Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="mushroomsInTheGilboaText6" />
          </p>
          <p>
            <MultiLingualContent contentID="mushroomsInTheGilboaText7" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="mushroomsInTheGilboaText8" />
          </p>
          <p>
            <MultiLingualContent contentID="mushroomsInTheGilboaText9" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={oznitHakelach} alt="אזנית הכלח" />
            <p>
              <MultiLingualContent contentID="mushroomsInTheGilboaImg1" />
            </p>
          </div>
        </div>
        <YehudaHills />
        <MushroomsInOdemForest />
        <BinyaminaMeddow />
        <MushroomsInTheCarmel />
      </>
    </div>
  );
};

export default MushroomsInTheGilboa;
