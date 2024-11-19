import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Typography } from "@mui/material";
import MultiLingualContent from "../../languages/MultiLingualContent";
import { familyTypes } from "../typesAndSpecies/typesData";
import arrowDown from "../../assets/images/arrow.gif";
import BackButton from "../backButton";
import { scrollToElement } from "../../assets/utilities";

const FeaturesScreen = () => {
  let { typeId } = useParams();
  const [chosenStructure, setChosenStructure] = useState("");
  const [chosenSize, setChosenSize] = useState("");
  const [chosenPlatform, setChosenPlatform] = useState("");

  const handleStructureClick = (structure) => {
    setChosenStructure(structure);
    setChosenSize("");
    setChosenPlatform("");
    setTimeout(() => {
      scrollToElement("size-button");
    }, 200);
  };

  const handleSizeClick = (size) => {
    setChosenSize(size);
    setChosenPlatform("");
    setTimeout(() => {
      scrollToElement("platform-button");
    }, 200);
  };

  const handlePlatformClick = (platform) => {
    setChosenPlatform(platform);
    setTimeout(() => {
      scrollToElement("type-section");
    }, 200);
  };

  const structuresRenderer = (structures) =>
    Object.values(structures).map((structure) => (
      <button
        id="structure-button"
        className={`offset ${
          chosenStructure === structure ? "button-chosen" : ""
        }`}
        onClick={() => handleStructureClick(structure)}
      >
        <div>{structure.name}</div>
        <div>&darr;</div>
      </button>
    ));

  const sizesRenderer = () => {
    return Object.values(chosenStructure.sizes).map((size) => (
      <button
        id="size-button"
        className={`offset ${chosenSize === size ? "button-chosen" : ""}`}
        onClick={() => handleSizeClick(size)}
      >
        {size.name}
        <div>&darr;</div>
      </button>
    ));
  };

  const platformsRenderer = () => {
    if (chosenSize.platforms) {
      return Object.values(chosenSize.platforms).map((platform) => (
        <button
          id="platform-button"
          className={`offset ${
            chosenPlatform === platform ? "button-chosen" : ""
          }`}
          onClick={() => handlePlatformClick(platform)}
        >
          {platform.name}
          <div>&darr;</div>
        </button>
      ));
    }
  };

  const typesRenderer = () => {
    if (chosenPlatform) {
      return (
        <ul>
          {Object.values(chosenPlatform.types).map((type) => (
            <li className="type-link">
              <a href={type.path}>{type.name}</a>
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div className="section" id="featuresScreen">
      <div className="typesWrapper inner-section">
        {familyTypes.map(
          ({ feature, avatar, structures }) =>
            feature === `type${typeId}` && (
              <>
                <BackButton />
                <h2 className="typesAndSpeciesTitle">
                  <MultiLingualContent contentID={feature} />
                </h2>
                <LazyLoadImage
                  src={avatar}
                  alt={typeId}
                  className="featureImg"
                />
                <div className="call-to-action">
                  <Typography>
                    <MultiLingualContent contentID={"find"} />
                  </Typography>
                  <LazyLoadImage src={arrowDown} alt={"arrow-gif"} />
                </div>
                <div className="type-structures chapter">
                  <h3>
                    <MultiLingualContent contentID={"structure"} />
                  </h3>
                  <div className="structures-wrapper wrapper">
                    {structuresRenderer(structures)}
                  </div>
                </div>
                {chosenStructure && (
                  <div className="type-sizes chapter">
                    <h3>
                      <MultiLingualContent contentID={"size"} />
                    </h3>
                    <div className="sizes-wrapper wrapper">
                      {sizesRenderer()}
                    </div>
                  </div>
                )}
                {chosenSize && (
                  <div className="type-platforms chapter">
                    <h3>
                      <MultiLingualContent contentID={"platform"} />
                    </h3>
                    <div className="sizes-wrapper wrapper">
                      {platformsRenderer()}
                    </div>
                  </div>
                )}
                {chosenPlatform && (
                  <div id="type-section" className="type-types chapter">
                    <h3>
                      <MultiLingualContent contentID={"types"} />
                    </h3>
                    <div className="types-wrapper wrapper">
                      {typesRenderer()}
                    </div>
                  </div>
                )}
              </>
            )
        )}
      </div>
    </div>
  );
};

export default FeaturesScreen;
