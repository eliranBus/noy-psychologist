import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import legParts from "../../../assets/images/legParts.jpg";
import terms from "../../../assets/images/terms.jpg";
import shapes from "../../../assets/images/shapes.jpg";
import connections from "../../../assets/images/connections.jpg";
import shapesOfMushrooms from "../../../assets/images/shapesOfMushrooms.jpg";
import BackButton from "../../backButton";

const StructureAndTerms = () => {
  return (
    <div className="inner-section" id="structureAndTerms">
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="structureAndTerms" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="legPartsText1" />
          </p>
        </div>
        <div className="informationText">
          <h3>
            <MultiLingualContent contentID="legParts" />
          </h3>
          <ul>
            <li>
              <b>
                <MultiLingualContent contentID="legPartsTextBullet1Title" />
              </b>
              <MultiLingualContent contentID="legPartsTextBullet1" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="legPartsTextBullet2Title" />
              </b>
              <MultiLingualContent contentID="legPartsTextBullet2" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="legPartsTextBullet3Title" />
              </b>
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="legPartsTextBullet4Title" />
              </b>
              <MultiLingualContent contentID="legPartsTextBullet4" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="legPartsTextBullet5Title" />
              </b>
              <MultiLingualContent contentID="legPartsTextBullet5" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="legPartsTextBullet6Title" />
              </b>
              <MultiLingualContent contentID="legPartsTextBullet6" />
            </li>
          </ul>
          <p>
            <MultiLingualContent contentID="legPartsText2" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={legParts} alt="צורות רגליים" />
          </div>
        </div>
        <div className="informationText">
          <h3>
            <MultiLingualContent contentID="capParts" />
          </h3>
          <p>
            <MultiLingualContent contentID="capPartsText1" />
          </p>
          <p>
            <MultiLingualContent contentID="capPartsText2" />
          </p>
          <br />
          <ul>
            <li>
              <b>
                <MultiLingualContent contentID="capPartsBulletTitle1" />
              </b>
              <MultiLingualContent contentID="capPartsBulletText1" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="capPartsBulletTitle2" />
              </b>
              <MultiLingualContent contentID="capPartsBulletText2" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="capPartsBulletTitle3" />
              </b>
              <MultiLingualContent contentID="capPartsBulletText3" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="capPartsBulletTitle4" />
              </b>
              <MultiLingualContent contentID="capPartsBulletText4" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="capPartsBulletTitle5" />
              </b>
              <MultiLingualContent contentID="capPartsBulletText5" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="capPartsBulletTitle6" />
              </b>
              <MultiLingualContent contentID="capPartsBulletText6" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="capPartsBulletTitle7" />
              </b>
              <MultiLingualContent contentID="capPartsBulletText7" />
            </li>
          </ul>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={terms} alt="mushroom parts terms" />
            <LazyLoadImage src={shapes} alt="shapes of caps" />
            <LazyLoadImage src={connections} alt="connections to the stem" />
          </div>
        </div>
        <div className="informationText">
          <h3>
            <MultiLingualContent contentID="shapesOfMushrooms" />
          </h3>
          <div className="informationText">
            <p>
              <MultiLingualContent contentID="shapesOfMushroomsText1" />
            </p>
            <p>
              <MultiLingualContent contentID="shapesOfMushroomsText2" />
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={shapesOfMushrooms} alt="mushroom parts terms" />
          </div>
        </div>
      </>
    </div>
  );
};

export default StructureAndTerms;
