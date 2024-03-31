import React from "react";
import MultiLingualContent from "../../languages/MultiLingualContent";

const BackButton = ({ path = "/" }) => {
  return (
    <div className="goBackWrapper">
      <a href={path} className="goBack">
        <span>&#8594;</span>
        <MultiLingualContent contentID="goBack" />
      </a>
    </div>
  );
};

export default BackButton;
