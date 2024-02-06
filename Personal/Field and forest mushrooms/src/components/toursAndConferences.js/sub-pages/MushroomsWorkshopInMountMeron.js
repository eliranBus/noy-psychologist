import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import pkuaAdama from "../../../assets/images/pkuaAdama.jpg";
import gushanit from "../../../assets/images/gushanit.jpg";
import ririt from "../../../assets/images/ririt.jpg";

const MushroomsWorkshopInMountMeron = () => {
  return (
    <div className="inner-section" id="mushroomsWorkshopInMountMeron">
      <div className="goBackWrapper">
        <a href="/" className="goBack">
          <span>&#8594;</span>
          <MultiLingualContent contentID="goBack" />
        </a>
      </div>
      <h2>
        <MultiLingualContent contentID="mushroomsWorkshopInMountMeron" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="mushroomsWorkshopInMountMeronSubtitle" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="mushroomsWorkshopInMountMeronText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="mushroomsWorkshopInMountMeronText2" />
          </p>
          <ul>
            <li>
              <b>
                <MultiLingualContent contentID="mushroomsWorkshopInMountMeronBullet1Bold" />
              </b>
              <MultiLingualContent contentID="mushroomsWorkshopInMountMeronBullet1" />
            </li>
            <div className="informationImages">
              <div className="imgWrapper">
                <img
                  src={gushanit}
                  alt={
                    <MultiLingualContent contentID="mushroomsWorkshopInMountMeronImg2" />
                  }
                />
                <p>
                  <MultiLingualContent contentID="mushroomsWorkshopInMountMeronImg2" />
                </p>
              </div>
            </div>
            <li>
              <b>
                <MultiLingualContent contentID="mushroomsWorkshopInMountMeronBullet2Bold" />
              </b>
              <MultiLingualContent contentID="mushroomsWorkshopInMountMeronBullet2" />
            </li>
            <div className="informationImages">
              <div className="imgWrapper">
                <img
                  src={pkuaAdama}
                  alt={
                    <MultiLingualContent contentID="mushroomsWorkshopInMountMeronImg1" />
                  }
                />
                <p>
                  <MultiLingualContent contentID="mushroomsWorkshopInMountMeronImg1" />
                </p>
              </div>
            </div>
            <li>
              <b>
                <MultiLingualContent contentID="mushroomsWorkshopInMountMeronBullet3Bold" />
              </b>
              <MultiLingualContent contentID="mushroomsWorkshopInMountMeronBullet3" />
            </li>
            <div className="informationImages">
              <div className="imgWrapper">
                <img
                  src={ririt}
                  alt={
                    <MultiLingualContent contentID="mushroomsWorkshopInMountMeronImg1" />
                  }
                />
                <p>
                  <MultiLingualContent contentID="mushroomsWorkshopInMountMeronImg1" />
                </p>
              </div>
            </div>
            <li>
              <b>
                <MultiLingualContent contentID="mushroomsWorkshopInMountMeronBullet4Bold" />
              </b>
              <MultiLingualContent contentID="mushroomsWorkshopInMountMeronBullet4" />
            </li>
            <li>
              <b>
                <MultiLingualContent contentID="mushroomsWorkshopInMountMeronBullet5Bold" />
              </b>
              <MultiLingualContent contentID="mushroomsWorkshopInMountMeronBullet5" />
            </li>
          </ul>
          <br />
          <p>
            <MultiLingualContent contentID="mushroomsWorkshopInMountMeronText3" />
          </p>
        </div>
      </>
    </div>
  );
};

export default MushroomsWorkshopInMountMeron;
