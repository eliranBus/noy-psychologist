import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import shavririt from "../../../assets/images/shavririt.jpg";
import BackButton from "../../backButton";

const SimilarButDifferent = () => {
  return (
    <div className="inner-section" id="largeBrown">
      <Helmet>
        <title>פטרידע - חומות הגדלות בקבוצות</title>
        <meta name="description" />
      </Helmet>
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="largeBrown" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="similarButDifferentText1" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="similarButDifferentText2Bold" />
            </b>
            <MultiLingualContent contentID="similarButDifferentText2" />
            <b>
              <MultiLingualContent contentID="similarButDifferentText3Bold" />
            </b>
            <MultiLingualContent contentID="similarButDifferentText3" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={shavririt}
                alt={<MultiLingualContent contentID="similarButDifferentImg" />}
              />
              <p>
                <MultiLingualContent contentID="similarButDifferentImg" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default SimilarButDifferent;
