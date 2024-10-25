import React from "react";
import {
  Container,
  Grid,
  Card,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

function ForgotPwd(props) {
  return (
    <Box component="main" className="forgotPwd" sx={{ flexGrow: 1, py: 2 }}>
      <Container sx={{ pt: 5 }}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item md={6} sm={8} xs={12}>
            <Card elevation={16} sx={{ p: 4 }}>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h4">Password Recovery</Typography>
                <Typography
                  color="textSecondary"
                  sx={{ mt: 2 }}
                  variant="body2"
                >
                  Tell us your email so we can send you a reset link
                </Typography>
                <Box sx={{ flexGrow: 1, width: "100%" }}>
                  <TextField
                    sx={{ mt: 4 }}
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                  />

                  <Box sx={{ mt: 5 }}>
                    <Link to="/password-reset">
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ fontSize: "20px" }}
                      >
                        Recover Password
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ForgotPwd;
