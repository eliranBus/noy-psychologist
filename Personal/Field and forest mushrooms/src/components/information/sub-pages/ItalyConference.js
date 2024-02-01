import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import flags from "../../../assets/images/flags.jpg";
import dog from "../../../assets/images/dog.jpg";
import porchini from "../../../assets/images/porchini.jpg";

const ItalyConference = () => {
  return (
    <div className="inner-section" id="italyConference">
      <div className="goBackWrapper">
        <a href="/" className="goBack">
          <span>&#8594;</span>
          <MultiLingualContent contentID="goBack" />
        </a>
      </div>
      <h2>
        <MultiLingualContent contentID="italyConference" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="italyConferenceText1" />
          </p>
          <p>
            <MultiLingualContent contentID="italyConferenceText2" />
          </p>
          <p>
            <MultiLingualContent contentID="italyConferenceText3" />
          </p>
          <p>
            <MultiLingualContent contentID="italyConferenceText4" />
          </p>
          <p>
            <MultiLingualContent contentID="italyConferenceText5" />
          </p>
          <p>
            <MultiLingualContent contentID="italyConferenceText6" />
          </p>
          <p>
            <MultiLingualContent contentID="italyConferenceText7" />
          </p>
          <p>
            <MultiLingualContent contentID="italyConferenceText8" />
          </p>
          <p>
            <MultiLingualContent contentID="italyConferenceText9" />
          </p>
          <p>
            <MultiLingualContent contentID="italyConferenceText10" />
          </p>
          <p>
            <MultiLingualContent contentID="italyConferenceText11" />
          </p>
        </div>
        <div className="informationImagesItaly">
          <div className="imgWrapper">
            <img src={flags} alt="דגלי הארצות המשתתפות בכנס" />
            <p>
              <MultiLingualContent contentID="italyConferenceImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img src={porchini} alt="גושית נאכלת -פורצ'יני המפורסמת" />
            <p>
              <MultiLingualContent contentID="italyConferenceImg2" />
            </p>
          </div>
          <div className="imgWrapper">
            <img src={dog} alt="צייד כמהין וכלבו המאומן" />
            <p>
              <MultiLingualContent contentID="italyConferenceImg3" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default ItalyConference;
