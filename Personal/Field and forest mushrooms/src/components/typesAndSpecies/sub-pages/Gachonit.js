import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import gachonit1 from "../../../assets/images/gachonit1.jpg";
import BackButton from "../../backButton";

const Gachonit = () => {
  return (
    <div className="inner-section" id="gachonit">
      <Helmet>
        <title>פטרידע - הפטריה גחונית</title>
        <meta
          name="description"
          content="הפטריה גחונית - Hypholoma: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="gachonit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="gachonitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="gachonitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="gachonitText3" />
          </p>
          <p>
            <MultiLingualContent contentID="gachonitText4" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="gachonitText5Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="gachonitText6" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={gachonit1}
              alt={<MultiLingualContent contentID="gachonitImg1" />}
            />
            <p>
              <MultiLingualContent contentID="gachonitImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Gachonit;
