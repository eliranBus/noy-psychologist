import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import matriyanit1 from "../../../assets/images/matriyanit1.jpeg";
import matriyanit2 from "../../../assets/images/matriyanit2.jpeg";
import matriyanit3 from "../../../assets/images/matriyanit3.jpeg";
import matriyanit4 from "../../../assets/images/matriyanit4.jpeg";
import matriyanit5 from "../../../assets/images/matriyanit5.jpeg";
import matriyanit6 from "../../../assets/images/matriyanit6.jpeg";
import matriyanit7 from "../../../assets/images/matriyanit7.jpeg";
import matriyanit60 from "../../../assets/images/matriyanit60.jpeg";
import matriyanit61 from "../../../assets/images/matriyanit61.jpeg";
import BackButton from "../../backButton";

const Matriyanit = () => {
  return (
    <div className="inner-section" id="matriyanit">
      <Helmet>
        <title>פטרידע - הפטריה מטריינית</title>
        <meta
          name="description"
          content="הפטריה מטריינית - Lepiota: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="matriyanit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="matriyanitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="matriyanitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="matriyanitText3" />
          </p>
          <p>
            <MultiLingualContent contentID="matriyanitText4" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="matriyanitText5Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="matriyanitText6" />
          </p>
          <p>
            <MultiLingualContent contentID="matriyanitText7" />
          </p>
          <p>
            <MultiLingualContent contentID="matriyanitText8" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={matriyanit1} alt="מטריינית" />
              <p>
                <MultiLingualContent contentID="matriyanitImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={matriyanit2} alt="מטריינית" />
              <p>
                <MultiLingualContent contentID="matriyanitImg2" />
              </p>
            </div>
          </div>
        </div>
        <p>
          <b>
            <MultiLingualContent contentID="matriyanitText9Bold" />
          </b>
        </p>
        <p>
          <MultiLingualContent contentID="matriyanitText10" />
        </p>
        <p>
          <MultiLingualContent contentID="matriyanitText11" />
        </p>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={matriyanit3} alt="מטריינית" />
            <p>
              <MultiLingualContent contentID="matriyanitImg3" />
            </p>
          </div>
        </div>
        <p>
          <b>
            <MultiLingualContent contentID="matriyanitText12Bold" />
          </b>
        </p>
        <p>
          <MultiLingualContent contentID="matriyanitText13" />
        </p>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={matriyanit4} alt="מטריינית" />
            <p>
              <MultiLingualContent contentID="matriyanitImg4" />
            </p>
          </div>
        </div>
        <p>
          <b>
            <MultiLingualContent contentID="matriyanitText14Bold" />
          </b>
        </p>
        <p>
          <MultiLingualContent contentID="matriyanitText15" />
        </p>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={matriyanit5} alt="מטריינית" />
            <p>
              <MultiLingualContent contentID="matriyanitImg5" />
            </p>
          </div>
        </div>
        <p>
          <b>
            <MultiLingualContent contentID="matriyanitText16Bold" />
          </b>
        </p>
        <p>
          <MultiLingualContent contentID="matriyanitText17" />
        </p>
        <br />
        <p>
          <b>
            <MultiLingualContent contentID="matriyanitText18Bold" />
          </b>
        </p>
        <p>
          <MultiLingualContent contentID="matriyanitText19" />
        </p>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={matriyanit6} alt="מטריינית" />
            <p>
              <MultiLingualContent contentID="matriyanitImg6" />
            </p>
          </div>
        </div>
        <p>
          <b>
            <MultiLingualContent contentID="matriyanitText20Bold" />
          </b>
        </p>
        <p>
          <MultiLingualContent contentID="matriyanitText21" />
        </p>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={matriyanit7} alt="מטריינית" />
            <p>
              <MultiLingualContent contentID="matriyanitImg7" />
            </p>
          </div>
        </div>
        <p>
          <b>
            <MultiLingualContent contentID="matriyanitText201Bold" />
          </b>
        </p>
        <p>
          <MultiLingualContent contentID="matriyanitText202" />
        </p>
        <p>
          <MultiLingualContent contentID="matriyanitText203" />
        </p>
        <p>
          <MultiLingualContent contentID="matriyanitText204" />
        </p>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={matriyanit60} alt="מטריינית" />
            <p>
              <MultiLingualContent contentID="matriyanitImg61" />
            </p>
            <LazyLoadImage src={matriyanit61} alt="מטריינית" />
            <p>
              <MultiLingualContent contentID="matriyanitImg61" />
            </p>
          </div>
        </div>
        <p>
          <b>
            <MultiLingualContent contentID="matriyanitText22Bold" />
          </b>
        </p>
        <ul>
          <li>
            <MultiLingualContent contentID="matriyanitText23ListBullet" />
          </li>
          <li>
            <MultiLingualContent contentID="matriyanitText24ListBullet" />
          </li>
          <li>
            <MultiLingualContent contentID="matriyanitText25ListBullet" />
          </li>
          <li>
            <MultiLingualContent contentID="matriyanitText26ListBullet" />
          </li>
          <li>
            <MultiLingualContent contentID="matriyanitText27ListBullet" />
          </li>
          <li>
            <MultiLingualContent contentID="matriyanitText28ListBullet" />
          </li>
          <li>
            <MultiLingualContent contentID="matriyanitText29ListBullet" />
          </li>
        </ul>
      </>
    </div>
  );
};

export default Matriyanit;
