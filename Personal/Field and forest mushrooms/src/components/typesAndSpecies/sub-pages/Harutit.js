import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import harutit1 from "../../../assets/images/harutit1.jpeg";
import harutit2 from "../../../assets/images/harutit2.jpeg";
import harutit3 from "../../../assets/images/harutit3.jpeg";
import harutit4 from "../../../assets/images/harutit4.jpeg";
import BackButton from "../../backButton";

const Harutit = () => {
  return (
    <div className="inner-section" id="harutit">
      <Helmet>
        <title>פטרידע - הפטריה חרוטית</title>
        <meta
          name="description"
          content="הפטריה חרוטית - Conocybe: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="harutit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="harutitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="harutitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="harutitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="harutitText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="harutitText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="harutitText6" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="harutitText7Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="harutitText8" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={harutit1}
                alt={<MultiLingualContent contentID="harutitImg1" />}
              />
              <p>
                <MultiLingualContent contentID="harutitImg1" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="harutitText9Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="harutitText10" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={harutit2}
                alt={<MultiLingualContent contentID="harutitImg2" />}
              />
              <p>
                <MultiLingualContent contentID="harutitImg2" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="harutitText11Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="harutitText12" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="harutitText13Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="harutitText14" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="harutitText15Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="harutitText16" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={harutit3}
                alt={<MultiLingualContent contentID="harutitImg3" />}
              />
              <p>
                <MultiLingualContent contentID="harutitImg3" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="harutitText15Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="harutitText16" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={harutit4}
                alt={<MultiLingualContent contentID="harutitImg4" />}
              />
              <p>
                <MultiLingualContent contentID="harutitImg4" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Harutit;
