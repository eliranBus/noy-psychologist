import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import article from "../../../assets/articles/לחסל מכת מדינה.docx";
import article2 from "../../../assets/articles/פונגה.docx";
import BackButton from "../../backButton";

const ImportanceAndRole = () => {
  return (
    <div className="inner-section" id="importanceAndRole">
      <Helmet>
        <title>פטרידע - חשיבותן ותפקידן של הפטריות</title>
        <meta name="description" />
      </Helmet>
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="importance" />
      </h2>
      <>
        <div className="informationText">
          <h3>
            <MultiLingualContent contentID="importanceAndRoleLinks" />
          </h3>
          <div className="typeTable">
            <a
              href="https://kids.frontiersin.org/he/articles/10.3389/frym.2021.560315-he"
              target="_blank"
            >
              <MultiLingualContent contentID="importanceAndRoleLink1" />
            </a>
          </div>
          <div className="typeTable">
            <Link
              to={article}
              target="_blank"
              download
              alt="מאמר להורדה - לחסל מכת מדינה"
            >
              <MultiLingualContent contentID="importanceAndRoleLink2" />
            </Link>
          </div>
          <div className="typeTable">
            <Link
              to={article2}
              target="_blank"
              download
              alt="מאמר להורדה - פונגה"
            >
              <MultiLingualContent contentID="importanceAndRoleLink3" />
            </Link>
          </div>
        </div>
      </>
    </div>
  );
};

export default ImportanceAndRole;
