import React, { useCallback, useEffect, useState } from "react";

function RandomColor() {
  const [bgColor, setBgColor] = useState("#000000");
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [isCopied, setIsCopied] = useState(false);

  const randomColor = useCallback(() => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    if (typeOfColor === "hex") {
      for (let i = 0; i < 6; i++) {
        hexColor += hex[randomNum(hex.length)];
      }
      setBgColor(hexColor);
    } else {
      let r = randomNum(256);
      let g = randomNum(256);
      let b = randomNum(256);
      let rgbColor = `rgb(${r},${g},${b})`;

      setBgColor(rgbColor);
    }
  }, [typeOfColor]);

  useEffect(()=>{
    randomColor()
  }, [randomColor,typeOfColor]);

  const randomNum = useCallback((number) => {
    return Math.floor(Math.random() * number);
  }, []);

  const handleCopy = useCallback( async () => {
  try {
    await navigator.clipboard.writeText(bgColor);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  } catch (error) {
    console.log('Error copying color!: RandomColor():: handleCopy():: ',error)
  }
  }, [bgColor]);


  return (
    <div className="mt-5">
      <h1 className="text-4xl text-center font-bold">Random Color Generator</h1>
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
      <div
        className="w-full h-96  relative cursor-pointer"
        style={{ backgroundColor: bgColor }}
        onClick={handleCopy}
      >
        <div className="h-80 flex flex-col justify-center items-center text-2xl gap-7">
          <div className="bg-gray-300 p-2 rounded-md">
            Type of Color: {typeOfColor.toUpperCase()}
          </div>
          <div className="bg-gray-300 text-6xl p-2 rounded-md">
            {bgColor}
          </div>
        </div>
        {isCopied && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl text-center bg-black h-48 p-4 rounded-lg z-10">
            Copied to Clipboard! <br /> <br />
            {bgColor}
          </div>
        )}
      </div>
    </div>
  );
}

export default RandomColor;
