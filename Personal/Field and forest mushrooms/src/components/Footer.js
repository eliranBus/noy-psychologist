import React from "react";
import MultiLingualContent from "../languages/MultiLingualContent";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>
        {" "}
        &#169; {year} <MultiLingualContent contentID="allrightsReservedTo" />
        <span className="logo footer-logo" href="#header">
          <MultiLingualContent contentID="logo" />
        </span>
        -{" "}
        <span>
          <MultiLingualContent contentID="bruria" />
        </span>
      </p>
      <a
        href="https://eliran-web-developer.netlify.com"
        target="_blank"
        rel="noreferrer"
        className="developedByLink"
      >
        <MultiLingualContent contentID="developedBy" />
      </a>
    </footer>
  );
};

export default Footer;
