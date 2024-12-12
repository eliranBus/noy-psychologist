import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import kishutit1 from "../../../assets/images/kishutit1.jpeg";
import kishutit2 from "../../../assets/images/kishutit2.jpeg";
import kishutit3 from "../../../assets/images/kishutit3.jpeg";
import kishutit4 from "../../../assets/images/kishutit4.jpeg";
import kishutit5 from "../../../assets/images/kishutit5.jpeg";
import BackButton from "../../backButton";

const Kishutit = () => {
  return (
    <div className="inner-section" id="kishutit">
      <Helmet>
        <title>פטרידע - הפטריה קשוטית</title>
        <meta
          name="description"
          content="הפטריה קשוטית - Inonotus: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="kishutit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="kishutitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kishutitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kishutitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kishutitText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kishutitText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kishutitText6" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kishutitText7" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kishutitText8" />
          </p>
          <br />
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="kishutitText9Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kishutitText10" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={kishutit1} alt="קישוטית" />
            <p>
              <MultiLingualContent contentID="kishutitImg1" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="kishutitText11Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kishutitText12" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={kishutit2} alt="קישוטית" />
              <p>
                <MultiLingualContent contentID="kishutitImg2" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={kishutit3} alt="קישוטית" />
              <p>
                <MultiLingualContent contentID="kishutitImg3" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="kishutitText13Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kishutitText14" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={kishutit4} alt="קישוטית" />
              <p>
                <MultiLingualContent contentID="kishutitImg4" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={kishutit5} alt="קישוטית" />
              <p>
                <MultiLingualContent contentID="kishutitImg5" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="kishutitText15Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="kishutitText16" />
          </p>
        </div>
      </>
    </div>
  );
};

export default Kishutit;
