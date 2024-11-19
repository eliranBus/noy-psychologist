import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import avnatit1 from "../../../assets/images/avnatit1.jpg";
import avnatit2 from "../../../assets/images/avnatit2.jpg";
import BackButton from "../../backButton";

const Avnatit = () => {
  return (
    <div className="inner-section" id="avnatit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="avnatit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="avnatitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="avnatitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="avnatitText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="avnatitText4Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="avnatitText5" />
          </p>
          <p>
            <MultiLingualContent contentID="avnatitText6" />
          </p>
          <p>
            <MultiLingualContent contentID="avnatitText7" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={avnatit1}
                alt={<MultiLingualContent contentID="avnatitImg1" />}
              />
              <p>
                <MultiLingualContent contentID="avnatitImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage
                src={avnatit2}
                alt={<MultiLingualContent contentID="avnatitImg2" />}
              />
              <p>
                <MultiLingualContent contentID="avnatitImg2" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Avnatit;
