import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import klonsit1 from "../../../assets/images/klonsit1.jpg";
import klonsit2 from "../../../assets/images/klonsit2.jpg";
import klonsit3 from "../../../assets/images/klonsit3.jpg";
import BackButton from "../../backButton";

const Klonsit = () => {
  return (
    <div className="inner-section" id="klonsit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="klonsit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="klonsitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="klonsitText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="klonsitText3Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="klonsitText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="klonsitText5" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={klonsit1}
                alt={<MultiLingualContent contentID="klonsitImg1" />}
              />
              <p>
                <MultiLingualContent contentID="klonsitImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage
                src={klonsit2}
                alt={<MultiLingualContent contentID="klonsitImg2" />}
              />
              <p>
                <MultiLingualContent contentID="klonsitImg2" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage
                src={klonsit3}
                alt={<MultiLingualContent contentID="klonsitImg3" />}
              />
              <p>
                <MultiLingualContent contentID="klonsitImg3" />
              </p>
            </div>
          </div>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="klonsitText6Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="klonsitText7" />
          </p>
          <p>
            <MultiLingualContent contentID="klonsitText8" />
          </p>
        </div>
        <br />
      </>
    </div>
  );
};

export default Klonsit;
