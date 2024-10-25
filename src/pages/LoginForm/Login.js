import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "../../styles/Login.css";
import { Link } from "react-router-dom";

function Login(props) {
  const [passwordShowHide, setPasswordShowHide] = useState(true);
  const showHidePassword = () => {
    setPasswordShowHide(!passwordShowHide);
  };

  return (
    <Box component="main" className="login-main" sx={{ flexGrow: 1, py: 2 }}>
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
                <Typography variant="h5">Log In</Typography>
                <Typography
                  color="textSecondary"
                  sx={{ mt: 2 }}
                  variant="body2"
                >
                  Sign in on the internal platform
                </Typography>
                <Box sx={{ flexGrow: 1, width: "100%" }}>
                  <TextField
                    sx={{ mt: 3 }}
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    // value="demo@shiftboolean.com"
                  />
                  <Box className="password-field">
                    <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      label="Password"
                      name="password"
                      type={passwordShowHide ? "password" : "text"}
                      // value="123456"
                    />
                    <Box
                      component="span"
                      className="password-icon"
                      onClick={showHidePassword}
                    >
                      {passwordShowHide ? (
                        <VisibilityOffIcon size="small" />
                      ) : (
                        <VisibilityIcon size="small" />
                      )}
                    </Box>
                  </Box>
                  <Box sx={{ mt: 3 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ fontSize: "20px" }}
                    >
                      Log In
                    </Button>
                  </Box>
                  <Box sx={{ mt: 4 }}>
                    <Link to="/forgot-password">
                      <Typography
                        component="a"
                        color="textSecondary"
                        variant="body2"
                      >
                        Forgot password
                      </Typography>
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

export default Login;
