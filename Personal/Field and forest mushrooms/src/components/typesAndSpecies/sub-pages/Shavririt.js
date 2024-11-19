import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import shavririt1 from "../../../assets/images/shavririt1.jpg";
import shavririt2 from "../../../assets/images/shavririt2.jpg";
import BackButton from "../../backButton";

const Shavririt = () => {
  return (
    <div className="inner-section" id="shavririt">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="shavririt" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="shavriritText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shavriritText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shavriritText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shavriritText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shavriritText5" />
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

export default Shavririt;
