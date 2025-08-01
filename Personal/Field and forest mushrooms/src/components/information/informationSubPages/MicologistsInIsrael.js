import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import micologists1 from "../../../assets/images/micologists1.png";
import micologists2 from "../../../assets/images/micologists2.jpg";
import micologists3 from "../../../assets/images/micologists3.jpg";
import micologists4 from "../../../assets/images/micologists4.jpg";

const MicologistsInIsrael = () => {
  return (
    <div className="inner-section" id="micologists">
      <Helmet>
        <title>פטרידע - אודות המיקולוגים בישראל לאורך שנותיה</title>
        <meta name="description" />
      </Helmet>
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="micologists" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="micologistsText1" />
          </p>
          <p>
            <MultiLingualContent contentID="micologistsText2" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={micologists1} alt="מיקולוגים" />
              <p>
                <MultiLingualContent contentID="micologistsImg1" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="micologistsText3Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="micologistsText4" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={micologists2} alt="מיקולוג" />
              <p>
                <MultiLingualContent contentID="micologistsImg2" />
              </p>
            </div>
          </div>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="micologistsText5Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="micologistsText6" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="micologistsText7Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="micologistsText8" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={micologists3} alt="מיקולוגים" />
              <p>
                <MultiLingualContent contentID="micologistsImg3" />
              </p>
            </div>
          </div>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="micologistsText9Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="micologistsText10" />
          </p>
          <p>
            <MultiLingualContent contentID="micologistsText11" />
          </p>
          <p>
            <MultiLingualContent contentID="micologistsText12" />
          </p>
          <p>
            <MultiLingualContent contentID="micologistsText13" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={micologists4} alt="מיקולוג" />
              <p>
                <MultiLingualContent contentID="micologistsImg4" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default MicologistsInIsrael;
