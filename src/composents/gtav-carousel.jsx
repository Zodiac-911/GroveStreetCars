import React, { useRef } from "react";
import "../styles/CC.css";
import car1 from "./cc1.png";
import car2 from "./cc2.png";
import car3 from "./cc3.png";
import car4 from "./cc4.png";
import car5 from "./cc5.png";
import car6 from "./cc6.png";
import car7 from "./cc7.png";
import car8 from "../assets/cars/206-1.png";

const carImages = [car1, car2, car3, car4, car5, car6, car7, car8];

const CustomCarCarousel = () => {
  const sliderRef = useRef(null);

  const scrollSlider = (dir) => {
    const scrollStep = 270;
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: scrollStep * dir,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="car-slider-wrapper">
      <button className="car-slider-btn left" onClick={() => scrollSlider(-1)}>
        ❮
      </button>
      <div className="car-slider-track" ref={sliderRef}>
        {carImages.map((src, index) => (
          <div className="car-slider-card" key={index}>
            <img src={src} alt={`Car ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="car-slider-btn right" onClick={() => scrollSlider(1)}>
        ❯
      </button>
    </div>
  );
};

export default CustomCarCarousel;
