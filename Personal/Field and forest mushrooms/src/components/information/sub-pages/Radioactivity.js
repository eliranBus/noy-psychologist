import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import kamronit from "../../../assets/images/kamronit.jpg";
import BackButton from "../../backButton";

const Radioactivity = () => {
  return (
    <div className="inner-section" id="radioactivity">
      <Helmet>
        <title>פטרידע - פטריות סופגות חומרים מסוכנים</title>
        <meta name="description" />
      </Helmet>
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="radioactivity" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="radioactivityText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="radioactivityText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="radioactivityText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="radioactivityText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="radioactivityText5" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={kamronit}
              alt={<MultiLingualContent contentID="radioactivityImg1" />}
            />
            <p>
              <MultiLingualContent contentID="radioactivityImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Radioactivity;
