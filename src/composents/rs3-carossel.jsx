import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/pages.css"; // Import your CSS file for styles
import car1 from "../assets/cars/rs3-1.png";
import car2 from "../assets/cars/rs3-2.png";

const images = [
  {
    src: car1,
    title: "Audi RS3",
    desc: "Unleash the power of the Audi RS3 across every GTA city — style, speed, and unbeatable deals await.",
  },
  {
    src: car2,
    title: "Audi RS3",
    desc: "Dominate the streets of GTA with the Audi RS3 — where luxury meets performance in every mission.",
  },
];

function CarCarouselThree() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel-container">
      <AnimatePresence mode="sync">
        <motion.img
          key={index}
          src={images[index].src}
          alt={`Car ${index + 1}`}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2 }}
          className="carousel-image"
        />
      </AnimatePresence>

      <div className="carousel-overlay">
        <h2 className="carousel-title">{images[index].title}</h2>
        <p className="carousel-desc">{images[index].desc}</p>
      </div>

      <div className="carousel-dots">
        {images.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default CarCarouselThree;
