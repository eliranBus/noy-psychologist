import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import amanitatHanartik from "../../../assets/images/amanitatHanartik.jpg";
import sabonit from "../../../assets/images/sabonit.jpg";
import BackButton from "../../backButton";

const Shomron = () => {
  return (
    <div className="inner-section" id="shomron">
      <BackButton path="/#observations" />
      <h2>
        <MultiLingualContent contentID="shomron" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="shomronDate" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shomronText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="shomronText2" />
          </p>
          <ul>
            <li>
              <b>
                <MultiLingualContent contentID="shomronBullet1Bold" />
              </b>
              <MultiLingualContent contentID="shomronBullet1" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="shomronBullet2Bold" />
              </b>
              <MultiLingualContent contentID="shomronBullet2" />
            </li>

            <li>
              <b>
                <MultiLingualContent contentID="shomronBullet3Bold" />
              </b>
              <MultiLingualContent contentID="shomronBullet3" />
            </li>

            <li>
              <b>
                <MultiLingualContent contentID="shomronBullet4Bold" />
              </b>
              <MultiLingualContent contentID="shomronBullet4" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="shomronBullet5Bold" />
              </b>
              <MultiLingualContent contentID="shomronBullet5" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="shomronBullet6Bold" />
              </b>
              <MultiLingualContent contentID="shomronBullet6" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="shomronBullet7Bold" />
              </b>
              <MultiLingualContent contentID="shomronBullet7" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="shomronBullet8Bold" />
              </b>
              <MultiLingualContent contentID="shomronBullet8" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="shomronBullet9Bold" />
              </b>
              <MultiLingualContent contentID="shomronBullet9" />
            </li>
          </ul>
          <br />
          <br />
          <br />
          <p className="attention">
            <b>
              <MultiLingualContent contentID="shomronAttention" />
            </b>
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={amanitatHanartik}
              alt={<MultiLingualContent contentID="shomronImg1" />}
            />
            <p>
              <MultiLingualContent contentID="shomronImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={sabonit}
              alt={<MultiLingualContent contentID="shomronImg2" />}
            />
            <p>
              <MultiLingualContent contentID="shomronImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Shomron;
