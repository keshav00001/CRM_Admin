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

export default function FormWiseApplications(props) {
  return (
    <Card sx={{ height: "100%" }} {...props}>
      <CardHeader
        sx={{ py: 1.5 }}
        action={
          <Box sx={{ pt: 1.2 }}>
            <IconButton aria-label="Download">
              <FileDownloadOutlinedIcon />
            </IconButton>
          </Box>
        }
        title={
          <Typography color="textPrimary" variant="h6">
            Form Wise Applications{" "}
            <Tooltip
              title="The Form Wise Applications represents a complate breakup of the total applications received segregate on the basis of the payment status..."
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
          <TableHead sx={{ borderBottom: "1px solid #d3d4d7" }}>
            <TableRow>
              <TableCell rowSpan={2} sx={{ backgroundColor: "#ffffff" }}>
                Form Name
              </TableCell>
              <TableCell
                rowSpan={2}
                align="center"
                sx={{ backgroundColor: "#f8f8f8" }}
              >
                Total Applications
              </TableCell>
              <TableCell
                align="center"
                colSpan={3}
                sx={{ backgroundColor: "#e7e8eb" }}
              >
                Paid Applications
              </TableCell>
              <TableCell
                align="center"
                colSpan={3}
                sx={{ backgroundColor: "#f8f8f8" }}
              >
                unpaid Applications
              </TableCell>
              <TableCell
                rowSpan={2}
                align="center"
                sx={{
                  backgroundColor: "#e7e8eb",
                  borderBottom: "1px solid red",
                }}
              >
                Applications Submitted
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                align="center"
                sx={{ borderColor: "#E6E8F0", backgroundColor: "#e7e8eb" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: 11,
                    textTransform: "capitalize",
                    fontWeight: "600",
                  }}
                >
                  Online
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#E6E8F0", backgroundColor: "#e7e8eb" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: 11,
                    textTransform: "capitalize",
                    fontWeight: "600",
                  }}
                >
                  Voucher
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#E6E8F0", backgroundColor: "#e7e8eb" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: 11,
                    textTransform: "capitalize",
                    fontWeight: "600",
                  }}
                >
                  Total
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#E6E8F0", backgroundColor: "#f8f8f8" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: 11,
                    textTransform: "capitalize",
                    fontWeight: "600",
                  }}
                >
                  Payment Initiated
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#E6E8F0", backgroundColor: "#f8f8f8" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: 11,
                    textTransform: "capitalize",
                    fontWeight: "600",
                  }}
                >
                  Payment Not Initiated
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#E6E8F0", backgroundColor: "#f8f8f8" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: 11,
                    textTransform: "capitalize",
                    fontWeight: "600",
                  }}
                >
                  Total
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ borderColor: "#d3d4d7", fontWeight: "500" }}>
                MA in Diplomacy Law &amp; Business Application 2022
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#f8f8f8" }}
              >
                <Typography variant="subtitle2">112</Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#e7e8eb" }}
              >
                <Typography color={"success.main"} variant="subtitle2">
                  44
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#e7e8eb" }}
              >
                <Typography color={"success.main"} variant="subtitle2">
                  1
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#e7e8eb" }}
              >
                <Typography color={"success.main"} variant="subtitle2">
                  45
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#f8f8f8" }}
              >
                <Typography color={"warning.main"} variant="subtitle2">
                  11
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#f8f8f8" }}
              >
                <Typography color={"warning.main"} variant="subtitle2">
                  56
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#f8f8f8" }}
              >
                <Typography color={"warning.main"} variant="subtitle2">
                  67
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#e7e8eb" }}
              >
                <Typography variant="subtitle2">35</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ borderColor: "#d3d4d7", fontWeight: "500" }}>
                MA in Diplomacy Law &amp; Business Application 2022
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#f8f8f8" }}
              >
                <Typography variant="subtitle2">112</Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#e7e8eb" }}
              >
                <Typography color={"success.main"} variant="subtitle2">
                  44
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#e7e8eb" }}
              >
                <Typography color={"success.main"} variant="subtitle2">
                  1
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#e7e8eb" }}
              >
                <Typography color={"success.main"} variant="subtitle2">
                  45
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#f8f8f8" }}
              >
                <Typography color={"warning.main"} variant="subtitle2">
                  11
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#f8f8f8" }}
              >
                <Typography color={"warning.main"} variant="subtitle2">
                  56
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#f8f8f8" }}
              >
                <Typography color={"warning.main"} variant="subtitle2">
                  67
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#e7e8eb" }}
              >
                <Typography variant="subtitle2">35</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ borderColor: "#d3d4d7", fontWeight: "500" }}>
                MA in Diplomacy Law &amp; Business Application 2022
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#f8f8f8" }}
              >
                <Typography variant="subtitle2">112</Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#e7e8eb" }}
              >
                <Typography color={"success.main"} variant="subtitle2">
                  44
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#e7e8eb" }}
              >
                <Typography color={"success.main"} variant="subtitle2">
                  1
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#e7e8eb" }}
              >
                <Typography color={"success.main"} variant="subtitle2">
                  45
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#f8f8f8" }}
              >
                <Typography color={"warning.main"} variant="subtitle2">
                  11
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#f8f8f8" }}
              >
                <Typography color={"warning.main"} variant="subtitle2">
                  56
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#f8f8f8" }}
              >
                <Typography color={"warning.main"} variant="subtitle2">
                  67
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#e7e8eb" }}
              >
                <Typography variant="subtitle2">35</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ borderColor: "#d3d4d7", fontWeight: "500" }}>
                MA in Diplomacy Law &amp; Business Application 2022
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#f8f8f8" }}
              >
                <Typography variant="subtitle2">112</Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#e7e8eb" }}
              >
                <Typography color={"success.main"} variant="subtitle2">
                  44
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#e7e8eb" }}
              >
                <Typography color={"success.main"} variant="subtitle2">
                  1
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#e7e8eb" }}
              >
                <Typography color={"success.main"} variant="subtitle2">
                  45
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#f8f8f8" }}
              >
                <Typography color={"warning.main"} variant="subtitle2">
                  11
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#f8f8f8" }}
              >
                <Typography color={"warning.main"} variant="subtitle2">
                  56
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#f8f8f8" }}
              >
                <Typography color={"warning.main"} variant="subtitle2">
                  67
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderColor: "#d3d4d7", backgroundColor: "#e7e8eb" }}
              >
                <Typography variant="subtitle2">35</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
