import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import natufa1 from "../../../assets/images/natufa1.jpg";
import natufa2 from "../../../assets/images/natufa2.jpg";
import natufa3 from "../../../assets/images/natufa3.jpg";
import natufa4 from "../../../assets/images/natufa4.jpg";
import natufa5 from "../../../assets/images/natufa5.jpg";
import natufa6 from "../../../assets/images/natufa6.jpg";
import natufa7 from "../../../assets/images/natufa7.jpg";
import natufa8 from "../../../assets/images/natufa8.jpg";
import natufa9 from "../../../assets/images/natufa9.jpg";
import natufa10 from "../../../assets/images/natufa10.jpg";
import natufa11 from "../../../assets/images/natufa11.jpg";
import natufa12 from "../../../assets/images/natufa12.jpg";
import natufa13 from "../../../assets/images/natufa13.jpg";
import natufa14 from "../../../assets/images/natufa14.jpg";
import natufa15 from "../../../assets/images/natufa15.jpg";
import BackButton from "../../backButton";

const Natufa = () => {
  return (
    <div className="inner-section" id="natufa">
      <Helmet>
        <title>פטרידע - הפטריה נטופה</title>
        <meta
          name="description"
          content="הפטריה נטופה - Lactarius: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="natufa" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="natufaText1" />
          </p>
          <p>
            <MultiLingualContent contentID="natufaText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="natufaText3Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="natufaText4" />
          </p>
          <p>
            <MultiLingualContent contentID="natufaText5" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={natufa1}
              alt={<MultiLingualContent contentID="natufaImg1" />}
            />
            <p>
              <MultiLingualContent contentID="natufaImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={natufa2}
              alt={<MultiLingualContent contentID="natufaImg2" />}
            />
            <p>
              <MultiLingualContent contentID="natufaImg2" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="natufaText5Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="natufaText6" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={natufa3}
              alt={<MultiLingualContent contentID="natufaImg3" />}
            />
            <p>
              <MultiLingualContent contentID="natufaImg3" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="natufaText7Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="natufaText8" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={natufa4}
              alt={<MultiLingualContent contentID="natufaImg4" />}
            />
            <p>
              <MultiLingualContent contentID="natufaImg4" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={natufa5}
              alt={<MultiLingualContent contentID="natufaImg5" />}
            />
            <p>
              <MultiLingualContent contentID="natufaImg5" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="natufaText9Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="natufaText10" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={natufa6}
              alt={<MultiLingualContent contentID="natufaImg6" />}
            />
            <p>
              <MultiLingualContent contentID="natufaImg6" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={natufa7}
              alt={<MultiLingualContent contentID="natufaImg7" />}
            />
            <p>
              <MultiLingualContent contentID="natufaImg7" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="natufaText11Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="natufaText12" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={natufa8}
              alt={<MultiLingualContent contentID="natufaImg8" />}
            />
            <p>
              <MultiLingualContent contentID="natufaImg8" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="natufaText13Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="natufaText14" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={natufa9}
              alt={<MultiLingualContent contentID="natufaImg9" />}
            />
            <p>
              <MultiLingualContent contentID="natufaImg9" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={natufa10}
              alt={<MultiLingualContent contentID="natufaImg10" />}
            />
            <p>
              <MultiLingualContent contentID="natufaImg10" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={natufa11} alt="" />
          </div>
        </div>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="natufaText15Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="natufaText16" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={natufa12}
              alt={<MultiLingualContent contentID="natufaImg11" />}
            />
            <p>
              <MultiLingualContent contentID="natufaImg11" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={natufa13}
              alt={<MultiLingualContent contentID="natufaImg12" />}
            />
            <p>
              <MultiLingualContent contentID="natufaImg12" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="natufaText17Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="natufaText18" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={natufa14}
              alt={<MultiLingualContent contentID="natufaImg13" />}
            />
            <p>
              <MultiLingualContent contentID="natufaImg13" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={natufa15}
              alt={<MultiLingualContent contentID="natufaImg14" />}
            />
            <p>
              <MultiLingualContent contentID="natufaImg14" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Natufa;
