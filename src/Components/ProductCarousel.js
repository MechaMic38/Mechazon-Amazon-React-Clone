import "../CSS/ProductCarousel.css";
import React, { useEffect, useState } from "react";

import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

function ProductCarousel({ imageList }) {
  const [value, setValue] = useState(0);
  const [slides, setSlides] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);

  /*==================================================
  Prepares all product images for the Carousel*/
  useEffect(() => {
    let images = imageList.map((img) => {
      return <img className="productPage__imageCarousel" alt="" src={img} />;
    });

    setSlides(images);
    setThumbnails(images);
  }, []);

  const onChange = (value) => {
    setValue(value);
  };

  return (
    <div className="productCarousel">
      <Carousel value={value} slides={slides} onChange={onChange} />
      <Dots
        number={thumbnails.length}
        thumbnails={thumbnails}
        value={value}
        onChange={onChange}
        number={slides.length}
      />
    </div>
  );
}

export default ProductCarousel;
