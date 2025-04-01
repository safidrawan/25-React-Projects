import React, { useState } from "react";
import data from "./data.js";

function Accordion() {
  const [isActive, setIsActive] = useState(null);
  const [areActive, setAreActive] = useState([])
  const [isMultiSelectionOn, setIsMultiSelectionOn] = useState(false)

  function handleActive(id) {
    if (isMultiSelectionOn){
     areActive.includes(id) ? setAreActive(prev=>{
      return prev.filter(value => !value===id)
     }) :  setAreActive(prev=>{
      return [...prev,id]
    })
    } else {
      isActive === id ? setIsActive(null) : setIsActive(id);
    }
  }

  function toggleMultiSelection(){
    setIsMultiSelectionOn(!isMultiSelectionOn)
    setAreActive([])
    setIsActive(null)
  }

  const elements = data.map((item) => {
    return (
      <div key={item.id} className="p-2 mt-4 shadow-md">
        <button
          className="text-2xl cursor-pointer relative rounded-t-lg flex justify-between w-full p-2"
          onClick={() => {
            handleActive(item.id);
          }}
        >
          <span className="w-11/12 text-left">{item.title}</span>
          <span
            className={`absolute top-1 right-0 transform transition-transform duration-
              400 ${
              isActive === item.id ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>
        <div
          className={`text-lg rounded-b-lg flex justify-between w-full overflow-hidden transition-all duration-400 ${
           areActive.includes(item.id) || isActive === item.id ?"max-h-96" : "max-h-0"
          } `}
        >

          {item.content}
        </div>
      </div>
    );
  });

  return <div className="max-w-5xl mx-auto">
    <button onClick={toggleMultiSelection} className="text-2xl bg-blue-500 px-5 py-3 rounded-lg m-4 text-white cursor-pointer">Multi Selection Mode: {isMultiSelectionOn? "Yes":"No"}</button>
    {elements}
  </div>;
}

export default Accordion;
