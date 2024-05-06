import React from "react";
// import Chart, { registerables } from "chart.js/auto";          //version 3
import { Line } from "react-chartjs-2";
// import {expt} from "./Temp-now";

  
  export default function Graph(props) {
    
    const list =  props.datalist;
    const spliced = list.splice(0, 5);
    const info =spliced.map(function(item){
         return item.main.temp
    } );

    const labels = spliced.map(function(item){
      return item.dt_txt.substring(10,16)
 } );

    const data = {

      labels: labels,
      datasets: [
        {
          label: "First dataset",
          data: info,
          fill: true,
          backgroundColor: "rgba(13, 110, 253, 0.1)",
          borderColor: "#0d6efd",
          responsive:true,
          lineTension: 0.3,           //to get *smooth curve* : value between 0 to 1
          pointRadius: 0,
          pointHitRadius: 100,
          pointHoverRadius: 5,
        },    
      ]
    };


    const options= {
      scales: {
        x: {
          
          grid: {
            display: false                    //hide grid lines
          },
        },
        y: {
          display : false,
          grid: {
            display: false
          }
        }
      },
      plugins : {
      legend : {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        bodyColor: 'rgba(13, 110, 253)',
        bodyFont : {
          size : 25,
          weight : 'bold',
          family : "'Segoe UI', 'Roboto', sans-serif",
         
        },
        callbacks: {
          label: function(context) {
              let label = '';

              if (label) {
                  label += ': ';
              }
              if (context.parsed.y !== null) {
                  label += context.parsed.y;
              }
              return label;
          },
        
          labelColor: function(context) {
            return {
                borderColor: 'rgb(0, 0, 0, 0)',
                backgroundColor: 'rgb(0, 0, 0 , 0)',
                borderWidth: 0,
                borderRadius: 0,
            };
        },
      },
      xAlign: 'center',
      yAlign: 'bottom'
      }
    }
    }


  

    return (
      <div className="Graph">
        <Line data={data} options={options} margin={{top: "50px", right: 0, left: 0, bottom: 0}} />
      </div>
    );
  }