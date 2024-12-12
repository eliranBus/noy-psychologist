import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import pkait1 from "../../../assets/images/pkait1.jpeg";
import pkait2 from "../../../assets/images/pkait2.jpeg";
import pkait3 from "../../../assets/images/pkait3.jpeg";
import BackButton from "../../backButton";

const Pkait = () => {
  return (
    <div className="inner-section" id="pkait">
      <Helmet>
        <title>פטרידע - הפטריה פקעית</title>
        <meta
          name="description"
          content="הפטריה פקעית - Rizopogon: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="pkait" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="pkaitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="pkaitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="pkaitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="pkaitText4" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="pkaitText5Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="pkaitText6" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={pkait1} alt="פקעית" />
            <p>
              <MultiLingualContent contentID="pkaitImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={pkait2} alt="פקעית" />
            <p>
              <MultiLingualContent contentID="pkaitImg2" />
            </p>
          </div>
        </div>
        <p>
          <b>
            <MultiLingualContent contentID="pkaitText7Bold" />
          </b>
        </p>
        <p>
          <MultiLingualContent contentID="pkaitText8" />
        </p>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={pkait3} alt="פקעית" />
            <p>
              <MultiLingualContent contentID="pkaitImg3" />
            </p>
          </div>
        </div>
        <br />
        <p>
          <MultiLingualContent contentID="pkaitText9" />
        </p>
      </>
    </div>
  );
};

export default Pkait;
