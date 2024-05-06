import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import MultiLingualContent from "../../languages/MultiLingualContent";
import { familyTypes } from "../typesAndSpecies/typesData";
import arrowDown from "../../assets/images/arrow.gif";
import BackButton from "../backButton";

const FeaturesScreen = () => {
  let { typeId } = useParams();
  const [chosenStructure, setChosenStructure] = useState("");
  const [chosenSize, setChosenSize] = useState("");
  const [chosenPlatform, setChosenPlatform] = useState("");

  const handleStructureClick = (structure) => {
    setChosenStructure(structure);
    setChosenSize("");
    setChosenPlatform("");
  };

  const handleSizeClick = (size) => {
    setChosenSize(size);
    setChosenPlatform("");
  };

  const structuresRenderer = (structures) =>
    Object.values(structures).map((structure) => (
      <button
        className={`offset ${
          chosenStructure === structure ? "button-chosen" : ""
        }`}
        onClick={() => handleStructureClick(structure)}
      >
        {structure.name}
      </button>
    ));

  const sizesRenderer = () => {
    return Object.values(chosenStructure.sizes).map((size) => (
      <button
        className={`offset ${chosenSize === size ? "button-chosen" : ""}`}
        onClick={() => handleSizeClick(size)}
      >
        {size.name}
      </button>
    ));
  };

  const platformsRenderer = () => {
    if (chosenSize.platforms) {
      return Object.values(chosenSize.platforms).map((platform) => (
        <button
          className={`offset ${
            chosenPlatform === platform ? "button-chosen" : ""
          }`}
          onClick={() => setChosenPlatform(platform)}
        >
          {platform.name}
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
                <img src={avatar} alt={typeId} className="featureImg" />
                <div className="call-to-action">
                  <Typography>
                    <MultiLingualContent contentID={"find"} />
                  </Typography>
                  <img src={arrowDown} alt={"arrow-gif"} />
                </div>
                <div className="type-structures chapter">
                  <h3>
                    <MultiLingualContent contentID={"structure"} />
                  </h3>
                  <div className="structures-wrapper">
                    {structuresRenderer(structures)}
                  </div>
                </div>
                {chosenStructure && (
                  <div className="type-sizes chapter">
                    <h3>
                      <MultiLingualContent contentID={"size"} />
                    </h3>
                    <div className="sizes-wrapper">{sizesRenderer()}</div>
                  </div>
                )}
                {chosenSize && (
                  <div className="type-platforms chapter">
                    <h3>
                      <MultiLingualContent contentID={"platform"} />
                    </h3>
                    <div className="sizes-wrapper">{platformsRenderer()}</div>
                  </div>
                )}
                {chosenPlatform && (
                  <div className="type-types chapter">
                    <h3>
                      <MultiLingualContent contentID={"types"} />
                    </h3>
                    <div className="types-wrapper">{typesRenderer()}</div>
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
