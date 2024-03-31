import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import nakvovanit from "../../../assets/images/nakvovanit.jpg";
import shitaki from "../../../assets/images/shitaki.jpg";
import shimaji from "../../../assets/images/shimaji.jpg";
import gvionitYellow from "../../../assets/images/gvionitYellow.jpg";
import BackButton from "../../backButton";

const FoodAndMedicine = () => {
  return (
    <div className="inner-section" id="foodAndMedicine">
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="foodAndMedicine" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="foodAndMedicineText1" />
          </p>
          <p>
            <MultiLingualContent contentID="foodAndMedicineText2" />
          </p>
          <p>
            <MultiLingualContent contentID="foodAndMedicineText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="foodAndMedicineText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="foodAndMedicineText5" />
          </p>
          <br />

          <p>
            <b>
              <MultiLingualContent contentID="foodAndMedicineText6" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="foodAndMedicineText7" />
          </p>
          <ul>
            <li>
              <MultiLingualContent contentID="foodAndMedicineBullet1" />
            </li>
            <li>
              <MultiLingualContent contentID="foodAndMedicineBullet2" />
            </li>
            <li>
              <MultiLingualContent contentID="foodAndMedicineBullet3" />
            </li>
            <li>
              <MultiLingualContent contentID="foodAndMedicineBullet4" />
            </li>
            <li>
              <MultiLingualContent contentID="foodAndMedicineBullet5" />
            </li>
            <li>
              <MultiLingualContent contentID="foodAndMedicineBullet6" />
            </li>
            <li>
              <MultiLingualContent contentID="foodAndMedicineBullet7" />
            </li>
            <li>
              <MultiLingualContent contentID="foodAndMedicineBullet8" />
            </li>
          </ul>
          <br />

          <p>
            <MultiLingualContent contentID="foodAndMedicineText8" />
          </p>
          <ul>
            <li>
              <MultiLingualContent contentID="foodAndMedicineBullet9" />
            </li>
            <li>
              <MultiLingualContent contentID="foodAndMedicineBullet10" />
            </li>
            <li>
              <MultiLingualContent contentID="foodAndMedicineBullet11" />
            </li>
            <li>
              <MultiLingualContent contentID="foodAndMedicineBullet12" />
            </li>
            <li>
              <MultiLingualContent contentID="foodAndMedicineBullet13" />
            </li>
            <li>
              <MultiLingualContent contentID="foodAndMedicineBullet14" />
            </li>
          </ul>
          <br />
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={nakvovanit}
              alt={<MultiLingualContent contentID="foodAndMedicineImg1" />}
            />
            <p>
              <MultiLingualContent contentID="foodAndMedicineImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={shitaki}
              alt={<MultiLingualContent contentID="foodAndMedicineImg2" />}
            />
            <p>
              <MultiLingualContent contentID="foodAndMedicineImg2" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={shimaji}
              alt={<MultiLingualContent contentID="foodAndMedicineImg3" />}
            />
            <p>
              <MultiLingualContent contentID="foodAndMedicineImg3" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={gvionitYellow}
              alt={<MultiLingualContent contentID="foodAndMedicineImg4" />}
            />
            <p>
              <MultiLingualContent contentID="foodAndMedicineImg4" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default FoodAndMedicine;
