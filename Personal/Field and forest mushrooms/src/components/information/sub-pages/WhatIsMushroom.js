import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import mold from "../../../assets/images/mold.jpg";
import lifeCycle from "../../../assets/images/lifeCycle.jpg";
import BackButton from "../../backButton";

const WhatIsMushroom = () => {
  return (
    <div className="inner-section" id="whatIsMushroom">
      <Helmet>
        <title>פטרידע - פטרייה, מהי</title>
        <meta name="description" />
      </Helmet>
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="whatIsMushroom" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="whatIsMushroomText1" />
          </p>
          <p>
            <MultiLingualContent contentID="whatIsMushroomText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="whatIsMushroomText3" />
          </p>
          <ul>
            <li>
              <b>
                <MultiLingualContent contentID="whatIsMushroombulletTitle1" />
              </b>
              <MultiLingualContent contentID="whatIsMushroombulletText1" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="whatIsMushroombulletTitle2" />
              </b>
              <MultiLingualContent contentID="whatIsMushroombulletText2" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="whatIsMushroombulletTitle3" />
              </b>
              <MultiLingualContent contentID="whatIsMushroombulletText3" />
            </li>
          </ul>
          <p>
            <MultiLingualContent contentID="whatIsMushroomText4" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={mold} alt="עובש" />
            <p>
              <MultiLingualContent contentID="whatIsMushroomImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={lifeCycle} alt="מחזור חיי הפטרייה" />
            <p>
              <MultiLingualContent contentID="whatIsMushroomImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default WhatIsMushroom;
