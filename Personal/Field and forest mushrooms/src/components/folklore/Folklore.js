import React, { useContext } from "react";
import MultiLingualContent from "../../languages/MultiLingualContent";
import { LanguageContext } from "../../context/LanguageContext";
import { englishFolklore, hebrewFolklore } from "./folkloreData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { renderedValues } from "../../assets/utilities";

const Folklore = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div id="folklore">
      <div className="folklore-wrapper inner-section">
        <div className="folklore-bg"></div>
        <h2 className="folkloreSubtitle">
          <MultiLingualContent contentID="folklore" />
        </h2>
        <div className="folkloreText">
          <p>
            <MultiLingualContent contentID="folkloreText1" />
            <MultiLingualContent contentID="folkloreText2" />
          </p>
          <p>
            <MultiLingualContent contentID="folkloreText3" />
          </p>
          <p>
            <MultiLingualContent contentID="folkloreText4" />
          </p>
        </div>
        {language === "English" && (
          <Swiper
            navigation={false}
            loop={false}
            modules={[Navigation]}
            className="mySwiper"
          >
            {englishFolklore.map((story, index) => (
              <SwiperSlide key={index}>
                <p className="folkloreName">{story.name}:</p>
                <p
                  className="folkloreData"
                  style={{
                    textAlign: language === "Hebrew" ? "right" : "left",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: story.data.replace(/\n/g, "<br>"),
                  }}
                />{" "}
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {language === "Hebrew" && (
          <Swiper
            navigation={true}
            loop={false}
            modules={[Navigation]}
            className="mySwiper"
          >
            {hebrewFolklore.map((story, index) => (
              <SwiperSlide key={index}>
                <b className="folkloreName">{story.name}:</b>
                <p
                  className="folkloreData"
                  style={{
                    textAlign: language === "Hebrew" ? "right" : "left",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: story.data.replace(/\n/g, "<br>"),
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Folklore;
