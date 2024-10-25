import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Button,
  Card,
  CardHeader,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  TextField,
  InputAdornment,
  InputBase,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import "../../styles/InAppCallLogs.css";
// Icons
import {
  SaveOutlined,
  Search,
  FilterAlt,
  FileUploadOutlined,
} from "@mui/icons-material";
import { Download as DownloadIcon } from "./../../icons/Download";

const logsData = [
  {
    id: 1,
    applicationName: "John William",
    mobNo: 9809807788,
    callType: "Outgoing",
    userName: "William",
    callStatus: "Answered",
    leadStatus: "Verified Leads",
    startTimes: "20/01/2022, 11:59 AM",
    endTimes: "20/01/2022, 12:05 PM",
    duration: "360 s",
    recording: "-",
  },
  {
    id: 2,
    applicationName: "Elisa Smith",
    mobNo: 9809807788,
    callType: "Outgoing",
    userName: "Smith",
    callStatus: "Answered",
    leadStatus: "Verified Leads",
    startTimes: "20/01/2022, 11:59 AM",
    endTimes: "20/01/2022, 12:05 PM",
    duration: "360 s",
    recording: "-",
  },
  {
    id: 3,
    applicationName: "Jonas Henry",
    mobNo: 9809807788,
    callType: "Outgoing",
    userName: "Henry",
    callStatus: "Answered",
    leadStatus: "Verified Leads",
    startTimes: "20/01/2022, 11:59 AM",
    endTimes: "20/01/2022, 12:05 PM",
    duration: "360 s",
    recording: "-",
  },
  {
    id: 4,
    applicationName: "Liam William",
    mobNo: 9809807788,
    callType: "Outgoing",
    userName: "Liam",
    callStatus: "Answered",
    leadStatus: "Verified Leads",
    startTimes: "20/01/2022, 11:59 AM",
    endTimes: "20/01/2022, 12:05 PM",
    duration: "360 s",
    recording: "-",
  },
  {
    id: 5,
    applicationName: "James Smith",
    mobNo: 9809807788,
    callType: "Outgoing",
    userName: "James",
    callStatus: "Answered",
    leadStatus: "Verified Leads",
    startTimes: "20/01/2022, 11:59 AM",
    endTimes: "20/01/2022, 12:05 PM",
    duration: "360 s",
    recording: "-",
  },
  {
    id: 6,
    applicationName: "Lucas Michael",
    mobNo: 9809807788,
    callType: "Outgoing",
    userName: "Michael",
    callStatus: "Answered",
    leadStatus: "Verified Leads",
    startTimes: "20/01/2022, 11:59 AM",
    endTimes: "20/01/2022, 12:05 PM",
    duration: "360 s",
    recording: "-",
  },
  {
    id: 7,
    applicationName: "Alexander Henry",
    mobNo: 9809807788,
    callType: "Outgoing",
    userName: "Alexander",
    callStatus: "Answered",
    leadStatus: "Verified Leads",
    startTimes: "20/01/2022, 11:59 AM",
    endTimes: "20/01/2022, 12:05 PM",
    duration: "360 s",
    recording: "-",
  },
  {
    id: 8,
    applicationName: " John Cena",
    mobNo: 9809807788,
    callType: "Outgoing",
    userName: "Cena",
    callStatus: "Answered",
    leadStatus: "Verified Leads",
    startTimes: "20/01/2022, 11:59 AM",
    endTimes: "20/01/2022, 12:05 PM",
    duration: "360 s",
    recording: "-",
  },
  {
    id: 9,
    applicationName: "Mason William",
    mobNo: 9809807788,
    callType: "Outgoing",
    userName: "Mason",
    callStatus: "Answered",
    leadStatus: "Verified Leads",
    startTimes: "20/01/2022, 11:59 AM",
    endTimes: "20/01/2022, 12:05 PM",
    duration: "360 s",
    recording: "-",
  },
  {
    id: 10,
    applicationName: "Jack Michael",
    mobNo: 9809807788,
    callType: "Outgoing",
    userName: "Jack",
    callStatus: "Answered",
    leadStatus: "Verified Leads",
    startTimes: "20/01/2022, 11:59 AM",
    endTimes: "20/01/2022, 12:05 PM",
    duration: "360 s",
    recording: "-",
  },
  {
    id: 11,
    applicationName: "Harry William",
    mobNo: 9809807788,
    callType: "Outgoing",
    userName: "Harry",
    callStatus: "Answered",
    leadStatus: "Verified Leads",
    startTimes: "20/01/2022, 11:59 AM",
    endTimes: "20/01/2022, 12:05 PM",
    duration: "360 s",
    recording: "-",
  },
  {
    id: 12,
    applicationName: "Jonny Henry",
    mobNo: 9809807788,
    callType: "Outgoing",
    userName: "Jonny",
    callStatus: "Answered",
    leadStatus: "Verified Leads",
    startTimes: "20/01/2022, 11:59 AM",
    endTimes: "20/01/2022, 12:05 PM",
    duration: "360 s",
    recording: "-",
  },
];
// Search=====
const SearchBox = styled("div")(({ theme }) => ({
  position: "relative",
  border: "1px solid #dddddd",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginRight: "12px",
  marginTop: "10px",
  marginBottom: "10px",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1.2, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "14ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function InAppCallLogs(props) {
  // pagination
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Box component="main" className="in-app-call-logs" sx={{ py: 2 }}>
      <Container maxWidth={false}>
        <Grid container>
          <Grid item md={12} sm={12} xs={12}>
            <Box className="appCall_top">
              <Box className="appCalllog">
                <Box component="h5">
                  In-App Call Logs
                  <Typography
                    component="span"
                    variant="body2"
                    color="text.secondary"
                    sx={{ pl: 1 }}
                  >
                    (Total 181 Records)
                  </Typography>
                </Box>
              </Box>
              <Box className="applog_search">
                <Box>
                  <SearchBox>
                    <SearchIconWrapper>
                      <Search fontSize="small" />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </SearchBox>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    startIcon={<DownloadIcon fontSize="small" />}
                  >
                    Download
                  </Button>
                </Box>
                <Box
                  sx={{
                    marginLeft: "12px",
                    // border: "1px solid #828DF8",
                  }}
                >
                  <Button
                    variant="contained"
                    startIcon={<FilterAlt fontSize="small" />}
                  >
                    Filter
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box>
              <Card {...props}>
                <CardHeader title="App Call Logs" subheader="Records" />
                <TableContainer>
                  <Table sx={{ minWidth: 700 }}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Application Name</TableCell>
                        <TableCell>Application Mobile No.</TableCell>
                        <TableCell>Calling Type</TableCell>
                        <TableCell>User Name</TableCell>
                        <TableCell>Call Status</TableCell>
                        <TableCell>Lead Status</TableCell>
                        <TableCell>Start Time</TableCell>
                        <TableCell>End Time</TableCell>
                        <TableCell>Duration</TableCell>
                        <TableCell>Recording</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {logsData
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((logData, i) => (
                          <TableRow key={i.id}>
                            <TableCell>
                              <Link to="">
                                <Typography
                                  variant="body2"
                                  sx={{ fontWeight: "600" }}
                                >
                                  {logData.applicationName}
                                </Typography>
                              </Link>
                            </TableCell>
                            <TableCell>{logData.mobNo}</TableCell>
                            <TableCell>{logData.callType}</TableCell>
                            <TableCell>{logData.userName}</TableCell>
                            <TableCell>{logData.callStatus}</TableCell>
                            <TableCell>{logData.leadStatus}</TableCell>
                            <TableCell>{logData.startTimes}</TableCell>
                            <TableCell>{logData.endTimes}</TableCell>
                            <TableCell align="center">
                              {logData.duration}
                            </TableCell>
                            <TableCell align="center">
                              {logData.recording}
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  component="div"
                  rowsPerPageOptions={[5, 8, 10, 25]}
                  count={logsData.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default InAppCallLogs;
