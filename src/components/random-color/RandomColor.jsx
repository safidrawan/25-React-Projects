import React, { useState } from "react";

function RandomColor() {
  const [bgColor, setBgColor] = useState("#000000");
  const [typeOfColor, setTypeOfColor] = useState("hex");

  function randomColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    if (typeOfColor === "hex") {
      for (let i = 0; i < 6; i++) {
        hexColor += hex[randomNum(hex.length)];
      }
      setBgColor(hexColor);
    } else {
      let r = randomNum(256)
      let g = randomNum(256)
      let b = randomNum(256)
     let rgbColor = `rgb(${r},${g},${b})`

    setBgColor(rgbColor)
    }
  }

  function randomNum(number){
    return Math.floor(Math.random() * number)
  }
  return (
    <div className="w-full h-96 mt-5" style={{ backgroundColor: bgColor }}>
      <button
        className="py-2 px-4 m-2 bg-blue-500 text-white rounded-md "
        onClick={() => {
          setTypeOfColor("hex");
        }}
      >
        HEX Color
      </button>
      <button
        className="py-2 px-4 m-2 bg-blue-500 text-white rounded-md "
        onClick={() => {
          setTypeOfColor("rgb");
        }}
      >
        RGB Color
      </button>
      <button
        className="py-2 px-4 m-2 bg-blue-500 text-white rounded-md "
        onClick={() => {
          randomColor();
        }}
      >
        Generate Color
      </button>

      <div className="h-80 flex flex-col justify-center items-center text-2xl gap-7">
        <div className="bg-gray-300 p-2 rounded-md">Type of Color: {typeOfColor.toUpperCase()}</div>
        <div className="bg-gray-300 p-2 rounded-md">Color Code: {bgColor.toUpperCase()}</div>
      </div>
    </div>
  );
}

export default RandomColor;
