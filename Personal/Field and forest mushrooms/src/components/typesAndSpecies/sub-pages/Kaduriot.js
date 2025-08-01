import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import kaduriot1 from "../../../assets/images/kaduriot1.jpeg";
import kaduriot2 from "../../../assets/images/kaduriot2.jpg";
import kaduriot3 from "../../../assets/images/kaduriot3.jpg";
import kaduriot4 from "../../../assets/images/kaduriot4.jpg";
import kaduriot5 from "../../../assets/images/kaduriot5.jpg";
import kaduriot6 from "../../../assets/images/kaduriot6.jpg";

const Kaduriot = () => {
  return (
    <div className="inner-section" id="kaduriot">
      <Helmet>
        <title>פטרידע - הפטריה כדוריות</title>
        <meta
          name="description"
          content="הפטריה כדוריות: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="kaduriot" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="kaduriotText1" />
          </p>
          <p>
            <MultiLingualContent contentID="kaduriotText2" />
          </p>
          <p>
            <MultiLingualContent contentID="kaduriotText3" />
          </p>
          <p>
            <MultiLingualContent contentID="kaduriotText4" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="kaduriotText5Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kaduriotText5" />
          </p>
          <p>
            <MultiLingualContent contentID="kaduriotText6" />
          </p>
          <ul>
            <p>
              <MultiLingualContent contentID="kaduriotList1" />
            </p>
            <li>
              <MultiLingualContent contentID="kaduriotList2" />
            </li>
            <li>
              <MultiLingualContent contentID="kaduriotList3" />
            </li>
            <li>
              <MultiLingualContent contentID="kaduriotList4" />
            </li>
          </ul>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={kaduriot1} alt="כדוריות" />
            <p>
              <MultiLingualContent contentID="kaduriotImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={kaduriot2} alt="כדוריות" />
            <p>
              <MultiLingualContent contentID="kaduriotImg2" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="kaduriotText7Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kaduriotText7" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={kaduriot3} alt="כדוריות" />
              <p>
                <MultiLingualContent contentID="kaduriotImg3" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={kaduriot4} alt="כדוריות" />
              <p>
                <MultiLingualContent contentID="kaduriotImg4" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="kaduriotText8Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kaduriotText8" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kaduriotText9List" />
          </p>
          <ul>
            <li>
              <MultiLingualContent contentID="kaduriotText9" />
            </li>
            <li>
              <MultiLingualContent contentID="kaduriotText10" />
            </li>
          </ul>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={kaduriot5} alt="כדוריות" />
            <p>
              <MultiLingualContent contentID="kaduriotImg5" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={kaduriot6} alt="כדוריות" />
            <p>
              <MultiLingualContent contentID="kaduriotImg6" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Kaduriot;
