import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import pkua1 from "../../../assets/images/pkua1.jpg";
import pkua2 from "../../../assets/images/pkua2.jpg";
import pkua3 from "../../../assets/images/pkua3.jpg";
import pkua4 from "../../../assets/images/pkua4.jpg";
import pkua5 from "../../../assets/images/pkua5.jpg";
import pkua6 from "../../../assets/images/pkua6.jpg";
import pkua7 from "../../../assets/images/pkua7.jpg";
import pkua8 from "../../../assets/images/pkua8.jpg";
import pkua9 from "../../../assets/images/pkua9.png";
import BackButton from "../../backButton";
import table from "../../../assets/type-tables/הסוג פקועה.xls";

const Pkua = () => {
  return (
    <div className="inner-section" id="pkua">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="pkua" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="pkuaText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="pkuaText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="pkuaText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="pkuaText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="pkuaText5" />
          </p>
          <p>
            <MultiLingualContent contentID="pkuaText6" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="pkuaText7" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="pkuaText8" />
          </p>
          <div className="typeTable">
            <p>
              <MultiLingualContent contentID="pkuaText9" />
              <Link to={table} target="_blank" download>
                <MultiLingualContent contentID="pkuaText10" />
              </Link>
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={pkua1}
              alt={<MultiLingualContent contentID="pkuaImg1" />}
            />
            <p>
              <MultiLingualContent contentID="pkuaImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={pkua2}
              alt={<MultiLingualContent contentID="pkuaImg2" />}
            />
            <p>
              <MultiLingualContent contentID="pkuaImg2" />
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={pkua3}
              alt={<MultiLingualContent contentID="pkuaImg3" />}
            />
            <p>
              <MultiLingualContent contentID="pkuaImg3" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={pkua4}
              alt={<MultiLingualContent contentID="pkuaImg4" />}
            />
            <p>
              <MultiLingualContent contentID="pkuaImg4" />
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={pkua5}
              alt={<MultiLingualContent contentID="pkuaImg5" />}
            />
            <p>
              <MultiLingualContent contentID="pkuaImg5" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={pkua6}
              alt={<MultiLingualContent contentID="pkuaImg6" />}
            />
            <p>
              <MultiLingualContent contentID="pkuaImg6" />
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={pkua7}
              alt={<MultiLingualContent contentID="pkuaImg7" />}
            />
            <p>
              <MultiLingualContent contentID="pkuaImg7" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={pkua8}
              alt={<MultiLingualContent contentID="pkuaImg8" />}
            />
            <p>
              <MultiLingualContent contentID="pkuaImg8" />
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={pkua9}
              alt={<MultiLingualContent contentID="pkuaImg9" />}
            />
            <p>
              <MultiLingualContent contentID="pkuaImg9" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Pkua;
