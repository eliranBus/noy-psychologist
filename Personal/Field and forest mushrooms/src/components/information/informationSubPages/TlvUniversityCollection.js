import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import tlv from "../../../assets/images/tlv.png";

const TlvUniversityCollection = () => {
  return (
    <div className="inner-section" id="sceintificCollectionValue">
      <Helmet>
        <title>פטרידע - אוסף אוניברסיטת תל-אביב</title>
        <meta name="description" />
      </Helmet>
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="sceintificCollectionValue" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="tlvCollectionText8" />
          </p>
          <p>
            <MultiLingualContent contentID="tlvCollectionText9" />
          </p>
          <p>
            <MultiLingualContent contentID="tlvCollectionText10" />
          </p>
          <p>
            <MultiLingualContent contentID="tlvCollectionText11" />
          </p>
          <br />
          <br />
          <div className="imgWrapper">
            <LazyLoadImage src={tlv} alt="מוזיאון תל אביב" className="tlvImg" />
          </div>
          <br />
          <br />
          <p>
            <MultiLingualContent contentID="tlvCollectionText12" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="tlvCollectionText13" />
          </p>
          <p>
            <MultiLingualContent contentID="tlvCollectionText14" />
          </p>
        </div>
      </>
    </div>
  );
};

export default TlvUniversityCollection;
