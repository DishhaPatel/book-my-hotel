import { useState } from "react";
import { Icon } from "@iconify/react";
import Swal from "sweetalert2";
import DateRangePicker from "../components/DateRangePicker";
import PersonForm from "../components/PersonForm";
import ImageSlider from "../components/ImageSlider";
import "./BookingSection.css";

function BookingSection({ selectedRoom, handleBookingModalCLose }) {
  const [persons, setPersons] = useState([
    { name: "Guest" },
    { name: "Guest" },
  ]);

  const [bookingDateRange, setBookingDateRange] = useState({
    startDate: null,
    endDate: null,
  });

  if (!selectedRoom) {
    return null;
  }

  const { image_urls, amenities } = selectedRoom;

  const handleBookNow = () => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Booked Successfully",
      showConfirmButton: false,
      timer: 1700,
    });
    handleBookingModalCLose();
  };

  return (
    <div className="booking-container">
      {/* ####################### Left Side ######################### */}
      <div className="left-side">
        <ImageSlider
          images={image_urls}
          imgClassName="booking-room-img"
          maxWidth="500px"
        />

        <div className="amenities-list">
          {Array.isArray(amenities) &&
            amenities.map((item, index) => (
              <div key={index} className="amenities-item">
                {item}
              </div>
            ))}
        </div>
        <div className="booking-details flex-container">
          <div>
            <span className="flex-container">
              <Icon icon="material-symbols:group" />
              <span style={{ marginLeft: 4 }}>Person:</span>
            </span>
            <span className="flex-container">
              <Icon icon="ic:round-event" />
              <span style={{ marginLeft: 4 }}>Check-in: </span>
            </span>
            <span className="flex-container">
              <Icon icon="ic:round-event" />
              <span style={{ marginLeft: 4 }}>Check-out:</span>
            </span>
          </div>
          <div style={{ paddingLeft: 5 }}>
            <span className="value-item">{persons.length}</span>
            <span className="value-item">
              {bookingDateRange.startDate
                ? bookingDateRange.startDate.toLocaleDateString("en-GB")
                : "-"}
            </span>
            <span className="value-item">
              {bookingDateRange.endDate
                ? bookingDateRange.endDate.toLocaleDateString("en-GB")
                : "-"}
            </span>
          </div>
        </div>
      </div>
      {/* ####################### Right Side ######################### */}
      <div className="right-side">
        <form className="">
          <div className="date-range">
            <DateRangePicker
              dateRange={bookingDateRange}
              setDateRange={setBookingDateRange}
            />
          </div>
          <div className="person-list">
            {persons.map((person, index) => (
              <PersonForm key={index} title={`Person ${index + 1}`} />
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              type="button"
              className="flex-container add-btn"
              onClick={() =>
                setPersons((_persons) => [..._persons, { name: "guest" }])
              }
            >
              <Icon icon="ic:baseline-plus" style={{ fontSize: "20px" }} />
              <span>ADD PERSON</span>
            </button>
          </div>

          <button type="button" className="book-btn" onClick={handleBookNow}>
            Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingSection;
