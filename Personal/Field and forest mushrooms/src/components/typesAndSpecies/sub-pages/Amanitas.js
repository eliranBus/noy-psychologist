import React from "react";
import { Link } from "react-router-dom";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import bitzatit from "../../../assets/images/bitzatit.jpg";
import sister from "../../../assets/images/sister.jpg";
import table from "../../../assets/type-tables/הסוג אמנית.xls";
import BackButton from "../../backButton";

const Amanitas = () => {
  return (
    <div className="inner-section" id="amanitas">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="amanitas" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="amanitasText1Bold" />
            </b>
          </p>
          <br />
          <br />
          <p>
            <MultiLingualContent contentID="amanitasText2" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="amanitasText3Bold" />
            </b>
            <MultiLingualContent contentID="amanitasText3" />
            <b>
              <MultiLingualContent contentID="amanitasText31Bold" />
            </b>
            <MultiLingualContent contentID="amanitasText31" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="amanitasText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="amanitasText5" />
          </p>
          <p>
            <MultiLingualContent contentID="amanitasText6" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="amanitasText7" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={bitzatit}
              alt={<MultiLingualContent contentID="amanitasImg1" />}
            />
            <p>
              <MultiLingualContent contentID="amanitasImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={sister}
              alt={<MultiLingualContent contentID="amanitasImg2" />}
            />
            <p>
              <MultiLingualContent contentID="amanitasImg2" />
            </p>
          </div>
        </div>
        <div className="typeTable">
          <Link to={table} target="_blank" download>
            <MultiLingualContent contentID="matranitTableDownload" />
          </Link>
        </div>
      </>
    </div>
  );
};

export default Amanitas;
