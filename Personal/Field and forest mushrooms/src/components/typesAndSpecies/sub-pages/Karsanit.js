import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import karsanit1 from "../../../assets/images/karsanit1.jpg";
import karsanit2 from "../../../assets/images/karsanit2.jpg";
import karsanit3 from "../../../assets/images/karsanit3.jpg";
import karsanit4 from "../../../assets/images/karsanit4.jpg";

const Karsanit = () => {
  return (
    <div className="inner-section" id="karsanit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="karsanit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="karsanitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="karsanitText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="karsanitText3Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="karsanitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="karsanitText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="karsanitText5" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={karsanit1}
              alt={<MultiLingualContent contentID="karsanitImg1" />}
            />
            <p>
              <MultiLingualContent contentID="karsanitImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={karsanit2}
              alt={<MultiLingualContent contentID="karsanitImg2" />}
            />
            <p>
              <MultiLingualContent contentID="karsanitImg2" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={karsanit3}
              alt={<MultiLingualContent contentID="karsanitImg3" />}
            />
            <p>
              <MultiLingualContent contentID="karsanitImg3" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={karsanit4}
              alt={<MultiLingualContent contentID="karsanitImg4" />}
            />
            <p>
              <MultiLingualContent contentID="karsanitImg4" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Karsanit;
