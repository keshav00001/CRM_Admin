import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Box, Container, Grid, Typography } from "@mui/material";

function GeographicalChart(props) {
  const [stateData, setStateData] = useState({
    series: [
      {
        color: "red",
        data: 10,
      },
      {
        color: "#FFB547",
        data: 10,
      },
      {
        color: "#7BC67E",
        data: 20,
      },
      {
        color: "#64B6F7",
        data: 10,
      },
      {
        color: "#455a64",
        data: 70,
      },
      {
        color: "#64B6F7",
        data: 10,
      },
    ],
    options: {
      chart: {
        background: "transparent",
        stacked: false,
        toolbar: {
          show: false,
        },
      },
      legend: {
        show: true,
        position: "right",
      },
      dataLabels: {
        enabled: true,
      },
      labels: ["Delhi", "Haryana", "Rajasthan", "Kochi", "Punjab", "Kerala"],
      stroke: {
        width: 1,
      },
    },
  });

  const [cityData, setCityData] = useState({
    series: [
      {
        color: "red",
        data: 10,
      },
      {
        color: "#FFB547",
        data: 10,
      },
      {
        color: "#7BC67E",
        data: 20,
      },
      {
        color: "#64B6F7",
        data: 10,
      },
    ],
    options: {
      chart: {
        background: "transparent",
        stacked: false,
        toolbar: {
          show: false,
        },
      },
      legend: {
        show: true,
        position: "right",
        offsetY: 40,
      },
      dataLabels: {
        enabled: true,
      },
      labels: ["New Delhi", "South Delhi", "North Delhi", "Central Delhi"],
      stroke: {
        width: 1,
      },
    },
  });
  return (
    <Box className="donut-chart">
      <Container>
        <Grid container>
          <Grid item md={6} sm={6} xs={12}>
            <Box className="data-wise-data">
              <Typography variant="h6" sx={{ ml: 3, mb: 3 }}>
                State-wise Applications (India)
              </Typography>
              <Chart
                options={stateData.options}
                series={stateData.series.map((item) => item.data)}
                type="donut"
                width="380"
              />
            </Box>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <Box className="data-wise-data">
              <Typography variant="h6" sx={{ ml: 3, mb: 3 }}>
                City-wise Applications (Delhi)
              </Typography>
              <Chart
                options={cityData.options}
                series={cityData.series.map((item) => item.data)}
                type="donut"
                width="390"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default GeographicalChart;
