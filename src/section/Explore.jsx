import { useState } from "react";
import Filter from "../components/Filter";
import HotelList from "../components/HotelList";
import "./Explore.css";

function Explore() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  return (
    <div className="container">
      <h3 className="text-center explore-text">Explore Hotels</h3>
      <div className="explore-container">
        <Filter
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
        <HotelList selectedFilters={selectedFilters} />
      </div>
    </div>
  );
}

export default Explore;
