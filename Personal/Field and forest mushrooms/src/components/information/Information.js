import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../languages/MultiLingualContent";
import { navItems } from "../navbar/navbarData";
import decorative from "../../assets/decoratives/5.png";

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
          <LazyLoadImage
            src={decorative}
            alt=""
            className="decorative-information"
          />
        </ul>
      </div>
    </div>
  );
};

export default Information;
