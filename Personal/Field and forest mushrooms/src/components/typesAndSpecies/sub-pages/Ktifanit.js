import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import ktifanit1 from "../../../assets/images/ktifanit1.jpg";
import ktifanit2 from "../../../assets/images/ktifanit2.jpg";
import ktifanit3 from "../../../assets/images/ktifanit3.jpg";
import ktifanit4 from "../../../assets/images/ktifanit4.jpg";
import ktifanit5 from "../../../assets/images/ktifanit5.jpg";
import ktifanit6 from "../../../assets/images/ktifanit6.jpg";
import ktifanit7 from "../../../assets/images/ktifanit7.jpg";
import ktifanit8 from "../../../assets/images/ktifanit8.jpg";
import BackButton from "../../backButton";

const Ktifanit = () => {
  return (
    <div className="inner-section" id="ktifanit">
      <Helmet>
        <title>פטרידע - הפטריה קטיפנית</title>
        <meta
          name="description"
          content="הפטריה קטיפנית - Pluteus: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="ktifanit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="ktifanitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="ktifanitText2" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={ktifanit1}
                alt={<MultiLingualContent contentID="ktifanitImg1" />}
              />
              <p>
                <MultiLingualContent contentID="ktifanitImg1" />
              </p>
            </div>
          </div>
          <p>
            <MultiLingualContent contentID="ktifanitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="ktifanitText4" />
          </p>
          <p>
            <MultiLingualContent contentID="ktifanitText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="ktifanitText6" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="ktifanitText7Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="ktifanitText8" />
          </p>
          <br />
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={ktifanit2}
                alt={<MultiLingualContent contentID="ktifanitImg2" />}
              />
              <p>
                <MultiLingualContent contentID="ktifanitImg2" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="ktifanitText9Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="ktifanitText10" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={ktifanit3}
              alt={<MultiLingualContent contentID="ktifanitImg3" />}
            />
            <p>
              <MultiLingualContent contentID="ktifanitImg3" />
            </p>
          </div>
        </div>
        <p>
          <b>
            <MultiLingualContent contentID="ktifanitText11Bold" />
          </b>
        </p>
        <p>
          <MultiLingualContent contentID="ktifanitText12" />
        </p>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={ktifanit4}
              alt={<MultiLingualContent contentID="ktifanitImg4" />}
            />
            <p>
              <MultiLingualContent contentID="ktifanitImg4" />
            </p>
          </div>
        </div>
        <p>
          <b>
            <MultiLingualContent contentID="ktifanitText13Bold" />
          </b>
        </p>
        <p>
          <MultiLingualContent contentID="ktifanitText14" />
        </p>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={ktifanit5}
              alt={<MultiLingualContent contentID="ktifanitImg5" />}
            />
            <p>
              <MultiLingualContent contentID="ktifanitImg5" />
            </p>
          </div>
        </div>
        <p>
          <b>
            <MultiLingualContent contentID="ktifanitText15Bold" />
          </b>
        </p>
        <p>
          <MultiLingualContent contentID="ktifanitText16" />
        </p>
        <br />
        <p>
          <b>
            <MultiLingualContent contentID="ktifanitText17Bold" />
          </b>
        </p>
        <p>
          <MultiLingualContent contentID="ktifanitText18" />
        </p>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={ktifanit6}
              alt={<MultiLingualContent contentID="ktifanitImg6" />}
            />
            <p>
              <MultiLingualContent contentID="ktifanitImg6" />
            </p>
          </div>
        </div>
        <p>
          <MultiLingualContent contentID="ktifanitText19" />
        </p>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={ktifanit7}
              alt={<MultiLingualContent contentID="ktifanitImg7" />}
            />
            <p>
              <MultiLingualContent contentID="ktifanitImg7" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={ktifanit8}
              alt={<MultiLingualContent contentID="ktifanitImg8" />}
            />
            <p>
              <MultiLingualContent contentID="ktifanitImg8" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Ktifanit;
