import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import toxic from "../../../assets/images/toxic.jpg";
import radioactive from "../../../assets/images/radioactive.png";

const Absorb = () => {
  return (
    <div className="inner-section" id="absorb">
      <Helmet>
        <title>פטרידע - פטריות סופגות חומרים מסוכנים</title>
        <meta name="description" />
      </Helmet>
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="absorb" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="absorbText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="absorbText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="absorbText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="absorbText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="absorbText5" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={toxic} alt="toxic" />
            </div>
            <div className="imgWrapper">
              <LazyLoadImage
                src={radioactive}
                alt="פטריות סופגות חומרים מסוכנים"
              />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Absorb;
