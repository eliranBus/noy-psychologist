import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import shinonit1 from "../../../assets/images/shinonit1.jpeg";
import BackButton from "../../backButton";

const Shinonit = () => {
  return (
    <div className="inner-section" id="shinonit">
      <Helmet>
        <title>פטרידע - הפטריה שינונית</title>
        <meta
          name="description"
          content="הפטריה שינונית - Hydnellum: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="shinonit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="shinonitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shinonitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shinonitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shinonitText4" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="shinonitText5Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="shinonitText6" />
          </p>
          <p>
            <MultiLingualContent contentID="shinonitText7" />
            <a
              href="/information/various-phenomena/teardrop-in-mushrooms"
              target="_blank"
            >
              <MultiLingualContent contentID="shinonitText8Link" />
            </a>
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={shinonit1} alt="שינונית" />
            <p>
              <MultiLingualContent contentID="shinonitImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Shinonit;
