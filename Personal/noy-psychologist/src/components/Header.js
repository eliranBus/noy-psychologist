import React from "react";
import noy from "../assets/images/noy.jpeg";

const Header = () => {
  return (
    <div className="header-wrapper">
      <header id="header">
        <div className="header-title">
          <h1>נוי טל-רוט</h1>
          <h2>פסיכולוגית</h2>
        </div>
        <div className="header-img-wrapper">
          <img src={noy} alt="noy-img" className="header-img" />
        </div>
        <svg
          id="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-300 0 950 270"
        >
          <path
            d="M-314,267 C105,364 400,100 812,279"
            fill="none"
            stroke="white"
            stroke-width="120"
            stroke-linecap="round"
          />
        </svg>
      </header>

      {/* <section>
        <div className="header-subtitle">
          <h3 className="fieldTitle">
            בעלת ניסיון טיפולי בהתמודדות עם מגוון נושאים וביניהם:
          </h3>
          <ul className="fields">
            <li>חרדה, דיכאון ופוסט-טראומה</li>
            <li>תהליכי אבל ואובדן</li>
            <li>קשיי הסתגלות, קשיים חברתיים, קשיים רגשיים ובין-אישיים</li>
            <li>התמודדות עם פציעות טראומטיות, מחלות וכאבים כרוניים</li>
            <li>פגיעות מיניות</li>
          </ul>
        </div>
      </section> */}
    </div>
  );
};

export default Header;
