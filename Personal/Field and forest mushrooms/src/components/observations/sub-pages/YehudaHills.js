import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import yehuda1 from "../../../assets/images/yehuda1.jpg";
import yehuda2 from "../../../assets/images/yehuda2.jpg";
import yehuda3 from "../../../assets/images/yehuda3.jpg";

const YehudaHills = () => {
  return (
    <div className="inner-section" id="yehuda">
      <h2>
        <MultiLingualContent contentID="yehuda" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="yehudaText1" />
          </p>
          <p>
            <MultiLingualContent contentID="yehudaText2" />
          </p>
          <p>
            <MultiLingualContent contentID="yehudaText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="yehudaText4Bold" />
            </b>
            &nbsp;
            <MultiLingualContent contentID="yehudaText4" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="yehudaText5Bold" />
            </b>
            &nbsp;
            <MultiLingualContent contentID="yehudaText5" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <img
                src={yehuda1}
                alt={<MultiLingualContent contentID="yehudaImg1" />}
              />
              <p>
                <MultiLingualContent contentID="yehudaImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <img
                src={yehuda2}
                alt={<MultiLingualContent contentID="yehudaImg2" />}
              />
              <p>
                <MultiLingualContent contentID="yehudaImg2" />
              </p>
            </div>
            <div className="imgWrapper">
              <img
                src={yehuda3}
                alt={<MultiLingualContent contentID="yehudaImg3" />}
              />
              <p>
                <MultiLingualContent contentID="yehudaImg3" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default YehudaHills;
