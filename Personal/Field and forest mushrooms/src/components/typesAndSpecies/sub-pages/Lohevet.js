import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import lohevet1 from "../../../assets/images/lohevet1.jpg";
import BackButton from "../../backButton";

const Lohevet = () => {
  return (
    <div className="inner-section" id="lohevet">
      <Helmet>
        <title>פטרידע - הפטריה לוהבת</title>
        <meta
          name="description"
          content="הפטריה לוהבת - ascomycotina: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="lohevet" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="lohevetText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="lohevetText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="lohevetText3" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={lohevet1} alt="לוהבת" />
            <p>
              <MultiLingualContent contentID="lohevetImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Lohevet;
