import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import shalhevet1 from "../../../assets/images/shalhevet1.jpg";
import shalhevet2 from "../../../assets/images/shalhevet2.jpg";
import shalhevet3 from "../../../assets/images/shalhevet3.jpg";
import BackButton from "../../backButton";

const Shalhevet = () => {
  return (
    <div className="inner-section" id="shalhevet">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="shalhevet" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="shalhevetText1" />
          </p>
          <p>
            <MultiLingualContent contentID="shalhevetText2" />
          </p>
          <p>
            <MultiLingualContent contentID="shalhevetText3" />
          </p>
          <p>
            <MultiLingualContent contentID="shalhevetText4" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="shalhevetText5Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="shalhevetText6" />
          </p>
          <p>
            <MultiLingualContent contentID="shalhevetText7" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={shalhevet1}
                alt={<MultiLingualContent contentID="shalhevetImg1" />}
              />
              <p>
                <MultiLingualContent contentID="shalhevetImg1" />
              </p>
            </div>
          </div>
          <br />
          <div className="imgWrapper">
            <LazyLoadImage
              src={shalhevet2}
              alt={<MultiLingualContent contentID="shalhevetImg2" />}
            />
            <p>
              <MultiLingualContent contentID="shalhevetImg2" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={shalhevet3}
              alt={<MultiLingualContent contentID="shalhevetImg3" />}
            />
            <p>
              <MultiLingualContent contentID="shalhevetImg3" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Shalhevet;
