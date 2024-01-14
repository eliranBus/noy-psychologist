import React from "react";
import MultiLingualContent from "../../languages/MultiLingualContent";
import { navItems } from "../navbar/navbarData";

const Information = () => {
  let informationBullets;
  navItems.forEach((item) => {
    if (item.title === "informationLink") {
      informationBullets = item.children;
    }
  });

  return (
    <div className="information-wrapper inner-section" id="information">
      <h2>
        <MultiLingualContent contentID="information" />
      </h2>
      <div className="dataList">
        <ul>
          {informationBullets.map(({ title, path }) => (
            <li>
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
