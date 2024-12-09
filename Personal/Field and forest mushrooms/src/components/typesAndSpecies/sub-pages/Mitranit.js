import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import mitranit1 from "../../../assets/images/mitranit1.jpeg";
import mitranit2 from "../../../assets/images/mitranit2.jpeg";
import mitranit3 from "../../../assets/images/mitranit3.jpeg";
import mitranit4 from "../../../assets/images/mitranit4.jpeg";
import mitranit5 from "../../../assets/images/mitranit5.jpeg";
import BackButton from "../../backButton";

const Mitranit = () => {
  return (
    <div className="inner-section" id="mitranit">
      <Helmet>
        <title>פטרידע - הפטריה מיטרנית</title>
        <meta
          name="description"
          content="הפטריה מיטרנית - Macrolepiota: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="mitranit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="mitranitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="mitranitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="mitranitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="mitranitText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="mitranitText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="mitranitText6" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="mitranitText7" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="mitranitText8Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="mitranitText9" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={mitranit1}
                alt={<MultiLingualContent contentID="mitranitImg1" />}
              />
              <p>
                <MultiLingualContent contentID="mitranitImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage
                src={mitranit2}
                alt={<MultiLingualContent contentID="mitranitImg2" />}
              />
              <p>
                <MultiLingualContent contentID="mitranitImg2" />
              </p>
            </div>
          </div>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="mitranitText10Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="mitranitText11" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={mitranit3}
                alt={<MultiLingualContent contentID="mitranitImg3" />}
              />
              <p>
                <MultiLingualContent contentID="mitranitImg3" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="mitranitText12Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="mitranitText13" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={mitranit4}
                alt={<MultiLingualContent contentID="mitranitImg4" />}
              />
              <p>
                <MultiLingualContent contentID="mitranitImg4" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage
                src={mitranit5}
                alt={<MultiLingualContent contentID="mitranitImg5" />}
              />
              <p>
                <MultiLingualContent contentID="mitranitImg5" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="mitranitText14Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="mitranitText15" />
          </p>
        </div>
      </>
    </div>
  );
};

export default Mitranit;
