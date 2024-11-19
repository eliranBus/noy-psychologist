import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import kadur1 from "../../../assets/images/kadur1.jpg";
import kadur2 from "../../../assets/images/kadur2.jpg";
import kadur3 from "../../../assets/images/kadur3.jpg";

const Kaduriot2 = () => {
  return (
    <div className="inner-section" id="kadur">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="kadur" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="kadurText1" />
          </p>
          <p>
            <MultiLingualContent contentID="kadurText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="kadurText3Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kadurText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="kadurText4Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kadurText4" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="kadurText5Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kadurText5" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="kadurText6Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kadurText6" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={kadur1}
              alt={<MultiLingualContent contentID="kadurImg1" />}
            />
            <p>
              <MultiLingualContent contentID="kadurImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={kadur2}
              alt={<MultiLingualContent contentID="kadurImg2" />}
            />
            <p>
              <MultiLingualContent contentID="kadurImg2" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={kadur3}
              alt={<MultiLingualContent contentID="kadurImg3" />}
            />
            <p>
              <MultiLingualContent contentID="kadurImg3" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Kaduriot2;
