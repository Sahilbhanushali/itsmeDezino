import React from "react";

const Map = () => {
  const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDItrFLoQuLqdBl2_qMqCuvo3JchtTdKKc&q=Your+Location`;

  return (
    <iframe
      title="Google Map"
      src={googleMapsUrl}
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
    ></iframe>
  );
};

export default Map;
