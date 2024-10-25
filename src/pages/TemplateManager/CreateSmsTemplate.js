import React from "react";
import {
  Box,
  Container,
  Card,
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  Button,
} from "@mui/material";
import { Circle } from "@mui/icons-material";
import SelectType from "../../components/ui/application-manager/form/SelectType";

import "./../../styles/CreateWhatsAppTemplate.css";

function CreateSmsTemplate(props) {
  return (
    <Box
      component="main"
      className="createWhatsAppTemplateWrapper"
      sx={{ py: 4 }}
    >
      <Container maxWidth={false}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item md={12} sm={12} xs={12}>
            <Card elevation={16} sx={{ p: 4 }}>
              <Box className="whatsapp-template-heading">
                <Typography
                  variant="h6"
                  component="h2"
                  className="whatsapp-heading"
                >
                  Create SMS Template
                </Typography>
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
                    </Box>
                    <Box className="basic-settings">
                      <Typography
                        variant="h6"
                        component="h2"
                        className="basic-settings-txt"
                      >
                        SMS Template Settings
                      </Typography>

                      <SelectType labelText="Nature of Template" />
                      <TextField
                        sx={{ mt: 3 }}
                        fullWidth
                        label="Content"
                        name="content"
                        multiline
                        placeholder="Enter WhatsApp Content"
                        rows={4}
                      />
                      {/* -------- */}
                      <FormControl sx={{ mt: 3, width: "100%" }}>
                        <InputLabel htmlFor="grouped-native-select">
                          Token
                        </InputLabel>
                        <Select
                          native
                          defaultValue=""
                          id="grouped-native-select"
                          label="Token"
                        >
                          <option aria-label="None" value="" />
                          <optgroup label="Institute">
                            <option value={1}>College Name</option>
                            <option value={2}>College Email</option>
                            <option value={3}>College Alias Name</option>
                            <option value={4}>College Logo</option>
                          </optgroup>
                          <optgroup label="Lead">
                            <option value={5}>Direct Login Link</option>
                            <option value={6}>Admit Card Link</option>
                            <option value={7}>Verify Link</option>
                          </optgroup>
                        </Select>
                      </FormControl>
                      {/* ------------- */}
                      <Box className="sms-info-main">
                        <Box className="sms-info-content">
                          <Typography className="info-para">
                            The number of characters mentioned above might vary
                            when the actual message will be sent out because of
                            the following reasons:
                          </Typography>
                          <Typography className="para-content">
                            <Circle className="circle-icons" />
                            Actual value getting replaced by the token used in
                            content
                          </Typography>
                          <Typography className="para-content">
                            <Circle className="circle-icons" />
                            Few special characters can consume more than 1
                            characters
                          </Typography>
                          <Typography className="para-content">
                            <Circle className="circle-icons" />
                            Links present in the content will be replaced by the
                            https://npfs.in short link which may vary between
                            23-28 characters.
                          </Typography>
                          <Typography className="para-content">
                            <Circle className="circle-icons" />
                            As per new TRAI guideines, every SMS content
                            template that is being registered by a Principal
                            Entity should contain 'Brand name' (Complete
                            business name/brand name/trademark) in the content
                            field and could be rejected if the same is not
                            incorporated while registering. Refer to the sample
                            below for referance - Dear Applicant. Thank you for
                            your interest in Demo College. Click here to start
                            your application: https://npfs.in/npfs6afv - Demo
                            College
                          </Typography>
                          <Typography classname="refers">
                            * Refer to the info tip for credit consumption
                            calculation.
                          </Typography>
                        </Box>
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
                      <Button
                        variant="contained"
                        component="span"
                        className="tem-button"
                      >
                        Save
                      </Button>
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

export default CreateSmsTemplate;
