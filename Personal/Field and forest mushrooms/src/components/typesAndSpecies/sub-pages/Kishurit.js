import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import kishurit1 from "../../../assets/images/vekish1.jpg";
import kishurit2 from "../../../assets/images/kishurit2.jpg";
import kishurit3 from "../../../assets/images/kishurit3.jpg";
import BackButton from "../../backButton";

const Kishurit = () => {
  return (
    <div className="inner-section" id="kishurit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="kishurit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="kishuritText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kishuritText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kishuritText3" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={kishurit1}
              alt={<MultiLingualContent contentID="kishuritImg1" />}
            />
            <p>
              <MultiLingualContent contentID="kishuritImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={kishurit2}
              alt={<MultiLingualContent contentID="kishuritImg2" />}
            />
            <p>
              <MultiLingualContent contentID="kishuritImg2" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={kishurit3}
              alt={<MultiLingualContent contentID="kishuritImg3" />}
            />
            <p>
              <MultiLingualContent contentID="kishuritImg3" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Kishurit;
