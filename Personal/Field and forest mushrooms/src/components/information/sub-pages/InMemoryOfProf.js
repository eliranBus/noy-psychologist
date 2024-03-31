import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import nissan from "../../../assets/images/nissan.jpg";
import BackButton from "../../backButton";

const InMemoryOfProf = () => {
  return (
    <div className="inner-section" id="inMemoryOfProfBinyamini">
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="inMemoryOfProfBinyamini" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="inMemoryOfProfBinyaminiText1" />
          </p>
          <p>
            <MultiLingualContent contentID="inMemoryOfProfBinyaminiText2" />
          </p>
          <p>
            <MultiLingualContent contentID="inMemoryOfProfBinyaminiText3" />
          </p>
          <p>
            <MultiLingualContent contentID="inMemoryOfProfBinyaminiText4" />
          </p>
          <p>
            <MultiLingualContent contentID="inMemoryOfProfBinyaminiText5" />
          </p>
          <p>
            <MultiLingualContent contentID="inMemoryOfProfBinyaminiText6" />
          </p>
          <p>
            <MultiLingualContent contentID="inMemoryOfProfBinyaminiText7" />
          </p>
          <p>
            <MultiLingualContent contentID="inMemoryOfProfBinyaminiText8" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="inMemoryOfProfBinyaminiText9" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img src={nissan} alt="נזכור את ניסן בנימיני ז''ל" />
            <p>
              <MultiLingualContent contentID="inMemoryOfProfBinyaminiImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default InMemoryOfProf;
