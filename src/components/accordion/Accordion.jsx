import React, { useState } from "react";
import data from "./data.js";

function Accordion() {
  const [activeItems, setActiveItems] = useState([]);
  const [isMultiSelectionOn, setIsMultiSelectionOn] = useState(false);

  function handleActive(id) {
    if (isMultiSelectionOn) {
      activeItems.includes(id)
        ? setActiveItems((prev) => {
            return prev.filter((value) => value !== id);
          })
        : setActiveItems((prev) => {
            return [...prev, id];
          });
    } else {
      activeItems.includes(id) ? setActiveItems([]) : setActiveItems([id]);
    }
  }

  function toggleMultiSelection() {
    setIsMultiSelectionOn(!isMultiSelectionOn);
    setActiveItems([]);
  }

  const elements = data.map((item) => {
    return (
      <div key={item.id} className="p-2 mt-4 shadow-md">
        <button
          className="text-2xl relative rounded-t-lg flex justify-between w-full p-2"
          onClick={() => {
            handleActive(item.id);
          }}
        >
          <span className="w-11/12 text-left">{item.title}</span>
          <span
            className={`absolute top-1 right-0 transform transition-transform duration-300 ${
              activeItems.includes(item.id) ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>
        <div
          className={`text-lg rounded-b-lg flex justify-between w-full overflow-hidden transition-all duration-300 ${
            activeItems.includes(item.id) ? "max-h-96" : "max-h-0"
          } `}
        >
          {item.content}
        </div>
      </div>
    );
  });

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold text-center p-6">Accordion</h1>
      <button
        onClick={toggleMultiSelection}
        className="text-2xl bg-blue-500 px-5 py-3 rounded-lg m-4 text-white cursor-pointer block mx-auto"
      >
        {isMultiSelectionOn
          ? "Disable Multi Selection Mode"
          : "Enable Multi Selection Mode"}
      </button>
      {elements}
    </div>
  );
}

export default Accordion;
