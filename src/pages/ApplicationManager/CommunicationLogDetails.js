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
  InputBase,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";

import { Drawer, SelectPicker, DatePicker } from "rsuite";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import "../../styles/CommunicationPerformance.css";
// Icons
import {
  Search,
  FilterAlt,
  Settings,
  EmailRounded,
  RestartAltRounded,
  Close,
  InfoOutlined,
} from "@mui/icons-material";
import { Download as DownloadIcon } from "./../../icons/Download";
import DeliveryReport from "./../../components/ui/communication-performance/DeliveryReport";

const cumLogData = [
  {
    id: 1,
    automationId: "NA",
    jobId: "7038755",
    type: "Email",
    name: "Ishaka Gupta",
    toEmail: "ishikagupta@gmail.com",
    cumDate: "20 Jan 22 06:00 PM",
    status: "Delivered",
    action: "",
  },
  {
    id: 2,
    automationId: "NA",
    jobId: "7038756",
    type: "Email",
    name: "Rohit Gupta",
    toEmail: "rohitgupta@gmail.com",
    cumDate: "20 Jan 22 06:00 PM",
    status: "Delivered",
    action: "",
  },
  {
    id: 3,
    automationId: "NA",
    jobId: "7038755",
    type: "Email",
    name: "jack",
    toEmail: "jack111@gmail.com",
    cumDate: "20 Jan 22 06:00 PM",
    status: "Delivered",
    action: "",
  },
  {
    id: 4,
    automationId: "NA",
    jobId: "7038755",
    type: "Email",
    name: "Jone Cena",
    toEmail: "johncena@gmail.com",
    cumDate: "20 Jan 22 06:00 PM",
    status: "Delivered",
    action: "",
  },
  {
    id: 5,
    automationId: "NA",
    jobId: "7038755",
    type: "Email",
    name: "Rahul Singhal",
    toEmail: "rahulsinghal@gmail.com",
    cumDate: "20 Jan 22 06:00 PM",
    status: "Delivered",
    action: "",
  },
  {
    id: 6,
    automationId: "NA",
    jobId: "7038755",
    type: "Email",
    name: "Tommy William",
    toEmail: "tommyywilliam@gmail.com",
    cumDate: "20 Jan 22 06:00 PM",
    status: "Delivered",
    action: "",
  },
  {
    id: 7,
    automationId: "NA",
    jobId: "7038755",
    type: "Email",
    name: "Alison",
    toEmail: "alisonalison11@gmail.com",
    cumDate: "20 Jan 22 06:00 PM",
    status: "Delivered",
    action: "",
  },
  {
    id: 8,
    automationId: "NA",
    jobId: "7038755",
    type: "Email",
    name: "Teena Kumari",
    toEmail: "Teenakumari@gmail.com",
    cumDate: "20 Jan 22 06:00 PM",
    status: "Delivered",
    action: "",
  },
  {
    id: 9,
    automationId: "NA",
    jobId: "7038755",
    type: "Email",
    name: "Sharanya Singh",
    toEmail: "sharanyasingh@gmail.com",
    cumDate: "20 Jan 22 06:00 PM",
    status: "Delivered",
    action: "",
  },
  {
    id: 10,
    automationId: "NA",
    jobId: "7038755",
    type: "Email",
    name: "Shivali",
    toEmail: "shivali2222@gmail.com",
    cumDate: "20 Jan 22 06:00 PM",
    status: "Delivered",
    action: "",
  },
  {
    id: 11,
    automationId: "NA",
    jobId: "7038755",
    type: "Email",
    name: "Khushi Gupta",
    toEmail: "khushigupta@gmail.com",
    cumDate: "20 Jan 22 06:00 PM",
    status: "Delivered",
    action: "",
  },
  {
    id: 12,
    automationId: "NA",
    jobId: "7038755",
    type: "Email",
    name: "Puja Singh",
    toEmail: "pujasingh@gmail.com",
    cumDate: "20 Jan 22 06:00 PM",
    status: "Delivered",
    action: "",
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

function CommunicationLogDetails(props) {
  // Filter Drawer
  const [size, setSize] = useState("xs");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [placement, setPlacement] = useState();

  const handleOpen = (key) => {
    setOpenDrawer(true);
    setPlacement(key);
  };
  // pagination
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  // modal
  const [openModal, setOpenModal] = useState(false);
  const [openModalSms, setOpenModalSms] = useState(false);
  const [openModalWhatsapp, setOpenModalWhatsapp] = useState(false);
  // Action button
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // Delivery Report
  const [deliveryReport, setDeliveryReport] = useState(false);

  // Detailed Report Email Status
  const [emailStatus, setEmailStatus] = useState(false);

  return (
    <Box component="main" className="communication-performance" sx={{ py: 2 }}>
      <Container maxWidth={false}>
        <Grid container>
          <Grid item md={12} sm={12} xs={12}>
            <Box className="appCall_top">
              <Box className="appCalllog">
                <Box component="h5">Communication Logs Detailed Report</Box>
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
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={() => handleOpen("right")}
                    startIcon={<FilterAlt fontSize="small" />}
                  >
                    Filter
                  </Button>
                </Box>
                {/* Filter Drawer */}
                <Drawer
                  size={size}
                  placement={placement}
                  open={openDrawer}
                  onClose={() => setOpenDrawer(false)}
                >
                  <Box className="flt_drawerHeader">
                    <Box className="filterTxt">
                      <Typography variant="h6">Filter By</Typography>
                      <IconButton>
                        <Close onClick={() => setOpenDrawer(false)} />
                      </IconButton>
                    </Box>
                  </Box>

                  <Box className="flt_drawerBody">
                    <Box>
                      <SelectPicker
                        // data={data}
                        size="lg"
                        appearance="default"
                        placeholder="All Forms"
                        style={{ width: "100%", marginBottom: "14px" }}
                      />
                    </Box>
                    <Box>
                      <SelectPicker
                        // data={data}
                        size="lg"
                        appearance="default"
                        placeholder="Medium of Communication"
                        style={{ width: "100%", marginBottom: "14px" }}
                      />
                    </Box>
                    <Box>
                      <SelectPicker
                        // data={data}
                        size="lg"
                        appearance="default"
                        placeholder="Select Template"
                        style={{ width: "100%", marginBottom: "14px" }}
                      />
                    </Box>
                    <Box>
                      <SelectPicker
                        // data={data}
                        size="lg"
                        appearance="default"
                        placeholder="Communication For"
                        style={{ width: "100%", marginBottom: "14px" }}
                      />
                    </Box>
                    <Box>
                      <SelectPicker
                        // data={data}
                        size="lg"
                        appearance="default"
                        placeholder="Nature of Communication"
                        style={{ width: "100%", marginBottom: "14px" }}
                      />
                    </Box>
                    <Box>
                      <SelectPicker
                        // data={data}
                        size="lg"
                        appearance="default"
                        placeholder="Sent By"
                        style={{ width: "100%", marginBottom: "14px" }}
                      />
                    </Box>
                    <Box>
                      <SelectPicker
                        // data={data}
                        size="lg"
                        appearance="default"
                        placeholder="Communication Status"
                        style={{ width: "100%", marginBottom: "14px" }}
                      />
                    </Box>
                    <Box>
                      <DatePicker
                        size="lg"
                        // appearance=""
                        placement="autoVerticalStart"
                        placeholder="Communication Date"
                        style={{ width: "100%" }}
                      />
                    </Box>
                  </Box>

                  <Drawer.Actions component={Card}>
                    <Box className="column_footer">
                      <Button
                        variant="contained"
                        endIcon={<RestartAltRounded fontSize="small" />}
                        onClick={() => setOpenDrawer(false)}
                      >
                        Reset
                      </Button>
                      <Button
                        variant="outlined"
                        onClick={() => setOpenDrawer(false)}
                        appearance="primary"
                      >
                        Save Now
                      </Button>
                    </Box>
                  </Drawer.Actions>
                </Drawer>
              </Box>
            </Box>
            <Box>
              <Card {...props}>
                {emailStatus && (
                  <Box className="emailStats_reports">
                    <Box className="status_box">
                      <Box className="stats_info">
                        <Typography component="span" className="info_txt">
                          Sent
                        </Typography>
                        <Tooltip
                          className="tooltipInfo"
                          title="Total number of email sent, It includes both Activity & Engagement email"
                          placement="top"
                          arrow
                        >
                          <IconButton sx={{ p: 0.6, mt: -0.3 }}>
                            <InfoOutlined sx={{ fontSize: 17 }} />
                          </IconButton>
                        </Tooltip>
                      </Box>
                      <Typography className="stats_count">2703</Typography>
                    </Box>
                    <Box className="status_box">
                      <Box className="stats_info">
                        <Typography component="span" className="info_txt">
                          Delivered
                        </Typography>
                        <Tooltip
                          className="tooltipInfo"
                          title="Total number of email delivered, In case of server error, Inbox full or any other network issue email can be delayed upto 72 hours"
                          placement="top"
                          arrow
                        >
                          <IconButton sx={{ p: 0.6, mt: -0.3 }}>
                            <InfoOutlined sx={{ fontSize: 17 }} />
                          </IconButton>
                        </Tooltip>
                      </Box>
                      <Typography className="stats_count">91.60%</Typography>
                      <Typography className="stats_totCount e-deliver">
                        2476
                      </Typography>
                    </Box>
                    <Box className="status_box">
                      <Box className="stats_info">
                        <Typography component="span" className="info_txt">
                          Unique Open
                        </Typography>
                        <Tooltip
                          className="tooltipInfo"
                          title="Number of unique email Open. It includes open count only against one lead from one campaign."
                          placement="top"
                          arrow
                        >
                          <IconButton sx={{ p: 0.6, mt: -0.3 }}>
                            <InfoOutlined sx={{ fontSize: 17 }} />
                          </IconButton>
                        </Tooltip>
                      </Box>
                      <Typography className="stats_count">10.02%</Typography>
                      <Typography className="stats_totCount e-uniqeOpen">
                        248
                      </Typography>
                    </Box>
                    <Box className="status_box">
                      <Box className="stats_info">
                        <Typography component="span" className="info_txt">
                          Unique Click
                        </Typography>
                        <Tooltip
                          className="tooltipInfo"
                          title="Number of unique link click from email. It includes link click count only once against one lead from one campaign."
                          placement="top"
                          arrow
                        >
                          <IconButton sx={{ p: 0.6, mt: -0.3 }}>
                            <InfoOutlined sx={{ fontSize: 17 }} />
                          </IconButton>
                        </Tooltip>
                      </Box>
                      <Typography className="stats_count">0.57%</Typography>
                      <Typography className="stats_totCount e-uniqeClick">
                        14
                      </Typography>
                    </Box>
                    <Box className="status_box">
                      <Box className="stats_info">
                        <Typography component="span" className="info_txt">
                          Unsubscribe
                        </Typography>
                        <Tooltip
                          className="tooltipInfo"
                          title="Total number of leads who have unsubscribe from email. "
                          placement="top"
                          arrow
                        >
                          <IconButton sx={{ p: 0.6, mt: -0.3 }}>
                            <InfoOutlined sx={{ fontSize: 17 }} />
                          </IconButton>
                        </Tooltip>
                      </Box>
                      <Typography className="stats_count">0.12%</Typography>
                      <Typography className="stats_totCount e-unsubs">
                        3
                      </Typography>
                    </Box>
                    <Box className="status_box">
                      <Box className="stats_info">
                        <Typography component="span" className="info_txt">
                          Failures
                        </Typography>
                        <Tooltip
                          className="tooltipInfo"
                          title="Total number of emails which was not deliverd due to emails being deferred by mail server."
                          placement="top"
                          arrow
                        >
                          <IconButton sx={{ p: 0.6, mt: -0.3 }}>
                            <InfoOutlined sx={{ fontSize: 17 }} />
                          </IconButton>
                        </Tooltip>
                      </Box>
                      <Typography className="stats_count">0%</Typography>
                      <Typography className="stats_totCount e-fail">
                        0
                      </Typography>
                    </Box>
                    <Box className="status_box">
                      <Box className="stats_info">
                        <Typography component="span" className="info_txt">
                          Bounced
                        </Typography>
                        <Tooltip
                          className="tooltipInfo"
                          title="Total number of email which was not delivered due to Bounced."
                          placement="top"
                          arrow
                        >
                          <IconButton sx={{ p: 0.6, mt: -0.3 }}>
                            <InfoOutlined sx={{ fontSize: 17 }} />
                          </IconButton>
                        </Tooltip>
                      </Box>
                      <Typography className="stats_count">0.81%</Typography>
                      <Typography className="stats_totCount e-bounce">
                        22
                      </Typography>
                    </Box>
                    <Box className="status_box">
                      <Box className="stats_info">
                        <Typography component="span" className="info_txt">
                          Dropped
                        </Typography>
                        <Tooltip
                          className="tooltipInfo"
                          title="Total number of email which was not delivered due to Dropped."
                          placement="top"
                          arrow
                        >
                          <IconButton sx={{ p: 0.6, mt: -0.3 }}>
                            <InfoOutlined sx={{ fontSize: 17 }} />
                          </IconButton>
                        </Tooltip>
                      </Box>
                      <Typography className="stats_count">7.58%</Typography>
                      <Typography className="stats_totCount">205</Typography>
                    </Box>
                    <Box className="status_box">
                      <Box className="stats_info">
                        <Typography component="span" className="info_txt">
                          Blocked
                        </Typography>
                        <Tooltip
                          className="tooltipInfo"
                          title="Total number of email which was not delivered due to Blacklist/Blocked."
                          placement="top"
                          arrow
                        >
                          <IconButton sx={{ p: 0.6, mt: -0.3 }}>
                            <InfoOutlined sx={{ fontSize: 17 }} />
                          </IconButton>
                        </Tooltip>
                      </Box>
                      <Typography className="stats_count">0%</Typography>
                      <Typography className="stats_totCount e-block">
                        0
                      </Typography>
                    </Box>
                  </Box>
                )}
                <CardHeader
                  sx={{ flexWrap: "wrap", padding: "18px 16px" }}
                  title="Total 100 Records"
                  action={
                    <Box className="consumption_main">
                      <Box
                        className="consumption_box emailStatus_main"
                        onClick={() => setEmailStatus(!emailStatus)}
                      >
                        <IconButton>
                          <EmailRounded fontSize="small" color="warning" />
                        </IconButton>
                        <Typography
                          variant="body2"
                          color="warning.main"
                          className="e_consumption_txt"
                        >
                          Email Status
                        </Typography>
                      </Box>
                    </Box>
                  }
                />
                <TableContainer>
                  <Table sx={{ minWidth: 700 }}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Automation ID</TableCell>
                        <TableCell>Job ID</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>To</TableCell>
                        <TableCell>Communication Date</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cumLogData
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((cumData, i) => (
                          <TableRow key={i.id}>
                            <TableCell>{cumData.automationId}</TableCell>
                            <TableCell>
                              <Typography>{cumData.jobId}</Typography>
                            </TableCell>
                            <TableCell>{cumData.type}</TableCell>
                            <TableCell>{cumData.name}</TableCell>
                            <TableCell>
                              <Link to="" style={{ textDecoration: "none" }}>
                                <Typography>{cumData.toEmail}</Typography>
                              </Link>
                            </TableCell>
                            <TableCell>{cumData.cumDate}</TableCell>
                            <TableCell>
                              <Typography
                                variant="subtitle2"
                                color="success.main"
                              >
                                {cumData.status}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <IconButton
                                aria-label="more"
                                id="long-button"
                                aria-controls={open ? "long-menu" : undefined}
                                aria-expanded={open ? "true" : undefined}
                                aria-haspopup="true"
                                onClick={handleClick1}
                              >
                                <Settings fontSize="small" />
                              </IconButton>
                              <Menu
                                id="long-menu"
                                MenuListProps={{
                                  "aria-labelledby": "long-button",
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                PaperProps={{
                                  style: {
                                    width: "200px",
                                  },
                                }}
                              >
                                <MenuItem
                                  onClick={() => {
                                    setDeliveryReport(true);
                                    handleClose();
                                  }}
                                >
                                  Delivery Report
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                  Download Report
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                  View Detailed Report
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                  Add Campaign Details
                                </MenuItem>
                              </Menu>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                  {deliveryReport && (
                    <DeliveryReport
                      deliveryReport={deliveryReport}
                      setDeliveryReport={setDeliveryReport}
                    />
                  )}
                </TableContainer>
                <TablePagination
                  component="div"
                  rowsPerPageOptions={[5, 8, 10, 25]}
                  count={cumLogData.length}
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

export default CommunicationLogDetails;
