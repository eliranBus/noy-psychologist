import React from "react";
import { Link } from "react-router-dom";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";

const TheWitchCircle = () => {
  const handleLinkClicked = () => {
    setTimeout(() => {
      document.getElementById("folkloreSubtitle").scrollIntoView();
    }, 500);
    setTimeout(() => {
      document.querySelector(".swiper-button-next").click();
    }, 1500);
    setTimeout(() => {
      document.querySelector(".swiper-button-next").click();
    }, 2500);
  };

  return (
    <div className="inner-section" id="theWitchCircle">
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="witchCircles" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="witchCirclesText1" />
            <Link to="/#folklore" onClick={handleLinkClicked}>
              <MultiLingualContent contentID="witchCirclesLink" />
            </Link>
          </p>
        </div>
      </>
    </div>
  );
};

export default TheWitchCircle;
