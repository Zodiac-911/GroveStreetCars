import React from "react";
import { Link } from "react-router-dom";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);
import "../styles/analitics.css"; // Import your CSS file for styles
const PriceAnalytics = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Price ($)",
        data: [18000, 19500, 18500, 20000, 21000, 20500],
        fill: false,
        borderColor: "#cbff94bc",
        backgroundColor: "#cbff94bc",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { ticks: { color: "#fff" }, grid: { color: "#333" } },
      x: { ticks: { color: "#fff" }, grid: { color: "#333" } },
    },
  };

  return (
    <div className="price-analytics-container">
      <div className="price-summary">
        <h2>Price Overview</h2>
        <p>
          Current Price: <span>$20,500</span>
        </p>
        <p>
          Average Price: <span>$19,400</span>
        </p>
        <p>
          Last Month: <span>$21,000</span>
        </p>
      </div>
      <div className="price-chart">
        <Line data={data} options={options} />
      </div>
      <Link to="/login">
        <button>Purchase Now $</button>
      </Link>
    </div>
  );
};

export default PriceAnalytics;
