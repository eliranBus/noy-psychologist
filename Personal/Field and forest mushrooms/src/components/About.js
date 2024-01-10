import React from "react";
import MultiLingualContent from "../languages/MultiLingualContent";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="about-wrapper inner-section">
        <h2>
          <MultiLingualContent contentID="about" />
        </h2>
        <p>
          <MultiLingualContent contentID="aboutText1" />
        </p>
        <p>
          <MultiLingualContent contentID="aboutText2" />
        </p>
        <p>
          <MultiLingualContent contentID="aboutText3" />
        </p>
        <p>
          <MultiLingualContent contentID="aboutText4" />
        </p>
        <p>
          <MultiLingualContent contentID="aboutText5" />
        </p>
        <h3 className="whatsInSite">
          <MultiLingualContent contentID="aboutWhatsInSite" />
        </h3>
        <ul className="aboutWhatsInSiteBullets">
          <li>
            <MultiLingualContent contentID="aboutWhatsInSiteBullet1" />
          </li>
          <li>
            <MultiLingualContent contentID="aboutWhatsInSiteBullet2" />
          </li>
          <li>
            <MultiLingualContent contentID="aboutWhatsInSiteBullet3" />
          </li>
          <li>
            <MultiLingualContent contentID="aboutWhatsInSiteBullet4" />
          </li>
          <li>
            <MultiLingualContent contentID="aboutWhatsInSiteBullet5" />
          </li>
          <li>
            <MultiLingualContent contentID="aboutWhatsInSiteBullet6" />
          </li>
        </ul>
        <p>
          <MultiLingualContent contentID="aboutFinalText" />
        </p>
      </div>
    </div>
  );
};

export default About;
