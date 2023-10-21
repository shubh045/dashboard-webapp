import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

import "@styles/graph.css";

const DoughnutChart = () => {
  const data = {
    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    datasets: [
      {
        label: "tees",
        data: [55, 14, 31],
        backgroundColor: ["#98D89E", "#FF5111", "#F6DC7D"],
        cutout: "80%",
        borderRadius: 20,
        borderAlign: "center",
        borderColor: ["#98D89E", "#FF5111", "#F6DC7D"],
        spacing: -25,
        rotation: 270,
        radius: "90%",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="card" id="donut-chart">
      <div className="graph-head">
        <h2 className="title">Top Products</h2>
        <p id="subtitle">May - June 2021</p>
      </div>

      <div className="doughnut-graph">
        <Doughnut data={data} options={options} />
        <div className="legend-d">
          <div className="legend-title">
            <div className="legend-dot">
              <div className="dot" id="dot1"></div>
              <h5 className="legend-t">Basic Tees</h5>
            </div>
            <p className="legend-percent">55%</p>
          </div>
          <div className="legend-title">
            <div className="legend-dot">
              <div className="dot" id="dot2"></div>
              <h5 className="legend-t">Custom Short Pants</h5>
            </div>
            <p className="legend-percent">31%</p>
          </div>
          <div className="legend-title">
            <div className="legend-dot">
              <div className="dot" id="dot3"></div>
              <h5 className="legend-t">Super Hoodies</h5>
            </div>
            <p className="legend-percent">14%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
