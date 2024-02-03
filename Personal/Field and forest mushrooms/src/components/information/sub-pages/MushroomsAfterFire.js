import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import phuma from "../../../assets/images/phuma.jpg";

const MushroomsAfterFire = () => {
  return (
    <div className="inner-section" id="mushroomsAfterFire">
      <div className="goBackWrapper">
        <a href="/" className="goBack">
          <span>&#8594;</span>
          <MultiLingualContent contentID="goBack" />
        </a>
      </div>
      <h2>
        <MultiLingualContent contentID="mushroomsAfterFire" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="mushroomsAfterFireText1" />
          </p>
          <ul className="informationTextQuestions">
            <li>
              {" "}
              <MultiLingualContent contentID="mushroomsAfterFireText2" />
            </li>
            <li>
              {" "}
              <MultiLingualContent contentID="mushroomsAfterFireText3" />
            </li>
            <li>
              {" "}
              <MultiLingualContent contentID="mushroomsAfterFireText4" />
            </li>
          </ul>
          <p>
            <MultiLingualContent contentID="mushroomsAfterFireText5" />
          </p>
          <p>
            <MultiLingualContent contentID="mushroomsAfterFireText6" />
          </p>
          <ul>
            <li>
              {" "}
              <MultiLingualContent contentID="mushroomsAfterFireText7" />
            </li>
            <li>
              {" "}
              <MultiLingualContent contentID="mushroomsAfterFireText8" />
            </li>
            <li>
              {" "}
              <MultiLingualContent contentID="mushroomsAfterFireText9" />
            </li>
            <li>
              {" "}
              <MultiLingualContent contentID="mushroomsAfterFireText10" />
            </li>
            <li>
              {" "}
              <MultiLingualContent contentID="mushroomsAfterFireText11" />
            </li>
          </ul>
          <p>
            <MultiLingualContent contentID="mushroomsAfterFireText12" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <img
                src={phuma}
                alt={<MultiLingualContent contentID="mushroomsAfterFireImg1" />}
              />
              <p>
                <MultiLingualContent contentID="mushroomsAfterFireImg1" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default MushroomsAfterFire;
