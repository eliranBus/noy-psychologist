import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import dfunit1 from "../../../assets/images/dfunit1.jpg";
import dfunit2 from "../../../assets/images/dfunit2.jpg";
import dfunit3 from "../../../assets/images/dfunit3.jpg";
import dfunit4 from "../../../assets/images/dfunit4.jpg";
import dfunit5 from "../../../assets/images/dfunit5.jpg";
import dfunit6 from "../../../assets/images/dfunit6.jpg";
import BackButton from "../../backButton";

const Dfunit = () => {
  return (
    <div className="inner-section" id="dfunit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="dfunit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="dfunitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="dfunitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="dfunitText3" />
          </p>
          <p>
            <MultiLingualContent contentID="dfunitText4" />
          </p>
          <p>
            <MultiLingualContent contentID="dfunitText5" />
          </p>
          <p>
            <MultiLingualContent contentID="dfunitText6" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="dfunitText7Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="dfunitText8" />
          </p>
          <p>
            <MultiLingualContent contentID="dfunitText9" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={dfunit1}
                alt={<MultiLingualContent contentID="dfunitImg1" />}
              />
              <p>
                <MultiLingualContent contentID="dfunitImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage
                src={dfunit2}
                alt={<MultiLingualContent contentID="dfunitImg2" />}
              />
              <p>
                <MultiLingualContent contentID="dfunitImg2" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage
                src={dfunit3}
                alt={<MultiLingualContent contentID="dfunitImg3" />}
              />
              <p>
                <MultiLingualContent contentID="dfunitImg3" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="dfunitText10Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="dfunitText11" />
          </p>
          <p>
            <MultiLingualContent contentID="dfunitText12" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={dfunit4}
              alt={<MultiLingualContent contentID="dfunitImg4" />}
            />
            <p>
              <MultiLingualContent contentID="dfunitImg4" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={dfunit5}
              alt={<MultiLingualContent contentID="dfunitImg5" />}
            />
            <p>
              <MultiLingualContent contentID="dfunitImg5" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="dfunitText13Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="dfunitText14" />
          </p>
          <p>
            <MultiLingualContent contentID="dfunitText15" />
          </p>
          <p>
            <MultiLingualContent contentID="dfunitText16" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="dfunitText17Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="dfunitText18" />
          </p>
          <p>
            <MultiLingualContent contentID="dfunitText19" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={dfunit6}
                alt={<MultiLingualContent contentID="atzitzitImg6" />}
              />
              <p>
                <MultiLingualContent contentID="atzitzitImg6" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="dfunitText20Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="dfunitText21" />
          </p>
          <p>
            <MultiLingualContent contentID="dfunitText22" />
          </p>
        </div>
      </>
    </div>
  );
};

export default Dfunit;
