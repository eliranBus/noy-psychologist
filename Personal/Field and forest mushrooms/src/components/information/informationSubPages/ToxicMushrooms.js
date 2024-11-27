import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import poisonous from "../../../assets/images/poisonous.jpg";
import decorative from "../../../assets/decoratives/8.png";

const ToxicMushrooms = () => {
  return (
    <div className="inner-section" id="toxicityInMushrooms">
      <Helmet>
        <title>פטרידע - רעילות בפטריות</title>
        <meta name="description" />
      </Helmet>
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="toxicity" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="toxicityInMushroomsText1" />
          </p>
          <p>
            <MultiLingualContent contentID="toxicityInMushroomsText2" />
          </p>
          <p>
            <MultiLingualContent contentID="toxicityInMushroomsText3" />
          </p>
          <p>
            <MultiLingualContent contentID="toxicityInMushroomsText4" />
          </p>
          <p>
            <MultiLingualContent contentID="toxicityInMushroomsText5" />
          </p>
          <LazyLoadImage src={decorative} alt="" className="decorative-toxic" />
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="toxicityInMushroomsText6Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="toxicityInMushroomsText7" />
          </p>
          <p>
            <MultiLingualContent contentID="toxicityInMushroomsText8" />
          </p>
          <p>
            <MultiLingualContent contentID="toxicityInMushroomsText9" />
          </p>
          <p>
            <MultiLingualContent contentID="toxicityInMushroomsText10" />
          </p>
          <p>
            <MultiLingualContent contentID="toxicityInMushroomsText11" />
          </p>
          <p>
            <MultiLingualContent contentID="toxicityInMushroomsText12" />
          </p>
          <p>
            <MultiLingualContent contentID="toxicityInMushroomsText13" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="toxicityInMushroomsText14Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="toxicityInMushroomsText15" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={poisonous} alt="רעילות בפטריות" />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ToxicMushrooms;
