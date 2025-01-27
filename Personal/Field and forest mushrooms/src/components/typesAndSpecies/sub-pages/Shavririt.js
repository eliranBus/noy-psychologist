import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import shavririt1 from "../../../assets/images/shavririt1.jpeg";
import shavririt2 from "../../../assets/images/shavririt2.jpeg";
import shavririt3 from "../../../assets/images/shavririt3.jpeg";
import shavririt4 from "../../../assets/images/shavririt4.jpeg";
import shavririt5 from "../../../assets/images/shavririt5.jpeg";
import shavririt6 from "../../../assets/images/shavririt6.jpeg";
import shavririt7 from "../../../assets/images/shavririt7.jpeg";
import shavririt8 from "../../../assets/images/shavririt8.jpeg";
import shavririt9 from "../../../assets/images/shavririt9.jpeg";
import shavririt10 from "../../../assets/images/shavririt10.jpeg";
import shavririt11 from "../../../assets/images/shavririt11.jpeg";
import BackButton from "../../backButton";

const Shavririt = () => {
  return (
    <div className="inner-section" id="shavririt">
      <Helmet>
        <title>פטרידע - הפטריה שברירית</title>
        <meta
          name="description"
          content="הפטריה שברירית - Psathyrella: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="shavririt" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="shavriritText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shavriritText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shavriritText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shavriritText4" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="shavriritText5Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="shavriritText6" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={shavririt1} alt="שברירית" />
              <p>
                <MultiLingualContent contentID="shavriritImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={shavririt2} alt="שברירית" />
              <p>
                <MultiLingualContent contentID="shavriritImg2" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="shavriritText7Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="shavriritText8" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={shavririt3} alt="שברירית" />
              <p>
                <MultiLingualContent contentID="shavriritImg3" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={shavririt4} alt="שברירית" />
              <p>
                <MultiLingualContent contentID="shavriritImg4" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="shavriritText9Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="shavriritText10" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={shavririt5} alt="שברירית" />
              <p>
                <MultiLingualContent contentID="shavriritImg5" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={shavririt6} alt="שברירית" />
              <p>
                <MultiLingualContent contentID="shavriritImg6" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="shavriritText11Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="shavriritText12" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={shavririt7} alt="שברירית" />
              <p>
                <MultiLingualContent contentID="shavriritImg7" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="shavriritText13Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="shavriritText14" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={shavririt8} alt="שברירית" />
              <p>
                <MultiLingualContent contentID="shavriritImg8" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={shavririt9} alt="שברירית" />
              <p>
                <MultiLingualContent contentID="shavriritImg9" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="shavriritText15Bold" />
            </b>
          </p>
          <ul>
            <li>
              <MultiLingualContent contentID="shavriritText16ListItem" />
            </li>
            <li>
              <MultiLingualContent contentID="shavriritText17ListItem" />
            </li>
            <li>
              <MultiLingualContent contentID="shavriritText18ListItem" />
            </li>
            <li>
              <MultiLingualContent contentID="shavriritText19ListItem" />
            </li>
            <li>
              <MultiLingualContent contentID="shavriritText20ListItem" />
            </li>
            <li>
              <MultiLingualContent contentID="shavriritText21ListItem" />
            </li>
            <li>
              <MultiLingualContent contentID="shavriritText22ListItem" />
            </li>
          </ul>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={shavririt10} alt="שברירית" />
            <p>
              <MultiLingualContent contentID="shavriritImg10" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={shavririt11} alt="שברירית" />
            <p>
              <MultiLingualContent contentID="shavriritImg11" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Shavririt;
