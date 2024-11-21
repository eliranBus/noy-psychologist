import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import tzmadit1 from "../../../assets/images/tzmadit1.jpg";
import tzmadit2 from "../../../assets/images/tzmadit2.jpg";
import tzmadit3 from "../../../assets/images/tzmadit3.jpg";
import BackButton from "../../backButton";

const Tzmadit = () => {
  return (
    <div className="inner-section" id="tzmadit">
      <Helmet>
        <title>פטרידע - הפטריה צמדית</title>
        <meta
          name="description"
          content="הפטריה צמדית - Hymenopellis: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="tzmadit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="tzmaditText0" />
          </p>
          <p>
            <MultiLingualContent contentID="tzmaditText1" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="tzmaditText2Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="tzmaditText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="tzmaditText4" />
          </p>
          <p>
            <MultiLingualContent contentID="tzmaditText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="tzmaditText6" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={tzmadit1}
                alt={<MultiLingualContent contentID="tzmaditImg1" />}
              />
              <p>
                <MultiLingualContent contentID="tzmaditImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage
                src={tzmadit2}
                alt={<MultiLingualContent contentID="tzmaditImg2" />}
              />
              <p>
                <MultiLingualContent contentID="tzmaditImg2" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage
                src={tzmadit3}
                alt={<MultiLingualContent contentID="tzmaditImg3" />}
              />
              <p>
                <MultiLingualContent contentID="tzmaditImg3" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Tzmadit;
