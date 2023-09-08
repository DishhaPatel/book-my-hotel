import { useState } from "react";
import RoomCard from "../components/RoomCard";
import "./RoomList.css";
import Modal from "../components/Modal";
import BookingSection from "./BookingSection";

function RoomList({ rooms, hotelName }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState({});

  const onBookNowClick = (data) => {
    setIsOpen(true);
    setSelectedRoom(data);
  };

  const handleBookingModalCLose = () => {
    setIsOpen(false);
    setSelectedRoom({});
  };

  return (
    <div className="room-list-container">
      {rooms.map((room) => (
        <RoomCard key={room.id} data={room} onBookNow={onBookNowClick} />
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
    </div>
  );
}

export default RoomList;
