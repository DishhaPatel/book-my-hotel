import { Icon } from "@iconify/react";
import ImageSlider from "./ImageSlider";
import "./RoomCard.css";

function RoomCard({ data, onBookNow, onViewFacilities }) {
  const { name, price, image_urls } = data;

  return (
    <div className="room-card-container">
      <div className="card-header">
        <ImageSlider images={image_urls} imgClassName="room-img" />
      </div>
      <div className="room-card-body">
        <h5>{name}</h5>
        <span className="flex-container">
          <Icon icon="material-symbols:group" />
          <span style={{ marginLeft: 4 }}>2</span>
        </span>
      </div>
      <span
        className="flex-container"
        style={{ marginTop: 5, marginBottom: 5 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M11.7917 17.5C11.6806 17.5 11.5728 17.4792 11.4683 17.4375C11.3639 17.3958 11.2703 17.3333 11.1875 17.25L6.16667 12.0208C6.06945 11.9236 5.98945 11.7917 5.92667 11.625C5.86389 11.4583 5.83278 11.3056 5.83334 11.1667C5.83334 10.8472 5.94806 10.5728 6.1775 10.3433C6.40695 10.1139 6.68111 9.99945 7 10H8.75C9.48611 10 10.1217 9.76028 10.6567 9.28084C11.1917 8.80139 11.5144 8.20778 11.625 7.5H5.83334C5.59723 7.5 5.39917 7.42 5.23917 7.26C5.07917 7.1 4.99945 6.90223 5 6.66667C5 6.43056 5.08 6.2325 5.24 6.0725C5.4 5.9125 5.59778 5.83278 5.83334 5.83334H11.375C11.1389 5.34723 10.7881 4.94778 10.3225 4.635C9.85695 4.32223 9.33278 4.16611 8.75 4.16667H5.83334C5.59723 4.16667 5.39917 4.08667 5.23917 3.92667C5.07917 3.76667 4.99945 3.56889 5 3.33334C5 3.09723 5.08 2.89917 5.24 2.73917C5.4 2.57917 5.59778 2.49945 5.83334 2.5H14.1667C14.4028 2.5 14.6008 2.58 14.7608 2.74C14.9208 2.9 15.0006 3.09778 15 3.33334C15 3.56945 14.92 3.7675 14.76 3.9275C14.6 4.0875 14.4022 4.16723 14.1667 4.16667H12.2917C12.4861 4.40278 12.6597 4.65973 12.8125 4.9375C12.9653 5.21528 13.0833 5.51389 13.1667 5.83334H14.1667C14.4028 5.83334 14.6008 5.91334 14.7608 6.07334C14.9208 6.23334 15.0006 6.43111 15 6.66667C15 6.90278 14.92 7.10084 14.76 7.26084C14.6 7.42084 14.4022 7.50056 14.1667 7.5H13.3125C13.2014 8.68056 12.7153 9.67028 11.8542 10.4692C10.9931 11.2681 9.95834 11.6672 8.75 11.6667H8.14584L12.3958 16.0833C12.6458 16.3472 12.6981 16.6494 12.5525 16.99C12.4069 17.3306 12.1533 17.5006 11.7917 17.5Z"
            fill="black"
          />
        </svg>
        <span style={{ marginLeft: 1 }}>{price} / night</span>
      </span>

      <div className="room-card-footer">
        <button className="outline-btn" onClick={() => onViewFacilities(data)}>
          View facilities
        </button>
        <button
          className="book-now-btn flex-container"
          onClick={() => onBookNow(data)}
        >
          <span>Book Now</span>
          <Icon icon="mdi:arrow-right" style={{ marginLeft: 5 }} />
        </button>
      </div>
    </div>
  );
}

export default RoomCard;
