import "../styles/pages.css";
import claudespeed from "../assets/claudespeed.png";
import "../styles/cards.css";
import gta3logo from "../assets/gta3-bg-logo.png";
import MoreInfoBtn from "../composents/more-info-btn";

function Gta3() {
  return (
    <>
      <img
        className="bgi claude"
        data-aos="zoom-out-right"
        data-aos-duration="600"
        src={claudespeed}
        alt=""
      />
      <img
        src={gta3logo}
        alt=""
        className="gta-bg-logo gta3-bg-logo"
        data-aos="zoom-out"
        data-aos-duration="600"
      />
      <p className="arrow-down-cards">▼</p>
      <div class="cards-container">
        <div class="card1 card ">
          <div className="card-content">
            {" "}
            <div className="card-text">
              <h1>Banshee</h1>
              <p>Top speed : 200.00 km/h</p>
              <MoreInfoBtn />
            </div>
            <div className="card-img1 ci"></div>
          </div>
        </div>
        <div class="card2 card">
          <div className="card-content">
            {" "}
            <div className="card-text">
              {" "}
              <h1>Sheetah</h1>
              <p>Top speed : 230.00 km/h</p>
              <MoreInfoBtn />
            </div>
            <div className="card-img2 ci"></div>
          </div>
        </div>
        <div class="card3 card">
          <div className="card-content">
            {" "}
            <div className="card-text">
              {" "}
              <h1>Diablo Stallion</h1>
              <p>Top speed : 180.00 km/h</p>
              <MoreInfoBtn />
            </div>
            <div className="card-img3 ci"></div>
          </div>
        </div>
        <div class="card4 card">
          <div className="card-content">
            {" "}
            <div className="card-text">
              {" "}
              <h1>Mafia Sentinel</h1>
              <p>Top speed : 200.00 km/h</p>
              <MoreInfoBtn />
            </div>
            <div className="card-img4 ci"></div>
          </div>
        </div>
        <div class="card5 card">
          <div className="card-content">
            {" "}
            <div className="card-text">
              {" "}
              <h1>Securicar</h1>
              <p>Top speed : 170.00 km/h</p>
              <MoreInfoBtn />
            </div>
            <div className="card-img5 ci"></div>
          </div>
        </div>
        <div class="card6 card">
          <div className="card-content">
            {" "}
            <div className="card-text">
              {" "}
              <h1>Patriot</h1>
              <p>Top speed : 170.00 km/h</p>
              <MoreInfoBtn />
            </div>
            <div className="card-img6 ci"></div>
          </div>
        </div>
        <div class="card7 card">
          <div className="card-content">
            {" "}
            <div className="card-text">
              {" "}
              <h1>Stretch</h1>
              <p>Top speed : 180.00 km/h</p>
              <MoreInfoBtn />
            </div>
            <div className="card-img7 ci"></div>
          </div>
        </div>
        <div class="card8 card">
          <div className="card-content">
            <div className="card-text">
              {" "}
              <h1>Yakuza Stinger</h1>
              <p>Top speed : 200.00 km/h</p>
              <MoreInfoBtn />
            </div>
            <div className="card-img8 ci"></div>
          </div>
        </div>
        <div class="card9 card">
          <div className="card-content">
            <div className="card-text">
              {" "}
              <h1>Police Car</h1>
              <p>Top speed : 200.00 km/h</p>
              <MoreInfoBtn />
            </div>
            <div className="card-img9 ci"></div>
          </div>
        </div>
        <div class="card10 card">
          <div className="card-content">
            <div className="card-text">
              {" "}
              <h1>Dodo</h1>
              <p>Top speed : 200.00 km/h</p>
              <MoreInfoBtn />
            </div>
            <div className="card-img10 ci"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Gta3;
