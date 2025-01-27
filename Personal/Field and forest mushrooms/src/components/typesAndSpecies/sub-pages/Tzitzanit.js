import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import tzitzanit1 from "../../../assets/images/tzitzanit1.jpeg";
import tzitzanit2 from "../../../assets/images/tzitzanit2.jpeg";
import tzitzanit3 from "../../../assets/images/tzitzanit3.jpeg";
import BackButton from "../../backButton";

const Tzitzanit = () => {
  return (
    <div className="inner-section" id="tzitzanit">
      <Helmet>
        <title>פטרידע - הפטריה ציצנית</title>
        <meta
          name="description"
          content="הפטריה ציצנית - Hebeloma: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="tzitzanit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="tzitzanitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="tzitzanitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="tzitzanitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="tzitzanitText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="tzitzanitText5" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="tzitzanitText6Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="tzitzanitText7" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={tzitzanit1} alt="ציצנית" />
              <p>
                <MultiLingualContent contentID="tzitzanitImg1" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="tzitzanitText6Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="tzitzanitText7" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={tzitzanit2} alt="ציצנית" />
              <p>
                <MultiLingualContent contentID="tzitzanitImg2" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="tzitzanitText10Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="tzitzanitText11" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={tzitzanit3} alt="ציצנית" />
              <p>
                <MultiLingualContent contentID="tzitzanitImg3" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Tzitzanit;
