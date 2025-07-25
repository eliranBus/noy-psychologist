import React from "react";

const Location = () => {
  return (
    <div className="map-wrapper" id="location">
      <h2>מיקום</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3390.84464939473!2d34.78408007391497!3d31.801983533177665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b94518d0a5b1%3A0x775aef4eeb72b847!2sTse&#39;ela%20St%2019%2C%20Gedera!5e0!3m2!1sen!2sil!4v1752853092850!5m2!1sen!2sil"
        width="600"
        height="450"
        style={{ border: 0, width: "100%", opacity: "0.8", height: "40em" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="noy-psychologist"
      ></iframe>
    </div>
  );
};

export default Location;
