import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import decorative from "../../../assets/decoratives/9.png";

const EdibleSpeciesInIsreal = () => {
  return (
    <div className="inner-section" id="edibleSpeciesInIsreal">
      <Helmet>
        <title>פטרידע - פטריות מאכל בישראל</title>
        <meta
          name="description"
          content="פטריות מאכל בישראל :תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="edibleSpeciesInIsreal" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="edibleSpeciesInIsrealText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="edibleSpeciesInIsrealText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="edibleSpeciesInIsrealText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="edibleSpeciesInIsrealText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="edibleSpeciesInIsrealText5" />
          </p>
          <LazyLoadImage
            src={decorative}
            alt=""
            className="decorative-edible"
          />
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="edibleSpeciesInIsrealText6Bold" />
            </b>
          </p>
          <ul>
            <li>
              <MultiLingualContent contentID="edibleSpeciesInIsrealText7List" />
            </li>
            <br />
            <li>
              <MultiLingualContent contentID="edibleSpeciesInIsrealText8List" />
            </li>
            <br />
            <li>
              <MultiLingualContent contentID="edibleSpeciesInIsrealText9List" />
            </li>
            <br />
            <li>
              <MultiLingualContent contentID="edibleSpeciesInIsrealText10List" />
            </li>
            <br />
            <li>
              <MultiLingualContent contentID="edibleSpeciesInIsrealText11List" />
            </li>
            <br />
            <li>
              <MultiLingualContent contentID="edibleSpeciesInIsrealText12List" />
            </li>
            <br />
            <li>
              <MultiLingualContent contentID="edibleSpeciesInIsrealText13List" />
            </li>
            <br />
            <li>
              <MultiLingualContent contentID="edibleSpeciesInIsrealText14List" />
            </li>
            <br />
          </ul>
          <br />
          <p>
            <MultiLingualContent contentID="edibleSpeciesInIsrealText15Bold" />
          </p>
          <p className="underlined">
            <MultiLingualContent contentID="edibleSpeciesInIsrealText16Underlined" />
          </p>
          <p>
            <MultiLingualContent contentID="edibleSpeciesInIsrealText17" />
          </p>
          <p className="underlined">
            <MultiLingualContent contentID="edibleSpeciesInIsrealText18Underlined" />
          </p>
          <p>
            <MultiLingualContent contentID="edibleSpeciesInIsrealText19" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="edibleSpeciesInIsrealText20Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="edibleSpeciesInIsrealText21" />
          </p>
        </div>
      </>
    </div>
  );
};

export default EdibleSpeciesInIsreal;
