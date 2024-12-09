import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import aforit1 from "../../../assets/images/aforit1.jpg";
import BackButton from "../../backButton";

const Aforit = () => {
  return (
    <div className="inner-section" id="aforit">
      <Helmet>
        <title>פטרידע - הפטריה אפורית</title>
        <meta
          name="description"
          content="הפטריה אפורית - Lyophyllum + Tephrocybe: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="aforit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="aforitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="aforitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="aforitText3" />
          </p>
          <p>
            <MultiLingualContent contentID="aforitText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="aforitText5" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="aforitText6Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="aforitText7" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="aforitText8Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="aforitText9" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={aforit1} alt="אפורית" />
            <p>
              <MultiLingualContent contentID="aforitImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Aforit;
