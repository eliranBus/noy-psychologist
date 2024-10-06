import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import leshonit1 from "../../../assets/images/leshonit1.jpg";
import BackButton from "../../backButton";

const Leshonit = () => {
  return (
    <div className="inner-section" id="leshonit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="leshonit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="leshonitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="leshonitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="leshonitText3" />
          </p>
          <p>
            <MultiLingualContent contentID="leshonitText4" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={leshonit1}
              alt={<MultiLingualContent contentID="leshonitImg1" />}
            />
            <p>
              <MultiLingualContent contentID="leshonitImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Leshonit;
