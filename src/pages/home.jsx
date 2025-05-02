import "../styles/home.css";

import cj1 from "../assets/cj1.png";
import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";
import bg4 from "../assets/bg4.png";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const images = [bg1, bg2, bg3, bg4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change every 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <img
        src={cj1}
        className="cj1"
        alt=""
        data-aos="zoom-out-left"
        data-aos-duration="600"
      />
      <div className="babahom-home">
        <div className="home-container">
          <div className="gta-slider">
            {images.map((img, index) => (
              <div
                key={index}
                className={`gta-slide ${
                  index === currentIndex ? "active" : ""
                }`}
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>
          <div className="home-text">
            <h1>Welcome to Grove Street Cars</h1>
            <h3>Your one-stop shop for the best cars in town!</h3>
            <p>
              From high-speed supercars to lowriders built for cruising, Grove
              Street Cars has everything you need to dominate the streets of San
              Andreas, Vice City or Liberty City!. Rent your ride, customize it,
              and hit the road in style.
            </p>
          </div>
        </div>
        <div className="week-div">
          <h2>Hottest deals from Vice City to Vinewood!</h2>
          <Link to="/week">
            <button>grab yours now</button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Home;
