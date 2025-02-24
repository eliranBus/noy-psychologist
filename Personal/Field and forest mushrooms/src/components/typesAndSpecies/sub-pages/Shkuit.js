import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import shkuit1 from "../../../assets/images/shkuit1.jpeg";
import shkuit2 from "../../../assets/images/shkuit2.jpeg";
import BackButton from "../../backButton";

const Shkuit = () => {
  return (
    <div className="inner-section" id="shkuit">
      <Helmet>
        <title>פטרידע - הפטריה שקועית</title>
        <meta
          name="description"
          content="הפטריה שקועית - Geopora: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="shkuit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="shkuitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shkuitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shkuitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shkuitText4" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="shkuitText5Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="shkuitText6" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={shkuit1} alt="שקועית" />
            <p>
              <MultiLingualContent contentID="shkuitImg1" />
            </p>
          </div>
        </div>
        <p>
          <b>
            <MultiLingualContent contentID="shkuitText7Bold" />
          </b>
        </p>
        <p>
          <MultiLingualContent contentID="shkuitText8" />
        </p>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={shkuit2} alt="שקועית" />
            <p>
              <MultiLingualContent contentID="shkuitImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Shkuit;
