import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import tzivonit1 from "../../../assets/images/tzivonit1.jpeg";
import tzivonit2 from "../../../assets/images/tzivonit2.jpeg";
import BackButton from "../../backButton";

const Tzivonit = () => {
  return (
    <div className="inner-section" id="tzivonit">
      <Helmet>
        <title>פטרידע - הפטריה צבעונית</title>
        <meta
          name="description"
          content="הפטריה צבעונית - Panaeolus: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="tzivonit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="tzivonitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="tzivonitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="tzivonitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="tzivonitText4" />
          </p>
          <p>
            <MultiLingualContent contentID="tzivonitText5" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="tzivonitText6Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="tzivonitText7" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={tzivonit1} alt="צבעונית" />
              <p>
                <MultiLingualContent contentID="tzivonitImg1" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="tzivonitText8Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="tzivonitText9" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={tzivonit2} alt="צבעונית" />
              <p>
                <MultiLingualContent contentID="tzivonitImg2" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Tzivonit;
