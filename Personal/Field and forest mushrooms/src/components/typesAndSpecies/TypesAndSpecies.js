import React from "react";
import { useHistory } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import MultiLingualContent from "../../languages/MultiLingualContent";
import { familyTypes, types } from "./typesData";
import Grid from "./grid/grid";
import { scrollToTop } from "../../assets/utilities";

const TypesAndSpecies = () => {
  let history = useHistory();

  const handleTypeChange = (value) => {
    const name = value.split("-")[1].trim().toLowerCase();
    const desiredPath = `/types-and-species/type-identification/type/${name}`;

    setTimeout(() => {
      history.push(desiredPath);
      scrollToTop();
    }, 500);
  };

  return (
    <div className="section" id="types-and-species">
      <div className="typesAndSpeciesWrapper inner-section">
        <h2>
          <MultiLingualContent contentID="typesAndSpecies" />
        </h2>
        <h3 className="typesAndSpeciesSubtitle">
          <MultiLingualContent contentID="typesAndSpeciesSubtitle" />
        </h3>
        <Autocomplete
          disablePortal
          id={"combo-box-demo"}
          options={types}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="סוג" />}
          onChange={(e) => handleTypeChange(e.target.innerHTML)}
        />
        <Grid data={familyTypes} />
      </div>
    </div>
  );
};

export default TypesAndSpecies;
