import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import nartikanit1 from "../../../assets/images/nartikanit1.jpg";
import nartikanit2 from "../../../assets/images/nartikanit2.jpg";
import nartikanit3 from "../../../assets/images/nartikanit3.jpg";
import nartikanit4 from "../../../assets/images/nartikanit4.jpg";
import nartikanit5 from "../../../assets/images/nartikanit5.jpg";
import BackButton from "../../backButton";

const Nartikanit = () => {
  return (
    <div className="inner-section" id="nartikanit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="nartikanit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="nartikanitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="nartikanitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="nartikanitText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="nartikanitText4Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="nartikanitText5" />
          </p>
          <p>
            <MultiLingualContent contentID="nartikanitText6" />
          </p>
          <p>
            <MultiLingualContent contentID="nartikanitText7" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={nartikanit1} alt="נרתיקנית" />
            <p>
              <MultiLingualContent contentID="nartikanitImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={nartikanit2} alt="נרתיקנית" />
            <p>
              <MultiLingualContent contentID="nartikanitImg2" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="nartikanitText8Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="nartikanitText9" />
          </p>
          <p>
            <MultiLingualContent contentID="nartikanitText10" />
          </p>
          <p>
            <MultiLingualContent contentID="nartikanitText11" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={nartikanit3} alt="נרתיקנית" />
            <p>
              <MultiLingualContent contentID="nartikanitImg3" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={nartikanit4} alt="נרתיקנית" />
            <p>
              <MultiLingualContent contentID="nartikanitImg4" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="nartikanitText12Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="nartikanitText13" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={nartikanit5} alt="נרתיקנית" />
            <p>
              <MultiLingualContent contentID="nartikanitImg5" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Nartikanit;
