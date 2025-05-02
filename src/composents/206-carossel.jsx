import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/pages.css"; // Import your CSS file for styles
import car1 from "../assets/cars/206-1.png";
import car2 from "../assets/cars/206-2.png";

const images = [
  {
    src: car1,
    title: "Peugeot 206",
    desc: "Cruise through every GTA city in style — deals you can’t refuse.",
  },
  {
    src: car2,
    title: "Peugeot 206",
    desc: "From Vice City to Los Santos — drive the dream, own the streets.",
  },
];

function CarCarouselTwo() {
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

export default CarCarouselTwo;
