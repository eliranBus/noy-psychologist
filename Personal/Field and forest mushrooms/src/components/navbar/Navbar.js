import React, { useContext, useEffect, useRef } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import Hebrew from "../../assets/images/Hebrew.png";
import English from "../../assets/images/English.png";
import MultiLingualContent from "../../languages/MultiLingualContent";
import { setStorageLanguage } from "../../assets/utilities";
import { navItems } from "./navbarData";
import NavLink from "./NavLink";
import logo from "../../assets/images/header/logo.png";

const NavBar = ({ setOpen, open }) => {
  const navbar = useRef();
  const { language, hebrewLanguage, englishLanguage } =
    useContext(LanguageContext);

  let myScrollFunc = function () {
    let y = window.scrollY;
    if (y >= 20) {
      navbar?.current?.classList?.add("show");
    } else {
      navbar?.current?.classList?.remove("show");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", myScrollFunc);
  }, []);

  const handleLanguageChange = (language) => {
    if (language === "English") {
      setStorageLanguage("English");
      englishLanguage();
    } else {
      setStorageLanguage("Hebrew");
      hebrewLanguage();
    }
  };

  return (
    <nav
      id="nav"
      ref={navbar}
      className="nav hide"
      style={{ padding: language === "English" ? "20px 0" : "10px 0" }}
    >
      <div className="navcolumn1">
        <span className="nav-logo">
          <img src={logo} alt="mushroom svg" className="svg-logo" />
          <a className="logo" href="#header">
            <MultiLingualContent contentID="logo" />
          </a>
        </span>
        {/* <div className="languages">
          <button
            className="language"
            onClick={() => handleLanguageChange("Hebrew")}
          >
            <img src={Hebrew} alt="Hebrew" />
          </button>
          <button
            className="language"
            onClick={() => handleLanguageChange("English")}
          >
            <img src={English} alt="English" />
          </button>
        </div> */}
      </div>
      <div
        className="navcolumn2"
        style={{ direction: language === "Hebrew" ? "rtl" : "ltr" }}
      >
        {navItems.map(({ id, title, path, cName, children }) =>
          children?.length > 0 ? (
            <NavLink
              id={id}
              title={title}
              path={path}
              cName={cName}
              children={children}
              key={id}
            />
          ) : (
            <span className={cName} key={id}>
              <a href={path}>
                <MultiLingualContent contentID={title} />
              </a>
            </span>
          )
        )}
      </div>
      <div className="hamburger">
        <div className="container nav-container">
          <input
            className="checkbox"
            type="checkbox"
            name=""
            id=""
            onClick={() => setOpen(!open)}
          />
          <div className={`hamburger-lines ${!open ? "closed" : "open"}`}>
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
