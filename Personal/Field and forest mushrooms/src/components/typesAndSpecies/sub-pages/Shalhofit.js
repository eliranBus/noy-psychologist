import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import shavririt1 from "../../../assets/images/shavririt1.jpg";
import shavririt2 from "../../../assets/images/shavririt2.jpg";
import BackButton from "../../backButton";

const Shalhofit = () => {
  return (
    <div className="inner-section" id="shalhofit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="shalhofit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="shalhofitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shalhofitText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="shalhofitText2Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shalhofitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shalhofitText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shalhofitText5" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={shavririt1}
              alt={<MultiLingualContent contentID="shavriritImg1" />}
            />
            <p>
              <MultiLingualContent contentID="shavriritImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={shavririt2}
              alt={<MultiLingualContent contentID="shavriritImg2" />}
            />
            <p>
              <MultiLingualContent contentID="shavriritImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Shalhofit;
