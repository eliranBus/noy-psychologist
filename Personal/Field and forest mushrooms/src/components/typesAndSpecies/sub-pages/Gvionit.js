import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import gvion from "../../../assets/images/gvion.jpg";
import BackButton from "../../backButton";

const Gvionit = () => {
  return (
    <div className="inner-section" id="gvionit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="gvionit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="gvionitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="gvionitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="gvionitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="gvionitText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="gvionitText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="gvionitText6" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={gvion}
              alt={<MultiLingualContent contentID="oraniaImg1" />}
            />
            <p>
              <MultiLingualContent contentID="oraniaImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Gvionit;
