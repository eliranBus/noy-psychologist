import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import taburit1 from "../../../assets/images/taburit1.jpeg";
import taburit2 from "../../../assets/images/taburit2.jpeg";
import BackButton from "../../backButton";

const Taburit = () => {
  return (
    <div className="inner-section" id="taburit">
      <Helmet>
        <title>פטרידע - הפטריה טבורית</title>
        <meta
          name="description"
          content="הפטריה טבורית - Omphalotus: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="taburit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="taburitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="taburitText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="taburitText3Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="taburitText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="taburitText5" />
          </p>
          <p>
            <MultiLingualContent contentID="taburitText6" />
            <Link
              target="_blank"
              to={"/information/various-phenomena/glowing-in-mushrooms"}
            >
              <MultiLingualContent contentID="taburitText7Link" />
            </Link>
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={taburit1} alt="טבורית" />
              <p>
                <MultiLingualContent contentID="taburitImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={taburit2} alt="טבורית" />
              <p>
                <MultiLingualContent contentID="taburitImg2" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Taburit;
