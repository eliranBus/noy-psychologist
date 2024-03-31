import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import lohevet1 from "../../../assets/images/lohevet1.jpg";
import BackButton from "../../backButton";

const Lohevet = () => {
  return (
    <div className="inner-section" id="lohevet">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="lohevet" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="lohevetText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="lohevetText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="lohevetText3" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={lohevet1}
              alt={<MultiLingualContent contentID="lohevetImg1" />}
            />
            <p>
              <MultiLingualContent contentID="lohevetImg1" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Lohevet;
