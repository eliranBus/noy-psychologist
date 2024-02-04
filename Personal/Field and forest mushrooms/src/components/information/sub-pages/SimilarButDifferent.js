import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import shavririt from "../../../assets/images/shavririt.jpg";

const SimilarButDifferent = () => {
  return (
    <div className="inner-section" id="similarButDifferent">
      <div className="goBackWrapper">
        <a href="/" className="goBack">
          <span>&#8594;</span>
          <MultiLingualContent contentID="goBack" />
        </a>
      </div>
      <h2>
        <MultiLingualContent contentID="similarButDifferent" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="similarButDifferentText1" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="similarButDifferentText2Bold" />
            </b>
            <MultiLingualContent contentID="similarButDifferentText2" />
            <b>
              <MultiLingualContent contentID="similarButDifferentText3Bold" />
            </b>
            <MultiLingualContent contentID="similarButDifferentText3" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <img
                src={shavririt}
                alt={<MultiLingualContent contentID="similarButDifferentImg" />}
              />
              <p>
                <MultiLingualContent contentID="similarButDifferentImg" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default SimilarButDifferent;
