import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import shcharcharit from "../../../assets/images/shcharcharit.jpg";
import pkuaAdamdama from "../../../assets/images/pkuaAdamdama.jpg";
import ririt from "../../../assets/images/ririt.jpg";

const SharonShfela = () => {
  return (
    <div className="inner-section" id="sharonShfela">
      <div className="goBackWrapper">
        <a href="/" className="goBack">
          <span>&#8594;</span>
          <MultiLingualContent contentID="goBack" />
        </a>
      </div>
      <h2>
        <MultiLingualContent contentID="sharonShfela" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="sharonShfelaDate" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="sharonShfelaText1" />
          </p>
          <p>
            <MultiLingualContent contentID="sharonShfelaText2" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <img
                src={shcharcharit}
                alt={<MultiLingualContent contentID="sharonShfelaImg1" />}
              />
              <p>
                <MultiLingualContent contentID="sharonShfelaImg1" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="sharonShfelaText3Bold" />
            </b>
            <MultiLingualContent contentID="sharonShfelaText3" />
          </p>
          <p>
            <div className="informationImages">
              <div className="imgWrapper">
                <img
                  src={pkuaAdamdama}
                  alt={<MultiLingualContent contentID="sharonShfelaImg2" />}
                />
                <p>
                  <MultiLingualContent contentID="sharonShfelaImg2" />
                </p>
              </div>
            </div>
            <b>
              <MultiLingualContent contentID="sharonShfelaText4Bold" />
            </b>
            <MultiLingualContent contentID="sharonShfelaText4" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="sharonShfelaText5Bold" />
            </b>
            <MultiLingualContent contentID="sharonShfelaText5" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={ririt}
              alt={<MultiLingualContent contentID="sharonShfelaImg3" />}
            />
            <p>
              <MultiLingualContent contentID="sharonShfelaImg3" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default SharonShfela;
