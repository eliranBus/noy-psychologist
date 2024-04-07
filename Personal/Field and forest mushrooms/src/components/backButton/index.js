import React from "react";
import { useHistory } from "react-router-dom";
import MultiLingualContent from "../../languages/MultiLingualContent";

const BackButton = ({ path = "/" }) => {
  let history = useHistory();

  return (
    <div className="goBackWrapper">
      <button onClick={() => history.goBack()} className="goBackButton">
        <span>&#8594;</span>
        <MultiLingualContent contentID="goBack" />
      </button>
    </div>
  );
};

export default BackButton;
