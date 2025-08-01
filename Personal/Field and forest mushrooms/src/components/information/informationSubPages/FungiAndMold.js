import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import mushroomsAndFungi1 from "../../../assets/images/mushroomsandfungi1.jpg";
import mushroomsAndFungi2 from "../../../assets/images/mushroomsandfungi2.jpg";

const FungiAndMold = () => {
  return (
    <div className="inner-section" id="fungiAndMold">
      <Helmet>
        <title>פטרידע - ההבדל בין פטריות ופיטריריות/ריריות</title>
        <meta name="description" />
      </Helmet>
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="fungiAndMold" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="fungiAndMoldText1" />
          </p>
          <p>
            <MultiLingualContent contentID="fungiAndMoldText2" />
          </p>
          <p>
            <MultiLingualContent contentID="fungiAndMoldText3" />
          </p>
          <p>
            <MultiLingualContent contentID="fungiAndMoldText4" />
          </p>
          <p>
            <MultiLingualContent contentID="fungiAndMoldText5" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={mushroomsAndFungi1} alt="פיטריריות/ריריות" />
              <p>
                <MultiLingualContent contentID="fungiAndMoldImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={mushroomsAndFungi2} alt="פיטריריות/ריריות" />
              <p>
                <MultiLingualContent contentID="fungiAndMoldImg2" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default FungiAndMold;
