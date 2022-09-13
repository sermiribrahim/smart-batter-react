import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import { Grid } from "@mui/material";

const PieChart = (props) => {
  useEffect(() => {
    const labels = ["Schedules from Mobile ", "Schedules from Machine "];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Revenue",
          data: [270, 110],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)"
          ],
          hoverOffset: 4
        }
      ]
    };

    const config = {
      type: "pie",
      data: data,
      options: {}
    };
    const chart = new Chart(document.getElementById("pieChart"), config);
    // when component unmounts
    return () => {
      chart.destroy();
    };
  }, [props.stat]);

  return (
    <Grid
      item
      xs={8}
      className="lineChart"
      style={{
        backgroundColor: "#fff",
        padding: "30px",
        width: "100%",
        borderRadius: "10px",
        boxShadow:
          "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        marginTop: "10px"
      }}
    >
      <h3 className="schedule-heading">Schedule</h3>
      <canvas id="pieChart" style={{ padding: "20px" }}></canvas>
    </Grid>
  );
};

export default PieChart;
