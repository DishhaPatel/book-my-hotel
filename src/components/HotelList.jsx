import { HOTEL_LIST } from "../mock";
import HotelCard from "./HotelCard";
import "./HotelList.css";

export default function HotelList() {
  return (
    <div className="list-container">
      <div className="sort-container">
        <select name="cars" id="cars">
          <option value="volvo">Rating high to low</option>
          <option value="saab">Rating low to high</option>
          <option value="saab">Price High to Low</option>
          <option value="saab">Price Low to High</option>
        </select>
      </div>
      <div className="grid-container">
        {HOTEL_LIST.map((hotel) => (
          <HotelCard key={hotel.id} details={hotel} />
        ))}
      </div>
    </div>
  );
}
