import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import netufa from "../../../assets/images/1.jpg";
import harifitYevesha from "../../../assets/images/harifitYevesha.jpg";

const MushroomsInWestGalil = () => {
  return (
    <div className="inner-section" id="mushroomsInWestGalil">
      <div className="goBackWrapper">
        <a href="/" className="goBack">
          <span>&#8594;</span>
          <MultiLingualContent contentID="goBack" />
        </a>
      </div>
      <h2>
        <MultiLingualContent contentID="mushroomsInWestGalil" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="mushroomsInWestGalilDate" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="mushroomsInWestGalilText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="mushroomsInWestGalilText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="mushroomsInWestGalilText3" />
          </p>
          <br />
          <ul>
            <li>
              <b>
                <MultiLingualContent contentID="mushroomsInWestGalilBullet1Bold" />
              </b>
              <MultiLingualContent contentID="mushroomsInWestGalilBullet1" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="mushroomsInWestGalilBullet2Bold" />
              </b>
              <MultiLingualContent contentID="mushroomsInWestGalilBullet2" />
            </li>

            <li>
              <b>
                <MultiLingualContent contentID="mushroomsInWestGalilBullet3Bold" />
              </b>
              <MultiLingualContent contentID="mushroomsInWestGalilBullet3" />
            </li>

            <li>
              <b>
                <MultiLingualContent contentID="mushroomsInWestGalilBullet4Bold" />
              </b>
              <MultiLingualContent contentID="mushroomsInWestGalilBullet4" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="mushroomsInWestGalilBullet5Bold" />
              </b>
              <MultiLingualContent contentID="mushroomsInWestGalilBullet5" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="mushroomsInWestGalilBullet6Bold" />
              </b>
              <MultiLingualContent contentID="mushroomsInWestGalilBullet6" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="mushroomsInWestGalilBullet7Bold" />
              </b>
              <MultiLingualContent contentID="mushroomsInWestGalilBullet7" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="mushroomsInWestGalilBullet8Bold" />
              </b>
              <MultiLingualContent contentID="mushroomsInWestGalilBullet8" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="mushroomsInWestGalilBullet9Bold" />
              </b>
              <MultiLingualContent contentID="mushroomsInWestGalilBullet9" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="mushroomsInWestGalilBullet10Bold" />
              </b>
              <MultiLingualContent contentID="mushroomsInWestGalilBullet10" />
            </li>
          </ul>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={netufa}
              alt={<MultiLingualContent contentID="mushroomsInWestGalilImg1" />}
            />
            <p>
              <MultiLingualContent contentID="mushroomsInWestGalilImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={harifitYevesha}
              alt={<MultiLingualContent contentID="mushroomsInWestGalilImg2" />}
            />
            <p>
              <MultiLingualContent contentID="mushroomsInWestGalilImg2" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default MushroomsInWestGalil;
