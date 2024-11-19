import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import bookCover from "../../../assets/images/bookCover.jpg";
import illustration from "../../../assets/images/mushroonIllustration.jpg";
import BackButton from "../../backButton";

const WhyIsItCalledAMushroom = () => {
  return (
    <div className="inner-section" id="plantMushroomBond">
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="whyIsItCalledAMushroom" />
      </h2>
      <>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={bookCover} alt="עטיפת הספר" />
          </div>
        </div>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="whyIsItCalledAMushroomText1" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="whyIsItCalledAMushroomText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="whyIsItCalledAMushroomText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="whyIsItCalledAMushroomText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="whyIsItCalledAMushroomText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="whyIsItCalledAMushroomText6" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="whyIsItCalledAMushroomText7" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={illustration} alt="שלבי חיי הפטריה" />
          </div>
        </div>
      </>
    </div>
  );
};

export default WhyIsItCalledAMushroom;
