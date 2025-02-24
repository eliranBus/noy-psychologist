import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import altit1 from "../../../assets/images/altit1.jpeg";
import altit2 from "../../../assets/images/altit2.jpeg";
import altit3 from "../../../assets/images/altit3.jpeg";
import altit4 from "../../../assets/images/altit4.jpeg";
import altit5 from "../../../assets/images/altit5.jpeg";
import altit6 from "../../../assets/images/altit6.jpeg";
import BackButton from "../../backButton";

const Altit = () => {
  return (
    <div className="inner-section" id="altit">
      <Helmet>
        <title>פטרידע - הפטריה אלתית</title>
        <meta
          name="description"
          content="הפטריה אלתית - Clavaria, Clavulina, Ramaria: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="altit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="altitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="altitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="altitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="altitText4" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="altitText5Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="altitText6" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={altit1} alt="אלתית" />
              <p>
                <MultiLingualContent contentID="altitImg1" />
              </p>
            </div>
          </div>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="altitText7Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="altitText8" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={altit2} alt="אלתית" />
              <p>
                <MultiLingualContent contentID="altitImg2" />
              </p>
            </div>
          </div>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="altitText9Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="altitText10" />
          </p>
          <div className="imgWrapper">
            <LazyLoadImage src={altit3} alt="אלתית" />
            <p>
              <MultiLingualContent contentID="altitImg3" />
            </p>
          </div>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="altitText11Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="altitText12" />
          </p>
          <div className="imgWrapper">
            <LazyLoadImage src={altit4} alt="אלתית" />
            <p>
              <MultiLingualContent contentID="altitImg4" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={altit5} alt="אלתית" />
            <p>
              <MultiLingualContent contentID="altitImg5" />
            </p>
          </div>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="altitText13Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="altitText14" />
          </p>
          <div className="imgWrapper">
            <LazyLoadImage src={altit6} alt="אלתית" />
            <p>
              <MultiLingualContent contentID="altitImg5" />
            </p>
          </div>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="altitText15Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="altitText16" />
          </p>
          <br />
          <br />
          <p>
            <MultiLingualContent contentID="altitText17" />
          </p>
        </div>
      </>
    </div>
  );
};

export default Altit;
