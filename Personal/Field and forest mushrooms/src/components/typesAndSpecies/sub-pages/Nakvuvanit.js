import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import nakvuvit1 from "../../../assets/images/nakvuvit1.jpg";
import nakvuvit2 from "../../../assets/images/nakvuvit2.jpg";
import BackButton from "../../backButton";

const Nakvuvanit = () => {
  return (
    <div className="inner-section" id="nakvuvit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="nakvuvit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="nakvuvitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="nakvuvitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="nakvuvitText3" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={nakvuvit1}
              alt={<MultiLingualContent contentID="nakvuvitImg1" />}
            />
            <p>
              <MultiLingualContent contentID="nakvuvitImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={nakvuvit2}
              alt={<MultiLingualContent contentID="nakvuvitImg1" />}
            />
            <p>
              <MultiLingualContent contentID="nakvuvitImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Nakvuvanit;
