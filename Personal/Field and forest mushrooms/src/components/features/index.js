import React from "react";
import { useParams } from "react-router-dom";
import MultiLingualContent from "../../languages/MultiLingualContent";
import { familyTypes } from "../typesAndSpecies/typesData";

const FeaturesScreen = () => {
  let { typeId } = useParams();

  return (
    <div className="section" id="featuresScreen">
      {familyTypes.map(
        ({ feature, avatar }) =>
          feature === `type${typeId}` && (
            <div className="typesAndSpeciesWrapper inner-section">
              <h2>
                <MultiLingualContent contentID={feature} />
              </h2>
              <img src={avatar} alt={typeId} className="featureImg" />
            </div>
          )
      )}
    </div>
  );
};

export default FeaturesScreen;
