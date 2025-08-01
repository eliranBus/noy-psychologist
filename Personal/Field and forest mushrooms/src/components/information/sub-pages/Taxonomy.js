import React from "react";
import { Helmet } from "react-helmet";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";

const Taxonomy = () => {
  return (
    <div className="inner-section" id="taxonomy">
      <Helmet>
        <title>פטרידע - טקסונומיה בפטריות</title>
        <meta name="description" />
      </Helmet>
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="taxonomy" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="taxonomyText1" />
          </p>
          <p>
            <MultiLingualContent contentID="taxonomyText2" />
          </p>
          <br />

          <p>
            <MultiLingualContent contentID="taxonomyText3" />
          </p>
          <br />
          <ul>
            <li>
              <MultiLingualContent contentID="taxonomyBullet1" />
            </li>
            <li>
              <MultiLingualContent contentID="taxonomyBullet2" />
            </li>
            <li>
              <MultiLingualContent contentID="taxonomyBullet3" />
            </li>
            <li>
              <MultiLingualContent contentID="taxonomyBullet4" />
            </li>
            <li>
              <MultiLingualContent contentID="taxonomyBullet5" />
            </li>
            <li>
              <MultiLingualContent contentID="taxonomyBullet6" />
            </li>
          </ul>
          <br />

          <p>
            <MultiLingualContent contentID="taxonomyText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="taxonomyText5" />
          </p>
          <br />

          <ul>
            <li>
              <MultiLingualContent contentID="taxonomyBullet7" />
            </li>
            <li>
              <MultiLingualContent contentID="taxonomyBullet8" />
            </li>
            <li>
              <MultiLingualContent contentID="taxonomyBullet9" />
            </li>
          </ul>
          <br />

          <p>
            <b>
              <MultiLingualContent contentID="taxonomyText7" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="taxonomyText8" />
          </p>
        </div>
      </>
    </div>
  );
};

export default Taxonomy;
