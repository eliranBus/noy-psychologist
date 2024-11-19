import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import nakuvit1 from "../../../assets/images/nakuvit1.jpg";
import nakuvit2 from "../../../assets/images/nakuvit2.jpg";
import nakuvit3 from "../../../assets/images/nakuvit3.jpg";
import BackButton from "../../backButton";

const Nakuvit = () => {
  return (
    <div className="inner-section" id="nakuvit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="nakuvit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="nakuvitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="nakuvitText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="nakuvitText3Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="nakuvitText4" />
          </p>
          <p>
            <MultiLingualContent contentID="nakuvitText5" />
          </p>
          <p>
            <MultiLingualContent contentID="nakuvitText6" />
          </p>
          <p>
            <MultiLingualContent contentID="nakuvitText7" />
          </p>
          <p>
            <MultiLingualContent contentID="nakuvitText8" />
          </p>
          <p>
            <MultiLingualContent contentID="nakuvitText9" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={nakuvit1}
                alt={<MultiLingualContent contentID="nakuvitImg1" />}
              />
              <p>
                <MultiLingualContent contentID="nakuvitImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage
                src={nakuvit2}
                alt={<MultiLingualContent contentID="nakuvitImg2" />}
              />
              <p>
                <MultiLingualContent contentID="nakuvitImg2" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage
                src={nakuvit3}
                alt={<MultiLingualContent contentID="nakuvitImg3" />}
              />
              <p>
                <MultiLingualContent contentID="nakuvitImg3" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Nakuvit;
