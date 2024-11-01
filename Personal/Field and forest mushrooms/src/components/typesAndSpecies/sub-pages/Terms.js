import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import decorative from "../../../assets/decoratives/9.png";

const Terms = () => {
  return (
    <div className="inner-section" id="terms">
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="terms" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="termsText1Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="termsText2" />
          </p>
          <p>
            <MultiLingualContent contentID="termsText3" />
          </p>
          <p>
            <MultiLingualContent contentID="termsText4" />
          </p>
          <p>
            <MultiLingualContent contentID="termsText5" />
          </p>
          <p>
            <MultiLingualContent contentID="termsText6" />
          </p>
          <p>
            <MultiLingualContent contentID="termsText7" />
          </p>
          <p>
            <MultiLingualContent contentID="termsText8" />
          </p>
          <p>
            <MultiLingualContent contentID="termsText9" />
          </p>
          <p>
            <MultiLingualContent contentID="termsText10" />
          </p>
          <p>
            <MultiLingualContent contentID="termsText11" />
          </p>
          <p>
            <MultiLingualContent contentID="termsText12" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="termsText13Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="termsText14" />
          </p>
          <p>
            <MultiLingualContent contentID="termsText15" />
          </p>
          <p>
            <MultiLingualContent contentID="termsText16" />
          </p>
          <p>
            <MultiLingualContent contentID="termsText17" />
          </p>
          <p>
            <MultiLingualContent contentID="termsText18" />
          </p>
          <p>
            <MultiLingualContent contentID="termsText19" />
          </p>
          <p>
            <MultiLingualContent contentID="termsText20" />
          </p>
          <p>
            <MultiLingualContent contentID="termsText21" />
          </p>
          <p>
            <MultiLingualContent contentID="termsText22" />
          </p>
        </div>
      </>
    </div>
  );
};

export default Terms;
