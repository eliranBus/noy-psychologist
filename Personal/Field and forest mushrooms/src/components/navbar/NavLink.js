import React, { useContext, useState } from "react";
import MultiLingualContent from "../../languages/MultiLingualContent";
import { LanguageContext } from "../../context/LanguageContext";

const NavLink = ({ id, title, path, cName, children }) => {
  const [dropdown, setDropdown] = useState(false);
  const { language } = useContext(LanguageContext);

  return (
    <>
      <span
        className={cName}
        key={id}
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
      >
        <a href={path}>
          <MultiLingualContent contentID={title} />
        </a>
      </span>
      {dropdown && (
        <ul
          className={!dropdown ? "hidden" : "dropdown"}
          onClick={() => setDropdown(!dropdown)}
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
          style={{
            marginLeft:
              title == "toursAndConferences"
                ? "190px"
                : "information"
                ? "500px"
                : "1400px",
          }}
        >
          {children.map(({ id, title, path, cName }) => {
            return (
              <li key={id} className={cName}>
                <a
                  href={path}
                  onClick={() => setDropdown(false)}
                  className={language === "English" ? "englishLink" : ""}
                >
                  <MultiLingualContent contentID={title} />{" "}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default NavLink;
