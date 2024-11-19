import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import harifit1 from "../../../assets/images/harifit1.jpg";
import harifit2 from "../../../assets/images/harifit2.jpg";
import harifit3 from "../../../assets/images/harifit3.jpg";
import harifit4 from "../../../assets/images/harifit4.jpg";
import harifit5 from "../../../assets/images/harifit5.jpg";
import harifit6 from "../../../assets/images/harifit6.jpg";
import harifit7 from "../../../assets/images/harifit7.jpg";
import harifit8 from "../../../assets/images/harifit8.jpg";
import harifit9 from "../../../assets/images/harifit9.jpg";
import harifit10 from "../../../assets/images/harifit10.jpg";
import BackButton from "../../backButton";
import table from "../../../assets/type-tables/הסוג חריפית.xls";

const Harifit = () => {
  return (
    <div className="inner-section" id="harifit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="harifit" />
      </h2>
      <div>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="harifitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="harifitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="harifitText3" />
          </p>
          <p>
            <MultiLingualContent contentID="harifitText4" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={harifit1} alt="" />
            </div>
          </div>
          <br />
          <br />
          <p>
            <MultiLingualContent contentID="harifitText5" />
          </p>

          <div className="typeTable">
            <Link to={table} target="_blank" download>
              <MultiLingualContent contentID="amanitTableDownload" />
            </Link>
          </div>

          <br />
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={harifit2}
              alt={<MultiLingualContent contentID="harifitImg2" />}
            />
            <p>
              <MultiLingualContent contentID="harifitImg2" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={harifit3}
              alt={<MultiLingualContent contentID="harifitImg3" />}
            />
            <p>
              <MultiLingualContent contentID="harifitImg3" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={harifit4}
              alt={<MultiLingualContent contentID="harifitImg4" />}
            />
            <p>
              <MultiLingualContent contentID="harifitImg4" />
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={harifit5}
              alt={<MultiLingualContent contentID="harifitImg5" />}
            />
            <p>
              <MultiLingualContent contentID="harifitImg5" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={harifit6}
              alt={<MultiLingualContent contentID="harifitImg6" />}
            />
            <p>
              <MultiLingualContent contentID="harifitImg6" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={harifit7}
              alt={<MultiLingualContent contentID="harifitImg7" />}
            />
            <p>
              <MultiLingualContent contentID="harifitImg7" />
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={harifit8}
              alt={<MultiLingualContent contentID="harifitImg8" />}
            />
            <p>
              <MultiLingualContent contentID="harifitImg8" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={harifit9}
              alt={<MultiLingualContent contentID="harifitImg9" />}
            />
            <p>
              <MultiLingualContent contentID="harifitImg9" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={harifit10}
              alt={<MultiLingualContent contentID="harifitImg10" />}
            />
            <p>
              <MultiLingualContent contentID="harifitImg10" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Harifit;
