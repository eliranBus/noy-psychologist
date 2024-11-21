import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";

const SmellAndTasteOfMushrooms = () => {
  return (
    <div className="inner-section" id="smellAndTasteOfMushrooms">
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="smellAndTasteOfMushrooms" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="smellAndTasteOfMushroomsText1" />
          </p>
          <p>
            <MultiLingualContent contentID="smellAndTasteOfMushroomsText2" />
          </p>
          <p>
            <MultiLingualContent contentID="smellAndTasteOfMushroomsText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="smellAndTasteOfMushroomsText4" />
          </p>
          <br />
          <ul>
            <li>
              <MultiLingualContent contentID="smellAndTasteOfMushroomsText5Bullet" />
            </li>
            <li>
              <MultiLingualContent contentID="smellAndTasteOfMushroomsText6Bullet" />
            </li>
            <li>
              <MultiLingualContent contentID="smellAndTasteOfMushroomsText7Bullet" />
            </li>
            <li>
              <MultiLingualContent contentID="smellAndTasteOfMushroomsText8Bullet" />
            </li>
            <li>
              <MultiLingualContent contentID="smellAndTasteOfMushroomsText9Bullet" />
            </li>
            <li>
              <MultiLingualContent contentID="smellAndTasteOfMushroomsText10Bullet" />
            </li>
            <li>
              <MultiLingualContent contentID="smellAndTasteOfMushroomsText11Bullet" />
            </li>
            <li>
              <MultiLingualContent contentID="smellAndTasteOfMushroomsText12Bullet" />
            </li>
            <li>
              <MultiLingualContent contentID="smellAndTasteOfMushroomsText13Bullet" />
            </li>
            <li>
              <MultiLingualContent contentID="smellAndTasteOfMushroomsText14Bullet" />
            </li>
          </ul>
          <br />
          <p>
            <MultiLingualContent contentID="smellAndTasteOfMushroomsText15" />
          </p>
        </div>
      </>
    </div>
  );
};

export default SmellAndTasteOfMushrooms;
