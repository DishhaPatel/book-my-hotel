import { useState } from "react";
import DateRangePicker from "../components/DateRangePicker";
import heroImage from "../assets/hero-bg.png";
import "./HeroSection.css";
import { Icon } from "@iconify/react";
import { HOTELS_SELECTION_LIST } from "../constant";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  const [bookingDateRange, setBookingDateRange] = useState({
    startDate: null,
    endDate: null,
  });

  const [hotelSuggestionList, setHotelSuggestionList] = useState([]);

  const [isOpenHotelMenu, setIsOpenHotelMenu] = useState(false);

  const [isOpenPersonMenu, setIsOpenPersonMenu] = useState(false);

  const [selectedHotel, setSelectedHotel] = useState({});

  const [selectedPerson, setSelectedPerson] = useState(2);

  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setIsOpenHotelMenu(true);
    setInputText(e.target.value);
    setHotelSuggestionList(
      HOTELS_SELECTION_LIST.filter((f) => f.name.includes(e.target.value))
    );
  };

  const handleMenuClick = (hotel) => {
    setSelectedHotel(hotel);
    setInputText(hotel.name);
    setIsOpenHotelMenu(false);
  };

  const handleSearch = () => {
    if (selectedHotel?.id) {
      navigate(`/hotel/${selectedHotel?.id}`);
    }
  };

  return (
    <div className="hero-container container">
      <img className="overlay-image" src={heroImage} />
      <div className="overlay-bottom" />
      <div className="content-wrapper">
        <div className="hero-text">
          <h2 className="hero-heading">Find the Perfect deal, always.</h2>
          <div className="hero-description">
            Choose from a range of well-appointed rooms and suites, each
            designed with your comfort in mind. Whether you're traveling solo,
            with a partner, or with family, we have the perfect room for you.
            Our rooms are equipped with plush bedding, flat-screen TVs,
            high-speed Wi-Fi, and all the essentials to ensure a relaxing stay.
          </div>
        </div>
        <div className="form-container">
          <div style={{ position: "relative" }}>
            <div className="input-container">
              <span className="input-icon start">
                <Icon icon="carbon:location-filled" />
              </span>
              <input
                className="text-input"
                placeholder="Type city, place, or hotel name"
                value={inputText}
                onChange={handleInputChange}
              />
              <span className="input-icon end">
                <Icon icon="bi:send" />
              </span>
            </div>
            {hotelSuggestionList.length > 0 && isOpenHotelMenu && (
              <ul
                className="suggestions-list"
                onBlur={() => setIsOpenHotelMenu(false)}
              >
                {hotelSuggestionList.map((hotel, index) => (
                  <li
                    key={index}
                    className="suggestion-item"
                    onClick={() => handleMenuClick(hotel)}
                  >
                    {hotel.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <DateRangePicker
            dateRange={bookingDateRange}
            setDateRange={setBookingDateRange}
          />

          <div style={{ position: "relative" }}>
            <div
              className="person-menu"
              onClick={() => setIsOpenPersonMenu(true)}
            >
              <Icon
                icon="ic:baseline-people"
                style={{ color: "#0A66BB", fontSize: 20 }}
              />
              <span>{selectedPerson}</span>
            </div>
            {isOpenPersonMenu && (
              <ul
                className="suggestions-list"
                onBlur={() => setIsOpenHotelMenu(false)}
              >
                {[1, 2, 3, 4].map((person, index) => (
                  <li
                    key={index}
                    className="suggestion-item"
                    onClick={() => {
                      setSelectedPerson(person);
                      setIsOpenPersonMenu(false);
                    }}
                  >
                    {person}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button className="search-btn" type="button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
