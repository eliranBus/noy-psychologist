import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import sruit from "../../../assets/images/sruit.jpg";
import kishurit from "../../../assets/images/kishurit.jpg";
import BackButton from "../../backButton";

const YehudaAndModiin = () => {
  return (
    <div className="inner-section" id="yehudaAndModiin">
      <BackButton path="/#observations" />
      <h2>
        <MultiLingualContent contentID="yehudaAndModiin" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="yehudaAndModiinDate" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="yehudaAndModiinText2" />
          </p>
          <br />
          <ul className="yehudaAndModiinBullets">
            <li>
              <p>
                <b>
                  <MultiLingualContent contentID="yehudaAndModiinText3Bold" />
                </b>
                <MultiLingualContent contentID="yehudaAndModiinText3" />
              </p>
            </li>
            <li>
              <p>
                <b>
                  <MultiLingualContent contentID="yehudaAndModiinText4Bold" />
                </b>
                <MultiLingualContent contentID="yehudaAndModiinText4" />
              </p>
            </li>
            <li>
              <p>
                <b>
                  <MultiLingualContent contentID="yehudaAndModiinText5Bold" />
                </b>
                <MultiLingualContent contentID="yehudaAndModiinText5" />
              </p>
            </li>
          </ul>
          <br />
          <p>
            <MultiLingualContent contentID="yehudaAndModiinText6" />
          </p>
          <p>
            <MultiLingualContent contentID="yehudaAndModiinText7" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={sruit}
              alt={<MultiLingualContent contentID="yehudaAndModiinImg1" />}
            />
            <p>
              <MultiLingualContent contentID="yehudaAndModiinImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={kishurit}
              alt={<MultiLingualContent contentID="yehudaAndModiinImg2" />}
            />
            <p>
              <MultiLingualContent contentID="yehudaAndModiinImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default YehudaAndModiin;
