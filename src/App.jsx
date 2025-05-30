import React from "react";
import Accordion from "./components/accordion/Accordion";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/star-rating/StarRating";
import Slider from "./components/image-slider/Slider";

function App() {
  return (
    <>
      <Accordion />
      <RandomColor />
      <StarRating />
      <Slider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
    </>
  );
}

export default App;
