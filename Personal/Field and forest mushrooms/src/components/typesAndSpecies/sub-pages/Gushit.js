import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import table from "../../../assets/type-tables/הסוג גושית.xls";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import gushit1 from "../../../assets/images/gushit1.jpg";
import gushit2 from "../../../assets/images/gushit2.jpg";
import gushit3 from "../../../assets/images/gushit3.jpg";
import gushit4 from "../../../assets/images/gushit4.jpg";
import gushit5 from "../../../assets/images/gushit5.jpg";
import gushit6 from "../../../assets/images/gushit6.jpg";
import gushit7 from "../../../assets/images/gushit7.jpg";
import gushit8 from "../../../assets/images/gushit8.jpg";
import gushit9 from "../../../assets/images/gushit9.jpg";
import gushit10 from "../../../assets/images/gushit10.jpg";
import gushit11 from "../../../assets/images/gushit11.jpg";
import BackButton from "../../backButton";

const Gushit = () => {
  return (
    <div className="inner-section" id="gushit">
      <Helmet>
        <title>פטרידע - הפטריה גושית</title>
        <meta
          name="description"
          content="הפטריה גושית - Boletus: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="gushit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="gushitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="gushitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="gushitText3" />
          </p>
          <p>
            <MultiLingualContent contentID="gushitText4" />
          </p>
          <p>
            <MultiLingualContent contentID="gushitText5" />
          </p>
          <p>
            <MultiLingualContent contentID="gushitText6" />
          </p>
          <p>
            <MultiLingualContent contentID="gushitText7" />
          </p>
          <p>
            <MultiLingualContent contentID="gushitText8" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="gushitText9" />
          </p>
          <div className="typeTable">
            <Link to={table} target="_blank" download>
              <MultiLingualContent contentID="gushitTableDownload" />
            </Link>
          </div>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={gushit1} alt="גושית" />
              <p>
                <MultiLingualContent contentID="gushitImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={gushit2} alt="גושית" />
              <p>
                <MultiLingualContent contentID="gushitImg2" />
              </p>
            </div>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={gushit3} alt="גושית" />
            <p>
              <MultiLingualContent contentID="gushitImg3" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={gushit4} alt="גושית" />
            <p>
              <MultiLingualContent contentID="gushitImg4" />
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={gushit5} alt="גושית" />
            <p>
              <MultiLingualContent contentID="gushitImg5" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={gushit6} alt="גושית" />
            <p>
              <MultiLingualContent contentID="gushitImg6" />
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={gushit7} alt="גושית" />
            <p>
              <MultiLingualContent contentID="gushitImg7" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={gushit8} alt="גושית" />
            <p>
              <MultiLingualContent contentID="gushitImg8" />
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={gushit9} alt="גושית" />
            <p>
              <MultiLingualContent contentID="gushitImg9" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={gushit10} alt="גושית" />
            <p>
              <MultiLingualContent contentID="gushitImg10" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={gushit11} alt="גושית" />
            <p>
              <MultiLingualContent contentID="gushitImg11" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Gushit;
