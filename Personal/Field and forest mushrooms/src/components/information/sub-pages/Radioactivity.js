import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import kamronit from "../../../assets/images/kamronit.jpg";

const Radioactivity = () => {
  return (
    <div className="inner-section" id="radioactivity">
      <div className="goBackWrapper">
        <a href="/" className="goBack">
          <span>&#8594;</span>
          <MultiLingualContent contentID="goBack" />
        </a>
      </div>
      <h2>
        <MultiLingualContent contentID="radioactivity" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="radioactivityText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="radioactivityText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="radioactivityText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="radioactivityText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="radioactivityText5" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={kamronit}
              alt={<MultiLingualContent contentID="radioactivityImg1" />}
            />
            <p>
              <MultiLingualContent contentID="radioactivityImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Radioactivity;
