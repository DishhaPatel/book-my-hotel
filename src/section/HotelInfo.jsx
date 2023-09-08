import React from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

import "./HotelInfo.css";

function HotelInfo({ info }) {
  const { image_url, name, city, rating } = info;

  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate("/");
  };

  return (
    <section
      className="details-container"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.75) 100%), url('${image_url}'), lightgray 0px -106.993px / 100% 242.082% no-repeat`,
      }}
    >
      <div>
        <h1 className="hotel-title">{name}</h1>
        <div className="hotel-extra-info">
          <span className="flex-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
            >
              <path
                d="M5.70701 7.13376C6.09936 7.13376 6.43536 6.99394 6.71501 6.71429C6.99465 6.43465 7.13423 6.09889 7.13376 5.70701C7.13376 5.31465 6.99394 4.97865 6.71429 4.69901C6.43465 4.41936 6.09889 4.27978 5.70701 4.28025C5.31465 4.28025 4.97865 4.42008 4.69901 4.69972C4.41936 4.97936 4.27978 5.31513 4.28025 5.70701C4.28025 6.09936 4.42008 6.43536 4.69972 6.71501C4.97936 6.99465 5.31513 7.13423 5.70701 7.13376ZM5.70701 14C5.61189 14 5.51677 13.9822 5.42166 13.9465C5.32654 13.9108 5.24331 13.8633 5.17197 13.8038C3.43609 12.2701 2.14013 10.8462 1.28408 9.53213C0.428026 8.21809 0 6.99061 0 5.84968C0 4.06624 0.573792 2.64544 1.72138 1.58726C2.86896 0.529087 4.1975 0 5.70701 0C7.21699 0 8.54577 0.529087 9.69335 1.58726C10.8409 2.64544 11.4145 4.06624 11.414 5.84968C11.414 6.99108 10.986 8.2188 10.1299 9.53284C9.27389 10.8469 7.97792 12.2705 6.24204 13.8038C6.1707 13.8633 6.08747 13.9108 5.99236 13.9465C5.89724 13.9822 5.80212 14 5.70701 14Z"
                fill="white"
              />
            </svg>
            <span style={{ marginLeft: 5 }}>{city}</span>
          </span>
          <span className="flex-container" style={{ marginLeft: 10 }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M8.99999 12.9525L12.1125 14.835C12.6825 15.18 13.38 14.67 13.23 14.025L12.405 10.485L15.1575 8.10001C15.66 7.66501 15.39 6.84001 14.73 6.78751L11.1075 6.48001L9.68999 3.13501C9.43499 2.52751 8.56499 2.52751 8.30999 3.13501L6.89249 6.47251L3.26999 6.78001C2.60999 6.83251 2.33999 7.65751 2.84249 8.09251L5.59499 10.4775L4.76999 14.0175C4.61999 14.6625 5.31749 15.1725 5.88749 14.8275L8.99999 12.9525Z"
                fill="white"
              />
            </svg>
            <span style={{ marginLeft: 5 }}>{rating}</span>
          </span>
        </div>
      </div>

      {/* Back button  */}

      <button className="back-button">
        <Icon
          icon="material-symbols:arrow-back"
          style={{ fontSize: 36 }}
          onClick={onBackButtonClick}
        />
      </button>
    </section>
  );
}

export default HotelInfo;
