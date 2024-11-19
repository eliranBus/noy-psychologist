import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import dafdefanit1 from "../../../assets/images/dafdefanit1.jpg";
import dafdefanit2 from "../../../assets/images/dafdefanit2.jpg";
import dafdefanit3 from "../../../assets/images/dafdefanit3.jpg";
import BackButton from "../../backButton";

const Dafdefanit = () => {
  return (
    <div className="inner-section" id="dafdefanit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="dafdefanit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="dafdefanitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="dafdefanitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="dafdefanitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="dafdefanitText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="dafdefanitText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="dafdefanitText6" />
          </p>
          <br />
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="dafdefanitBulletBold1" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="dafdefanitBullet1" />
          </p>
          <p>
            <MultiLingualContent contentID="dafdefanitBullet12" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={dafdefanit1}
                alt={<MultiLingualContent contentID="dafdefanitImg1" />}
              />
              <br />
              <LazyLoadImage
                src={dafdefanit2}
                alt={<MultiLingualContent contentID="dafdefanitImg2" />}
              />
              <p>
                <MultiLingualContent contentID="dafdefanitImg1" />
              </p>
            </div>
          </div>
          <br />
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="dafdefanitBulletBold2" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="dafdefanitBullet2" />
          </p>
          <p>
            <MultiLingualContent contentID="dafdefanitBullet21" />
          </p>
          <br />
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="dafdefanitBulletBold3" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="dafdefanitBulletBold31" />
          </p>
          <p>
            <MultiLingualContent contentID="dafdefanitBulletBold32" />
          </p>
          <p>
            <MultiLingualContent contentID="dafdefanitBulletBold33" />
          </p>
          <p>
            <MultiLingualContent contentID="dafdefanitBulletBold34" />
          </p>
          <p>
            <MultiLingualContent contentID="dafdefanitBulletBold35" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={dafdefanit3}
                alt={<MultiLingualContent contentID="dafdefanitImg3" />}
              />
              <p>
                <MultiLingualContent contentID="dafdefanitImg3" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Dafdefanit;
