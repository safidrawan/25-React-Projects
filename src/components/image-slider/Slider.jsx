import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function Slider({ url, page = 1, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setImages(data);
      setLoading(false);
    } catch (error) {
      setErrorMsg(
        "Error fetching images: Slider():: fetchImages():: error: " +
          error.message
      );
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);
  console.log(images);
  if (loading) {
    return <div>Loading data, Please wait!</div>;
  }

  if (errorMsg !== null) {
    return <div>{errorMsg}</div>;
  }

  function handlePrev() {
    currentSlide === 0
      ? setCurrentSlide(images.length - 1)
      : setCurrentSlide(currentSlide - 1);
  }

  function handleNext(){
    currentSlide === images.length-1 ? setCurrentSlide(0) : setCurrentSlide(currentSlide + 1)
  }

  function handleIndicator(index){
    setCurrentSlide(index)
  }
  return (
    <div className="container relative flex w-[600px] h-[450] justify-center items-center m-auto">
      <BsArrowLeftCircleFill
        onClick={handlePrev}
        className="absolute top-1/2 left-4 text-white size-10 drop-shadow-[0px_0px_5px_#555] cursor-pointer"
      />
      {images && images.length
        ? images.map((image, index) =>
            currentSlide === index ? (
              <img
                key={image.id}
                alt={image.download_url}
                src={`https://picsum.photos/id/${image.id}/600/450.webp`}
                width={650}
                height={450}
              />
            ) : null
          )
        : ""}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="absolute top-1/2 right-4 text-white size-10 drop-shadow-[0px_0px_5px_#555] cursor-pointer"
      />

      <span className="flex absolute bottom-4 justify-center items-center ">
        {images && images.length
          ? images.map((_, index) => {
              return (
                <button
                  className={`size-4 border-none outline-none mx-1 rounded-full ${currentSlide === index ? "size-6  bg-white":"bg-gray-300"}`}
                  key={index}
                  onClick={()=>{handleIndicator(index)}}
                ></button>
              );
            })
          : null}
      </span>
    </div>
  );
}

export default Slider;
