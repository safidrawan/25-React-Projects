import { useEffect, useState } from "react";

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
  return <div>
    
  </div>;
}

export default Slider;
