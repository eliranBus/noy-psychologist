import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import parts from "../../../assets/images/parts.jpeg";
import BackButton from "../../backButton";

const CapMushroomParts = () => {
  return (
    <div className="inner-section" id="capMushroomParts">
      <Helmet>
        <title>פטרידע - צורות וחלקי פטריות הכובע, צורות כובע ורגל</title>
        <meta name="description" />
      </Helmet>
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="capMushroomParts" />
      </h2>
      <>
        <div className="imgWrapper">
          <LazyLoadImage src={parts} alt="צורות וחלקי פטריות הכובע" />
          <p>
            <MultiLingualContent contentID="capMushroomPartsImg1" />
          </p>
        </div>
      </>
    </div>
  );
};

export default CapMushroomParts;
