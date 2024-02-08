import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import kmehit from "../../../assets/images/kmehit.jpg";

const Kmehit = () => {
  return (
    <div className="inner-section" id="kmehit">
      <div className="goBackWrapper">
        <a href="/" className="goBack">
          <span>&#8594;</span>
          <MultiLingualContent contentID="goBack" />
        </a>
      </div>
      <h2>
        <MultiLingualContent contentID="kmehit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="kmehitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kmehitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kmehitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kmehitText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kmehitText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kmehitText6" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kmehitText7" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kmehitText8" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kmehitText9" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kmehitText10" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={kmehit}
              alt={<MultiLingualContent contentID="kmehitImg1" />}
            />
            <p>
              <MultiLingualContent contentID="kmehitImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Kmehit;
