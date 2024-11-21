import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import limonit from "../../../assets/images/limonit.jpg";
import BackButton from "../../backButton";

const Limonit = () => {
  return (
    <div className="inner-section" id="limonit">
      <Helmet>
        <title>פטרידע - הפטריה לימונית</title>
        <meta
          name="description"
          content="הפטריה לימונית - Leucocoprinus flos-sulfuris / birnbaumii: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="limonit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="limonitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="limonitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="limonitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="limonitText4" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={limonit} alt="עציצית לימונית" />
          </div>
        </div>
      </>
    </div>
  );
};

export default Limonit;
