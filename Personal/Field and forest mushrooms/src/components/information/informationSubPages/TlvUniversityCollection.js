import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import decorative from "../../../assets/decoratives/6.png";

const TlvUniversityCollection = () => {
  return (
    <div className="inner-section" id="sceintificCollectionValue">
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="sceintificCollectionValue" />
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
          <p>
            <MultiLingualContent contentID="tlvCollectionText7" />
          </p>
          <p>
            <MultiLingualContent contentID="tlvCollectionText8" />
          </p>
          <p>
            <MultiLingualContent contentID="tlvCollectionText9" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="tlvCollectionText10" />
          </p>
          <p>
            <MultiLingualContent contentID="tlvCollectionText11" />
          </p>
        </div>
      </>
      <img src={decorative} alt="" className="decorative" />
    </div>
  );
};

export default TlvUniversityCollection;
