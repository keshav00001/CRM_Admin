import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MoneyIcon from "@mui/icons-material/Money";

export default function Budgets(props) {
  return (
    <Card sx={{ height: "100%" }} {...props}>
      <CardContent>
        <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              BUDGET
            </Typography>
            <Typography color="textPrimary" variant="h4">
              $24k
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{ backgroundColor: "error.main", height: 50, width: 50 }}
            >
              <MoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box sx={{ pt: 2, display: "flex", alignItems: "center" }}>
          <ArrowDownwardIcon color="error" />
          <Typography color="error" variant="body2" sx={{ mr: 1 }}>
            12%
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Since last month
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
