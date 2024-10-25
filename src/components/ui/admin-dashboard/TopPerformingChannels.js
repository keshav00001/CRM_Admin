import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Typography,
  Tooltip,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
} from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import DateRange from "../../shared/filters/DateRange";

export default function TopPerformingChannels(props) {
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
            Top Performing Channels{" "}
            <Tooltip
              title="The Top Performing Channels represents a complate breakup of the total applications received segregate on the basis of the payment status..."
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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Traffic Channel/Publisher</TableCell>
              <TableCell align="center">Leads</TableCell>
              <TableCell align="center">Applications</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ borderColor: "#E6E8F0", fontWeight: "500" }}>
                Direct
              </TableCell>
              <TableCell align="center" sx={{ borderColor: "#E6E8F0" }}>
                <Typography color={"warning.main"} variant="subtitle2">
                  135
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="subtitle2"
                  sx={{
                    background: "#eff1f5",
                    py: 0.5,
                    px: 1,
                    borderRadius: 5,
                    display: "inline-block",
                    fontSize: 11,
                  }}
                >
                  (22.65%)
                </Typography>
              </TableCell>
              <TableCell align="center" sx={{ borderColor: "#E6E8F0" }}>
                <Typography color={"success.main"} variant="subtitle2">
                  60
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="subtitle2"
                  sx={{
                    background: "#eff1f5",
                    py: 0.5,
                    px: 1,
                    borderRadius: 5,
                    display: "inline-block",
                    fontSize: 11,
                  }}
                >
                  (54.5%)
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ borderColor: "#E6E8F0", fontWeight: "500" }}>
                Collegedunia
              </TableCell>
              <TableCell align="center" sx={{ borderColor: "#E6E8F0" }}>
                <Typography color={"warning.main"} variant="subtitle2">
                  109
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="subtitle2"
                  sx={{
                    background: "#eff1f5",
                    py: 0.5,
                    px: 1,
                    borderRadius: 5,
                    display: "inline-block",
                    fontSize: 11,
                  }}
                >
                  (18.29%)
                </Typography>
              </TableCell>
              <TableCell align="center" sx={{ borderColor: "#E6E8F0" }}>
                <Typography color={"success.main"} variant="subtitle2">
                  0
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="subtitle2"
                  sx={{
                    background: "#eff1f5",
                    py: 0.5,
                    px: 1,
                    borderRadius: 5,
                    display: "inline-block",
                    fontSize: 11,
                  }}
                >
                  (0%)
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ borderColor: "#E6E8F0", fontWeight: "500" }}>
                Shiksha
              </TableCell>
              <TableCell align="center" sx={{ borderColor: "#E6E8F0" }}>
                <Typography color={"warning.main"} variant="subtitle2">
                  97
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="subtitle2"
                  sx={{
                    background: "#eff1f5",
                    py: 0.5,
                    px: 1,
                    borderRadius: 5,
                    display: "inline-block",
                    fontSize: 11,
                  }}
                >
                  (16.28%)
                </Typography>
              </TableCell>
              <TableCell align="center" sx={{ borderColor: "#E6E8F0" }}>
                <Typography color={"success.main"} variant="subtitle2">
                  3
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="subtitle2"
                  sx={{
                    background: "#eff1f5",
                    py: 0.5,
                    px: 1,
                    borderRadius: 5,
                    display: "inline-block",
                    fontSize: 11,
                  }}
                >
                  (2.73%)
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ borderColor: "#E6E8F0", fontWeight: "500" }}>
                Referral
              </TableCell>
              <TableCell align="center" sx={{ borderColor: "#E6E8F0" }}>
                <Typography color={"warning.main"} variant="subtitle2">
                  85
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="subtitle2"
                  sx={{
                    background: "#eff1f5",
                    py: 0.5,
                    px: 1,
                    borderRadius: 5,
                    display: "inline-block",
                    fontSize: 11,
                  }}
                >
                  (14.26%)
                </Typography>
              </TableCell>
              <TableCell align="center" sx={{ borderColor: "#E6E8F0" }}>
                <Typography color={"success.main"} variant="subtitle2">
                  20
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="subtitle2"
                  sx={{
                    background: "#eff1f5",
                    py: 0.5,
                    px: 1,
                    borderRadius: 5,
                    display: "inline-block",
                    fontSize: 11,
                  }}
                >
                  (18.18%)
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
