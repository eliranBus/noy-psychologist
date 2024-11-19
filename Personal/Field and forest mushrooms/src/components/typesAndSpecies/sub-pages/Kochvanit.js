import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import kochvanit1 from "../../../assets/images/kochvanit1.jpg";
import kochvanit2 from "../../../assets/images/kochvanit2.jpg";
import kochvanit3 from "../../../assets/images/kochvanit3.jpg";
import kochvanit4 from "../../../assets/images/kochvanit4.jpg";
import kochvanit5 from "../../../assets/images/kochvanit5.jpg";
import kochvanit6 from "../../../assets/images/kochvanit6.jpg";
import kochvanit7 from "../../../assets/images/kochvanit7.jpg";
import kochvanit8 from "../../../assets/images/kochvanit8.jpg";
import BackButton from "../../backButton";

const Kochvanit = () => {
  return (
    <div className="inner-section" id="Kochvanit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="Kochvanit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="KochvanitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="KochvanitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="KochvanitText3" />
          </p>
          <p>
            <MultiLingualContent contentID="KochvanitText4" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="KochvanitText5Bold" />
            </b>
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={kochvanit1} alt="" />
            </div>
            <div className="imgWrapper">
              <LazyLoadImage
                src={kochvanit2}
                alt={<MultiLingualContent contentID="KochvanitImg1" />}
              />
              <p>
                <MultiLingualContent contentID="KochvanitImg1" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="KochvanitText6Bold" />
            </b>
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={kochvanit3} alt="" />
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="KochvanitText7Bold" />
            </b>
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={kochvanit4} alt="" />
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="KochvanitText8Bold" />
            </b>
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={kochvanit5} alt="" />
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="KochvanitText9Bold" />
            </b>
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={kochvanit6}
                alt={<MultiLingualContent contentID="KochvanitImg2" />}
              />
              <p>
                <MultiLingualContent contentID="KochvanitImg2" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage
                src={kochvanit7}
                alt={<MultiLingualContent contentID="KochvanitImg3" />}
              />
              <p>
                <MultiLingualContent contentID="KochvanitImg3" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="KochvanitText10Bold" />
            </b>
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={kochvanit8}
              alt={<MultiLingualContent contentID="KochvanitImg4" />}
            />
            <p>
              <MultiLingualContent contentID="KochvanitImg4" />
            </p>
          </div>
        </div>
        <p>
          <MultiLingualContent contentID="KochvanitText11" />
        </p>
      </>
    </div>
  );
};

export default Kochvanit;
