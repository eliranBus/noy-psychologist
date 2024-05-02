import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import dioitg1 from "../../../assets/images/dioitg1.jpg";
import dioitg2 from "../../../assets/images/dioitg2.jpg";
import dioitg3 from "../../../assets/images/dioitg3.jpg";
import dioitg4 from "../../../assets/images/dioitg4.jpg";
import dioitg5 from "../../../assets/images/dioitg5.jpg";
import dioitg6 from "../../../assets/images/dioitg6.jpg";
import dioitg7 from "../../../assets/images/dioitg7.jpg";
import dioitg8 from "../../../assets/images/dioitg8.jpg";
import dioitg9 from "../../../assets/images/dioitg9.jpg";
import dioitg10 from "../../../assets/images/dioitg10.jpg";
import dioitg11 from "../../../assets/images/dioitg11.jpg";
import dioitg12 from "../../../assets/images/dioitg12.jpg";
import dioitg13 from "../../../assets/images/dioitg13.jpg";
import dioitg14 from "../../../assets/images/dioitg14.jpg";
import dioitg15 from "../../../assets/images/dioitg15.jpg";
import dioitg16 from "../../../assets/images/dioitg16.jpg";
import dioitg17 from "../../../assets/images/dioitg17.jpg";
import dioitg18 from "../../../assets/images/dioitg18.jpg";
import dioitg19 from "../../../assets/images/dioitg19.jpg";
import dioitg20 from "../../../assets/images/dioitg20.jpg";
import dioitg21 from "../../../assets/images/dioitg21.jpg";
import dioitg22 from "../../../assets/images/dioitg22.jpg";
import dioitg23 from "../../../assets/images/dioitg23.jpg";
import dioitg24 from "../../../assets/images/dioitg24.jpg";

const Dioit = () => {
  return (
    <div className="inner-section" id="dioit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="dioit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="dioitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="dioitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="dioitText3" />
          </p>
          <p>
            <MultiLingualContent contentID="dioitText4" />
          </p>
          <p>
            <MultiLingualContent contentID="dioitText5" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={dioitg1}
              alt={<MultiLingualContent contentID="dioitImg1" />}
            />
            <p>
              <MultiLingualContent contentID="dioitImg1" />
            </p>
          </div>
        </div>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="dioitText6" />
          </p>
          <p>
            <MultiLingualContent contentID="dioitText7" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="dioitText8Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="dioitText8B" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={dioitg2}
              alt={<MultiLingualContent contentID="dioitImg2" />}
            />
            <p>
              <MultiLingualContent contentID="dioitImg2" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={dioitg3}
              alt={<MultiLingualContent contentID="dioitImg3" />}
            />
            <p>
              <MultiLingualContent contentID="dioitImg3" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Dioit;
