import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import cordyceps1 from "../../../assets/images/cordyceps1.jpg";
import cordyceps2 from "../../../assets/images/cordyceps2.jpg";
import cordyceps3 from "../../../assets/images/cordyceps3.jpg";
import BackButton from "../../backButton";

const Cordyceps = () => {
  return (
    <div className="inner-section" id="cordyceps">
      <Helmet>
        <title>פטרידע - הפטריה Cordyceps</title>
        <meta
          name="description"
          content="הפטריה Cordyceps: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="cordyceps" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="cordycepsText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="cordycepsText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="cordycepsText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="cordycepsText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="cordycepsText5" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={cordyceps1}
              alt={<MultiLingualContent contentID="cordycepsImg1" />}
            />
            <p>
              <MultiLingualContent contentID="cordycepsImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={cordyceps2}
              alt={<MultiLingualContent contentID="cordycepsImg2" />}
            />
            <p>
              <MultiLingualContent contentID="cordycepsImg2" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={cordyceps3}
              alt={<MultiLingualContent contentID="cordycepsImg3" />}
            />
            <p>
              <MultiLingualContent contentID="cordycepsImg3" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Cordyceps;
