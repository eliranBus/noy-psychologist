import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import yerukatDapim1 from "../../../assets/images/yerukatDapim1.jpg";
import yerukatDapim2 from "../../../assets/images/yerukatDapim2.jpg";
import yerukatDapim3 from "../../../assets/images/yerukatDapim3.jpg";
import BackButton from "../../backButton";

const YerukatDapim = () => {
  return (
    <div className="inner-section" id="yerukatDapim">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="yerukatDapim" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="yerukatDapimText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="yerukatDapimText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="yerukatDapimText3" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={yerukatDapim1}
                alt={<MultiLingualContent contentID="yerukatDapimImg1" />}
              />
              <p>
                <MultiLingualContent contentID="yerukatDapimImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage
                src={yerukatDapim2}
                alt={<MultiLingualContent contentID="yerukatDapimImg2" />}
              />
              <p>
                <MultiLingualContent contentID="yerukatDapimImg2" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage
                src={yerukatDapim3}
                alt={<MultiLingualContent contentID="yerukatDapimImg3" />}
              />
              <p>
                <MultiLingualContent contentID="yerukatDapimImg3" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default YerukatDapim;
