import React from "react";
import MultiLingualContent from "../languages/MultiLingualContent";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>
        {" "}
        &#169; {year} <MultiLingualContent contentID="allrightsReservedTo" />
        <a className="logo footer-logo" href="#header">
          <MultiLingualContent contentID="logo" />
        </a>
      </p>
      <a
        href="https://github.com/eliranBus"
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
