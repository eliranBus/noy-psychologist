import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import sadanit1 from "../../../assets/images/sadanit1.jpg";
import sadanit2 from "../../../assets/images/sadanit2.jpg";
import sadanit3 from "../../../assets/images/sadanit3.jpg";
import sadanit4 from "../../../assets/images/sadanit4.jpg";
import BackButton from "../../backButton";

const Sadanit = () => {
  return (
    <div className="inner-section" id="sadanit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="sadanit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="sadanitText1" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="sadanitText2Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="sadanitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="sadanitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="sadanitText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="sadanitText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="sadanitText6" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={sadanit1}
              alt={<MultiLingualContent contentID="sadanitImg1" />}
            />
            <p>
              <MultiLingualContent contentID="sadanitImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={sadanit2}
              alt={<MultiLingualContent contentID="sadanitImg2" />}
            />
            <p>
              <MultiLingualContent contentID="sadanitImg2" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={sadanit3}
              alt={<MultiLingualContent contentID="sadanitImg3" />}
            />
            <p>
              <MultiLingualContent contentID="sadanitImg3" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={sadanit4}
              alt={<MultiLingualContent contentID="sadanitImg4" />}
            />
            <p>
              <MultiLingualContent contentID="sadanitImg4" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Sadanit;
