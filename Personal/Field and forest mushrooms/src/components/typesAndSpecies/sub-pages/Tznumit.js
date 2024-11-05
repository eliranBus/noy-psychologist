import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import tznuma1 from "../../../assets/images/tznuma1.jpg";
import tznuma2 from "../../../assets/images/tznuma2.jpg";
import BackButton from "../../backButton";

const Tznumit = () => {
  return (
    <div className="inner-section" id="tznumit">
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="tznumit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="tznumitText1" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="tznumitText2Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="tznumitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="tznumaText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="tznumaText5" />
          </p>
        </div>
      </>
    </div>
  );
};

export default Tznumit;
