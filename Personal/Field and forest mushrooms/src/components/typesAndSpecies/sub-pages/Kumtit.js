import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import kumtit from "../../../assets/images/kumtit.jpg";

const Kumtit = () => {
  return (
    <div className="inner-section" id="kumtit">
      <div className="goBackWrapper">
        <a href="/" className="goBack">
          <span>&#8594;</span>
          <MultiLingualContent contentID="goBack" />
        </a>
      </div>
      <h2>
        <MultiLingualContent contentID="kumtit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="kumtitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kumtitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kumtitText3" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={kumtit}
              alt={<MultiLingualContent contentID="kumtitImg1" />}
            />
            <p>
              <MultiLingualContent contentID="kumtitImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Kumtit;
