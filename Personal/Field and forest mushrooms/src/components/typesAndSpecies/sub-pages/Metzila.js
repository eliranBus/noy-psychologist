import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import metzila1 from "../../../assets/images/metzila1.jpg";
import metzila2 from "../../../assets/images/metzila2.jpg";
import BackButton from "../../backButton";

const Metzila = () => {
  return (
    <div className="inner-section" id="metzila">
      <Helmet>
        <title>פטרידע - הפטריה מצילה</title>
        <meta
          name="description"
          content="הפטריה מצילה - Cyathus: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="metzila" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="metzilaText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="metzilaText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="metzilaText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="metzilaText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="metzilaText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="metzilaText6" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="metzilaText7Bold" />
            </b>
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="metzilaText8Bold" />
            </b>
            <MultiLingualContent contentID="metzilaText8" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={metzila1} alt="מצילה" />
            <p>
              <MultiLingualContent contentID="metzilaImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={metzila2} alt="מצילה" />
            <p>
              <MultiLingualContent contentID="metzilaImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Metzila;
