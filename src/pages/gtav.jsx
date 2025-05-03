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
      <div className="more-div card ">
        <h2>
          Experience the thrill of real-life car mods — now rolling into your
          GTA garage in stunning detail.
        </h2>
        <button>View Collection</button>
      </div>
      <div class="cards-container">
        <div class="card1 card ">
          <div className="card-content">
            {" "}
            <div className="card-text">
              <h1>Penaud La Coureuse</h1>
              <p>Top speed : 184.27 km/h</p>
              <button>More info</button>
            </div>
            <div className="card-img41 ci"></div>
          </div>
        </div>
        <div class="card2 card">
          <div className="card-content">
            {" "}
            <div className="card-text">
              {" "}
              <h1>Declasse Vigero ZX</h1>
              <p>Top speed : 201.17 km/h</p>
              <button>More info</button>
            </div>
            <div className="card-img42 ci"></div>
          </div>
        </div>
        <div class="card3 card">
          <div className="card-content">
            {" "}
            <div className="card-text">
              {" "}
              <h1>Baller</h1>
              <p>Top speed : 180.25 km/h</p>
              <button>More info</button>
            </div>
            <div className="card-img43 ci"></div>
          </div>
        </div>
        <div class="card4 card">
          <div className="card-content">
            {" "}
            <div className="card-text">
              {" "}
              <h1>Obey 10F</h1>
              <p>Top speed : 202.78 km/h</p>
              <button>More info</button>
            </div>
            <div className="card-img44 ci"></div>
          </div>
        </div>
        <div class="card5 card">
          <div className="card-content">
            {" "}
            <div className="card-text">
              {" "}
              <h1>Nagasaki Shinobi</h1>
              <p>Top speed : 200.00 km/h</p>
              <button>More info</button>
            </div>
            <div className="card-img45 ci"></div>
          </div>
        </div>
        <div class="card6 card">
          <div className="card-content">
            {" "}
            <div className="card-text">
              {" "}
              <h1>Growler</h1>
              <p>Top speed : 220.00 km/h</p>
              <button>More info</button>
            </div>
            <div className="card-img46 ci"></div>
          </div>
        </div>
        <div class="card7 card">
          <div className="card-content">
            {" "}
            <div className="card-text">
              {" "}
              <h1>Brioso 300</h1>
              <p>Top speed : 140.00 km/h</p>
              <button>More info</button>
            </div>
            <div className="card-img47 ci"></div>
          </div>
        </div>
        <div class="card8 card">
          <div className="card-content">
            <div className="card-text">
              {" "}
              <h1>Youga 4x4</h1>
              <p>Top speed : 200.00 km/h</p>
              <button>More info</button>
            </div>
            <div className="card-img48 ci"></div>
          </div>
        </div>
        <div class="card9 card">
          <div className="card-content">
            <div className="card-text">
              {" "}
              <h1>Jester RR</h1>
              <p>Top speed : 200.00 km/h</p>
              <button>More info</button>
            </div>
            <div className="card-img49 ci"></div>
          </div>
        </div>
        <div class="card10 card">
          <div className="card-content">
            <div className="card-text">
              {" "}
              <h1>Grotti Vigilante</h1>
              <p>Top speed : 236.17 km/h</p>
              <button>More info</button>
            </div>
            <div className="card-img50 ci"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Gtav;
