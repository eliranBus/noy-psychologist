import React from "react";
import { Helmet } from "react-helmet";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";

const Gushanit = () => {
  return (
    <div className="inner-section" id="gushanit">
      <Helmet>
        <title>פטרידע - הפטריה גושנית</title>
        <meta
          name="description"
          content="הפטריה גושנית - Leccinum: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="gushanit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="gushanitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="gushanitText2" />
          </p>
        </div>
      </>
    </div>
  );
};

export default Gushanit;
