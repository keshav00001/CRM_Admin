import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  Typography,
  TextField,
  Button,
  Select,
  InputLabel,
  OutlinedInput,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import SelectType from "../../components/ui/application-manager/form/SelectType";

function UploadDocument(props) {
  return (
    <Box component="main" className="" sx={{ flexGrow: 1, py: 2 }}>
      <Container sx={{ pt: 5 }}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item md={6} sm={8} xs={12}>
            <Card elevation={16} sx={{ p: 4 }}>
              <Box
                className="upload_heading"
                sx={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h5">Upload College Document</Typography>
                <Typography
                  color="textSecondary"
                  sx={{ mt: 2 }}
                  variant="body2"
                >
                  Fill your details here
                </Typography>
                <Box sx={{ flexGrow: 1, width: "100%" }}>
                  <SelectType labelText="Select College Name" />
                  <SelectType labelText="Select Form" />
                  <SelectType labelText="Show On" />
                  <TextField
                    sx={{ mt: 3 }}
                    fullWidth
                    label="File Title"
                    name="file-title"
                    type="text"
                  />
                </Box>
                <Box className="uploadBtn_area">
                  <Link to="/form-manager" style={{ textDecoration: "none" }}>
                    <Button variant="contained" color="secondary">
                      Back
                    </Button>
                  </Link>
                  <Button variant="contained">Save</Button>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default UploadDocument;
