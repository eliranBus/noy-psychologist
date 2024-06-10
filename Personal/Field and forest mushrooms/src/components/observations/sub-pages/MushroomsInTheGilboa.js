import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import oznitHakelach from "../../../assets/images/oznitHakelach.jpg";
import BackButton from "../../backButton";

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
          <br />
          <p>
            <MultiLingualContent contentID="mushroomsInTheGilboaText4" />
            <b>
              <MultiLingualContent contentID="mushroomsInTheGilboaText4Bold" />
            </b>
            <MultiLingualContent contentID="mushroomsInTheGilboaText5" />
          </p>
          <p>
            <MultiLingualContent contentID="mushroomsInTheGilboaText6" />
          </p>
          <br />
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
            <img
              src={oznitHakelach}
              alt={<MultiLingualContent contentID="mushroomsInTheGilboaImg1" />}
            />
            <p>
              <MultiLingualContent contentID="mushroomsInTheGilboaImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default MushroomsInTheGilboa;
