import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import adumit1 from "../../../assets/images/adumit1.jpg";
import adumit2 from "../../../assets/images/adumit2.jpg";
import adumit3 from "../../../assets/images/adumit3.jpg";
import BackButton from "../../backButton";

const Adumit = () => {
  return (
    <div className="inner-section" id="adumit">
      <Helmet>
        <title>פטרידע - הפטריה אדומית</title>
        <meta
          name="description"
          content="הפטריה אדומית - Entoloma + Rhodophyllus: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="adumit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="adumitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="adumitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="adumitText3" />
          </p>
          <p>
            <MultiLingualContent contentID="adumitText4" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="adumitText5Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="adumitText6" />
          </p>
          <p>
            <MultiLingualContent contentID="aforitText7" />
          </p>
          <p>
            <MultiLingualContent contentID="adumitText8" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={adumit1} alt="אדומית" />
              <p>
                <MultiLingualContent contentID="adumitImg1" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="adumitText9Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="adumitText10" />
          </p>
          <p>
            <MultiLingualContent contentID="adumitText11" />
          </p>
          <br />
          <div className="imgWrapper">
            <LazyLoadImage src={adumit2} alt="אדומית" />
            <p>
              <MultiLingualContent contentID="adumitImg2" />
            </p>
          </div>
        </div>
        <p>
          <b>
            <MultiLingualContent contentID="adumitText12Bold" />
          </b>
        </p>
        <p>
          <MultiLingualContent contentID="adumitText13" />
        </p>
        <p>
          <MultiLingualContent contentID="adumitText14" />
        </p>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={adumit3} alt="אדומית" />
            <p>
              <MultiLingualContent contentID="adumitImg3" />
            </p>
          </div>
        </div>
        <p>
          <MultiLingualContent contentID="adumitText15" />
        </p>
        <p>
          <MultiLingualContent contentID="adumitText16" />
        </p>
        <p>
          <MultiLingualContent contentID="adumitText17" />
        </p>
      </>
    </div>
  );
};

export default Adumit;
