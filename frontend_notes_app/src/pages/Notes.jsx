import React, { useState } from "react";
import "./Page.css";

function Notes({ closePopup }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    alert(`Input Submitted: ${inputValue}`);
    closePopup(); // Close pop-up after submission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md _index_z">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-3">Enter Your Note</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-2 border rounded-md mb-4"
          placeholder="Type your note..."
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={closePopup}
            className="px-4 py-2 bg-gray-300 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Notes;
