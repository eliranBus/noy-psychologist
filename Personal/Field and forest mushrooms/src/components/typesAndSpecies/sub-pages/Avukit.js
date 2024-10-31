import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import avukit1 from "../../../assets/images/avukit1.jpg";
import avukit2 from "../../../assets/images/avukit2.jpg";
import BackButton from "../../backButton";

const Avukit = () => {
  return (
    <div className="inner-section" id="avukit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="avukit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="avukitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="avukitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="avukitText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="avukitText4Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="avukitText5" />
          </p>
          <p>
            <MultiLingualContent contentID="avukitText6" />
          </p>
          <p>
            <MultiLingualContent contentID="avukitText7" />
          </p>
          <p>
            <MultiLingualContent contentID="avukitText8" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={avukit1}
              alt={<MultiLingualContent contentID="avukitImg1" />}
            />
            <p>
              <MultiLingualContent contentID="avukitImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={avukit2}
              alt={<MultiLingualContent contentID="avukitImg2" />}
            />
            <p>
              <MultiLingualContent contentID="avukitImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Avukit;
