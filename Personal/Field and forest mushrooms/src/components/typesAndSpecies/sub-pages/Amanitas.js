import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import amanit1 from "../../../assets/images/amanit1.jpg";
import amanit2 from "../../../assets/images/amanit2.jpg";
import amanit3 from "../../../assets/images/amanit3.jpg";
import amanit4 from "../../../assets/images/amanit4.jpg";
import amanit5 from "../../../assets/images/amanit5.jpg";
import amanit6 from "../../../assets/images/amanit6.jpg";
import amanit7 from "../../../assets/images/amanit7.jpg";
import amanit8 from "../../../assets/images/amanit8.jpg";
import amanit9 from "../../../assets/images/amanit9.jpg";
import amanit10 from "../../../assets/images/amanit10.jpg";
import table from "../../../assets/type-tables/הסוג אמנית.xls";
import BackButton from "../../backButton";

const Amanitas = () => {
  return (
    <div className="inner-section" id="amanitas">
      <Helmet>
        <title>פטרידע - הפטריה אמנית</title>
        <meta
          name="description"
          content="הפטריה אמנית - Amanita: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="amanitas" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="amanitasText2" />
          </p>
          <p>
            <MultiLingualContent contentID="amanitasText3" />
          </p>
          <p>
            <MultiLingualContent contentID="amanitasText4" />
          </p>
          <p>
            <MultiLingualContent contentID="amanitasText5" />
          </p>
          <p>
            <MultiLingualContent contentID="amanitasText6" />
          </p>
          <p>
            <MultiLingualContent contentID="amanitasText6Bullet1" />
          </p>
          <p>
            <MultiLingualContent contentID="amanitasText6Bullet2" />
          </p>
          <p>
            <MultiLingualContent contentID="amanitasText6Bullet3" />
          </p>
          <p>
            <MultiLingualContent contentID="amanitasText7" />
          </p>
          <p>
            <MultiLingualContent contentID="amanitasText8" />
          </p>
          <p>
            <MultiLingualContent contentID="amanitasText9" />
          </p>
          <p>
            <MultiLingualContent contentID="amanitasText10" />
          </p>
          <div className="typeTable">
            <Link to={table} target="_blank" download>
              <MultiLingualContent contentID="amanitTableDownload" />
            </Link>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={amanit1} alt="אמנית" />
            <p>
              <MultiLingualContent contentID="amanitasImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={amanit2} alt="אמנית" />
            <p>
              <MultiLingualContent contentID="amanitasImg2" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={amanit3} alt="אמנית" />
            <p>
              <MultiLingualContent contentID="amanitasImg3" />
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={amanit4} alt="אמנית" />
            <p>
              <MultiLingualContent contentID="amanitasImg4" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={amanit5} alt="אמנית" />
            <p>
              <MultiLingualContent contentID="amanitasImg5" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={amanit6} alt="אמנית" />
            <p>
              <MultiLingualContent contentID="amanitasImg6" />
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={amanit7} alt="אמנית" />
            <p>
              <MultiLingualContent contentID="amanitasImg7" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={amanit8} alt="אמנית" />
            <p>
              <MultiLingualContent contentID="amanitasImg8" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={amanit9} alt="אמנית" />
            <p>
              <MultiLingualContent contentID="amanitasImg9" />
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={amanit10} alt="אמנית" />
            <p>
              <MultiLingualContent contentID="amanitasImg10" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Amanitas;
