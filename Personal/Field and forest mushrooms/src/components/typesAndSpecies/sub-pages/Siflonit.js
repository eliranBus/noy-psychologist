import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import siflonit1 from "../../../assets/images/siflonit1.jpeg";
import BackButton from "../../backButton";

const Siflonit = () => {
  return (
    <div className="inner-section" id="siflonit">
      <Helmet>
        <title>פטרידע - הפטריה ספלונית</title>
        <meta
          name="description"
          content="הפטריה ספלונית - Sarcoscypha: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="siflonit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="siflonitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="siflonitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="siflonitText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="siflonitText4Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="siflonitText5" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={siflonit1} alt="ספלונית" />
            <p>
              <MultiLingualContent contentID="siflonitImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Siflonit;
