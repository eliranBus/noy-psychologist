import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";

const GlowingInMushrooms = () => {
  return (
    <div className="inner-section" id="glowingInMushrooms">
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="glowingInMushrooms" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="glowingInMushroomsText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="glowingInMushroomsText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="glowingInMushroomsText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="glowingInMushroomsText4" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="glowingInMushroomsText5" />
            </b>
          </p>
          <p>
            <a
              href="https://india.mongabay.com/2020/11/mysterious-new-bioluminescent-mushroom-glows-in-the-forests-of-meghalaya/"
              target="_blank"
              rel="noreferrer"
            >
              <MultiLingualContent contentID="glowingInMushroomsLink1" />
            </a>
            <MultiLingualContent contentID="glowingInMushroomsLink1Text" />
          </p>
          <p>
            <a
              href="https://davidson.weizmann.ac.il/videos/online/%D7%99%D7%A1%D7%95%D7%93%D7%99/%D7%A4%D7%98%D7%A8%D7%99%D7%95%D7%AA-%D7%96%D7%95%D7%94%D7%A8%D7%95%D7%AA-%D7%99%D7%A1%D7%95%D7%93%D7%99"
              target="_blank"
              rel="noreferrer"
            >
              <MultiLingualContent contentID="glowingInMushroomsLink2" />
            </a>
            <MultiLingualContent contentID="glowingInMushroomsLink2Text" />
          </p>
        </div>
      </>
    </div>
  );
};

export default GlowingInMushrooms;
