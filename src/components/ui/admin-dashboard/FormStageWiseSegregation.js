import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Typography,
  Tooltip,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import { FunnelChart } from "react-funnel-pipeline";
import "react-funnel-pipeline/dist/index.css";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import DateRange from "../../shared/filters/DateRange";

import Chart from "react-apexcharts";

export default function FormStageWiseSegregation(props) {
  const theme = useTheme();
  const [dateRange, setDateRange] = useState([]);
  const [state, setState] = useState({
    series: [
      {
        data: [21, 15, 10, 28],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          },
        },
      },
      colors: ["#0C7CD5", "#FF9800", "#4CAF50", "#D14343"],
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
        categories: [
          "Form Initiated",
          "Payment Initiated",
          "Payment Approved",
          "Application Submitted",
        ],
        labels: {
          style: {
            colors: ["#0C7CD5", "#FF9800", "#4CAF50", "#D14343"],
            fontSize: "12px",
          },
        },
      },
    },
  });

  return (
    <Card sx={{ height: "100%" }} {...props}>
      <CardHeader
        sx={{ py: 1.5 }}
        action={
          <Box sx={{ pt: 1.2 }}>
            <DateRange dateRange={dateRange} setDateRange={setDateRange} />
            <IconButton aria-label="Download">
              <FileDownloadOutlinedIcon />
            </IconButton>
          </Box>
        }
        title={
          <Typography color="textPrimary" variant="h6">
            Form Stage Wise Segregation{" "}
            <Tooltip
              title="The Form Stage Wise Segregation represents a complate breakup of the total applications received segregate on the basis of the payment status..."
              arrow
              placement="top"
            >
              <IconButton sx={{ p: 0.6, mt: -0.5 }}>
                <InfoOutlinedIcon sx={{ fontSize: 17 }} />
              </IconButton>
            </Tooltip>
          </Typography>
        }
      />
      <Divider />
      <CardContent>
        <Box sx={{ height: "400", position: "relative" }}>
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            height={350}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
