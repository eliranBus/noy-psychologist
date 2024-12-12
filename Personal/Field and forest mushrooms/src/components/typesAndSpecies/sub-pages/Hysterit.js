import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import hysterit1 from "../../../assets/images/hysterit1.jpg";
import hysterit2 from "../../../assets/images/hysterit2.jpg";

const Hysterit = () => {
  return (
    <div className="inner-section" id="hysterit">
      <Helmet>
        <title>פטרידע - הפטריה היסטרית</title>
        <meta
          name="description"
          content="הפטריה היסטרית - Hystrerangium: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="hysterit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="hysteritText1" />
          </p>
          <p>
            <MultiLingualContent contentID="hysteritText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="hysteritText3Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="hysteritText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="hysteritText4" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={hysterit1} alt="היסטרית" />
            <p>
              <MultiLingualContent contentID="hysteritImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={hysterit2} alt="היסטרית" />
            <p>
              <MultiLingualContent contentID="hysteritImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Hysterit;
