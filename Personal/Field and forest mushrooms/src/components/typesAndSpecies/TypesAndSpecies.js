import React from "react";
import { useHistory } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import MultiLingualContent from "../../languages/MultiLingualContent";
import { familyTypes, types } from "./typesData";
import Grid from "./grid/grid";
import { scrollToTop } from "../../assets/utilities";
import decorative from "../../assets/decoratives/7.png";

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
        <h3 className="typesAndSpeciesText">
          <MultiLingualContent contentID="typesAndSpeciesText1" />
        </h3>
        <h3 className="typesAndSpeciesText">
          <MultiLingualContent contentID="typesAndSpeciesText2" />
        </h3>
        <LazyLoadImage
          src={decorative}
          alt=""
          className="decorative-species"
          loading="lazy"
        />
        <h4 className="typesAndSpeciesSubtitle">
          <MultiLingualContent contentID="typesAndSpeciesSubtitle" />
        </h4>
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
