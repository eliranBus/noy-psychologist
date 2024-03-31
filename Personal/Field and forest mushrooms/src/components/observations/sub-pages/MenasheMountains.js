import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import kurkevanit from "../../../assets/images/kurkevanit.jpg";
import BackButton from "../../backButton";

const MenasheMountains = () => {
  return (
    <div className="inner-section" id="menasheMountains">
      <BackButton path="/#observations" />
      <h2>
        <MultiLingualContent contentID="menasheMountains" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="menasheMountainsDate" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="menasheMountainsText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="menasheMountainsText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="menasheMountainsText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="menasheMountainsText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="menasheMountainsText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="menasheMountainsText6" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="menasheMountainsText7" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="menasheMountainsText8" />
          </p>
          <br />
          <br />
          <p>
            <MultiLingualContent contentID="menasheMountainsText9" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={kurkevanit}
              alt={<MultiLingualContent contentID="menasheMountainsImg1" />}
            />
            <p>
              <MultiLingualContent contentID="menasheMountainsImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default MenasheMountains;
