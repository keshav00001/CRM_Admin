import React from "react";
import { Box, Container, Grid } from "@mui/material";
import Budgets from "./home/Budgets";
import TotalCustomers from "./home/TotalCustomers";
import Sales from "./home/Sales";
import TrafficByDevice from "./home/TrafficByDevice";

export default function Home(props) {
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item lg={3} sm={6} xs={12}>
              <Budgets />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <TotalCustomers />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <Budgets />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <TotalCustomers />
            </Grid>
            <Grid item lg={8} md={12} xs={12}>
              <Sales />
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <TrafficByDevice />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
