import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import table from "../../../assets/type-tables/מיקוריזה.pdf";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import orania from "../../../assets/images/orania.jpg";
import mycorrhizae1 from "../../../assets/images/mycorrhizae1.jpg";
import BackButton from "../../backButton";

const PlantMushroomBond = () => {
  return (
    <div className="inner-section" id="plantMushroomBond">
      <Helmet>
        <title>פטרידע - שותפות פטריה וצמח</title>
        <meta name="description" />
      </Helmet>
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="plantMushroomBondTitle" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="plantMushroomBondText1" />
          </p>
          <p>
            <MultiLingualContent contentID="plantMushroomBondText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="plantMushroomBondText21" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="plantMushroomBondTextBold3" />
            </b>
            <MultiLingualContent contentID="plantMushroomBondText3" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="plantMushroomBondTextBold4" />
            </b>
            <MultiLingualContent contentID="plantMushroomBondText4" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={orania} alt="אורנייה במיקוריזה עם אורן" />
              <p>
                <MultiLingualContent contentID="plantMushroomBondImg1" />
              </p>
            </div>
          </div>
          <p>
            <MultiLingualContent contentID="plantMushroomBondText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="plantMushroomBondText6" />
          </p>
          <br />
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="plantMushroomBondLinks" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="plantMushroomBondLinkText1" />
            <Link to={table} target="_blank" download>
              <MultiLingualContent contentID="plantMushroomBondLink" />
            </Link>
          </p>
          <p>
            <a
              href="https://www.hayadan.org.il/the-invisible-fungus-0707202"
              target="_blank"
              rel="noreferrer"
            >
              <MultiLingualContent contentID="plantMushroomBondLinkText2" />
            </a>
            <MultiLingualContent contentID="plantMushroomBondLinkText21" />
          </p>
          <p>
            <a
              href="https://www.hayadan.org.il/%D7%A4%D7%98%D7%A8%D7%99%D7%95%D7%AA-%D7%A2%D7%A6%D7%99%D7%9D"
              target="_blank"
              rel="noreferrer"
            >
              <MultiLingualContent contentID="plantMushroomBondLinkText3" />
            </a>
            <MultiLingualContent contentID="plantMushroomBondLinkText31" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={mycorrhizae1} alt="פטריה עוטפת שורש" />
          </div>
        </div>
      </>
    </div>
  );
};

export default PlantMushroomBond;
