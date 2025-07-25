import React, { useEffect, useRef } from "react";
import { navbarLinks } from "../assets/navbar-links/navbarLinks";

const NavBar = ({ setOpen, open }) => {
  const navbar = useRef();

  let myScrollFunc = function () {
    let y = window.scrollY;
    if (y >= 100) {
      navbar.current.classList.add("show");
    } else {
      navbar.current.classList.remove("show");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", myScrollFunc);
  }, []);

  return (
    <nav id="nav" ref={navbar} className="nav hide">
      <div className="navcolumn1">
        <span className="nav-logo">
          <a className="logo" href="#header">
            נוי טל-רוט - פסיכולוגית
          </a>
        </span>
      </div>
      <div className="navcolumn2" style={{ direction: "rtl" }}>
        {navbarLinks.map(({ name, link }) => (
          <span className="nav-text-link">
            <a href={link}>{name}</a>
          </span>
        ))}
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
