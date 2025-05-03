import "../styles/pages.css";
import gtavcharacters from "../assets/gtavcharacters.png";
import trevor from "../assets/trevor.png";
import franklin from "../assets/franklin.png";
import michel from "../assets/michel.png";
import "../styles/cards.css";
import gtavlogo from "../assets/gtav-bg-logo.png";
import CustomCarCarousel from "../composents/gtav-carousel"; // Import the carousel component
//import GtaCarousel from "../composents/gtav-carousel";

function Gtav() {
  return (
    <>
      <img
        src={gtavcharacters}
        className="bgi gtav-characters"
        data-aos="zoom-in-up"
        data-aos-duration="600"
        alt=""
      />
      <img
        src={trevor}
        className="bgi trevor"
        data-aos="fade-left"
        data-aos-duration="600"
        alt=""
      />
      <img
        src={franklin}
        className="bgi franklin"
        data-aos="fade-right"
        data-aos-duration="600"
        alt=""
      />
      <img
        src={michel}
        className="bgi michel"
        data-aos="zoom-out"
        data-aos-duration="600"
        alt=""
      />
      <img
        src={gtavlogo}
        alt=""
        className="gta-bg-logo gtav-bg-logo"
        data-aos="zoom-out"
        data-aos-duration="600"
      />
      <p className="arrow-down-cards ">▼</p>
      <div className="gtav-carousel card">
        <CustomCarCarousel />
      </div>
      <div class="cards-container">
        <div class="card1 card ">
          <div className="card-content">
            {" "}
            <div className="card-text">
              <h1>Angel</h1>
              <p>Top speed : 190.00 km/h</p>
              <button>More info</button>
            </div>
            <div className="card-img21 ci"></div>
          </div>
        </div>
        <div class="card2 card">
          <div className="card-content">
            {" "}
            <div className="card-text">
              {" "}
              <h1>Blista Compact</h1>
              <p>Top speed : 200.00 km/h</p>
              <button>More info</button>
            </div>
            <div className="card-img22 ci"></div>
          </div>
        </div>
        <div class="card3 card">
          <div className="card-content">
            {" "}
            <div className="card-text">
              {" "}
              <h1>Bloodring Banger Glendale</h1>
              <p>Top speed : 160.00 km/h</p>
              <button>More info</button>
            </div>
            <div className="card-img23 ci"></div>
          </div>
        </div>
        <div class="card4 card">
          <div className="card-content">
            {" "}
            <div className="card-text">
              {" "}
              <h1>Cuban Hermes</h1>
              <p>Top speed : 160.00 km/h</p>
              <button>More info</button>
            </div>
            <div className="card-img24 ci"></div>
          </div>
        </div>
        <div class="card5 card">
          <div className="card-content">
            {" "}
            <div className="card-text">
              {" "}
              <h1>Deluxo</h1>
              <p>Top speed : 200.00 km/h</p>
              <button>More info</button>
            </div>
            <div className="card-img25 ci"></div>
          </div>
        </div>
        <div class="card6 card">
          <div className="card-content">
            {" "}
            <div className="card-text">
              {" "}
              <h1>Gang Burrito</h1>
              <p>Top speed : 150.00 km/h</p>
              <button>More info</button>
            </div>
            <div className="card-img26 ci"></div>
          </div>
        </div>
        <div class="card7 card">
          <div className="card-content">
            {" "}
            <div className="card-text">
              {" "}
              <h1>Hotring Racer</h1>
              <p>Top speed : 220.00 km/h</p>
              <button>More info</button>
            </div>
            <div className="card-img27 ci"></div>
          </div>
        </div>
        <div class="card8 card">
          <div className="card-content">
            <div className="card-text">
              {" "}
              <h1>Maverick</h1>
              <p>Top speed : 200.00 km/h</p>
              <button>More info</button>
            </div>
            <div className="card-img28 ci"></div>
          </div>
        </div>
        <div class="card9 card">
          <div className="card-content">
            <div className="card-text">
              {" "}
              <h1>Sabre Turbo</h1>
              <p>Top speed : 180.00 km/h</p>
              <button>More info</button>
            </div>
            <div className="card-img29 ci"></div>
          </div>
        </div>
        <div class="card10 card">
          <div className="card-content">
            <div className="card-text">
              {" "}
              <h1>Stallion</h1>
              <p>Top speed : 160.00 km/h</p>
              <button>More info</button>
            </div>
            <div className="card-img30 ci"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Gtav;
