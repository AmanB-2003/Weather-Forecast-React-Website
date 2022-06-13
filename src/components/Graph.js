import React from "react";
import Chart from 'chart.js/auto';          //version 3
import { Line } from "react-chartjs-2";

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        responsive:true,
        lineTension: 0.3,           //to get *smooth curve* : value between 0 to 1
        pointRadius: 1.5
      },
      
    ]
  };
  
  export default function Graph() {
    return (
      <div className="App">
        <Line data={data} />
      </div>
    );
  }