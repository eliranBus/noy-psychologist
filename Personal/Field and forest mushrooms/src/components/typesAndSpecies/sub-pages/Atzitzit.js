import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import atzitzit1 from "../../../assets/images/atzitzit1.jpg";
import atzitzit2 from "../../../assets/images/atzitzit2.jpg";
import atzitzit3 from "../../../assets/images/atzitzit3.jpg";
import atzitzit4 from "../../../assets/images/atzitzit4.jpg";
import atzitzit5 from "../../../assets/images/atzitzit5.jpg";
import atzitzit6 from "../../../assets/images/atzitzit6.jpg";
import atzitzit7 from "../../../assets/images/atzitzit7.jpg";
import BackButton from "../../backButton";

const Atzitzit = () => {
  return (
    <div className="inner-section" id="atzitzit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="atzitzit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="atzitzitText0" />
          </p>
          <p>
            <MultiLingualContent contentID="atzitzitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="atzitzitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="atzitzitText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="atzitzitText4Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="atzitzitText5" />
          </p>
          <p>
            <MultiLingualContent contentID="atzitzitText6" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={atzitzit1}
                alt={<MultiLingualContent contentID="atzitzitImg1" />}
              />
              <p>
                <MultiLingualContent contentID="atzitzitImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage
                src={atzitzit2}
                alt={<MultiLingualContent contentID="atzitzitImg2" />}
              />
              <p>
                <MultiLingualContent contentID="atzitzitImg2" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="atzitzitText7Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="atzitzitText8" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={atzitzit3}
              alt={<MultiLingualContent contentID="atzitzitImg3" />}
            />
            <p>
              <MultiLingualContent contentID="atzitzitImg3" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={atzitzit4}
              alt={<MultiLingualContent contentID="atzitzitImg4" />}
            />
            <p>
              <MultiLingualContent contentID="atzitzitImg4" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={atzitzit5}
              alt={<MultiLingualContent contentID="atzitzitImg5" />}
            />
            <p>
              <MultiLingualContent contentID="atzitzitImg5" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="atzitzitText9Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="atzitzitText10" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={atzitzit6}
                alt={<MultiLingualContent contentID="atzitzitImg6" />}
              />
              <p>
                <MultiLingualContent contentID="atzitzitImg6" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage
                src={atzitzit7}
                alt={<MultiLingualContent contentID="atzitzitImg7" />}
              />
              <p>
                <MultiLingualContent contentID="atzitzitImg7" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Atzitzit;
