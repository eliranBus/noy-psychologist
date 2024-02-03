import React from "react";
import MultiLingualContent from "../../languages/MultiLingualContent";
import { mushroomTypes } from "./typesData";

const TypesAndSpecies = () => {
  return (
    <div className="section" id="typesAndSpecies">
      <div className="typesAndSpeciesWrapper inner-section">
        <h2>
          <MultiLingualContent contentID="typesAndSpecies" />
        </h2>
        <ul className="typesAndSpeciesBullets">
          {mushroomTypes.map(({ name, path }) => (
            <li>
              <a href={path} target="blank">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TypesAndSpecies;
