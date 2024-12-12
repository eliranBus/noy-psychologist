import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import table from "../../../assets/type-tables/הסוג ישעורית.xlsx";
import yashurit1 from "../../../assets/images/yashurit1.jpeg";
import yashurit2 from "../../../assets/images/yashurit2.jpeg";
import yashurit3 from "../../../assets/images/yashurit3.jpeg";
import yashurit4 from "../../../assets/images/yashurit4.jpeg";
import yashurit5 from "../../../assets/images/yashurit5.jpeg";
import yashurit6 from "../../../assets/images/yashurit6.jpeg";
import yashurit7 from "../../../assets/images/yashurit7.jpeg";
import yashurit8 from "../../../assets/images/yashurit8.jpeg";
import BackButton from "../../backButton";

const Yashurit = () => {
  return (
    <div className="inner-section" id="yashurit">
      <Helmet>
        <title>פטרידע - הפטריה ישעורית</title>
        <meta
          name="description"
          content="הפטריה ישעורית - Tricholoma: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="yashurit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="yashuritText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="yashuritText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="yashuritText3" />
          </p>
          <p>
            <MultiLingualContent contentID="yashuritText4" />
            <Link to={table} target="_blank" download>
              <MultiLingualContent contentID="yashuritText5Link" />
            </Link>
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={yashurit1} alt="ישעורית" />
            <p>
              <MultiLingualContent contentID="yashuritImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={yashurit2} alt="ישעורית" />
            <p>
              <MultiLingualContent contentID="yashuritImg2" />
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={yashurit3} alt="ישעורית" />
            <p>
              <MultiLingualContent contentID="yashuritImg3" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={yashurit4} alt="ישעורית" />
            <p>
              <MultiLingualContent contentID="yashuritImg4" />
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={yashurit5} alt="ישעורית" />
            <p>
              <MultiLingualContent contentID="yashuritImg5" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={yashurit6} alt="ישעורית" />
            <p>
              <MultiLingualContent contentID="yashuritImg6" />
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={yashurit7} alt="ישעורית" />
            <p>
              <MultiLingualContent contentID="yashuritImg7" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={yashurit8} alt="ישעורית" />
            <p>
              <MultiLingualContent contentID="yashuritImg8" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Yashurit;
