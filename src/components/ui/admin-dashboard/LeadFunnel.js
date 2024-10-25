import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  IconButton,
  Typography,
  Tooltip,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import { FunnelChart } from "react-funnel-pipeline";
import "react-funnel-pipeline/dist/index.css";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import DateRange from "../../shared/filters/DateRange";

export default function LeadFunnel(props) {
  const [dateRange, setDateRange] = useState([]);

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
            Lead Funnel{" "}
            <Tooltip
              title="The Lead Funnel represents a complate breakup of the total applications received segregate on the basis of the payment status..."
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
          <FunnelChart
            data={[
              { name: "Total Leads", value: 596 },
              { name: "Application Started", value: 307 },
              { name: "Paid Applications", value: 110 },
              { name: "Application Submitted", value: 72 },
              { name: "Enrolments", value: 9 },
            ]}
            pallette={["#5048E5", "#10B981", "#FFB020", "#2196F3", "#D14343"]}
            getToolTip={(row) => {
              return "" + row.name;
            }}
            getRowNameStyle={(row) => {
              return { fontSize: 14 };
            }}
            getRowValueStyle={(row) => {
              return { fontSize: 20, fontWeight: "bold" };
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
