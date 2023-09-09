import { useState } from "react";
import "./PersonForm.css";

function PersonForm({ title }) {
  const [selectedOption, setSelectedOption] = useState("male");

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="person-form-container">
      <h5 style={{ textAlign: "left" }}>{title}</h5>
      <input
        type="text"
        placeholder="Name"
        style={{ width: "96%", borderRadius: "4px" }}
      />

      <div
        className="flex-container"
        style={{ justifyContent: "space-between" }}
      >
        <input
          type="number"
          placeholder="Age"
          min="0"
          style={{ maxWidth: "110px", borderRadius: "3px" }}
        />

        <div className="button-group">
          <button
            type="button"
            className={selectedOption === "male" ? "active" : ""}
            onClick={() => handleButtonClick("male")}
          >
            Male
          </button>
          <button
            type="button"
            className={selectedOption === "female" ? "active" : ""}
            onClick={() => handleButtonClick("female")}
          >
            Female
          </button>
        </div>
      </div>
    </div>
  );
}

export default PersonForm;
