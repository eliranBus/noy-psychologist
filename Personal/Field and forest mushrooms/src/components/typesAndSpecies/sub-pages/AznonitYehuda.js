import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import aznonit from "../../../assets/images/aznonit.jpg";
import aznonit2 from "../../../assets/images/aznonit2.jpg";
import aznonit3 from "../../../assets/images/aznonit3.jpg";
import BackButton from "../../backButton";

const AznonitYehuda = () => {
  return (
    <div className="inner-section" id="aznonitYehuda">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="aznonitYehuda" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="aznonitYehudaText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="aznonitYehudaText2" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={aznonit}
                alt={<MultiLingualContent contentID="aznonitYehudaImg1" />}
              />
              <p>
                <MultiLingualContent contentID="aznonitYehudaImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage
                src={aznonit2}
                alt={<MultiLingualContent contentID="aznonitYehudaImg2" />}
              />
              <p>
                <MultiLingualContent contentID="aznonitYehudaImg2" />
              </p>
            </div>
          </div>
          <p>
            <MultiLingualContent contentID="aznonitYehudaText3" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={aznonit3}
                alt={<MultiLingualContent contentID="aznonitYehudaImg3" />}
              />
              <p>
                <MultiLingualContent contentID="aznonitYehudaImg3" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default AznonitYehuda;
