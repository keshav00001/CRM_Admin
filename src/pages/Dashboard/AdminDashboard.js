import React, { useState } from "react";
import { Box, Container, Grid, Button } from "@mui/material";
import {
  AdminHeader,
  ScoreBoard,
  ApplicationFunnel,
  TopPerformingChannels,
  LeadFunnel,
  LeadsApplications,
  FormStageWiseSegregation,
  FormWiseApplications,
} from "../../components/ui/admin-dashboard";
import "../../styles/AdminDashboard.css";

function AdminDashboard(props) {
  const [showScoreBoard, setShowScoreBoard] = useState(true);

  return (
    <Box component="main" sx={{ flexGrow: 1, py: 2 }}>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          {/* <Grid item md={8} sm={8} xs={12}>
            <Typography color="textPrimary" gutterBottom variant="h5">
              Admin Dashboard
            </Typography>
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <Typography color="textPrimary" gutterBottom variant="body">
              Last Synced at: 27 Nov 2021 10:21 Am
            </Typography>
          </Grid> */}

          <Grid item md={12} sm={12} xs={12}>
            <AdminHeader />
          </Grid>

          <Grid item md={12} sm={12} xs={12}>
            {showScoreBoard && <ScoreBoard />}
          </Grid>

          <Grid item md={12} sm={12} xs={12}>
            <ApplicationFunnel />
          </Grid>

          <Grid item md={6} sm={6} xs={12}>
            <TopPerformingChannels />
          </Grid>

          <Grid item md={6} sm={6} xs={12}>
            <LeadFunnel />
          </Grid>

          <Grid item md={12} sm={12} xs={12}>
            <LeadsApplications />
          </Grid>

          <Grid item md={12} sm={12} xs={12}>
            <FormStageWiseSegregation />
          </Grid>

          <Grid item md={12} sm={12} xs={12}>
            <FormWiseApplications />
          </Grid>
          <Grid item md={12} sm={12} xs={12}></Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AdminDashboard;
