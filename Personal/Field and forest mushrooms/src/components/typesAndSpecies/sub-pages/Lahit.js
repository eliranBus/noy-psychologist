import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import lahit1 from "../../../assets/images/lahit1.jpg";
import lahit2 from "../../../assets/images/lahit2.jpg";
import lahit3 from "../../../assets/images/lahit5.jpg";
import lahit4 from "../../../assets/images/lahit6.jpg";
import BackButton from "../../backButton";

const Lahit = () => {
  return (
    <div className="inner-section" id="lahit">
      <Helmet>
        <title>פטרידע - הפטריה לחית</title>
        <meta
          name="description"
          content="הפטריה לחית - Hygrocybe + Chuphophyllus: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="lahit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="lahitText0" />
          </p>
          <p>
            <MultiLingualContent contentID="lahitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="lahitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="lahitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="lahitText4" />
          </p>
          <br />
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="lahitBulletTitle1" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="lahitBullet1" />
          </p>
          <p>
            <MultiLingualContent contentID="lahitBullet11" />
          </p>
          <p>
            <MultiLingualContent contentID="lahitBullet12" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={lahit1} alt="לחית" />
              <p>
                <MultiLingualContent contentID="lahitImg1" />
              </p>
            </div>
          </div>
          <br />
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="lahitBulletTitle2" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="lahitBullet2" />
          </p>
          <p>
            <MultiLingualContent contentID="lahitBullet21" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={lahit2} alt="לחית" />
              <p>
                <MultiLingualContent contentID="lahitImg2" />
              </p>
            </div>
          </div>
          <br />
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="lahitBulletTitle3" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="lahitBullet3" />
          </p>
          <p>
            <MultiLingualContent contentID="lahitBullet31" />
          </p>
          <p>
            <MultiLingualContent contentID="lahitBullet32" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={lahit3} alt="לחית" />
              <p>
                <MultiLingualContent contentID="lahitImg3" />
              </p>
            </div>
          </div>
          <br />
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="lahitBulletTitle4" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="lahitBullet4" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={lahit4} alt="לחית" />
              <p>
                <MultiLingualContent contentID="lahitImg4" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Lahit;
