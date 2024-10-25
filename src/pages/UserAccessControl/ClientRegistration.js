import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  Card,
  Typography,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  TextField,
  Divider,
} from "@mui/material";
import { DatePicker } from "rsuite";
import "../../styles/ClientRegistration.css";
import SelectType from "../../components/ui/application-manager/form/SelectType";

function ClientRegistration(props) {
  const [campuseValue, setCampuseValue] = useState("no");
  const handleChange = (e) => {
    setCampuseValue(e.target.value);
  };

  return (
    <Box
      component="main"
      className="client-registration"
      sx={{ flexGrow: 1, py: 2 }}
    >
      <Container maxWidth={false} sx={{ pt: 2 }}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item md={10} xs={12}>
            <Card elevation={16} sx={{ p: 3 }}>
              <Box>
                <Typography variant="h5">Client Registration</Typography>
              </Box>
              <Box className="client-registration-content">
                <Grid container spacing={3}>
                  <Grid item md={6} sm={6} xs={12}>
                    <SelectType labelText="Group Name" />
                  </Grid>
                  <Grid item md={6} sm={12} xs={12} sx={{ mt: 3 }}>
                    <FormControl>
                      <FormLabel id="demo-row-radio-buttons-group-label">
                        Has multiple campuses
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={campuseValue}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="yes"
                          control={<Radio />}
                          label="Yes"
                        />

                        <FormControlLabel
                          value="no"
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                  <Grid item md={6} sm={6} xs={12}>
                    <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      label="Name of client"
                      name="client-name"
                      type="text"
                    />
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      label="Address"
                      name="address"
                      type="text"
                    />
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <SelectType labelText="Country" />
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <SelectType labelText="State" />
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <SelectType labelText="City" />
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      label="Website URL"
                      name="url"
                      type="text"
                    />
                  </Grid>
                  <Grid item md={4} sm={4} xs={12}>
                    <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      label="POC 1 Name"
                      name="poc1-name"
                      type="text"
                    />
                  </Grid>
                  <Grid item md={4} sm={4} xs={12}>
                    <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      label="POC 1 Mail Id"
                      name="poc1-mail"
                      type="text"
                    />
                  </Grid>
                  <Grid item md={4} sm={4} xs={12}>
                    <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      label="POC 1 Mobile No"
                      name="poc1-mob"
                      type="text"
                    />
                  </Grid>
                  <Grid item md={12} sm={12} xs={12}>
                    <Divider sx={{ mt: 2 }} />
                  </Grid>
                  <Grid item md={4} sm={4} xs={12}>
                    <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      label="POC 2 Name"
                      name="poc2-name"
                      type="text"
                    />
                  </Grid>
                  <Grid item md={4} sm={4} xs={12}>
                    <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      label="POC 2 Mail Id"
                      name="poc2-mail"
                      type="text"
                    />
                  </Grid>
                  <Grid item md={4} sm={4} xs={12}>
                    <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      label="POC 2 Mobile No"
                      name="poc2-mob"
                      type="text"
                    />
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <FormControl>
                      <FormLabel id="moduleSubs">Module Subscribed</FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="moduleSubs"
                        name="moduleSubs"
                        value={campuseValue}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="yes"
                          control={<Radio />}
                          label="Yes"
                        />

                        <FormControlLabel
                          value="no"
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <FormControl>
                      <FormLabel id="leadManagement">
                        Lead management system
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="leadManagement"
                        name="leadManagement"
                        value={campuseValue}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="yes"
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <FormControl>
                      <FormLabel id="applicationManagement">
                        Application management system
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="applicationManagement"
                        name="applicationManagement"
                        value={campuseValue}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="yes"
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <FormControl>
                      <FormLabel id="rowDataModule">Raw data module</FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="rowDataModule"
                        name="rowDataModule"
                        value={campuseValue}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="yes"
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                  <Grid item md={6} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Limit of raw data entries"
                      name="limitRawData"
                      type="number"
                    />
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Lead limit"
                      name="limit"
                      type="number"
                    />
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      label="Counselor Limit"
                      name="counselorLimit"
                      type="number"
                    />
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      label="Client manager limit"
                      name="Clientlimit"
                      type="number"
                    />
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      label="Publisher account limit"
                      name="publisherLimit"
                      type="number"
                    />
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}></Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <FormControl>
                      <FormLabel id="leadVerify">
                        Lead Verification type
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="leadVerify"
                        name="leadVerify"
                      >
                        <FormControlLabel
                          value="opt"
                          control={<Radio />}
                          label="OTP"
                          checked
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <FormControl>
                      <FormLabel id="leads">
                        Can accept leads through API
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="leads"
                        name="leads"
                        value={campuseValue}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="yes"
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                  <Grid item md={6} sm={6} xs={12}>
                    <FormControl>
                      <FormLabel id="integrate">Integration with ERP</FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="integrate"
                        name="integrate"
                        value={campuseValue}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="yes"
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <FormControl>
                      <FormLabel id="integrate">
                        Integration with 3rd part application
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="integrate"
                        name="integrate"
                        value={campuseValue}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="yes"
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item md={12} sm={12} xs={12}>
                    <FormControl>
                      <FormLabel id="integrate">
                        Integration with 3rd part telephony
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="integrate"
                        name="integrate"
                        value={campuseValue}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="yes"
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                  <Grid item md={6} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Number of forms"
                      name="forms"
                      type="number"
                    />
                  </Grid>

                  <Grid item md={6} sm={6} xs={12}>
                    <DatePicker
                      size="lg"
                      block
                      placement="autoVerticalStart"
                      placeholder="Date of Activation"
                    />
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <DatePicker
                      size="lg"
                      block
                      placement="autoVerticalStart"
                      placeholder="Deactivation Date"
                    />
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      label="SMS Charge per release"
                      name="smsCharge"
                      type="text"
                    />
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      label="Email Charge per release"
                      name="emailCharge"
                      type="text"
                    />
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <SelectType labelText="Name of client manager" />
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

export default ClientRegistration;
