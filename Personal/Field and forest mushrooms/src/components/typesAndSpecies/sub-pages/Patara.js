import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import patara1 from "../../../assets/images/patara1.jpg";
import BackButton from "../../backButton";

const Patara = () => {
  return (
    <div className="inner-section" id="patara">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="patara" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="pataraText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="pataraText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="pataraText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="pataraText4" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={patara1}
              alt={<MultiLingualContent contentID="pataraImg1" />}
            />
            <p>
              <MultiLingualContent contentID="pataraImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Patara;
