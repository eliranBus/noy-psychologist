import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import ravpumit1 from "../../../assets/images/ravpumit1.jpg";
import ravpumit2 from "../../../assets/images/ravpumit2.jpg";
import BackButton from "../../backButton";

const Ravpumit = () => {
  return (
    <div className="inner-section" id="ravpumit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="ravpumit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="ravpumitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="ravpumitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="ravpumitText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="ravpumitText4Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="ravpumitText5" />
          </p>
          <p>
            <MultiLingualContent contentID="ravpumitText6" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={ravpumit1}
              alt={<MultiLingualContent contentID="ravpumitImg1" />}
            />
            <p>
              <MultiLingualContent contentID="ravpumitImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={ravpumit2}
              alt={<MultiLingualContent contentID="ravpumitImg2" />}
            />
            <p>
              <MultiLingualContent contentID="ravpumitImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Ravpumit;
