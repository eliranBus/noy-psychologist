import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import kumtit from "../../../assets/images/kumtit.jpg";
import BackButton from "../../backButton";

const Kumtit = () => {
  return (
    <div className="inner-section" id="kumtit">
      <Helmet>
        <title>פטרידע - הפטריה כומתית</title>
        <meta
          name="description"
          content="הפטריה כומתית - Galerina: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="kumtit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="kumtitText0" />
          </p>
          <p>
            <MultiLingualContent contentID="kumtitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kumtitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kumtitText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="kumtitBold1" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="kumtitText4" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="kumtitBold2" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="kumtitText5" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={kumtit} alt="כומתית" />
            <p>
              <MultiLingualContent contentID="kumtitImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Kumtit;
