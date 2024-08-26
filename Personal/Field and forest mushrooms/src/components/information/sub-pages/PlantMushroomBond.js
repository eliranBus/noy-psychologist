import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import orania from "../../../assets/images/orania.jpg";
import mycorrhizae1 from "../../../assets/images/mycorrhizae1.jpg";
import BackButton from "../../backButton";

const PlantMushroomBond = () => {
  return (
    <div className="inner-section" id="plantMushroomBond">
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="plantMushroomBondTitle" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="plantMushroomBondText1" />
          </p>
          <p>
            <MultiLingualContent contentID="plantMushroomBondText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="plantMushroomBondText21" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="plantMushroomBondTextBold3" />
            </b>
            <MultiLingualContent contentID="plantMushroomBondText3" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="plantMushroomBondTextBold4" />
            </b>
            <MultiLingualContent contentID="plantMushroomBondText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="plantMushroomBondText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="plantMushroomBondText6" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img src={orania} alt="אורניה במיקוריזה עם אורן" />
            <p>
              <MultiLingualContent contentID="plantMushroomBondImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img src={mycorrhizae1} alt="פטריה עוטפת שורש" />
          </div>
        </div>
      </>
    </div>
  );
};

export default PlantMushroomBond;
