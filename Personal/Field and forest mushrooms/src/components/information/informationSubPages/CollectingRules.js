import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import collectingRules1 from "../../../assets/images/collectingrules1.jpeg";

const CollectingRules = () => {
  return (
    <div className="inner-section" id="collectingRules">
      <Helmet>
        <title>פטרידע - הכללים לליקוט נכון בטבע</title>
        <meta name="description" />
      </Helmet>
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="collectingRules" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="collectingRulesText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="collectingRulesText2" />
          </p>
          <p>
            <MultiLingualContent contentID="collectingRulesText3" />
          </p>
          <p>
            <MultiLingualContent contentID="collectingRulesText4" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={collectingRules1} alt="פטריות בסלסילה" />
              <p>
                <MultiLingualContent contentID="collectingRulesImg1" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="collectingRulesText5Bold" />
            </b>
          </p>
          <ul>
            <li>
              <MultiLingualContent contentID="collectingRulesList1" />
            </li>
            <li>
              <MultiLingualContent contentID="collectingRulesList2" />
            </li>
            <li>
              <MultiLingualContent contentID="collectingRulesList3" />
            </li>
            <li>
              <MultiLingualContent contentID="collectingRulesList4" />
            </li>
            <li>
              <MultiLingualContent contentID="collectingRulesList5" />
            </li>
            <li>
              <MultiLingualContent contentID="collectingRulesList6" />
            </li>
            <li>
              <MultiLingualContent contentID="collectingRulesList7" />
            </li>
            <li>
              <MultiLingualContent contentID="collectingRulesList8" />
            </li>
          </ul>
          <p>
            <b>
              <MultiLingualContent contentID="collectingRulesText6Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="collectingRulesText7" />
          </p>
          <br />
          <br />
          <p>
            <MultiLingualContent contentID="collectingRulesText8" />
            <a
              href="https://www.youtube.com/shorts/iUhYqYFKjRo"
              target="_blank"
              rel="noreferrer"
            >
              <MultiLingualContent contentID="collectingRulesText9" />
            </a>
          </p>
          <p>
            <MultiLingualContent contentID="collectingRulesText10" />
          </p>
        </div>
      </>
    </div>
  );
};

export default CollectingRules;
