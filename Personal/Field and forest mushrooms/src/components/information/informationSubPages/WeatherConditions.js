import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import summary from "../../../assets/articles/סיכום עונת 2024-25.docx";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";

const WeatherConditions = () => {
  return (
    <div className="inner-section" id="weatherConditions">
      <Helmet>
        <title>פטרידע - תנאי מזג אוויר</title>
        <meta name="description" />
      </Helmet>
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="weatherConditions" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <Link to={summary} target="_blank" download>
              <MultiLingualContent contentID="yearSummary" />
            </Link>
          </p>
        </div>
      </>
    </div>
  );
};

export default WeatherConditions;
