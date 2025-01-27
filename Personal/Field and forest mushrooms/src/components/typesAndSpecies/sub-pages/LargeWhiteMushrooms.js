import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import white1 from "../../../assets/images/white1.jpg";
import white2 from "../../../assets/images/white2.jpg";
import white3 from "../../../assets/images/white3.jpg";
import white4 from "../../../assets/images/white4.jpeg";
import white5 from "../../../assets/images/white5.jpg";
import white6 from "../../../assets/images/white6.jpg";
import white7 from "../../../assets/images/white7.jpeg";
import table from "../../../assets/type-tables/הסוג מטרנית ומטריינית.xls";
import BackButton from "../../backButton";

const LargeWhiteMushrooms = () => {
  return (
    <div className="inner-section" id="largeWhiteMushrooms">
      <Helmet>
        <title>פטרידע - פטריות גדולות ולבנות</title>
        <meta
          name="description"
          content="פטריות גדולות ולבנות: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="largeWhiteMushrooms" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="largeWhiteMushroomsText1" />
            <b>
              <MultiLingualContent contentID="largeWhiteMushroomsText1Bold" />
            </b>
            <MultiLingualContent contentID="largeWhiteMushroomsText12Bold" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="largeWhiteMushroomsText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="largeWhiteMushroomsText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="largeWhiteMushroomsText4Bold" />
            </b>
            <MultiLingualContent contentID="largeWhiteMushroomsText4" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="largeWhiteMushroomsText5Bold" />
            </b>
            <MultiLingualContent contentID="largeWhiteMushroomsText5" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="largeWhiteMushroomsText6Bold" />
            </b>
            <MultiLingualContent contentID="largeWhiteMushroomsText6" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="largeWhiteMushroomsText7Bold" />
            </b>
            <MultiLingualContent contentID="largeWhiteMushroomsText7" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="largeWhiteMushroomsText8Bold" />
            </b>
            <MultiLingualContent contentID="largeWhiteMushroomsText8" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="largeWhiteMushroomsText9Bold" />
            </b>
            <MultiLingualContent contentID="largeWhiteMushroomsText9" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="largeWhiteMushroomsText10Bold" />
            </b>
            <MultiLingualContent contentID="largeWhiteMushroomsText10" />
          </p>
          <br />
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={white2} alt="פטריות לבנות גדולות" />
            <p>
              <MultiLingualContent contentID="largeWhiteMushroomsImg2" />
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={white3} alt="פטריות לבנות גדולות" />
            <p>
              <MultiLingualContent contentID="largeWhiteMushroomsImg3" />
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={white5} alt="פטריות לבנות גדולות" />
            <p>
              <MultiLingualContent contentID="largeWhiteMushroomsImg5" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={white6} alt="פטריות לבנות גדולות" />
            <p>
              <MultiLingualContent contentID="largeWhiteMushroomsImg6" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={white7} alt="פטריות לבנות גדולות" />
            <p>
              <MultiLingualContent contentID="largeWhiteMushroomsImg7" />
            </p>
          </div>
        </div>
        <div className="typeTable">
          <Link to={table} target="_blank" download>
            <MultiLingualContent contentID="matranitTableDownload" />
          </Link>
        </div>
      </>
    </div>
  );
};

export default LargeWhiteMushrooms;
