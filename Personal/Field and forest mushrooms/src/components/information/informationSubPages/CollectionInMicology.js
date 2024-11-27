import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import decorative from "../../../assets/decoratives/6.png";

const CollectionInMicology = () => {
  return (
    <div className="inner-section" id="sceintificCollectionMicology">
      <Helmet>
        <title>פטרידע - אוסף פטריות לשירות מדע המיקולוגיה</title>
        <meta name="description" />
      </Helmet>
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="sceintificCollectionMicology" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="tlvCollectionText1" />
          </p>
          <p>
            <MultiLingualContent contentID="tlvCollectionText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="tlvCollectionText3" />
          </p>
          <p>
            <MultiLingualContent contentID="tlvCollectionText4" />
          </p>
          <p>
            <MultiLingualContent contentID="tlvCollectionText5" />
          </p>
          <p>
            <MultiLingualContent contentID="tlvCollectionText6" />
          </p>
          <br />
          <div className="imgWrapper">
            <LazyLoadImage
              src={decorative}
              alt={<MultiLingualContent contentID="collectionImg1" />}
              className="decorative-print"
            />
            <p>
              <MultiLingualContent contentID="collectionImg1" />
            </p>
          </div>
          <br />
        </div>
      </>
    </div>
  );
};

export default CollectionInMicology;
