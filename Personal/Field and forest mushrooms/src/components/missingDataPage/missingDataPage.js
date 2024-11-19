import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../languages/MultiLingualContent";
import disappointed from "../../assets/images/disappointed.jpg";
import BackButton from "../backButton";

const MissingDataPage = () => {
  return (
    <div className="inner-section" id="foodAndMedicine">
      <BackButton />
      <div className="missingDataTextWrapper">
        <h2 className="missingDataText1">
          <MultiLingualContent contentID="missingType1" />
        </h2>
        <h3 className="missingDataText2">
          <MultiLingualContent contentID="missingType2" />
        </h3>
      </div>
      <div className="missingImgWrapper">
        <LazyLoadImage
          src={disappointed}
          alt="data is missing"
          className="missingImg"
        />
      </div>
    </div>
  );
};

export default MissingDataPage;
