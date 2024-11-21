import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import niranit1 from "../../../assets/images/niranit1.jpg";
import niranit2 from "../../../assets/images/niranit2.jpg";
import niranit3 from "../../../assets/images/niranit3.jpg";
import niranit4 from "../../../assets/images/niranit4.jpg";
import niranit5 from "../../../assets/images/niranit5.jpg";
import niranit6 from "../../../assets/images/niranit6.jpg";
import niranit7 from "../../../assets/images/niranit7.jpg";
import BackButton from "../../backButton";

const Niranit = () => {
  return (
    <div className="inner-section" id="niranit">
      <Helmet>
        <title>פטרידע - הפטריה נירנית</title>
        <meta
          name="description"
          content="הפטריה נירנית - Agrocybe + Cyclocybe: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="niranit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="niranitText0" />
          </p>
          <p>
            <MultiLingualContent contentID="niranitText1" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="niranitText2Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="niranitText2" />
          </p>
          <br />
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={niranit3}
                alt={<MultiLingualContent contentID="niranitImg1" />}
              />
              <p>
                <MultiLingualContent contentID="niranitImg1" />
              </p>
            </div>
          </div>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="niranitText3Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="niranitText3" />
          </p>
          <br />
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={niranit2}
                alt={<MultiLingualContent contentID="niranitImg2" />}
              />
              <p>
                <MultiLingualContent contentID="niranitImg2" />
              </p>
              <LazyLoadImage
                src={niranit4}
                alt={<MultiLingualContent contentID="niranitImg4" />}
              />
              <p>
                <MultiLingualContent contentID="niranitImg4" />
              </p>
            </div>
          </div>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="niranitText4Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="niranitText4" />
          </p>
          <br />
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={niranit1}
                alt={<MultiLingualContent contentID="niranitImg4" />}
              />
              <p>
                <MultiLingualContent contentID="niranitImg4" />
              </p>
              <LazyLoadImage
                src={niranit5}
                alt={<MultiLingualContent contentID="niranitImg2" />}
              />
              <p>
                <MultiLingualContent contentID="niranitImg2" />
              </p>
              <LazyLoadImage
                src={niranit6}
                alt={<MultiLingualContent contentID="niranitImg6" />}
              />
              <p>
                <MultiLingualContent contentID="niranitImg6" />
              </p>
            </div>
          </div>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="niranitText5Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="niranitText5" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={niranit7}
              alt={<MultiLingualContent contentID="niranitImg1" />}
            />
            <p>
              <MultiLingualContent contentID="niranitImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Niranit;
