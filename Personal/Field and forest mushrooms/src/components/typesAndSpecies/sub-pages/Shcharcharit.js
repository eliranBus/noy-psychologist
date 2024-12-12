import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import table from "../../../assets/type-tables/הסוג שחרחרית.xls";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import shcharcharit1 from "../../../assets/images/shcharcharit1.jpg";
import shcharcharit2 from "../../../assets/images/shcharcharit2.jpg";
import shcharcharit3 from "../../../assets/images/shcharcharit3.jpg";
import shcharcharit4 from "../../../assets/images/shcharcharit4.jpg";
import BackButton from "../../backButton";

const Shcharcharit = () => {
  return (
    <div className="inner-section" id="shcharcharit">
      <Helmet>
        <title>פטרידע - הפטריה שחרחרית</title>
        <meta
          name="description"
          content="הפטריה שחרחרית - Melanoleuca: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="shcharcharit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="shcharcharitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="shcharcharitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="shcharcharitText3" />
          </p>
          <p>
            <MultiLingualContent contentID="shcharcharitText4" />
          </p>
          <p>
            <MultiLingualContent contentID="shcharcharitText5" />
          </p>
          <p>
            <MultiLingualContent contentID="shcharcharitText6" />
          </p>
          <p>
            <MultiLingualContent contentID="shcharcharitText7" />
            <div className="typeTable">
              <Link to={table} target="_blank" download>
                <MultiLingualContent contentID="shcharcharitTableDownload" />
              </Link>
            </div>
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={shcharcharit1} alt="שחרחרית" />
            <p>
              <MultiLingualContent contentID="shcharcharitImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={shcharcharit2} alt="שחרחרית" />
            <p>
              <MultiLingualContent contentID="shcharcharitImg2" />
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={shcharcharit3} alt="שחרחרית" />
            <p>
              <MultiLingualContent contentID="shcharcharitImg3" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={shcharcharit4} alt="שחרחרית" />
            <p>
              <MultiLingualContent contentID="shcharcharitImg4" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Shcharcharit;
