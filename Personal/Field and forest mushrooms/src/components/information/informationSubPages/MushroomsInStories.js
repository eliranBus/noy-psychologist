import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import lavkanit from "../../../assets/images/lavkanit.jpg";
import lohevet from "../../../assets/images/lohevet.jpg";

const MushroomsInStories = () => {
  return (
    <div className="inner-section" id="StoriesAndBeliefs">
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="StoriesAndBeliefs" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="StoriesAndBeliefsText1" />
          </p>
          <p>
            <MultiLingualContent contentID="StoriesAndBeliefsText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="StoriesAndBeliefsText3Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="StoriesAndBeliefsText4" />
          </p>
          <p>
            <MultiLingualContent contentID="StoriesAndBeliefsText5" />
          </p>
          <p>
            <MultiLingualContent contentID="StoriesAndBeliefsText7" />
          </p>
          <p>
            <MultiLingualContent contentID="StoriesAndBeliefsText8" />
          </p>
          <p>
            <MultiLingualContent contentID="StoriesAndBeliefsText9" />
          </p>
          <p>
            <MultiLingualContent contentID="StoriesAndBeliefsText10" />
          </p>
          <p>
            <MultiLingualContent contentID="StoriesAndBeliefsText11" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="StoriesAndBeliefsText12" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="StoriesAndBeliefsText13Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="StoriesAndBeliefsText14" />
          </p>
          <p>
            <MultiLingualContent contentID="StoriesAndBeliefsText15" />
          </p>
          <p>
            <MultiLingualContent contentID="StoriesAndBeliefsText16" />
          </p>
          <p>
            <MultiLingualContent contentID="StoriesAndBeliefsText17" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="StoriesAndBeliefsText18Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="StoriesAndBeliefsText19" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="StoriesAndBeliefsText20" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="StoriesAndBeliefsText21" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="StoriesAndBeliefsText22" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="StoriesAndBeliefsText23" />
          </p>
        </div>
      </>
    </div>
  );
};

export default MushroomsInStories;
