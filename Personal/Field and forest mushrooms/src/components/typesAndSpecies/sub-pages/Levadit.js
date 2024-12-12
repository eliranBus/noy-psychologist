import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import table from "../../../assets/type-tables/הסוג לבדית.xls";
import levadit1 from "../../../assets/images/levadit1.jpg";
import levadit2 from "../../../assets/images/levadit2.jpg";
import levadit3 from "../../../assets/images/levadit3.jpg";
import levadit4 from "../../../assets/images/levadit4.jpg";
import levadit5 from "../../../assets/images/levadit5.jpg";
import levadit6 from "../../../assets/images/levadit6.jpg";
import levadit7 from "../../../assets/images/levadit7.jpg";
import BackButton from "../../backButton";

const Levadit = () => {
  return (
    <div className="inner-section" id="levadit">
      <Helmet>
        <title>פטרידע - הפטריה לבדית</title>
        <meta
          name="description"
          content="הפטריה לבדית - xerocomus: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="levadit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="levaditText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="levaditText2" />
          </p>
          <p>
            <MultiLingualContent contentID="levaditText3" />
          </p>
          <p>
            <MultiLingualContent contentID="levaditText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="levaditText5" />
            <div className="typeTable">
              <Link to={table} target="_blank" download>
                <MultiLingualContent contentID="levaditTableDownload" />
              </Link>
            </div>
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={levadit1} alt="לבדית" />
            <p>
              <MultiLingualContent contentID="levaditImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={levadit2} alt="לבדית" />
            <p>
              <MultiLingualContent contentID="levaditImg2" />
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={levadit3} alt="לבדית" />
            <p>
              <MultiLingualContent contentID="levaditImg3" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={levadit4} alt="לבדית" />
            <p>
              <MultiLingualContent contentID="levaditImg4" />
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={levadit5} alt="לבדית" />
            <p>
              <MultiLingualContent contentID="levaditImg5" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={levadit6} alt="לבדית" />
            <p>
              <MultiLingualContent contentID="levaditImg6" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={levadit7} alt="לבדית" />
            <p>
              <MultiLingualContent contentID="levaditImg7" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Levadit;
