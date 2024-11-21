import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import pumit1 from "../../../assets/images/pumit1.jpg";
import pumit2 from "../../../assets/images/pumit2.jpg";
import pumit3 from "../../../assets/images/pumit3.jpg";
import pumit4 from "../../../assets/images/pumit4.jpg";
import pumit5 from "../../../assets/images/pumit5.jpg";
import pumit6 from "../../../assets/images/pumit6.jpg";
import pumit7 from "../../../assets/images/pumit7.jpg";
import BackButton from "../../backButton";

const Pumit = () => {
  return (
    <div className="inner-section" id="pumit">
      <Helmet>
        <title>פטרידע - הפטריה פומית</title>
        <meta
          name="description"
          content="הפטריה פומית - Tulostoma: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="pumit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="pumitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="pumitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="pumitText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="pumitText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="pumitText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="pumitText6" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="pumitText7Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="pumitText8" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={pumit1}
                alt={<MultiLingualContent contentID="pumitImg1" />}
              />
              <p>
                <MultiLingualContent contentID="pumitImg1" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="pumitText9Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="pumitText10" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="pumitText11Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="pumitText12" />
          </p>
          <p>
            <MultiLingualContent contentID="pumitText13" />
          </p>
          <p>
            <MultiLingualContent contentID="pumitText14" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="pumitText15Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="pumitText16" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={pumit2}
                alt={<MultiLingualContent contentID="pumitImg2" />}
              />
              <p>
                <MultiLingualContent contentID="pumitImg2" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="pumitText17Bold" />
            </b>
            <MultiLingualContent contentID="pumitText17" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="pumitText18Bold" />
            </b>
            <MultiLingualContent contentID="pumitText18" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={pumit3}
                alt={<MultiLingualContent contentID="pumitImg3" />}
              />
              <p>
                <MultiLingualContent contentID="pumitImg3" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage
                src={pumit4}
                alt={<MultiLingualContent contentID="pumitImg4" />}
              />
              <p>
                <MultiLingualContent contentID="pumitImg4" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="pumitText19Bold" />
            </b>
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={pumit5}
                alt={<MultiLingualContent contentID="pumitImg5" />}
              />
              <p>
                <MultiLingualContent contentID="pumitImg5" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage
                src={pumit6}
                alt={<MultiLingualContent contentID="pumitImg6" />}
              />
              <p>
                <MultiLingualContent contentID="pumitImg6" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage
                src={pumit7}
                alt={<MultiLingualContent contentID="pumitImg7" />}
              />
              <p>
                <MultiLingualContent contentID="pumitImg7" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Pumit;
