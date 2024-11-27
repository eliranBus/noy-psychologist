import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../languages/MultiLingualContent";
import Litterture1 from "../assets/images/literture1.jpg";
import Litterture2 from "../assets/images/literture2.jpg";
import Litterture3 from "../assets/images/literture3.jpg";
import Litterture4 from "../assets/images/literture4.jpg";
import Litterture5 from "../assets/images/literture5.jpg";
import Litterture6 from "../assets/images/literature6.jpeg";

const Literature = () => {
  return (
    <div className="section" id="literature">
      <div className="about-wrapper inner-section">
        <h2>
          <MultiLingualContent contentID="literature" />
        </h2>
        <p>
          <MultiLingualContent contentID="literatureText1" />
        </p>
        <br />
        <p>
          <b>
            <MultiLingualContent contentID="literatureText2" />
          </b>
        </p>
        <ul className="LiteratureBullets">
          <li>
            <MultiLingualContent contentID="literatureBullet1" />
          </li>
          <li>
            <MultiLingualContent contentID="literatureBullet2" />
          </li>
          <li>
            <MultiLingualContent contentID="literatureBullet3" />
          </li>
          <li>
            <MultiLingualContent contentID="literatureBullet4" />
          </li>
          <li>
            <MultiLingualContent contentID="literatureBullet5" />
          </li>
          <li>
            <MultiLingualContent contentID="literatureBullet6" />
          </li>
          <li>
            <MultiLingualContent contentID="literatureBullet7" />
          </li>
          <li>
            <MultiLingualContent contentID="literatureBullet8" />
          </li>
          <li>
            <MultiLingualContent contentID="literatureBullet9" />
          </li>
        </ul>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={Litterture1} alt="פטריות עילאיות בישראל" />
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={Litterture2} alt="כמהין ופטריות" />
          </div>
        </div>
        <p>
          <b>
            <MultiLingualContent contentID="literatureText3" />
          </b>
        </p>
        <ul className="LiteratureBulletsEnglish">
          <li>
            <MultiLingualContent contentID="literatureBullet10" />
          </li>
          <li>
            <MultiLingualContent contentID="literatureBullet11" />
          </li>
          <li>
            <MultiLingualContent contentID="literatureBullet12" />
          </li>
          <li>
            <MultiLingualContent contentID="literatureBullet13" />
          </li>
          <li>
            <MultiLingualContent contentID="literatureBullet15" />
          </li>
          <li>
            <MultiLingualContent contentID="literatureBullet16" />
          </li>
          <li>
            <MultiLingualContent contentID="literatureBullet17" />
          </li>
          <li>
            <MultiLingualContent contentID="literatureBullet18" />
          </li>
        </ul>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={Litterture3} alt="Mushrooms" />
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={Litterture4} alt="Mushrooms & Toadstools" />
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={Litterture5} alt="Fungi of Switzerland" />
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={Litterture6} alt="European BOLETES" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Literature;
