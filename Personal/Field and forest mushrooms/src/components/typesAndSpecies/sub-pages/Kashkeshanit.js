import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import kashkeshanit1 from "../../../assets/images/kashkeshanit1.jpg";
import kashkeshanit2 from "../../../assets/images/kashkeshanit2.jpg";
import kashkeshanit3 from "../../../assets/images/kashkeshanit3.jpg";
import BackButton from "../../backButton";

const Kashkeshanit = () => {
  return (
    <div className="inner-section" id="kashkeshanit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="kashkeshanit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="kashkeshanitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="kashkeshanitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="kashkeshanitText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="kashkeshanitText4Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="kashkeshanitText5" />
          </p>
          <p>
            <MultiLingualContent contentID="kashkeshanitText6" />
          </p>
          <p>
            <MultiLingualContent contentID="kashkeshanitText7" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <img
                src={kashkeshanit1}
                alt={<MultiLingualContent contentID="kashkeshanitImg1" />}
              />
              <p>
                <MultiLingualContent contentID="kashkeshanitImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <img
                src={kashkeshanit2}
                alt={<MultiLingualContent contentID="kashkeshanitImg2" />}
              />
              <p>
                <MultiLingualContent contentID="kashkeshanitImg2" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="kashkeshanitText8Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="kashkeshanitText9" />
          </p>
          <p>
            <MultiLingualContent contentID="kashkeshanitText10" />
          </p>
          <p>
            <MultiLingualContent contentID="kashkeshanitText11" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="kashkeshanitText12Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="kashkeshanitText13" />
          </p>
          <p>
            <MultiLingualContent contentID="kashkeshanitText14" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={kashkeshanit3}
              alt={<MultiLingualContent contentID="kashkeshanitImg3" />}
            />
            <p>
              <MultiLingualContent contentID="kashkeshanitImg3" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Kashkeshanit;
