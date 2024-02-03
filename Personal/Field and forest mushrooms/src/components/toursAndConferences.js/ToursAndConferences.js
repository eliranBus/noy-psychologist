import React from "react";
import MultiLingualContent from "../../languages/MultiLingualContent";
import { navItems } from "../navbar/navbarData";

const ToursAndConferences = () => {
  let toursAndConferencesBullets;
  const TITLE_NAME = "toursAndConferences";

  navItems.forEach((item) => {
    if (item.title === TITLE_NAME) {
      toursAndConferencesBullets = item.children;
    }
  });

  return (
    <div className="information-wrapper inner-section" id="toursAndConferences">
      <h2>
        <MultiLingualContent contentID="toursAndConferences" />
      </h2>
      <div className="dataList">
        <ul className="informationBullets">
          {toursAndConferencesBullets.map(({ title, path }) => (
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

export default ToursAndConferences;
