import "../styles/week.css";
import cj2 from "../assets/cj2.png";
import CarCarousel from "../composents/maruti-carossel";
import CarCarouselTwo from "../composents/206-carossel";
import PriceAnalytics from "../composents/analitics.jsx";
import PriceAnalyticsTwo from "../composents/analitics2.jsx";
import CarCarouselThree from "../composents/rs3-carossel.jsx";
import PriceAnalyticsThree from "../composents/analitics3.jsx";

function Week() {
  return (
    <>
      <img
        className="cj2"
        src={cj2}
        alt=""
        data-aos="fade-right"
        data-aos-duration="600"
      />
      <p className="arrow-down">▼</p>
      <div className="week-container">
        <div>
          <CarCarousel />
          <PriceAnalytics />
        </div>
        <div>
          <CarCarouselTwo />
          <PriceAnalyticsTwo />
        </div>
        <div>
          <CarCarouselThree />
          <PriceAnalyticsThree />
        </div>
      </div>
    </>
  );
}

export default Week;
