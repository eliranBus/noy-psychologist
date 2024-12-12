import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import zifanit1 from "../../../assets/images/zifanit1.jpg";
import zifanit2 from "../../../assets/images/zifanit2.jpg";
import BackButton from "../../backButton";

const Zifanit = () => {
  return (
    <div className="inner-section" id="zifanit">
      <Helmet>
        <title>פטרידע - הפטריה זיפנית</title>
        <meta
          name="description"
          content="הפטריה זיפנית - Crinipellis: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="zifanit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="zifanitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="zifanitText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="zifanitText3Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="zifanitText4" />
          </p>
          <p>
            <MultiLingualContent contentID="zifanitText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="zifanitText6" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={zifanit1} alt="זיפנית" />
            <p>
              <MultiLingualContent contentID="zifanitImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={zifanit2} alt="זיפנית" />
            <p>
              <MultiLingualContent contentID="zifanitImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Zifanit;
