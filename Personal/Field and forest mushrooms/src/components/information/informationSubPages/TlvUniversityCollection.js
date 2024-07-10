import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";

const TlvUniversityCollection = () => {
  return (
    <div className="inner-section" id="tlvCollection">
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="tlvCollection" />
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
    </div>
  );
};

export default TlvUniversityCollection;
