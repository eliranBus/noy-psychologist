import React, { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import {
  Paper,
  Button,
  Modal,
  Fade,
  Box,
  Backdrop,
  Typography,
} from "@mui/material";
import galleryImages from "../assets/utilities/galleryImages";
import amenities from "../assets/utilities/amenities";
import LazyLoad from "react-lazyload";
import MultiLingualContent from "../languages/MultiLingualContent";
import { LanguageContext } from "../context/LanguageContext";
import "swiper/css";
import "swiper/css/navigation";

const screenWidth = window.innerWidth;

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Gallery = () => {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [currentHouse, setCurrentHouse] = useState();
  const { language } = useContext(LanguageContext);

  const handleCloseModal = () => {
    setOpenModal(false);
    setCurrentHouse();
  };

  useEffect(() => {
    lightboxDisplay === true
      ? document.body.classList.add("modal-open")
      : document.body.classList.remove("modal-open");
  }, [lightboxDisplay]);

  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  const hideLightBox = () => setLightBoxDisplay(false);

  return (
    <div className="gallery-wrapper inner-section" id="gallery">
      <h2>
        <MultiLingualContent contentID="gallery" />
      </h2>
      {galleryImages.map(({ name, images }) => (
        <div key={name} className="house-swiper" style={{ direction: "ltr" }}>
          <Paper elevation={3} className="house-wrapper">
            <h3 className="mushroom-classification">
              <MultiLingualContent contentID="mushroomsInIsrael" />
            </h3>
            <Swiper
              slidesPerView={screenWidth < 800 ? 1 : 3}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {images.map(({ src, title }) => (
                <SwiperSlide key={src} className="swiper-slide-wrapper">
                  <LazyLoad>
                    <img
                      loading="lazy"
                      className="image-card"
                      onClick={() => showImage(src)}
                      src={process.env.PUBLIC_URL + src}
                      title={<MultiLingualContent contentID={title} />}
                      alt={<MultiLingualContent contentID={title} />}
                    />
                  </LazyLoad>
                  <p className="swiper-image-title">
                    <MultiLingualContent contentID={title} />
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </Paper>
        </div>
      ))}

      {lightboxDisplay ? (
        <div id="lightbox" onClick={hideLightBox}>
          <img id="lightbox-img" src={imageToShow} alt=""></img>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Gallery;
