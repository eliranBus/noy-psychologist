import React from "react";
import { Link } from "react-router-dom";
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
              <img
                src={gushit1}
                alt={<MultiLingualContent contentID="gushitImg1" />}
              />
              <p>
                <MultiLingualContent contentID="gushitImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <img
                src={gushit2}
                alt={<MultiLingualContent contentID="gushitImg2" />}
              />
              <p>
                <MultiLingualContent contentID="gushitImg2" />
              </p>
            </div>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={gushit3}
              alt={<MultiLingualContent contentID="gushitImg3" />}
            />
            <p>
              <MultiLingualContent contentID="gushitImg3" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={gushit4}
              alt={<MultiLingualContent contentID="gushitImg4" />}
            />
            <p>
              <MultiLingualContent contentID="gushitImg4" />
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={gushit5}
              alt={<MultiLingualContent contentID="gushitImg5" />}
            />
            <p>
              <MultiLingualContent contentID="gushitImg5" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={gushit6}
              alt={<MultiLingualContent contentID="gushitImg6" />}
            />
            <p>
              <MultiLingualContent contentID="gushitImg6" />
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={gushit7}
              alt={<MultiLingualContent contentID="gushitImg7" />}
            />
            <p>
              <MultiLingualContent contentID="gushitImg7" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={gushit8}
              alt={<MultiLingualContent contentID="gushitImg8" />}
            />
            <p>
              <MultiLingualContent contentID="gushitImg8" />
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={gushit9}
              alt={<MultiLingualContent contentID="gushitImg9" />}
            />
            <p>
              <MultiLingualContent contentID="gushitImg9" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={gushit10}
              alt={<MultiLingualContent contentID="gushitImg10" />}
            />
            <p>
              <MultiLingualContent contentID="gushitImg10" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={gushit11}
              alt={<MultiLingualContent contentID="gushitImg11" />}
            />
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
