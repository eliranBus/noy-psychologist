import React from "react";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import shavririt from "../../../assets/images/shavririt.jpg";
import BackButton from "../../backButton";

const SimilarButDifferent = () => {
  return (
    <div className="inner-section" id="similarButDifferent">
      <BackButton path="/#information" />
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
