import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import teardrop1 from "../../../assets/images/teardrop1.jpg";
import teardrop2 from "../../../assets/images/teardrop2.jpg";
import teardrop3 from "../../../assets/images/teardrop3.jpg";
import teardrop4 from "../../../assets/images/teardrop4.jpg";
import teardrop5 from "../../../assets/images/teardrop5.jpg";
import teardrop6 from "../../../assets/images/teardrop6.jpg";
import teardrop7 from "../../../assets/images/teardrop7.jpg";
import teardrop8 from "../../../assets/images/teardrop8.jpg";

const TeardropInMushrooms = () => {
  return (
    <div className="inner-section" id="teardropInMushrooms">
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="teardropInMushrooms" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="teardropInMushroomsText1" />
          </p>
          <br />
          <p className="leftText">
            <a
              href="https://weirdandwonderfulwildmushrooms.blogspot.com/2014/08/read-it-and-weep-fungal-guttation.html"
              target="='_blank"
            >
              <MultiLingualContent contentID="teardropInMushroomsTextLink" />
            </a>
            <MultiLingualContent contentID="teardropInMushroomsText2" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={teardrop1}
                alt={
                  <MultiLingualContent contentID="teardropInMushroomsImg1" />
                }
              />
              <p>
                <MultiLingualContent contentID="teardropInMushroomsImg1" />
              </p>
            </div>
          </div>
          <p>
            <MultiLingualContent contentID="teardropInMushroomsText3" />
          </p>
          <p>
            <MultiLingualContent contentID="teardropInMushroomsText4" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={teardrop2}
                alt={
                  <MultiLingualContent contentID="teardropInMushroomsImg2" />
                }
              />
              <p>
                <MultiLingualContent contentID="teardropInMushroomsImg2" />
              </p>
            </div>
          </div>
          <p>
            <MultiLingualContent contentID="teardropInMushroomsText5" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={teardrop3}
                alt={
                  <MultiLingualContent contentID="teardropInMushroomsImg3" />
                }
              />
              <p>
                <MultiLingualContent contentID="teardropInMushroomsImg3" />
              </p>
            </div>
          </div>
          <p>
            <MultiLingualContent contentID="teardropInMushroomsText6" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={teardrop4}
                alt={
                  <MultiLingualContent contentID="teardropInMushroomsImg4" />
                }
              />
              <p>
                <MultiLingualContent contentID="teardropInMushroomsImg4" />
              </p>
            </div>
          </div>
          <p>
            <MultiLingualContent contentID="teardropInMushroomsText7" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={teardrop5}
                alt={
                  <MultiLingualContent contentID="teardropInMushroomsImg5" />
                }
              />
              <p>
                <MultiLingualContent contentID="teardropInMushroomsImg5" />
              </p>
            </div>
          </div>
          <p>
            <MultiLingualContent contentID="teardropInMushroomsText8" />
          </p>
          <p>
            <MultiLingualContent contentID="teardropInMushroomsText9" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={teardrop6}
                alt={
                  <MultiLingualContent contentID="teardropInMushroomsImg6" />
                }
              />
              <p>
                <MultiLingualContent contentID="teardropInMushroomsImg6" />
              </p>
            </div>
          </div>
          <p>
            <MultiLingualContent contentID="teardropInMushroomsText10" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="teardropInMushroomsText11" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="teardropInMushroomsText12" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={teardrop7}
                alt={
                  <MultiLingualContent contentID="teardropInMushroomsImg7" />
                }
              />
              <p>
                <MultiLingualContent contentID="teardropInMushroomsImg7" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage
                src={teardrop8}
                alt={
                  <MultiLingualContent contentID="teardropInMushroomsImg8" />
                }
              />
              <p>
                <MultiLingualContent contentID="teardropInMushroomsImg8" />
              </p>
            </div>
          </div>
          <p>
            <MultiLingualContent contentID="teardropInMushroomsText13" />
          </p>
          <br />
          <p className="leftText">
            <MultiLingualContent contentID="teardropInMushroomsText14" />
          </p>
          <br />
          <p className="leftText">
            <MultiLingualContent contentID="teardropInMushroomsText15" />
          </p>
          <br />
          <p className="leftText">
            <MultiLingualContent contentID="teardropInMushroomsText16" />
          </p>
          <br />
          <p className="leftText">
            <MultiLingualContent contentID="teardropInMushroomsText17" />
          </p>
          <br />
          <br />
          <br />
          <br />
          <p>
            <a
              href="https://arbtalk.co.uk/forums/topic/105140-fungal-guttation/"
              target="_blank"
            >
              <MultiLingualContent contentID="teardropInMushroomsText18" />
            </a>
          </p>
        </div>
      </>
    </div>
  );
};

export default TeardropInMushrooms;
