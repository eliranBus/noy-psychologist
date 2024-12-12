import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import leshonit1 from "../../../assets/images/leshonit1.jpg";
import BackButton from "../../backButton";

const Leshonit = () => {
  return (
    <div className="inner-section" id="leshonit">
      <Helmet>
        <title>פטרידע - הפטריה לשונית</title>
        <meta
          name="description"
          content="הפטריה לשונית - Geoglossuaceae: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="leshonit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="leshonitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="leshonitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="leshonitText3" />
          </p>
          <p>
            <MultiLingualContent contentID="leshonitText4" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={leshonit1} alt="לשונית" />
            <p>
              <MultiLingualContent contentID="leshonitImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Leshonit;
