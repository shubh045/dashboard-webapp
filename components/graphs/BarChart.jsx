"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  SubTitle,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { DUMMY_DATA } from "@utils/dummydata";
import "@styles/graph.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  SubTitle
);

const BarChart = () => {
  const chartData = {
    labels: ["Week1", "Week2", "Week3", "Week4"],
    datasets: [
      {
        label: "User",
        data: DUMMY_DATA.map((dat) => dat.usage),
        backgroundColor: "#98D89E",
        // barThickness: 50,
        barPercentage: 0.4
      },
      {
        label: "Guest",
        data: DUMMY_DATA.reverse().map((dat) => dat.usage),
        backgroundColor: "#ee8484",
        barThickness: 38.41,
      },
    ],
  };

  const options = {
    responsive: true,
    borderRadius: 5,
    borderSkipped: false,
    maintainAspectRatio: false,
    plugins: {
      paddingBelowLegends: true,
      legend: {
        display: false,
        position: "top",
        align: "end",
        labels: {
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        text: "Activities",
        align: "start",
        color: "#000",
        font: {
          size: 18,
          weight: 700,
          lineHeight: "21.94px",
          family: "Montserrat",
        },
      },
      subtitle: {
        display: true,
        text: "May - June 2021",
        align: "start",
        color: "#858585",
        font: {
          weight: 400,
          size: 14,
          lineHeight: "17.07px",
          family: "Montserrat",
        },
        padding: {
          bottom: 50,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },

      y: {
        border: {
          display: false,
        },
        ticks: {
          stepSize: 100,
        },
      },
    },
  };

  return (
    <div className="bar-graph">
      <div className="legend">
        <div className="legend1">
          <span className="circle circle1"></span>
          <p>Guest</p>
        </div>
        <div className="legend1">
          <span className="circle circle2"></span>
          <p>User</p>
        </div>
      </div>
      <Bar data={chartData} options={options} id="b-graph" />
    </div>
  );
};

export default BarChart;
