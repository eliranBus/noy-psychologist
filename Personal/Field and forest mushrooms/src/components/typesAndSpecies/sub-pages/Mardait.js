import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import mardait1 from "../../../assets/images/mardait1.jpeg";
import mardait2 from "../../../assets/images/mardait2.jpeg";
import mardait3 from "../../../assets/images/mardait3.jpeg";
import mardait4 from "../../../assets/images/mardait4.jpeg";
import mardait5 from "../../../assets/images/mardait5.jpeg";
import BackButton from "../../backButton";

const Mardait = () => {
  return (
    <div className="inner-section" id="mardait">
      <Helmet>
        <title>פטרידע - הפטריה מרדעית</title>
        <meta
          name="description"
          content="הפטריה מרדעית - Leptopodia: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="mardait" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="mardaitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="mardaitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="mardaitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="mardaitText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="mardaitText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="mardaitText6" />
          </p>
          <br />
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="mardaitText7Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="mardaitText8" />
          </p>
          <br />
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={mardait1} alt="מרדעית" />
              <p>
                <MultiLingualContent contentID="mardaitImg1" />
              </p>
            </div>
          </div>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="mardaitText9Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="mardaitText10" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={mardait2} alt="מרדעית" />
            <p>
              <MultiLingualContent contentID="mardaitImg2" />
            </p>
          </div>
        </div>
        <br />
        <p>
          <b>
            <MultiLingualContent contentID="mardaitText11Bold" />
          </b>
        </p>
        <p>
          <MultiLingualContent contentID="mardaitText12" />
        </p>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={mardait3} alt="מרדעית" />
            <p>
              <MultiLingualContent contentID="mardaitImg3" />
            </p>
          </div>
        </div>
        <br />
        <p>
          <b>
            <MultiLingualContent contentID="mardaitText13Bold" />
          </b>
        </p>
        <p>
          <MultiLingualContent contentID="mardaitText14" />
        </p>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={mardait4} alt="מרדעית" />
            <p>
              <MultiLingualContent contentID="mardaitImg4" />
            </p>
          </div>
        </div>
        <br />
        <p>
          <b>
            <MultiLingualContent contentID="mardaitText15Bold" />
          </b>
        </p>
        <p>
          <MultiLingualContent contentID="mardaitText16" />
        </p>
        <br />
        <p>
          <b>
            <MultiLingualContent contentID="mardaitText17Bold" />
          </b>
        </p>
        <p>
          <MultiLingualContent contentID="mardaitText18" />
        </p>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={mardait5} alt="מרדעית" />
            <p>
              <MultiLingualContent contentID="mardaitImg5" />
            </p>
          </div>
        </div>
        <br />
        <p>
          <b>
            <MultiLingualContent contentID="mardaitText19Bold" />
          </b>
        </p>
        <p>
          <MultiLingualContent contentID="mardaitText20" />
        </p>
        <br />
        <p>
          <b>
            <MultiLingualContent contentID="mardaitText21Bold" />
          </b>
        </p>
        <p>
          <MultiLingualContent contentID="mardaitText22" />
        </p>
      </>
    </div>
  );
};

export default Mardait;
