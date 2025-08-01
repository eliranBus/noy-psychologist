import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import nakvuvanit1 from "../../../assets/images/nakvuvanit1.jpg";
import nakvuvanit2 from "../../../assets/images/nakvuvanit2.jpg";
import nakvuvanit3 from "../../../assets/images/nakvuvanit3.jpg";
import nakvuvanit4 from "../../../assets/images/nakvuvanit4.jpg";
import nakvuvanit5 from "../../../assets/images/nakvuvanit5.jpg";
import BackButton from "../../backButton";

const Nakvuvanit = () => {
  return (
    <div className="inner-section" id="nakvuvit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="nakvuvanit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="nakvuvanitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="nakvuvanitText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="nakvuvanitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="nakvuvanitText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="nakvuvanitText5" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="nakvuvanitText6Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="nakvuvanitText6" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={nakvuvanit1} alt="נקבובנית" />
              <p>
                <MultiLingualContent contentID="nakvuvanitImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={nakvuvanit2} alt="נקבובנית" />
              <p>
                <MultiLingualContent contentID="nakvuvanitImg2" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={nakvuvanit3} alt="נקבובנית" />
              <p>
                <MultiLingualContent contentID="nakvuvanitImg3" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="nakvuvanitText7Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="nakvuvanitText7" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={nakvuvanit4} alt="נקבובנית" />
            <p>
              <MultiLingualContent contentID="nakvuvanitImg4" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={nakvuvanit5} alt="נקבובנית" />
            <p>
              <MultiLingualContent contentID="nakvuvanitImg5" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Nakvuvanit;
