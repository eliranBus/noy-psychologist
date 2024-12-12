import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import oznit1 from "../../../assets/images/oznit1.jpeg";
import oznit2 from "../../../assets/images/oznit2.jpeg";
import oznit3 from "../../../assets/images/oznit3.jpeg";
import oznit4 from "../../../assets/images/oznit4.jpeg";
import oznit5 from "../../../assets/images/oznit5.jpeg";
import oznit6 from "../../../assets/images/oznit6.jpeg";
import oznit7 from "../../../assets/images/oznit7.jpeg";
import BackButton from "../../backButton";

const Oznit = () => {
  return (
    <div className="inner-section" id="oznit">
      <Helmet>
        <title>פטרידע - הפטריה אזנית</title>
        <meta
          name="description"
          content="הפטריה אזנית - Pleurotaceae: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="oznit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="oznitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="oznitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="oznitText3" />
          </p>
          <p>
            <MultiLingualContent contentID="oznitText4" />
          </p>
          <p>
            <MultiLingualContent contentID="oznitText5" />
          </p>
          <p>
            <MultiLingualContent contentID="oznitText6" />
          </p>
          <p>
            <MultiLingualContent contentID="oznitText7" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="oznitText8Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="oznitText9" />
          </p>
          <p>
            <MultiLingualContent contentID="oznitText10" />
          </p>
          <p>
            <MultiLingualContent contentID="oznitText11" />
          </p>
          <p>
            <MultiLingualContent contentID="oznitText12" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={oznit1} alt="אזנית" />
            <p>
              <MultiLingualContent contentID="oznitImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={oznit2} alt="אזנית" />
            <p>
              <MultiLingualContent contentID="oznitImg2" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="oznitText13Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="oznitText14" />
          </p>
          <p>
            <MultiLingualContent contentID="oznitText15" />
          </p>
          <p>
            <MultiLingualContent contentID="oznitText16" />
          </p>
          <p>
            <MultiLingualContent contentID="oznitText17" />
          </p>
          <p>
            <MultiLingualContent contentID="oznitText18" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={oznit3} alt="אזנית" />
            <p>
              <MultiLingualContent contentID="oznitImg3" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={oznit4} alt="אזנית" />
            <p>
              <MultiLingualContent contentID="oznitImg4" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={oznit5} alt="אזנית" />
            <p>
              <MultiLingualContent contentID="oznitImg5" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="oznitText19Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="oznitText20" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={oznit6} alt="אזנית" />
              <p>
                <MultiLingualContent contentID="oznitImg6" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="oznitText21Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="oznitText22" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={oznit7} alt="אזנית" />
            <p>
              <MultiLingualContent contentID="oznitImg7" />
            </p>
          </div>
        </div>
        <br />
        <br />
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="oznitText23" />
          </p>
          <br />
          <br />
          <p>
            <a href="https://www.fungimag.com/summer-09-articles/Shavit.pdf">
              <MultiLingualContent contentID="oznitTextLink" />
            </a>
          </p>
        </div>
      </>
      <br />
    </div>
  );
};

export default Oznit;
