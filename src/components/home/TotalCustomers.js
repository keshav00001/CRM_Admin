import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PeopleIcon from "@mui/icons-material/PeopleOutlined";

export default function TotalCustomers(props) {
  return (
    <Card sx={{ height: "100%" }} {...props}>
      <CardContent>
        <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              TOTAL CUSTOMERS
            </Typography>
            <Typography color="textPrimary" variant="h4">
              1,6k
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{ backgroundColor: "success.main", height: 50, width: 50 }}
            >
              <PeopleIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box sx={{ pt: 2, display: "flex", alignItems: "center" }}>
          <ArrowUpwardIcon color="success" />
          <Typography variant="body2" sx={{ mr: 1 }}>
            16%
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Since last month
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
