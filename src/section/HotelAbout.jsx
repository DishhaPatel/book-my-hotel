import React from "react";

function HotelAbout({ name, description }) {
  return (
    <div className="container" style={{ marginTop: 55, fontSize: 14 }}>
      <h3 style={{ fontSize: 20, marginBottom: 25 }}>About {name}</h3>
      <p style={{ fontSize: 14, marginTop: 5 }}>{description}</p>
    </div>
  );
}

export default HotelAbout;
