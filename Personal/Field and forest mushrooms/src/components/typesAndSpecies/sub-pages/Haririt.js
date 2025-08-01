import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import haririt1 from "../../../assets/images/haririt1.jpg";
import haririt2 from "../../../assets/images/haririt2.jpg";
import haririt3 from "../../../assets/images/haririt3.jpg";
import BackButton from "../../backButton";

const Haririt = () => {
  return (
    <div className="inner-section" id="haririt">
      <Helmet>
        <title>פטרידע - הפטריה חרירית</title>
        <meta
          name="description"
          content="הפטריה חרירית - Gyroporus: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="haririt" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="hariritText1" />
          </p>
          <p>
            <MultiLingualContent contentID="hariritText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="hariritText3Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="hariritText4" />
          </p>
          <p>
            <MultiLingualContent contentID="hariritText5" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={haririt1} alt="חרירית" />
              <p>
                <MultiLingualContent contentID="hariritImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={haririt2} alt="חרירית" />
              <p>
                <MultiLingualContent contentID="hariritImg2" />
              </p>
            </div>
          </div>
          <p>
            <MultiLingualContent contentID="hariritText6" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="hariritText7Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="hariritText8" />
          </p>
          <p>
            <MultiLingualContent contentID="hariritText9" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={haririt3} alt="חרירית" />
              <p>
                <MultiLingualContent contentID="hariritImg3" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Haririt;
