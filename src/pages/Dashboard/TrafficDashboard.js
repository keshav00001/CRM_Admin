import React from "react";
import { Box, Container, Grid } from "@mui/material";

function TrafficDashboard(props) {
  return (
    <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={12} sm={12} xs={12}>
            TrafficDashboard
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default TrafficDashboard;
