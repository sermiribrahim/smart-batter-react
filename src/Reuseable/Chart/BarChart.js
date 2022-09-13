import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Grid } from "@mui/material";

const BarChart = (props) => {
  // const [labels, setLabels] = useState(null);
  // const [data, setData] = useState(null);
  // const [config, setConfig] = useState(null);

  useEffect(() => {
    let labels = ["Idly", "Dosa", "Idiyappam", "Puttu", "Paniyaram", "Appam"];
    let data = {
      labels: labels,
      datasets: [
        {
          label: "Most Used Recipe",
          data: [270, 110, 100, 330, 70, 250],
          borderColor: "rgb(54, 162, 235)",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderWidth: 1
        }
      ]
    };
    const config = {
      type: "bar",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    const chart = new Chart(document.getElementById("lineChart"), config);
    // when component unmounts
    return () => {
      chart.destroy();
    };
  }, []);

  // useEffect(() => {
  //   const chart = new Chart(document.getElementById("lineChart"), config);
  //   // when component unmounts
  //   return () => {
  //     chart.destroy();
  //   };
  // }, []);

  return (
    <Grid
      item
      xs={7}
      className="lineChart"
      style={{
        backgroundColor: "#fff",
        padding: "0",
        borderRadius: "10px",
        boxShadow:
          "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"
      }}
    >
      <canvas id="lineChart" style={{ padding: "20px" }}></canvas>
    </Grid>
  );
};

export default BarChart;
