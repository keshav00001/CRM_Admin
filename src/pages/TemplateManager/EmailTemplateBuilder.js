import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Card,
  Grid,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Input,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import SelectType from "../../components/ui/application-manager/form/SelectType";
import Loader from "./../../components/loader/Loader";

import "./../../styles/EmailTemplateBuilder.css";

function EmailTemplateBuilder(props) {
  const [doctypeValue, setDoctypeValue] = useState("static");
  const documentHandleChange = (e) => {
    setDoctypeValue(e.target.value);
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const screenLoading = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {
      clearTimeout(screenLoading);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Box component="main" className="emailTemplateWrapper" sx={{ py: 4 }}>
      <Container maxWidth={false}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item md={12} sm={12} xs={12}>
            <Card elevation={16} sx={{ p: 4 }}>
              <Box className="template-top-info-Wrapper">
                <Box className="info-steps right-angle active">
                  <Typography variant="body1" className="info-steps-txt">
                    Basic Information
                  </Typography>
                </Box>
                <Box className="info-steps left-right-angle">
                  <Typography variant="body1" className="info-steps-txt">
                    Choose Layout
                  </Typography>
                </Box>
                <Box className="info-steps left-angle">
                  <Typography variant="body1" className="info-steps-txt">
                    Compose Email
                  </Typography>
                </Box>
              </Box>
              <Box className="Basic-information-wrapper">
                <Grid container sx={{ justifyContent: "center" }}>
                  <Grid item md={6} sm={8} xs={12}>
                    <Box className="basic-settings">
                      <Typography
                        variant="h6"
                        component="h2"
                        className="basic-settings-txt"
                      >
                        Basic Settings
                      </Typography>
                      <TextField
                        sx={{ mt: 3 }}
                        fullWidth
                        label="Template Name"
                        name="template-name"
                        type="text"
                      />
                      <SelectType labelText="Template Applicable for" />
                      <SelectType labelText="Select Forms" />
                      <TextField
                        sx={{ mt: 3 }}
                        fullWidth
                        label="Add Tag"
                        name="add-tag"
                        type="text"
                      />
                    </Box>
                    <Box className="basic-settings">
                      <Typography
                        variant="h6"
                        component="h2"
                        className="basic-settings-txt"
                      >
                        Email Template Settings
                      </Typography>

                      <SelectType labelText="Nature of Template" />
                      <TextField
                        sx={{ mt: 3 }}
                        fullWidth
                        label="Subject"
                        name="subject-name"
                        type="text"
                      />
                      <SelectType labelText="Subject Token" />
                      <Box className="doc-type-static">
                        <FormControl className="stacit-document-inner">
                          <FormLabel id="docTypeStatic" className="doc-label">
                            Document Type
                          </FormLabel>
                          <RadioGroup
                            row
                            aria-labelledby="docTypeStatic"
                            name="row-radio-buttons-group"
                            value={doctypeValue}
                            onChange={documentHandleChange}
                          >
                            <FormControlLabel
                              value="static"
                              control={<Radio />}
                              label="Static"
                            />

                            <FormControlLabel
                              value="dynamic"
                              control={<Radio />}
                              label="Dynamic"
                            />
                          </RadioGroup>
                        </FormControl>
                      </Box>
                      <Box className="upload-doc">
                        <Typography
                          variant="h6"
                          component="h4"
                          className="attached-file"
                        >
                          Attached Files
                        </Typography>
                        <label htmlFor="contained-button-file">
                          <Input
                            accept="image/*"
                            id="contained-button-file"
                            multiple
                            type="file"
                            className="fileInput"
                          />
                          <Button variant="contained" component="span">
                            Upload
                          </Button>
                        </label>
                      </Box>
                    </Box>
                    <Box className="basic-settings">
                      <Typography
                        variant="h6"
                        component="h2"
                        className="basic-settings-txt"
                      >
                        Assign User(s) to Template
                      </Typography>

                      <SelectType labelText="Users" />
                    </Box>
                    <Box className="save-next">
                      <Button
                        variant="outlined"
                        component="span"
                        className="tem-button"
                      >
                        Cancel
                      </Button>
                      <Link to="/basic-layout">
                        <Button
                          variant="contained"
                          component="span"
                          className="tem-button"
                        >
                          Save & Next
                        </Button>
                      </Link>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default EmailTemplateBuilder;
