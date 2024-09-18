import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import pinit1 from "../../../assets/images/pinit1.jpg";
import pinit2 from "../../../assets/images/pinit2.jpg";
import pinit3 from "../../../assets/images/pinit3.jpg";
import pinit4 from "../../../assets/images/pinit4.jpg";
import pinit5 from "../../../assets/images/pinit5.jpg";
import BackButton from "../../backButton";

const Pinit = () => {
  return (
    <div className="inner-section" id="pinit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="pinit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="pinitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="pinitText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="pinitText3Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="pinitText4" />
          </p>
          <p>
            <MultiLingualContent contentID="pinitText5" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <img
                src={pinit1}
                alt={<MultiLingualContent contentID="pinitImg1" />}
              />
              <p>
                <MultiLingualContent contentID="pinitImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <img
                src={pinit2}
                alt={<MultiLingualContent contentID="pinitImg2" />}
              />
              <p>
                <MultiLingualContent contentID="pinitImg2" />
              </p>
            </div>
            <div className="imgWrapper">
              <img
                src={pinit3}
                alt={<MultiLingualContent contentID="pinitImg3" />}
              />
              <p>
                <MultiLingualContent contentID="pinitImg3" />
              </p>
            </div>
          </div>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="pinitText5Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="pinitText6" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <img
                src={pinit4}
                alt={<MultiLingualContent contentID="pinitImg4" />}
              />
              <p>
                <MultiLingualContent contentID="pinitImg4" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="pinitText7Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="pinitText8" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <img
                src={pinit5}
                alt={<MultiLingualContent contentID="pinitImg5" />}
              />
              <p>
                <MultiLingualContent contentID="pinitImg5" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Pinit;
