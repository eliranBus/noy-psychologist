import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import pkua1 from "../../../assets/images/pkua1.jpg";
import pkua2 from "../../../assets/images/pkua2.jpg";
import BackButton from "../../backButton";

const Pkua = () => {
  return (
    <div className="inner-section" id="pkua">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="pkua" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="pkuaText1" />
          </p>
          <p>
            <MultiLingualContent contentID="pkuaText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="pkuaText3" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={pkua1}
              alt={<MultiLingualContent contentID="pkuaImg1" />}
            />
            <p>
              <MultiLingualContent contentID="pkuaImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={pkua2}
              alt={<MultiLingualContent contentID="pkuaImg2" />}
            />
            <p>
              <MultiLingualContent contentID="pkuaImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Pkua;
