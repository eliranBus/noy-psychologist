import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import kishurit2 from "../../../assets/images/kishurit2.jpg";
import kishurit3 from "../../../assets/images/kishurit3.jpg";
import BackButton from "../../backButton";

const Kishurit = () => {
  return (
    <div className="inner-section" id="kishurit">
      <Helmet>
        <title>פטרידע - הפטריה כישורית</title>
        <meta
          name="description"
          content="הפטריה כישורית - Colus: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="kishurit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="kishuritText1" />
            <b>
              <MultiLingualContent contentID="kishuritText1Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kishuritText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kishuritText3" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={kishurit2}
              alt={<MultiLingualContent contentID="kishuritImg2" />}
            />
            <p>
              <MultiLingualContent contentID="kishuritImg2" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={kishurit3}
              alt={<MultiLingualContent contentID="kishuritImg3" />}
            />
            <p>
              <MultiLingualContent contentID="kishuritImg3" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Kishurit;
