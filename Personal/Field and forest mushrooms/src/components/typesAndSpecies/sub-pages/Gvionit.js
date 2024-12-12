import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import gvionit1 from "../../../assets/images/gvionit1.jpeg";
import gvionit2 from "../../../assets/images/gvionit2.jpg";
import BackButton from "../../backButton";

const Gvionit = () => {
  return (
    <div className="inner-section" id="gvionit">
      <Helmet>
        <title>פטרידע - הפטריה גביעונית</title>
        <meta
          name="description"
          content="הפטריה גביעונית - Cantharellus: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="gvionit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="gvionitText0" />
          </p>
          <p>
            <MultiLingualContent contentID="gvionitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="gvionitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="gvionitText21" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="gvionitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="gvionitText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="gvionitText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="gvionitText6" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={gvionit1} alt="גביעונית" />
            <p>
              <MultiLingualContent contentID="gvionitImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={gvionit2} alt="גביעונית" />
            <p>
              <MultiLingualContent contentID="gvionitImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Gvionit;
