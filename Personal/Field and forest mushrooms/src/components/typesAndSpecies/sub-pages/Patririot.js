import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import nolit from "../../../assets/images/nolit.jpg";
import kfitzit from "../../../assets/images/kfitzit.jpg";
import buatit from "../../../assets/images/buatit.jpg";

const Patririot = () => {
  return (
    <div className="inner-section" id="patririot">
      <div className="goBackWrapper">
        <a href="/" className="goBack">
          <span>&#8594;</span>
          <MultiLingualContent contentID="goBack" />
        </a>
      </div>
      <h2>
        <MultiLingualContent contentID="patririot" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="patririotText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="patririotText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="patririotText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="patririotText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="patririotText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="patririotText6" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={nolit}
              alt={<MultiLingualContent contentID="patririotImg1" />}
            />
            <p>
              <MultiLingualContent contentID="patririotImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={kfitzit}
              alt={<MultiLingualContent contentID="patririotImg2" />}
            />
            <p>
              <MultiLingualContent contentID="patririotImg2" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={buatit}
              alt={<MultiLingualContent contentID="patririotImg3" />}
            />
            <p>
              <MultiLingualContent contentID="patririotImg3" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Patririot;
