import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import flags from "../../../assets/images/flags.jpg";
import dog from "../../../assets/images/dog.jpg";
import porchini from "../../../assets/images/porchini.jpg";
import amanita from "../../../assets/images/amanita.jpg";
import truffle from "../../../assets/images/truffle.jpg";
import sale from "../../../assets/images/sale.jpg";
import BackButton from "../../backButton";

const ItalyConference = () => {
  return (
    <div className="inner-section" id="italyConference">
      <BackButton />
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
          <div className="informationImagesItaly">
            <div className="imgWrapper">
              <img
                src={flags}
                alt={<MultiLingualContent contentID="italyConferenceImg1" />}
              />
              <p>
                <MultiLingualContent contentID="italyConferenceImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <img
                src={porchini}
                alt={<MultiLingualContent contentID="italyConferenceImg2" />}
              />
              <p>
                <MultiLingualContent contentID="italyConferenceImg2" />
              </p>
            </div>
            <div className="imgWrapper">
              <img
                src={dog}
                alt={<MultiLingualContent contentID="italyConferenceImg3" />}
              />
              <p>
                <MultiLingualContent contentID="italyConferenceImg3" />
              </p>
            </div>
          </div>
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
            <img
              src={amanita}
              alt={<MultiLingualContent contentID="italyConferenceImg4" />}
            />
            <p>
              <MultiLingualContent contentID="italyConferenceImg4" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={truffle}
              alt={<MultiLingualContent contentID="italyConferenceImg5" />}
            />
            <p>
              <MultiLingualContent contentID="italyConferenceImg5" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={sale}
              alt={<MultiLingualContent contentID="italyConferenceImg6" />}
            />
            <p>
              <MultiLingualContent contentID="italyConferenceImg6" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default ItalyConference;
