import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import asimonit1 from "../../../assets/images/asimonit1.jpg";
import asimonit2 from "../../../assets/images/asimonit2.jpg";
import asimonit3 from "../../../assets/images/asimonit3.jpg";
import BackButton from "../../backButton";

const Asimonit = () => {
  return (
    <div className="inner-section" id="asimonit">
      <Helmet>
        <title>פטרידע - הפטריה אסימונית</title>
        <meta
          name="description"
          content="הפטריה אסימונית - Collybia + Gymnopus + Rhodocollybia: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="asimonit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="asimonitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="asimonitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="asimonitText3" />
          </p>
          <p>
            <MultiLingualContent contentID="asimonitText4" />
          </p>
          <p>
            <MultiLingualContent contentID="asimonitText5" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="asimonitText6Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="asimonitText7" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={asimonit1} alt="אסימונית" />
              <p>
                <MultiLingualContent contentID="asimonitImg1" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="asimonitText8Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="asimonitText9" />
          </p>
          <p>
            <MultiLingualContent contentID="asimonitText10" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={asimonit2} alt="אסימונית" />
            <p>
              <MultiLingualContent contentID="asimonitImg2" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={asimonit3} alt="אסימונית" />
            <p>
              <MultiLingualContent contentID="asimonitImg3" />
            </p>
          </div>
        </div>
        <p>
          <MultiLingualContent contentID="asimonitText11" />
        </p>
        <p>
          <MultiLingualContent contentID="asimonitText12" />
        </p>
        <p>
          <MultiLingualContent contentID="asimonitText13" />
        </p>
      </>
    </div>
  );
};

export default Asimonit;
