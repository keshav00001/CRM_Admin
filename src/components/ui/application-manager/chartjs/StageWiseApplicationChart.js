import React, { useState } from "react";
import Chart from "react-apexcharts";
import { useTheme } from "@mui/material/styles";
import { Box, CardHeader, CardContent } from "@mui/material";

function StageWiseApplicationChart(props) {
  const theme = useTheme();
  const [stageData, setStageData] = useState({
    series: [
      {
        data: [138, 118, 45, 117, 140, 42, 100, 15],
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

      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        axisBorder: {
          color: theme.palette.divider,
          show: true,
        },
        axisTicks: {
          color: theme.palette.divider,
          show: true,
        },
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      },
    },
  });
  return (
    <Box>
      <CardHeader title="Stage-wise Application" />
      <CardContent>
        <Chart
          height={467}
          options={stageData.options}
          series={stageData.series}
          type="bar"
        />
      </CardContent>
    </Box>
  );
}

export default StageWiseApplicationChart;
