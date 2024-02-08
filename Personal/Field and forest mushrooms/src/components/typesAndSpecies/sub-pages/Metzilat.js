import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import metzilat1 from "../../../assets/images/metzilat1.jpg";
import metzilat2 from "../../../assets/images/metzilat2.jpg";

const Metzilat = () => {
  return (
    <div className="inner-section" id="metzilat">
      <div className="goBackWrapper">
        <a href="/" className="goBack">
          <span>&#8594;</span>
          <MultiLingualContent contentID="goBack" />
        </a>
      </div>
      <h2>
        <MultiLingualContent contentID="metzilat" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="metzilatText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="metzilatText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="metzilatText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="metzilatText4" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={metzilat1}
              alt={<MultiLingualContent contentID="metzilatImg1" />}
            />
            <p>
              <MultiLingualContent contentID="metzilatImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={metzilat2}
              alt={<MultiLingualContent contentID="metzilatImg2" />}
            />
            <p>
              <MultiLingualContent contentID="metzilatImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Metzilat;
