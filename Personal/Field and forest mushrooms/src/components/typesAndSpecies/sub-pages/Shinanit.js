import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import shinanit1 from "../../../assets/images/shinanit1.jpeg";
import shinanit2 from "../../../assets/images/shinanit2.jpeg";
import shinanit3 from "../../../assets/images/shinanit3.jpeg";
import BackButton from "../../backButton";

const Shinanit = () => {
  return (
    <div className="inner-section" id="shinanit">
      <Helmet>
        <title>פטרידע - הפטריה שיננית</title>
        <meta
          name="description"
          content="הפטריה שיננית - Hydnum: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="shinanit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="shinanitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shinanitText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="shinanitText3Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shinanitText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shinanitText5" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={shinanit1} alt="שיננית" />
              <p>
                <MultiLingualContent contentID="shinanitImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={shinanit2} alt="שיננית" />
              <p>
                <MultiLingualContent contentID="shinanitImg2" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="shinanitText6Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="shinanitText7" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={shinanit3} alt="שיננית" />
            <p>
              <MultiLingualContent contentID="shinanitImg3" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Shinanit;
