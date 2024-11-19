import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import tzmudit1 from "../../../assets/images/tzmudit1.jpg";
import tzmudit2 from "../../../assets/images/tzmudit2.jpg";
import BackButton from "../../backButton";

const Tzmudit = () => {
  return (
    <div className="inner-section" id="tzmudit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="tzmudit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="tzmuditText1" />
          </p>
          <p>
            <MultiLingualContent contentID="tzmuditText2" />
          </p>
          <p>
            <MultiLingualContent contentID="tzmuditText3" />
          </p>
          <p>
            <MultiLingualContent contentID="tzmuditText4" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={tzmudit1}
              alt={<MultiLingualContent contentID="tzmuditImg1" />}
            />
            <p>
              <MultiLingualContent contentID="tzmuditImg1" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <br />
          <p>
            <MultiLingualContent contentID="tzmuditText5" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="tzmuditText6Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="tzmuditText7" />
          </p>
          <p>
            <MultiLingualContent contentID="tzmuditText8" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="tzmuditText9Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="tzmuditText10" />
          </p>
          <p>
            <MultiLingualContent contentID="tzmuditText11" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="tzmuditText12Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="tzmuditText13" />
          </p>
          <p>
            <MultiLingualContent contentID="tzmuditText14" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={tzmudit2}
              alt={<MultiLingualContent contentID="tzmuditImg2" />}
            />
            <p>
              <MultiLingualContent contentID="tzmuditImg2" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="tzmuditText15Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="tzmuditText16" />
          </p>
          <p>
            <MultiLingualContent contentID="tzmuditText17" />
          </p>
        </div>
      </>
    </div>
  );
};

export default Tzmudit;
