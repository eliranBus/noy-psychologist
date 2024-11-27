import React from "react";
import { Helmet } from "react-helmet";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";

const SporeSpreading = () => {
  return (
    <div className="inner-section" id="sporeSpreading">
      <Helmet>
        <title>פטרידע - הפצת נבגים בפטריות</title>
        <meta name="description" />
      </Helmet>
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="sporeSpreading" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="sporeSpreadingText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="sporeSpreadingText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="sporeSpreadingText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="sporeSpreadingText4Bold" />
            </b>
            <MultiLingualContent contentID="sporeSpreadingText4" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="sporeSpreadingText5Bold" />
            </b>
            <MultiLingualContent contentID="sporeSpreadingText5" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="sporeSpreadingText6Bold" />
            </b>
            <MultiLingualContent contentID="sporeSpreadingText6" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="sporeSpreadingText7Bold" />
            </b>
            <MultiLingualContent contentID="sporeSpreadingText7" />
          </p>
          <br />
          <h3>
            <b>
              <MultiLingualContent contentID="sporeSpreadingText8Bold" />
            </b>
          </h3>
          <p>
            <b>
              <MultiLingualContent contentID="sporeSpreadingText9Bold" />
            </b>
            <MultiLingualContent contentID="sporeSpreadingText9" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="sporeSpreadingText10Bold" />
            </b>
            <MultiLingualContent contentID="sporeSpreadingText10" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="sporeSpreadingText11Bold" />
            </b>
            <MultiLingualContent contentID="sporeSpreadingText11" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="sporeSpreadingText12Bold" />
            </b>
            <MultiLingualContent contentID="sporeSpreadingText12" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="sporeSpreadingText13Bold" />
            </b>
            <MultiLingualContent contentID="sporeSpreadingText13" />
          </p>
          <br />
          <h3>
            <b>
              <MultiLingualContent contentID="sporeSpreadingLinksBold" />
            </b>
          </h3>
          <p>
            <a
              href="https://www.insectour.com/%d7%a4%d7%98%d7%a8%d7%99%d7%95%d7%aa-%d7%94%d7%9e%d7%95%d7%a9%d7%9b%d7%95%d7%aa-%d7%96%d7%91%d7%95%d7%91%d7%99%d7%9d"
              target="_blank"
              rel="noreferrer"
            >
              <MultiLingualContent contentID="sporeSpreadingLink" />
            </a>
          </p>
        </div>
      </>
    </div>
  );
};

export default SporeSpreading;
