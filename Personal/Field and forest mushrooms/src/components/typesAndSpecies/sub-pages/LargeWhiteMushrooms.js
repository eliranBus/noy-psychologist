import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import white1 from "../../../assets/images/white1.jpg";
import white2 from "../../../assets/images/white2.jpg";
import white3 from "../../../assets/images/white3.jpg";
import white4 from "../../../assets/images/white4.jpg";

const LargeWhiteMushrooms = () => {
  return (
    <div className="inner-section" id="largeWhiteMushrooms">
      <div className="goBackWrapper">
        <a href="/" className="goBack">
          <span>&#8594;</span>
          <MultiLingualContent contentID="goBack" />
        </a>
      </div>
      <h2>
        <MultiLingualContent contentID="largeWhiteMushrooms" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="largeWhiteMushroomsText1" />
            <b>
              <MultiLingualContent contentID="largeWhiteMushroomsText1Bold" />
            </b>
            <MultiLingualContent contentID="largeWhiteMushroomsText12Bold" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="largeWhiteMushroomsText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="largeWhiteMushroomsText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="largeWhiteMushroomsText4Bold" />
            </b>
            <MultiLingualContent contentID="largeWhiteMushroomsText4" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="largeWhiteMushroomsText5Bold" />
            </b>
            <MultiLingualContent contentID="largeWhiteMushroomsText5" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="largeWhiteMushroomsText6Bold" />
            </b>
            <MultiLingualContent contentID="largeWhiteMushroomsText6" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="largeWhiteMushroomsText7Bold" />
            </b>
            <MultiLingualContent contentID="largeWhiteMushroomsText7" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="largeWhiteMushroomsText8Bold" />
            </b>
            <MultiLingualContent contentID="largeWhiteMushroomsText8" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="largeWhiteMushroomsText9Bold" />
            </b>
            <MultiLingualContent contentID="largeWhiteMushroomsText9" />
          </p>
          <br />
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="largeWhiteMushroomsText10Bold" />
            </b>
          </p>
          <br />
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <img
              src={white1}
              alt={<MultiLingualContent contentID="largeWhiteMushroomsImg1" />}
            />
            <p>
              <MultiLingualContent contentID="largeWhiteMushroomsImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={white2}
              alt={<MultiLingualContent contentID="largeWhiteMushroomsImg2" />}
            />
            <p>
              <MultiLingualContent contentID="largeWhiteMushroomsImg2" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={white3}
              alt={<MultiLingualContent contentID="largeWhiteMushroomsImg3" />}
            />
            <p>
              <MultiLingualContent contentID="largeWhiteMushroomsImg3" />
            </p>
          </div>
          <div className="imgWrapper">
            <img
              src={white4}
              alt={<MultiLingualContent contentID="largeWhiteMushroomsImg4" />}
            />
            <p>
              <MultiLingualContent contentID="largeWhiteMushroomsImg4" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default LargeWhiteMushrooms;
