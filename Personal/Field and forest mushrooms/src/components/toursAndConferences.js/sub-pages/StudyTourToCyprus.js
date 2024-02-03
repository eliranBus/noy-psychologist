import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import amanitaProxima from "../../../assets/images/amanitaProxima.jpg";
import ahlamit from "../../../assets/images/ahlamit.jpg";
import cyprus from "../../../assets/images/cyprus.jpg";

const StudyTourToCyprus = () => {
  return (
    <div className="inner-section" id="studyTourToCyprus">
      <div className="goBackWrapper">
        <a href="/" className="goBack">
          <span>&#8594;</span>
          <MultiLingualContent contentID="goBack" />
        </a>
      </div>
      <h2>
        <MultiLingualContent contentID="studyTourToCyprus" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="studyTourToCyprusText1" />
          </p>
          <p>
            <MultiLingualContent contentID="studyTourToCyprusText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="studyTourToCyprusText3Bold" />
            </b>
            <MultiLingualContent contentID="studyTourToCyprusText3" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="studyTourToCyprusText4Bold" />
            </b>
            <MultiLingualContent contentID="studyTourToCyprusText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="studyTourToCyprusText5" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="studyTourToCyprusText6Bold" />
            </b>
            <MultiLingualContent contentID="studyTourToCyprusText6" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="studyTourToCyprusText7Bold" />
            </b>
            <MultiLingualContent contentID="studyTourToCyprusText7" />
          </p>
          <p>
            <MultiLingualContent contentID="studyTourToCyprusText8" />
          </p>
          <p>
            <MultiLingualContent contentID="studyTourToCyprusText9" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={amanitaProxima}
              alt={<MultiLingualContent contentID="studyTourToCyprusImg1" />}
            />
            <p>
              <MultiLingualContent contentID="studyTourToCyprusImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={ahlamit}
              alt={<MultiLingualContent contentID="studyTourToCyprusImg2" />}
            />
            <p>
              <MultiLingualContent contentID="studyTourToCyprusImg2" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={cyprus}
              alt={<MultiLingualContent contentID="studyTourToCyprusImg3" />}
            />
            <p>
              <MultiLingualContent contentID="studyTourToCyprusImg3" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default StudyTourToCyprus;
