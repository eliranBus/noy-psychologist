import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import binyamina from "../../../assets/images/binyamina.jpg";

const BinyaminaMeddow = () => {
  return (
    <div className="inner-section" id="binyaminaMeddow">
      <h2>
        <MultiLingualContent contentID="binyaminaMeddow" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="binyaminaMeddowText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="binyaminaMeddowText3Bold" />
            </b>
          </p>
          <ul>
            <li>
              <b>
                <MultiLingualContent contentID="binyaminaMeddowBullet1Bold" />
              </b>
              <MultiLingualContent contentID="binyaminaMeddowBullet1" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="binyaminaMeddowBullet2Bold" />
              </b>
              <MultiLingualContent contentID="binyaminaMeddowBullet2" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="binyaminaMeddowBullet3Bold" />
              </b>
              <MultiLingualContent contentID="binyaminaMeddowBullet3Bold" />

              <ul className="groundBullets">
                <li>
                  <b>
                    <MultiLingualContent contentID="binyaminaMeddowBullet3Title" />
                  </b>
                  <MultiLingualContent contentID="binyaminaMeddowBullet3" />
                </li>
                <li>
                  <b>
                    <MultiLingualContent contentID="binyaminaMeddowBullet31Title" />
                  </b>
                  <MultiLingualContent contentID="binyaminaMeddowBullet31" />
                </li>
                <li>
                  <b>
                    <MultiLingualContent contentID="binyaminaMeddowBullet32Title" />
                  </b>
                  <MultiLingualContent contentID="binyaminaMeddowBullet32" />
                </li>
              </ul>
            </li>
          </ul>
          <div className="informationImages">
            <div className="imgWrapper largerImg">
              <LazyLoadImage src={binyamina} alt="אחו בנימינה" />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default BinyaminaMeddow;
