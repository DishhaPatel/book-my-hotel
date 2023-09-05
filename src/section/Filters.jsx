import React from "react";
import "./filters.css";

export default function Filters() {
  return (
    <div className="filter-section">
      <div className="filter-text">
        <div className="filters">Filters</div>
        <div className="clear">clear all</div>
      </div>
      <div>
        <div className="PRICERANGE">
          <label>PRICE RANGE</label>
          <input type="checkbox" />
          Up to Rs. 1000
          <input type="checkbox" />
          Rs. 1001 to Rs. 2000
          <input type="checkbox" />
          Rs. 2001 to Rs. 5000
          <input type="checkbox" />
          Above Rs.5000
        </div>

        <div className="RATINGS">
          <label>RATINGS</label>
          <input type="checkbox" />
          0-1 Star
          <input type="checkbox" />
          1-2 Star
          <input type="checkbox" />
          2-3 Star
          <input type="checkbox" />
          3-4 Star
          <input type="checkbox" />
          4-5 Star
        </div>

        <div className="CITY">
          <label>CITY</label>
          <input type="checkbox" />
          Mumbai
          <input type="checkbox" />
          Kolkata
          <input type="checkbox" />
          Banglore
          <input type="checkbox" />
          Jaipur
        </div>
      </div>
    </div>
  );
}
