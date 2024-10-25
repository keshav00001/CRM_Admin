import React, { useState } from "react";
import Chart from "react-apexcharts";
import { useTheme } from "@mui/material/styles";
import { Box, CardHeader, CardContent } from "@mui/material";

function ApplicationTrendsGraph(props) {
  const theme = useTheme();
  const [state, setState] = useState({
    series: [
      {
        color: "#FF9800",
        data: [92, 600, 120, 352, 50, 250, 532, 453, 60, 100, 500, 80],
        name: "Leads",
      },
      {
        color: "#0C7CD5",
        data: [100, 122, 50, 300, 250, 400, 312, 200, 10, 60, 90, 400],
        name: "Applications",
      },
    ],
    options: {
      chart: {
        id: "basic-bar",
        background: "transparent",
        stacked: false,
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: [
          "01 Jan",
          "02 Jan",
          "03 Jan",
          "04 Jan",
          "05 Jan",
          "06 Jan",
          "07 Jan",
          "08 Jan",
          "09 Jan",
          "10 Jan",
          "11 Jan",
          "12 Jan",
        ],
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 1,
      },
      grid: {
        borderColor: theme.palette.divider,
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      legend: {
        show: true,
      },
      markers: {
        hover: {
          size: undefined,
          sizeOffset: 2,
        },
        radius: 2,
        shape: "circle",
        size: 4,
        strokeWidth: 0,
      },
      stroke: {
        curve: "smooth",
        lineCap: "butt",
        width: 3,
      },
    },
  });
  return (
    <div>
      <Box>
        <CardHeader title="Application Trends" />
        <CardContent>
          <Chart
            height={467}
            options={state.options}
            series={state.series}
            type="line"
          />
        </CardContent>
      </Box>
    </div>
  );
}

export default ApplicationTrendsGraph;
