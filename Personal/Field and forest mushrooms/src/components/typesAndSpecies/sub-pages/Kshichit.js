import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import kshichit1 from "../../../assets/images/kshichit1.jpeg";
import kshichit2 from "../../../assets/images/kshichit2.jpeg";
import BackButton from "../../backButton";

const Kshichit = () => {
  return (
    <div className="inner-section" id="kshichit">
      <Helmet>
        <title>פטרידע - הפטריה קשיחית</title>
        <meta
          name="description"
          content="הפטריה קשיחית - Stereum: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="kshichit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="kshichitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kshichitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kshichitText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="kshichitText4Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="kshichitText5" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={kshichit1} alt="קשיחית" />
              <p>
                <MultiLingualContent contentID="kshichitImg1" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="kshichitText6Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="kshichitText7" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={kshichit2} alt="קשיחית" />
              <p>
                <MultiLingualContent contentID="kshichitImg2" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Kshichit;
