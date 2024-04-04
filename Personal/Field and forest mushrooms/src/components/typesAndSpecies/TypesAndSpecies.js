import React from "react";
import MultiLingualContent from "../../languages/MultiLingualContent";
import { mushroomTypes, familyTypes } from "./typesData";
import Grid from "./grid/grid";

const TypesAndSpecies = () => {
  return (
    <div className="section" id="types-and-species">
      <div className="typesAndSpeciesWrapper inner-section">
        <h2>
          <MultiLingualContent contentID="typesAndSpecies" />
        </h2>
        <ul className="typesAndSpeciesBullets">
          {mushroomTypes.map(({ name, path }) => (
            <li key={name}>
              <a href={path} target="blank">
                {name}
              </a>
            </li>
          ))}
        </ul>

        <Grid data={familyTypes} />
      </div>
    </div>
  );
};

export default TypesAndSpecies;
