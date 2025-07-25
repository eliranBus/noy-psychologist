import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p> &#169; {year} כל הזכויות שמורות לנוי טל-רוט</p>
      <a
        href="https://eliran-web-developer.netlify.app"
        target="_blank"
        rel="noreferrer"
        className="developedByLink"
      >
        פותח ע''י אלירן בוסקילה
      </a>
    </footer>
  );
};

export default Footer;
