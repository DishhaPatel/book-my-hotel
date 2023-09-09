import React from "react";

function HotelAbout({ name, description }) {
  return (
    <div
      className="container"
      style={{ marginTop: 30, marginBottom: 30, fontSize: 14 }}
    >
      <h3 style={{ fontSize: 20 }}>About {name}</h3>
      <p style={{ fontSize: 12, marginTop: 5 }}>{description}</p>
    </div>
  );
}

export default HotelAbout;
