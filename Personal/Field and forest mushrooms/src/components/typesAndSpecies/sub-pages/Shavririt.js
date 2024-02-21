import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import shavririt1 from "../../../assets/images/shavririt1.jpg";
import shavririt2 from "../../../assets/images/shavririt2.jpg";

const Shavririt = () => {
  return (
    <div className="inner-section" id="shavririt">
      <div className="goBackWrapper">
        <a href="/" className="goBack">
          <span>&#8594;</span>
          <MultiLingualContent contentID="goBack" />
        </a>
      </div>
      <h2>
        <MultiLingualContent contentID="shavririt" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="shavriritText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shavriritText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shavriritText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shavriritText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shavriritText5" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={shavririt1}
              alt={<MultiLingualContent contentID="shavriritImg1" />}
            />
            <p>
              <MultiLingualContent contentID="shavriritImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={shavririt2}
              alt={<MultiLingualContent contentID="shavriritImg2" />}
            />
            <p>
              <MultiLingualContent contentID="shavriritImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Shavririt;
