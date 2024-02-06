import React from "react";
import MultiLingualContent from "../../languages/MultiLingualContent";
import { navItems } from "../navbar/navbarData";

const Information = () => {
  let informationBullets;
  const TITLE_NAME = "information";

  navItems.forEach((item) => {
    if (item.title === TITLE_NAME) {
      informationBullets = item.children;
    }
  });

  return (
    <div className="information-wrapper inner-section" id="information">
      <h2>
        <MultiLingualContent contentID="information" />
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

export default Information;
