import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import table from "../../../assets/type-tables/הסוג משפכנית.xls";
import mashpachanit1 from "../../../assets/images/mashpachanit1.jpeg";
import mashpachanit2 from "../../../assets/images/mashpachanit2.jpeg";
import mashpachanit3 from "../../../assets/images/mashpachanit3.jpeg";
import mashpachanit4 from "../../../assets/images/mashpachanit4.jpeg";
import mashpachanit5 from "../../../assets/images/mashpachanit5.jpeg";
import mashpachanit6 from "../../../assets/images/mashpachanit6.jpeg";
import mashpachanit7 from "../../../assets/images/mashpachanit7.jpeg";
import BackButton from "../../backButton";

const Mashpachanit = () => {
  return (
    <div className="inner-section" id="mashpachanit">
      <Helmet>
        <title>פטרידע - הפטריה משפכנית</title>
        <meta
          name="description"
          content="הפטריה משפכנית - Clitocybe: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="mashpachanit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="mashpachanitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="mashpachanitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="mashpachanitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="mashpachanitText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="mashpachanitText5" />
            <Link to={table} target="_blank" download>
              <MultiLingualContent contentID="mashpachanitText6Link" />
            </Link>
          </p>
          <br />
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="mashpachanitText7Bold" />
            </b>
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={mashpachanit1} alt="משפכנית" />
              <p>
                <MultiLingualContent contentID="mashpachanitImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={mashpachanit2} alt="משפכנית" />
              <p>
                <MultiLingualContent contentID="mashpachanitImg2" />
              </p>
            </div>
          </div>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={mashpachanit3} alt="משפכנית" />
              <p>
                <MultiLingualContent contentID="mashpachanitImg3" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={mashpachanit4} alt="משפכנית" />
              <p>
                <MultiLingualContent contentID="mashpachanitImg4" />
              </p>
            </div>
          </div>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={mashpachanit5} alt="משפכנית" />
              <p>
                <MultiLingualContent contentID="mashpachanitImg5" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={mashpachanit6} alt="משפכנית" />
              <p>
                <MultiLingualContent contentID="mashpachanitImg6" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={mashpachanit7} alt="משפכנית" />
              <p>
                <MultiLingualContent contentID="mashpachanitImg7" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Mashpachanit;
