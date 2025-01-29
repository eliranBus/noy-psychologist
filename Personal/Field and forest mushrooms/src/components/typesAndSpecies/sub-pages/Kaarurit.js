import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import kaarurit1 from "../../../assets/images/kaarurit1.jpeg";
import BackButton from "../../backButton";

const Kaarurit = () => {
  return (
    <div className="inner-section" id="kaarurit">
      <Helmet>
        <title>פטרידע - הפטריה קערורית</title>
        <meta
          name="description"
          content="הפטריה קערורית - Marcelleina: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="kaarurit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="kaaruritText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kaaruritText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="kaaruritText3Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="kaaruritText4" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={kaarurit1} alt="קערורית" />
            <p>
              <MultiLingualContent contentID="kaaruritImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Kaarurit;
