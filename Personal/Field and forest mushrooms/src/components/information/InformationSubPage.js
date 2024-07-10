import React from "react";
import MultiLingualContent from "../../languages/MultiLingualContent";
import { navItems } from "../navbar/navbarData";
import BackButton from "../backButton";

const InformationSubPage = ({ subtitleName }) => {
  let informationObjects;
  let informationBullets;

  navItems.forEach((item) => {
    if (item.title === "information") {
      informationObjects = item.children;
    }
  });

  informationObjects.forEach((item) => {
    if (item.title === subtitleName) {
      informationBullets = item.children;
    }
  });

  return (
    <div className="information-wrapper inner-section" id="information">
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID={subtitleName} />
      </h2>
      <div className="dataList">
        <ul className="informationBullets">
          {informationBullets.map(({ title, path }) => (
            <li key={title}>
              <a href={path}>
                <MultiLingualContent contentID={title} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InformationSubPage;
