import React, { useState, useEffect } from "react";
import "../styles/CC.css"; // Changed CSS file name

const GtaCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carImages = [
    "./cc1.png",
    "./cc2.png",
    "./cc3.png",
    "./cc4.png",
    "./cc5.png",
    "./cc6.png",
    "./cc7.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carImages.length]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carImages.length);
  };

  return (
    <div className="gta-carousel-container">
      <h2 className="gta-carousel-title">GTA V Cars Collection</h2>
      <div className="gta-carousel">
        <button
          className="gta-carousel-btn gta-carousel-btn-left"
          onClick={goToPrev}
        >
          &lt;
        </button>

        <div className="gta-carousel-track">
          {carImages.map((image, index) => (
            <div
              key={index}
              className={`gta-carousel-slide ${
                index === currentIndex ? "gta-active" : ""
              }`}
            >
              <img
                src={image}
                alt={`Car ${index + 1}`}
                className="gta-car-image"
              />
            </div>
          ))}
        </div>

        <button
          className="gta-carousel-btn gta-carousel-btn-right"
          onClick={goToNext}
        >
          &gt;
        </button>
      </div>

      <div className="gta-carousel-indicators">
        {carImages.map((_, index) => (
          <button
            key={index}
            className={`gta-indicator ${
              index === currentIndex ? "gta-indicator-active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default GtaCarousel;
