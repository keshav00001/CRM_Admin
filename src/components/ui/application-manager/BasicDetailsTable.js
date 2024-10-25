import React, { useState } from "react";
import { Drawer, InputGroup, Input } from "rsuite";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  IconButton,
  iconButtonClasses,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Container,
  Grid,
  Card,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
//Icon---
import {
  SaveOutlined,
  Search,
  FilterAlt,
  FileUploadOutlined,
  PostAddOutlined,
  TableChartOutlined,
  Timeline,
  CloseRounded,
  RestartAltRounded,
} from "@mui/icons-material";

import { Link } from "react-router-dom";
import { Download } from "@mui/icons-material";

const createRowData = [
  {
    id: 1,
    regName: "Chandan Kumar",
    avatar: "C",
    regEmail: "demoemail@gmail.com",
    applicationNo: "IA00332211",
    formName: "MA in Diplomacy Law & Bus...",
    regMob: "+91-9809807788",
    formStatus: "complete",
    payStatus: "Payment Approved",
    payMethod: "Online",
    date: "25 Jun 2021",
    country: "India",
    state: "Delhi",
    city: "New Delhi",
    course: "M.A",
    utmPay: "Online",
    action: "",
  },
  {
    id: 2,
    regName: "Ajay Kumar",
    avatar: "A",
    regEmail: "demoemail@gmail.com",
    applicationNo: "IA00332211",
    formName: "MA in Diplomacy Law & Bus...",
    regMob: "+91-9809807788",
    formStatus: "complete",
    payStatus: "Payment Approved",
    payMethod: "Online",
    date: "25 Jun 2021",
    country: "India",
    state: "Delhi",
    city: "New Delhi",
    course: "M.A",
    utmPay: "Online",
    action: "",
  },
  {
    id: 3,
    regName: "Mohit Kumar",
    avatar: "M",
    regEmail: "demoemail@gmail.com",
    applicationNo: "IA00332211",
    formName: "MA in Diplomacy Law & Bus...",
    regMob: "+91-9809807788",
    formStatus: "complete",
    payStatus: "Payment Approved",
    payMethod: "Online",
    date: "25 Jun 2021",
    country: "India",
    state: "Delhi",
    city: "New Delhi",
    course: "M.A",
    utmPay: "Online",
    action: "",
  },
  {
    id: 4,
    regName: "Rohit Kumar",
    avatar: "R",
    regEmail: "demoemail@gmail.com",
    applicationNo: "IA00332211",
    formName: "MA in Diplomacy Law & Bus...",
    regMob: "+91-9809807788",
    formStatus: "complete",
    payStatus: "Payment Approved",
    payMethod: "Online",
    date: "25 Jun 2021",
    country: "India",
    state: "Delhi",
    city: "New Delhi",
    course: "M.A",
    utmPay: "Online",
    action: "",
  },
  {
    id: 5,
    regName: "Thomas William",
    avatar: "T",
    regEmail: "demoemail@gmail.com",
    applicationNo: "IA00332211",
    formName: "MA in Diplomacy Law & Bus...",
    regMob: "+91-9809807788",
    formStatus: "complete",
    payStatus: "Payment Approved",
    payMethod: "Online",
    date: "25 Jun 2021",
    country: "India",
    state: "Delhi",
    city: "New Delhi",
    course: "M.A",
    utmPay: "Online",
    action: "",
  },
  {
    id: 6,
    regName: "Martin William",
    avatar: "M",
    regEmail: "demoemail@gmail.com",
    applicationNo: "IA00332211",
    formName: "MA in Diplomacy Law & Bus...",
    regMob: "+91-9809807788",
    formStatus: "complete",
    payStatus: "Payment Approved",
    payMethod: "Online",
    date: "25 Jun 2021",
    country: "India",
    state: "Delhi",
    city: "New Delhi",
    course: "M.A",
    utmPay: "Online",
    action: "",
  },
  {
    id: 7,
    regName: "Thomas William",
    avatar: "T",
    regEmail: "demoemail@gmail.com",
    applicationNo: "IA00332211",
    formName: "MA in Diplomacy Law & Bus...",
    regMob: "+91-9809807788",
    formStatus: "complete",
    payStatus: "Payment Approved",
    payMethod: "Online",
    date: "25 Jun 2021",
    country: "India",
    state: "Delhi",
    city: "New Delhi",
    course: "M.A",
    utmPay: "Online",
    action: "",
  },
  {
    id: 8,
    regName: "Johny William",
    avatar: "J",
    regEmail: "demoemail@gmail.com",
    applicationNo: "IA00332211",
    formName: "MA in Diplomacy Law & Bus...",
    regMob: "+91-9809807788",
    formStatus: "complete",
    payStatus: "Payment Approved",
    date: "25 Jun 2021",
    country: "India",
    state: "Delhi",
    city: "New Delhi",
    course: "M.A",
    utmPay: "Online",
    payMethod: "Online",
    action: "",
  },
  {
    id: 9,
    regName: "Thomas William",
    avatar: "T",
    regEmail: "demoemail@gmail.com",
    applicationNo: "IA00332211",
    formName: "MA in Diplomacy Law & Bus...",
    regMob: "+91-9809807788",
    formStatus: "complete",
    payStatus: "Payment Approved",
    payMethod: "Online",
    date: "25 Jun 2021",
    country: "India",
    state: "Delhi",
    city: "New Delhi",
    course: "M.A",
    utmPay: "Online",
    action: "",
  },
  {
    id: 10,
    regName: "John William",
    avatar: "J",
    regEmail: "demoemail@gmail.com",
    applicationNo: "IA00332211",
    formName: "MA in Diplomacy Law & Bus...",
    regMob: "+91-9809807788",
    formStatus: "complete",
    payStatus: "Payment Approved",
    payMethod: "Online",
    date: "25 Jun 2021",
    country: "India",
    state: "Delhi",
    city: "New Delhi",
    course: "M.A",
    utmPay: "Online",
    action: "",
  },
];

function BasicDetailsTable(props) {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - createRowData.length) : 0;

  // Drawer
  const [size, setSize] = useState("md");
  const [backdrop, setBackdrop] = useState(true);
  const { openCol, setOpenCol } = props;

  // Add/Remove tableHead TableCell
  const [regDate, setRegDate] = useState(false);
  const [regCountry, setRegCountry] = useState(false);
  const [regState, setRegState] = useState(false);
  const [city, setCity] = useState(false);
  const [course, setCourse] = useState(false);
  const [utmPay, setUtmPay] = useState(false);

  return (
    <Box className="basicDetailsTable">
      <Box>
        {/* <IconButton>
          <PostAddOutlined onClick={() => setOpenCol(true)} />
        </IconButton> */}
        {/* ------------ Drawer Start -------------- */}
        <Drawer
          size={size}
          backdrop={backdrop}
          open={props.openCol}
          onClose={() => setOpenCol(false)}
        >
          <Box className="drawer-header" component={Card}>
            <Box className="d_title">Customize column</Box>
            <Box className="">
              <Button variant="outlined" onClick={() => setOpenCol(false)}>
                Cancel
              </Button>
            </Box>
          </Box>
          <Drawer.Body style={{ padding: "16px 0px", maxWidth: "100%" }}>
            <Container className="customize_body">
              <Grid container>
                <Grid item md={6} xs={12}>
                  <Box className="search">
                    <InputGroup>
                      <Input placeholder="Search..." />
                      <InputGroup.Button>
                        <Search />
                      </InputGroup.Button>
                    </InputGroup>
                    <Typography variant="body1" className="leadDetails">
                      Lead Details
                    </Typography>
                  </Box>
                  <Box className="lead_details_main">
                    <Box className="formTableColumn">
                      <FormGroup>
                        <FormControlLabel
                          className="labalName"
                          control={<Checkbox defaultChecked />}
                          label="Registered Name"
                        />
                        <FormControlLabel
                          className="labalName"
                          control={<Checkbox />}
                          label="Registered Email"
                        />
                        <FormControlLabel
                          className="labalName"
                          control={
                            <Checkbox
                              onChange={(e) => setRegDate(e.target.checked)}
                              checked={regDate}
                            />
                          }
                          label="Registration Date"
                        />
                        <FormControlLabel
                          className="labalName"
                          control={<Checkbox />}
                          label="Registered Mobile"
                        />
                        <FormControlLabel
                          className="labalName"
                          control={
                            <Checkbox
                              onChange={(e) => setRegCountry(e.target.checked)}
                              checked={regCountry}
                            />
                          }
                          label="Registered Country"
                        />
                        <FormControlLabel
                          className="labalName"
                          control={
                            <Checkbox
                              onChange={(e) => setRegState(e.target.checked)}
                              checked={regState}
                            />
                          }
                          label="State"
                        />
                        <FormControlLabel
                          className="labalName"
                          control={
                            <Checkbox
                              onChange={(e) => setCity(e.target.checked)}
                              checked={city}
                            />
                          }
                          label="City"
                        />
                        <FormControlLabel
                          className="labalName"
                          control={<Checkbox />}
                          label="Programme Level"
                        />
                        <FormControlLabel
                          className="labalName"
                          control={
                            <Checkbox
                              onChange={(e) => setCourse(e.target.checked)}
                              checked={course}
                            />
                          }
                          label="Course"
                        />
                        <FormControlLabel
                          className="labalName"
                          control={
                            <Checkbox
                              onChange={(e) => setUtmPay(e.target.checked)}
                              checked={utmPay}
                            />
                          }
                          label="Utm Placement"
                        />
                        <FormControlLabel
                          className="labalName"
                          control={<Checkbox />}
                          label="Utm Matchtype"
                        />
                      </FormGroup>
                    </Box>
                  </Box>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Box className="selected_column">
                    <Box className="selected_haeding">
                      <Typography variant="body1" className="selected_txt">
                        Selected Columns
                      </Typography>
                      <Typography variant="body1" className="drag_to">
                        (Drag to reorder)
                      </Typography>
                    </Box>
                    <Box className="slt_columns">
                      <Box className="col_selection">
                        <Box className="column_selected">Registered Name</Box>
                      </Box>
                      <Box className="col_selection">
                        <Box className="column_selected">Registered Email</Box>
                      </Box>
                      <Box className="col_selection">
                        <Box className="column_selected">Registration Date</Box>
                      </Box>
                      <Box className="col_selection">
                        <Box className="column_selected times">
                          Registered Mobile
                        </Box>
                        <CloseRounded className="close_times" />
                      </Box>
                      <Box className="col_selection">
                        <Box className="column_selected times">
                          Registered Country
                        </Box>
                        <CloseRounded className="close_times" />
                      </Box>
                      <Box className="col_selection">
                        <Box className="column_selected times">City</Box>
                        <CloseRounded className="close_times" />
                      </Box>
                      <Box className="col_selection">
                        <Box className="column_selected times">Country</Box>
                        <CloseRounded className="close_times" />
                      </Box>
                      <Box className="col_selection">
                        <Box className="column_selected times">Mobile</Box>
                        <CloseRounded className="close_times" />
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Drawer.Body>
          <Drawer.Actions component={Card}>
            <Box className="column_footer">
              <Button
                variant="contained"
                endIcon={<RestartAltRounded fontSize="small" />}
                onClick={() => setOpenCol(false)}
              >
                Reset
              </Button>
              <Button
                variant="outlined"
                onClick={() => setOpenCol(false)}
                appearance="primary"
              >
                Apply
              </Button>
            </Box>
          </Drawer.Actions>
        </Drawer>
      </Box>
      <TableContainer>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>Registered Name</TableCell>
              <TableCell>Application No</TableCell>
              <TableCell>Form Name</TableCell>
              <TableCell>Registered Email</TableCell>
              <TableCell>Registered Mobile</TableCell>
              <TableCell>Form Status</TableCell>
              <TableCell>Payment Status</TableCell>
              <TableCell>Payment Method</TableCell>
              {regDate ? <TableCell>Registered Date</TableCell> : null}
              {regCountry ? <TableCell>Registered Country</TableCell> : null}
              {regState ? <TableCell>State</TableCell> : null}
              {city ? <TableCell>City</TableCell> : null}
              {course ? <TableCell>Course</TableCell> : null}
              {utmPay ? <TableCell>Utm Payment</TableCell> : null}
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {createRowData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((dataRow, i) => (
                <TableRow key={i.id}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItem: "center" }}>
                      <Avatar sx={{ width: 42, height: 42 }}>
                        {dataRow.avatar}
                      </Avatar>
                      <Box sx={{ ml: 1 }}>
                        <Link to="">
                          <Typography variant="subtitle2">
                            {dataRow.regName}
                          </Typography>
                        </Link>
                        <Typography variant="body2" color="textSecondary">
                          {dataRow.regEmail}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>{dataRow.applicationNo}</TableCell>
                  <TableCell>{dataRow.formName}</TableCell>
                  <TableCell>{dataRow.regEmail}</TableCell>
                  <TableCell>{dataRow.regMob}</TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" color="success.main">
                      {dataRow.formStatus}
                    </Typography>
                  </TableCell>
                  <TableCell>{dataRow.payStatus}</TableCell>
                  <TableCell>{dataRow.payMethod}</TableCell>

                  {regDate && <TableCell>{dataRow.date}</TableCell>}
                  {regCountry && <TableCell>{dataRow.country}</TableCell>}
                  {regState && <TableCell>{dataRow.state}</TableCell>}
                  {city && <TableCell>{dataRow.city}</TableCell>}
                  {course && <TableCell>{dataRow.course}</TableCell>}
                  {utmPay && <TableCell>{dataRow.utmPay}</TableCell>}
                  <TableCell>
                    <IconButton>
                      <Download />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            {emptyRows > 0 && (
              <TableRow>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        rowsPerPageOptions={[5, 10, 25]}
        count={createRowData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
}

export default BasicDetailsTable;
