import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import lehavit1 from "../../../assets/images/lehavit1.jpg";
import lehavit2 from "../../../assets/images/lehavit2.jpg";
import lehavit3 from "../../../assets/images/lehavit3.jpg";

const Lehavit = () => {
  return (
    <div className="inner-section" id="lehavit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="lehavit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="lehavitText0" />
          </p>
          <p>
            <MultiLingualContent contentID="lehavitText1" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="lehavitText2Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="lehavitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="lehavitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="lehavitText4" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={lehavit1}
              alt={<MultiLingualContent contentID="lehavitImg1" />}
            />
            <p>
              <MultiLingualContent contentID="lehavitImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={lehavit2}
              alt={<MultiLingualContent contentID="lehavitImg2" />}
            />
            <p>
              <MultiLingualContent contentID="lehavitImg2" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={lehavit3}
              alt={<MultiLingualContent contentID="lehavitImg3" />}
            />
            <p>
              <MultiLingualContent contentID="lehavitImg3" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Lehavit;
