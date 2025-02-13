import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import menifatit1 from "../../../assets/images/menifatit1.jpeg";
import menifatit2 from "../../../assets/images/menifatit2.jpeg";
import BackButton from "../../backButton";

const Menifatit = () => {
  return (
    <div className="inner-section" id="menifatit">
      <Helmet>
        <title>פטרידע - הפטריה מניפתית</title>
        <meta
          name="description"
          content="הפטריה מניפתית - Thelephora-Hymenochaete: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="menifatit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="menifatitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="menifatitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="menifatitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="menifatitText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="menifatitText5" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="menifatitText6Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="menifatitText7" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={menifatit1} alt="מניפתית" />
            <p>
              <MultiLingualContent contentID="menifatitImg1" />
            </p>
          </div>
        </div>
        <p>
          <b>
            <MultiLingualContent contentID="menifatitText8Bold" />
          </b>
        </p>
        <p>
          <MultiLingualContent contentID="menifatitText9" />
        </p>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={menifatit2} alt="מניפתית" />
            <p>
              <MultiLingualContent contentID="menifatitImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Menifatit;
