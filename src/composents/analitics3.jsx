import React from "react";
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

const PriceAnalyticsThree = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Price ($)",
        data: [58000, 56500, 54000, 52000, 50000, 47500],
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
      y: { ticks: { color: "#fff" }, grid: { color: "#444" } },
      x: { ticks: { color: "#fff" }, grid: { color: "#444" } },
    },
  };

  return (
    <div className="price-analytics-container">
      <div className="price-summary">
        <h2>Price Insights</h2>
        <p>
          Current Price: <span>$47,500</span>
        </p>
        <p>
          Average Price: <span>$52,083</span>
        </p>
        <p>
          Last Month: <span>$50,000</span>
        </p>
      </div>
      <div className="price-chart">
        <Line data={data} options={options} />
      </div>
      <button>Purchase Now $</button>
    </div>
  );
};

export default PriceAnalyticsThree;
