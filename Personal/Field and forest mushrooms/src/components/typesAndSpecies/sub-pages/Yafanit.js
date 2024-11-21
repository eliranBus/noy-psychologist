import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import yafanit from "../../../assets/images/yafanit.jpg";
import BackButton from "../../backButton";

const Yafanit = () => {
  return (
    <div className="inner-section" id="yafanit">
      <Helmet>
        <title>פטרידע - הפטריה יפענית</title>
        <meta
          name="description"
          content="הפטריה יפענית - Terena caerulea: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="yafanit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="yafanitFamily" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="yafanitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="yafanitText2" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={yafanit}
              alt={<MultiLingualContent contentID="yafanitImg1" />}
            />
            <p>
              <MultiLingualContent contentID="yafanitImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Yafanit;
