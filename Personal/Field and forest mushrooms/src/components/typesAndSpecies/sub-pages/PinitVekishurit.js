import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import vekish1 from "../../../assets/images/vekish1.jpg";
import vekish2 from "../../../assets/images/vekish2.jpg";
import vekish3 from "../../../assets/images/vekish3.jpg";
import BackButton from "../../backButton";

const PinitVekishurit = () => {
  return (
    <div className="inner-section" id="pinitVekishurit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="pinitVekishurit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="pinitVekishuritText1" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="pinitVekishuritText2Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="pinitVekishuritText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="pinitVekishuritText4" />
            <b>
              <MultiLingualContent contentID="pinitVekishuritText4Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="pinitVekishuritText5" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={vekish1}
              alt={<MultiLingualContent contentID="pinitVekishuritImg1" />}
            />
            <p>
              <MultiLingualContent contentID="pinitVekishuritImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={vekish2}
              alt={<MultiLingualContent contentID="pinitVekishuritImg2" />}
            />
            <p>
              <MultiLingualContent contentID="pinitVekishuritImg2" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={vekish3}
              alt={<MultiLingualContent contentID="pinitVekishuritImg3" />}
            />
            <p>
              <MultiLingualContent contentID="pinitVekishuritImg3" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default PinitVekishurit;
