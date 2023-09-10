import { useState } from "react";
import RoomCard from "../components/RoomCard";
import "./RoomList.css";
import Modal from "../components/Modal";
import BookingSection from "./BookingSection";

function RoomList({ rooms, hotelName }) {
  const [isOpen, setIsOpen] = useState(false);
  const [IsOpenFacilities, setIsOpenFacilities] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState({});

  const onBookNowClick = (data) => {
    setIsOpen(true);
    setSelectedRoom(data);
  };

  const onViewFacilitiesClick = (data) => {
    setIsOpenFacilities(true);
    setSelectedRoom(data);
  };

  const handleBookingModalCLose = () => {
    setIsOpen(false);
    setSelectedRoom({});
  };

  const handleFacilitiesModalClose = () => {
    setIsOpenFacilities(false);
    setSelectedRoom({});
  };

  return (
    <div className="room-list-container">
      {rooms.map((room) => (
        <RoomCard
          key={room.id}
          data={room}
          onBookNow={onBookNowClick}
          onViewFacilities={onViewFacilitiesClick}
        />
      ))}
      <Modal
        isOpen={isOpen}
        title={`${hotelName} > ${selectedRoom?.name}`}
        handleClose={handleBookingModalCLose}
      >
        <BookingSection
          selectedRoom={selectedRoom}
          handleBookingModalCLose={handleBookingModalCLose}
        />
      </Modal>

      <Modal
        isOpen={IsOpenFacilities}
        title="Facilities"
        handleClose={handleFacilitiesModalClose}
        customStyle={{ width: "100%", maxWidth: "500px" }}
      >
        <div className="amenities-list">
          {Array.isArray(selectedRoom?.amenities) &&
            selectedRoom.amenities.map((item, index) => (
              <div key={index} className="amenities-item">
                {item}
              </div>
            ))}
        </div>
      </Modal>
    </div>
  );
}

export default RoomList;
