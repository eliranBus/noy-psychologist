import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import hadurit1 from "../../../assets/images/hadurit1.jpeg";
import BackButton from "../../backButton";

const Hadurit = () => {
  return (
    <div className="inner-section" id="hadurit">
      <Helmet>
        <title>פטרידע - הפטריה הדורית</title>
        <meta
          name="description"
          content="הפטריה הדורית - Boletopsis: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="hadurit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="haduritText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="haduritText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="haduritText3" />
          </p>
          <br />
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="haduritText4Bold" />
            </b>
            <MultiLingualContent contentID="haduritText5" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={hadurit1} alt="הדורית" />
            <p>
              <MultiLingualContent contentID="haduritImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Hadurit;
