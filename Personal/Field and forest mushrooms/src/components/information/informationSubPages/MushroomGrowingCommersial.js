import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import howToGrowMushrooms1 from "../../../assets/images/howtogrowmushrooms1.jpg";
import howToGrowMushrooms2 from "../../../assets/images/howtogrowmushrooms2.jpg";

const MushroomGrowingCommersial = () => {
  return (
    <div className="inner-section" id="growingForMedicine">
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="growingForMedicine" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="growingForMedicineText1" />
          </p>
          <p>
            <MultiLingualContent contentID="growingForMedicineText2" />
          </p>
          <p>
            <MultiLingualContent contentID="growingForMedicineText3" />
          </p>
          <p>
            <MultiLingualContent contentID="growingForMedicineText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="growingForMedicineText5" />
          </p>
          <br />
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="growingForMedicineText6Bold" />
            </b>
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="growingForMedicineText7Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="growingForMedicineText8" />
          </p>
          <p>
            <MultiLingualContent contentID="growingForMedicineText9" />
          </p>
          <p>
            <MultiLingualContent contentID="growingForMedicineText10" />
          </p>
          <p>
            <MultiLingualContent contentID="growingForMedicineText11" />
          </p>
          <p>
            <MultiLingualContent contentID="growingForMedicineText12" />
          </p>
          <p>
            <MultiLingualContent contentID="growingForMedicineText13" />
          </p>
          <p>
            <MultiLingualContent contentID="growingForMedicineText14" />
          </p>
          <p>
            <MultiLingualContent contentID="growingForMedicineText15" />
          </p>
          <p>
            <MultiLingualContent contentID="growingForMedicineText16" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="growingForMedicineText17Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="growingForMedicineText18" />
          </p>
          <p>
            <MultiLingualContent contentID="growingForMedicineText19" />
          </p>
          <p>
            <MultiLingualContent contentID="growingForMedicineText20" />
          </p>
          <p>
            <MultiLingualContent contentID="growingForMedicineText21" />
          </p>
          <p>
            <MultiLingualContent contentID="growingForMedicineText22" />
          </p>
          <p>
            <MultiLingualContent contentID="growingForMedicineText23" />
          </p>
          <p>
            <MultiLingualContent contentID="growingForMedicineText24" />
          </p>
          <br />
          <div className="informationImages">
            <div className="imgWrapper">
              <img src={howToGrowMushrooms1} alt="" />
            </div>
            <div className="imgWrapper">
              <img src={howToGrowMushrooms2} alt="" />
            </div>
          </div>
          <p>
            <MultiLingualContent contentID="growingForMedicineImg1" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="growingForMedicineText25Bold" />
            </b>
          </p>
          <br />
          <a href="https://www.ynet.co.il/articles/0,7340,L-5654584,00.html">
            <MultiLingualContent contentID="growingForMedicineText26" />
          </a>
          <br />
          <a href="https://www.seriouseats.com/2015/06/mushroom-shopping-guide.html">
            <MultiLingualContent contentID="growingForMedicineText27" />
          </a>
          <br />
          <a href="https://www.facebook.com/110954272269869/posts/5225376374160941/">
            <MultiLingualContent contentID="growingForMedicineText28" />
          </a>
        </div>
      </>
    </div>
  );
};

export default MushroomGrowingCommersial;
