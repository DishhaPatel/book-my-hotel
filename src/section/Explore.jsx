import Filter from "../components/Filter";
import HotelList from "../components/HotelList";
import './Explore.css'

function Explore() {
  return (
    <div className="container">
      <h3 className="text-center">Explore Hotels</h3>
      <div className="explore-container">
        <Filter />
        <HotelList />
      </div>
    </div>
  );
}

export default Explore;
