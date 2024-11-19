import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import nolit from "../../../assets/images/nolit.jpg";
import kfitzit from "../../../assets/images/kfitzit.jpg";
import buatit from "../../../assets/images/buatit.jpg";
import BackButton from "../../backButton";

const Patririot = () => {
  return (
    <div className="inner-section" id="patririot">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="patririot" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="patririotText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="patririotText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="patririotText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="patririotText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="patririotText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="patririotText6" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage
              src={nolit}
              alt={<MultiLingualContent contentID="patririotImg1" />}
            />
            <p>
              <MultiLingualContent contentID="patririotImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={kfitzit}
              alt={<MultiLingualContent contentID="patririotImg2" />}
            />
            <p>
              <MultiLingualContent contentID="patririotImg2" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage
              src={buatit}
              alt={<MultiLingualContent contentID="patririotImg3" />}
            />
            <p>
              <MultiLingualContent contentID="patririotImg3" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Patririot;
