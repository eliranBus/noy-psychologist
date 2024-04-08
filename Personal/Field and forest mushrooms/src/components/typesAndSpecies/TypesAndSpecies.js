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
        <Grid data={familyTypes} />
      </div>
    </div>
  );
};

export default TypesAndSpecies;
