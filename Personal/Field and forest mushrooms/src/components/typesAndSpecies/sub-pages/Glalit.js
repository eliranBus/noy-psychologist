import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import glalit1 from "../../../assets/images/glalit1.jpg";
import glalit2 from "../../../assets/images/glalit2.jpg";
import glalit3 from "../../../assets/images/glalit3.jpg";
import BackButton from "../../backButton";

const Glalit = () => {
  return (
    <div className="inner-section" id="glalit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="glalit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="glalitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="glalitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="glalitText3" />
          </p>
          <p>
            <MultiLingualContent contentID="glalitText4" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="glalitText5Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="glalitText6" />
          </p>
          <p>
            <MultiLingualContent contentID="glalitText7" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={glalit1}
                alt={<MultiLingualContent contentID="glalitImg1" />}
              />
              <p>
                <MultiLingualContent contentID="glalitImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage
                src={glalit3}
                alt={<MultiLingualContent contentID="glalitImg3" />}
              />
              <p>
                <MultiLingualContent contentID="glalitImg3" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="glalitText8Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="glalitText9" />
          </p>
          <p>
            <MultiLingualContent contentID="glalitText10" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={glalit2}
              alt={<MultiLingualContent contentID="glalitImg2" />}
            />
            <p>
              <MultiLingualContent contentID="glalitImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Glalit;
