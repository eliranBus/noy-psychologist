import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import dardasit from "../../../assets/images/dardasit.jpg";
import dardasit2 from "../../../assets/images/dardasit2.jpg";
import dardasit3 from "../../../assets/images/dardasit3.jpg";
import dardasit4 from "../../../assets/images/dardasit4.jpg";
import dardasit5 from "../../../assets/images/dardasit5.jpg";
import dardasit6 from "../../../assets/images/dardasit6.jpg";

const Dardasit = () => {
  return (
    <div className="inner-section" id="dardasit">
      <Helmet>
        <title>פטרידע - הפטריה דרדסית</title>
        <meta
          name="description"
          content="הפטריה דרדסית - Crepidotus + Symocibe: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="dardasit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="dardasitText0" />
          </p>
          <p>
            <MultiLingualContent contentID="dardasitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="dardasitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="dardasitText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="dardasitText4Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="dardasitText5" />
          </p>
          <p>
            <MultiLingualContent contentID="dardasitText6" />
          </p>
          <p>
            <MultiLingualContent contentID="dardasitText7" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={dardasit}
              alt={<MultiLingualContent contentID="dardasitImg1" />}
            />
            <p>
              <MultiLingualContent contentID="dardasitImg1" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="dardasitText8Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="dardasitText8" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="dardasitText9Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="dardasitText9" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="dardasitText10Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="dardasitText10" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="dardasitText11Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="dardasitText11" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={dardasit2}
              alt={<MultiLingualContent contentID="dardasitImg1" />}
            />
            <div className="imgWrapper">
              <LazyLoadImage
                src={dardasit3}
                alt={<MultiLingualContent contentID="dardasitImg1" />}
              />
            </div>
            <div className="imgWrapper">
              <LazyLoadImage
                src={dardasit4}
                alt={<MultiLingualContent contentID="dardasitImg1" />}
              />
            </div>
            <div className="imgWrapper">
              <LazyLoadImage
                src={dardasit5}
                alt={<MultiLingualContent contentID="dardasitImg1" />}
              />
            </div>
            <div className="imgWrapper">
              <LazyLoadImage
                src={dardasit6}
                alt={<MultiLingualContent contentID="dardasitImg1" />}
              />
            </div>
            <p>
              <MultiLingualContent contentID="dardasitImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Dardasit;
