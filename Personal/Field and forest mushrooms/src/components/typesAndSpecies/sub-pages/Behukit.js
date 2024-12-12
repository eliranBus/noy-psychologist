import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import behukit1 from "../../../assets/images/behukit1.jpg";
import behukit2 from "../../../assets/images/behukit2.jpg";
import behukit3 from "../../../assets/images/behukit3.jpg";
import behukit4 from "../../../assets/images/behukit4.jpeg";
import behukit5 from "../../../assets/images/behukit5.jpeg";
import behukit6 from "../../../assets/images/behukit6.jpg";
import BackButton from "../../backButton";

const Behukit = () => {
  return (
    <div className="inner-section" id="behukit">
      <Helmet>
        <title>פטרידע - הפטריה בהוקית</title>
        <meta
          name="description"
          content="הפטריה בהוקית - Ganoderma: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="behukit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="behukitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="behukitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="behukitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="behukitText4" />
          </p>
          <ul>
            <li>
              <MultiLingualContent contentID="behukitBullet1" />
            </li>
            <li>
              <MultiLingualContent contentID="behukitBullet2" />
            </li>
            <li>
              <MultiLingualContent contentID="behukitBullet3" />
            </li>
            <li>
              <MultiLingualContent contentID="behukitBullet4" />
            </li>
          </ul>
          <br />
          <p>
            <MultiLingualContent contentID="behukitText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="behukitText6" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="behukitText7Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="behukitText7" />
          </p>
          <br />
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={behukit1} alt="בהוקית" />
              <p>
                <MultiLingualContent contentID="behukitImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={behukit2} alt="בהוקית" />
              <p>
                <MultiLingualContent contentID="behukitImg2" />
              </p>
            </div>
          </div>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={behukit3} alt="בהוקית" />
              <p>
                <MultiLingualContent contentID="behukitImg3" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={behukit4} alt="בהוקית" />
              <p>
                <MultiLingualContent contentID="behukitImg4" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="behukitText8Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="behukitText8" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={behukit5} alt="בהוקית" />
            <p>
              <MultiLingualContent contentID="behukitImg5" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={behukit6} alt="בהוקית" />
            <p>
              <MultiLingualContent contentID="behukitImg6" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Behukit;
