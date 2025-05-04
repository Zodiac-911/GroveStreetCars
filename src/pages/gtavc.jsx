import "../styles/pages.css";
import tommyvercetti from "../assets/tommyvercitti.png";
import "../styles/cards.css";
import gtavclogo from "../assets/gtavc-bg-logo.png";
import MoreInfoBtn from "../composents/more-info-btn";

function Gtavc() {
  return (
    <>
      <img
        src={tommyvercetti}
        className="bgi tommy"
        data-aos="zoom-out-right"
        data-aos-duration="600"
        alt=""
      />
      <img
        src={gtavclogo}
        alt=""
        className="gta-bg-logo"
        data-aos="zoom-out"
        data-aos-duration="600"
      />
      <p className="arrow-down-cards">▼</p>
      <div class="cards-container">
        <div class="card1 card ">
          <div className="card-content">
            {" "}
            <div className="card-text">
              <h1>Angel</h1>
              <p>Top speed : 190.00 km/h</p>
              <MoreInfoBtn />
            </div>
            <div className="card-img11 ci"></div>
          </div>
        </div>
        <div class="card2 card">
          <div className="card-content">
            {" "}
            <div className="card-text">
              {" "}
              <h1>Blista Compact</h1>
              <p>Top speed : 200.00 km/h</p>
              <MoreInfoBtn />
            </div>
            <div className="card-img12 ci"></div>
          </div>
        </div>
        <div class="card3 card">
          <div className="card-content">
            {" "}
            <div className="card-text">
              {" "}
              <h1>Bloodring Banger Glendale</h1>
              <p>Top speed : 160.00 km/h</p>
              <MoreInfoBtn />
            </div>
            <div className="card-img13 ci"></div>
          </div>
        </div>
        <div class="card4 card">
          <div className="card-content">
            {" "}
            <div className="card-text">
              {" "}
              <h1>Cuban Hermes</h1>
              <p>Top speed : 160.00 km/h</p>
              <MoreInfoBtn />
            </div>
            <div className="card-img14 ci"></div>
          </div>
        </div>
        <div class="card5 card">
          <div className="card-content">
            {" "}
            <div className="card-text">
              {" "}
              <h1>Deluxo</h1>
              <p>Top speed : 200.00 km/h</p>
              <MoreInfoBtn />
            </div>
            <div className="card-img15 ci"></div>
          </div>
        </div>
        <div class="card6 card">
          <div className="card-content">
            {" "}
            <div className="card-text">
              {" "}
              <h1>Gang Burrito</h1>
              <p>Top speed : 150.00 km/h</p>
              <MoreInfoBtn />
            </div>
            <div className="card-img16 ci"></div>
          </div>
        </div>
        <div class="card7 card">
          <div className="card-content">
            {" "}
            <div className="card-text">
              {" "}
              <h1>Hotring Racer</h1>
              <p>Top speed : 220.00 km/h</p>
              <MoreInfoBtn />
            </div>
            <div className="card-img17 ci"></div>
          </div>
        </div>
        <div class="card8 card">
          <div className="card-content">
            <div className="card-text">
              {" "}
              <h1>Maverick</h1>
              <p>Top speed : 200.00 km/h</p>
              <MoreInfoBtn />
            </div>
            <div className="card-img18 ci"></div>
          </div>
        </div>
        <div class="card9 card">
          <div className="card-content">
            <div className="card-text">
              {" "}
              <h1>Sabre Turbo</h1>
              <p>Top speed : 180.00 km/h</p>
              <MoreInfoBtn />
            </div>
            <div className="card-img19 ci"></div>
          </div>
        </div>
        <div class="card10 card">
          <div className="card-content">
            <div className="card-text">
              {" "}
              <h1>Stallion</h1>
              <p>Top speed : 160.00 km/h</p>
              <MoreInfoBtn />
            </div>
            <div className="card-img20 ci"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Gtavc;
