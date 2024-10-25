import React, { useState } from "react";
import {
  Box,
  Card,
  Grid,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Typography,
  Tooltip,
  LinearProgress,
} from "@mui/material";

import DateRange from "../../shared/filters/DateRange";

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function ApplicationFunnel(props) {
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
            Score Board{" "}
            <Tooltip
              title="The Score Board represents a complate breakup of the total applications received segregate on the basis of the payment status..."
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
      <CardContent sx={{ p: 0 }}>
        <Box sx={{ px: 1, py: 1 }} className="score-board ">
          <Grid container spacing={1} columns={10}>
            <Grid item md={2}>
              <Box className="score-box">
                <Box className="score-title">
                  <Typography color="textSecondary" variant="body2">
                    Total Leads
                  </Typography>
                  <Tooltip
                    title="It will be triggered when the element is clicked, and closed when clicked again."
                    arrow
                    placement="top"
                  >
                    <IconButton>
                      <HelpOutlineOutlinedIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                  </Tooltip>
                </Box>
                <Typography color="#5048E5" variant="h5">
                  596
                </Typography>
                <Box sx={{ py: 0.6 }}>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="caption"
                    className="progress-text"
                  >
                    Verified:417
                  </Typography>
                  <LinearProgress variant="determinate" value={20} />
                </Box>
                <Box sx={{ py: 0.6 }}>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="caption"
                    className="progress-text"
                  >
                    Unverified:179
                  </Typography>
                  <LinearProgress variant="determinate" value={20} />
                </Box>
              </Box>
            </Grid>
            <Grid item md={2}>
              <Box className="score-box">
                <Box className="score-title">
                  <Typography color="textSecondary" variant="body2">
                    Total Paid Applications
                  </Typography>
                  <Tooltip
                    title="It will be triggered when the element is clicked, and closed when clicked again."
                    arrow
                    placement="top"
                  >
                    <IconButton>
                      <HelpOutlineOutlinedIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                  </Tooltip>
                </Box>
                <Typography color="#5048E5" variant="h5">
                  110
                </Typography>
                <Box sx={{ py: 0.6 }}>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="caption"
                    className="progress-text"
                  >
                    Offline:105
                  </Typography>
                  <LinearProgress variant="determinate" value={90} />
                </Box>
                <Box sx={{ py: 0.6 }}>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="caption"
                    className="progress-text"
                  >
                    Offline:0
                  </Typography>
                  <LinearProgress variant="determinate" value={0} />
                </Box>
                <Box sx={{ py: 0.6 }}>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="caption"
                    className="progress-text"
                  >
                    Voucher:5
                  </Typography>
                  <LinearProgress variant="determinate" value={20} />
                </Box>
                <Box sx={{ py: 0.6 }}>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="caption"
                    className="progress-text"
                  >
                    Free:0
                  </Typography>
                  <LinearProgress variant="determinate" value={36} />
                </Box>
              </Box>
            </Grid>

            <Grid item md={2}>
              <Box className="score-box">
                <Box className="score-title">
                  <Typography color="textSecondary" variant="body2">
                    Total Unpaid Applications
                  </Typography>
                  <Tooltip
                    title="It will be triggered when the element is clicked, and closed when clicked again."
                    arrow
                    placement="top"
                  >
                    <IconButton>
                      <HelpOutlineOutlinedIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                  </Tooltip>
                </Box>
                <Typography color="#5048E5" variant="h5">
                  197
                </Typography>
                <Box sx={{ py: 0.6 }}>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="caption"
                    className="progress-text"
                  >
                    Payment Initiated:36
                  </Typography>
                  <LinearProgress variant="determinate" value={20} />
                </Box>
                <Box sx={{ py: 0.6 }}>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="caption"
                    className="progress-text"
                  >
                    Payment Not Initiated:161
                  </Typography>
                  <LinearProgress variant="determinate" value={20} />
                </Box>
              </Box>
            </Grid>
            <Grid item md={2}>
              <Box className="score-box">
                <Box className="score-title">
                  <Typography color="textSecondary" variant="body2">
                    Total Queries
                  </Typography>
                  <Tooltip
                    title="It will be triggered when the element is clicked, and closed when clicked again."
                    arrow
                    placement="top"
                  >
                    <IconButton>
                      <HelpOutlineOutlinedIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                  </Tooltip>
                </Box>
                <Typography color="#5048E5" variant="h5">
                  119
                </Typography>
                <Box sx={{ py: 0.6 }}>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="caption"
                    className="progress-text"
                  >
                    Open:16
                  </Typography>
                  <LinearProgress variant="determinate" value={20} />
                </Box>
                <Box sx={{ py: 0.6 }}>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="caption"
                    className="progress-text"
                  >
                    Progress:5
                  </Typography>
                  <LinearProgress variant="determinate" value={20} />
                </Box>
                <Box sx={{ py: 0.6 }}>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="caption"
                    className="progress-text"
                  >
                    Closed:95
                  </Typography>
                  <LinearProgress variant="determinate" value={20} />
                </Box>
              </Box>
            </Grid>
            <Grid item md={2}>
              <Box className="score-box">
                <Box className="score-title">
                  <Typography color="textSecondary" variant="body2">
                    Communication
                  </Typography>
                  <Tooltip
                    title="It will be triggered when the element is clicked, and closed when clicked again."
                    arrow
                    placement="top"
                  >
                    <IconButton>
                      <HelpOutlineOutlinedIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                  </Tooltip>
                </Box>
                <Typography color="#5048E5" variant="h5">
                  27,74,235
                </Typography>
                <Box sx={{ py: 0.6 }}>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="caption"
                    className="progress-text"
                  >
                    Email:10,29,356
                  </Typography>
                  <LinearProgress variant="determinate" value={50} />
                </Box>
                <Box sx={{ py: 0.6 }}>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="caption"
                    className="progress-text"
                  >
                    SMS:17,90,256
                  </Typography>
                  <LinearProgress variant="determinate" value={80} />
                </Box>
                <Box sx={{ py: 0.6 }}>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="caption"
                    className="progress-text"
                  >
                    Whatsapp:3,458
                  </Typography>
                  <LinearProgress variant="determinate" value={15} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
