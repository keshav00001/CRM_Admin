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

export default function LeadsApplications(props) {
  const theme = useTheme();
  const [dateRange, setDateRange] = useState([]);
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
            Leads vs Applications{" "}
            <Tooltip
              title="The Leads vs Applications represents a complate breakup of the total applications received segregate on the basis of the payment status..."
              arrow
              placement="top"
            >
              <IconButton sx={{ p: 0.6, mt: -0.5 }}>
                <InfoOutlinedIcon sx={{ fontSize: 17 }} />
              </IconButton>
            </Tooltip>
          </Typography>
        }
        subheader={
          <Typography color="textSecondary" variant="caption">
            Date Range (23 Oct 2019 to 20 Jan 2022)
          </Typography>
        }
      />
      <Divider />
      <CardContent>
        <Box sx={{ height: "400", position: "relative" }}>
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            height={350}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
