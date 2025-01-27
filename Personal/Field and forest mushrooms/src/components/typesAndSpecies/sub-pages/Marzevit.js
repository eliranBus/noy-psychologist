import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import marzevit1 from "../../../assets/images/marzevit1.jpeg";
import marzevit2 from "../../../assets/images/marzevit2.jpeg";
import BackButton from "../../backButton";

const Marzevit = () => {
  return (
    <div className="inner-section" id="marzevit">
      <Helmet>
        <title>פטרידע - הפטריה מרזבית</title>
        <meta
          name="description"
          content="הפטריה מרזבית - Hoenbuelia: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="marzevit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="marzevitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="marzevitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="marzevitText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="marzevitText4Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="marzevitText5" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={marzevit1} alt="מרזבית" />
              <p>
                <MultiLingualContent contentID="marzevitImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={marzevit2} alt="מרזבית" />
              <p>
                <MultiLingualContent contentID="marzevitImg2" />
              </p>
            </div>
          </div>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="marzevitText6Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="marzevitText7" />
          </p>
        </div>
      </>
    </div>
  );
};

export default Marzevit;
