import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div>
      <div className="form">
        <div className="button">
          <div className="button-child" />
          <div className="search">Search</div>
        </div>
        <div className="select-person">
          <div className="select-person-child" />
          <div className="div">2</div>
          <img className="mdipeople-icon" alt="" src="/mdipeople.svg" />
        </div>
        <div className="select-date">
          <div className="select-date-child" />
          <div className="select-date-item" />
          <div className="check-in">Check-in</div>
          <div className="check-out">Check-out</div>
          <img
            className="material-symbolscalendar-toda-icon"
            alt=""
            src="/materialsymbolscalendartodayrounded.svg"
          />
        </div>
        <div className="search1">
          <div className="search-child" />
          <div className="type-city-place">Type city, place, or hotel name</div>
          <img className="vector-icon" alt="" src="/vector.svg" />
          <img className="vector-icon1" alt="" src="/vector1.svg" />
        </div>
        <div className="dropdown">
          <div className="dropdown-child" />
          <div className="dropdown-item" />
          <div className="the-peninsula-hotel">The Peninsula Hotel</div>
          <div className="hotel-gargie-grand">Hotel Gargie Grand</div>
          <div className="lower-parel-mumbai">Lower Parel, Mumbai</div>
          <div className="mira-road-phase">
            Mira road, phase 2, Thane, Maha...
          </div>
          <div className="hotel-sitara-jp">
            Hotel Sitara, JP nagar, Bangalore
          </div>
        </div>
      </div>
      <div className="explore-hotels">Explore Hotels</div>
    </div>
  );
}
