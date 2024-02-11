import React from "react";
import MultiLingualContent from "../../languages/MultiLingualContent";
import { navItems } from "../navbar/navbarData";

const Observations = () => {
  let observationsBullets;
  const TITLE_NAME = "observations";

  navItems.forEach((item) => {
    if (item.title === TITLE_NAME) {
      observationsBullets = item.children;
    }
  });

  return (
    <div className="observations-wrapper inner-section" id="observations">
      <h2>
        <MultiLingualContent contentID="observations" />
      </h2>
      <div className="dataList">
        <ul className="observationsBullets">
          {observationsBullets.map(({ title, path }) => (
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

export default Observations;
