import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { isMobile } from "react-device-detect";
import { useHistory } from "react-router-dom";
import MultiLingualContent from "../../languages/MultiLingualContent";
import arrow from "../../assets/images/back-arrow.png";

const BackButton = () => {
  let history = useHistory();

  return (
    <div className="goBackWrapper">
      <button onClick={() => history.goBack()} className="goBackButton">
        {isMobile ? (
          <LazyLoadImage
            src={arrow}
            alt="go back arrow"
            className="goBackArrow"
          />
        ) : (
          <>
            <LazyLoadImage
              src={arrow}
              alt="go back arrow"
              className="goBackArrow"
            />
            <MultiLingualContent contentID="goBack" />
          </>
        )}
      </button>
    </div>
  );
};

export default BackButton;
