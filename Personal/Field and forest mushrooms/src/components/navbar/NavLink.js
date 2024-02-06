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
        {dropdown && (
          <ul
            className={`${!dropdown ? "hidden" : "dropdown"} ${title}Dropdown`}
            onClick={() => setDropdown(!dropdown)}
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            {children.map(({ id, title, path, cName }) => {
              return (
                <li key={id} className={cName}>
                  <a
                    href={path}
                    onClick={() => setDropdown(false)}
                    className={
                      language === "English" ? "englishLink" : "hebrewLink"
                    }
                  >
                    <MultiLingualContent contentID={title} />{" "}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </span>
    </>
  );
};

export default NavLink;
