import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import kamronit1 from "../../../assets/images/kamronit1.jpeg";
import kamronit2 from "../../../assets/images/kamronit2.jpeg";

const Kamronit = () => {
  return (
    <div className="inner-section" id="kamronit">
      <Helmet>
        <title>פטרידע - הפטריה קמרונית</title>
        <meta
          name="description"
          content="הפטריה קמרונית - Chroogomphus/Gomphidius: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="kamronit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="kamronitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kamronitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kamronitText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="kamronitText4Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="kamronitText5" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={kamronit1} alt="קמרונית" />
            <p>
              <MultiLingualContent contentID="kamronitImg1" />
            </p>
          </div>
        </div>
        <p>
          <b>
            <MultiLingualContent contentID="kamronitText6Bold" />
          </b>
        </p>
        <p>
          <MultiLingualContent contentID="kamronitText7" />
        </p>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={kamronit2} alt="קמרונית" />
            <p>
              <MultiLingualContent contentID="kamronitImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Kamronit;
