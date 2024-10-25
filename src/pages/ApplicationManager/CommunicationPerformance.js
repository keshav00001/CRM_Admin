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
  ForumRounded,
  WhatsappRounded,
  RestartAltRounded,
  Close,
} from "@mui/icons-material";
import { Download as DownloadIcon } from "./../../icons/Download";
import ConsumptionModal from "../../components/ui/communication-performance/ConsumptionModal";
import SmsConsumptionModal from "../../components/ui/communication-performance/SmsConsumptionModal";
import WhatsappConsumModal from "../../components/ui/communication-performance/WhatsappConsumModal";
import DeliveryReport from "../../components/ui/communication-performance/DeliveryReport";
import AddCampaignDetails from "../../components/ui/communication-performance/AddCampaignDetails";

const cumLogData = [
  {
    id: 1,
    jobId: "Job#7044201",
    preview: "O.P. Jindal Global University",
    email: "Email",
    templateName: "JGBS-UG welcome email 2022",
    status: "Complete",
    callStatus: "Answered",
    cumStartDate: "20 Jan, 22 2:05 PM",
    listName: 1,
    segmentName: "-",
    targetAudience: "1",
    action: "",
  },
  {
    id: 2,
    jobId: "Job#7044202",
    preview: "O.P. Jindal Global University",
    email: "Email",
    templateName: "JGBS-UG welcome email 2022",
    status: "Complete",
    callStatus: "Answered",
    cumStartDate: "20 Jan, 22 2:05 PM",
    listName: 1,
    segmentName: "-",
    targetAudience: "1",
    action: "",
  },
  {
    id: 3,
    jobId: "Job#7044203",
    preview: "O.P. Jindal Global University",
    email: "Email",
    templateName: "JGBS-UG welcome email 2022",
    status: "Complete",
    callStatus: "Answered",
    cumStartDate: "20 Jan, 22 2:05 PM",
    listName: 1,
    segmentName: "-",
    targetAudience: "1",
    action: "",
  },
  {
    id: 4,
    jobId: "Job#7044204",
    preview: "O.P. Jindal Global University",
    email: "Email",
    templateName: "JGBS-UG welcome email 2022",
    status: "Complete",
    callStatus: "Answered",
    cumStartDate: "20 Jan, 22 2:05 PM",
    listName: 1,
    segmentName: "-",
    targetAudience: "1",
    action: "",
  },
  {
    id: 5,
    jobId: "Job#7044205",
    preview: "O.P. Jindal Global University",
    email: "Email",
    templateName: "JGBS-UG welcome email 2022",
    status: "Complete",
    callStatus: "Answered",
    cumStartDate: "20 Jan, 22 2:05 PM",
    listName: 1,
    segmentName: "-",
    targetAudience: "1",
    action: "",
  },
  {
    id: 6,
    jobId: "Job#7044206",
    preview: "O.P. Jindal Global University",
    email: "Email",
    templateName: "JGBS-UG welcome email 2022",
    status: "Complete",
    callStatus: "Answered",
    cumStartDate: "20 Jan, 22 2:05 PM",
    listName: 1,
    segmentName: "-",
    targetAudience: "1",
    action: "",
  },
  {
    id: 7,
    jobId: "Job#7044207",
    preview: "O.P. Jindal Global University",
    email: "Email",
    templateName: "JGBS-UG welcome email 2022",
    status: "Complete",
    callStatus: "Answered",
    cumStartDate: "20 Jan, 22 2:05 PM",
    listName: 1,
    segmentName: "-",
    targetAudience: "1",
    action: "",
  },
  {
    id: 8,
    jobId: "Job#7044208",
    preview: "O.P. Jindal Global University",
    email: "Email",
    templateName: "JGBS-UG welcome email 2022",
    status: "Incomplete",
    callStatus: "Answered",
    cumStartDate: "20 Jan, 22 2:05 PM",
    listName: 1,
    segmentName: "-",
    targetAudience: "1",
    action: "",
  },
  {
    id: 9,
    jobId: "Job#7044209",
    preview: "O.P. Jindal Global University",
    email: "Email",
    templateName: "JGBS-UG welcome email 2022",
    status: "Complete",
    callStatus: "Answered",
    cumStartDate: "20 Jan, 22 2:05 PM",
    listName: 1,
    segmentName: "-",
    targetAudience: "1",
    action: "",
  },
  {
    id: 10,
    jobId: "Job#7044210",
    preview: "O.P. Jindal Global University",
    email: "Email",
    templateName: "JGBS-UG welcome email 2022",
    status: "Incomplete",
    callStatus: "Answered",
    cumStartDate: "20 Jan, 22 2:05 PM",
    listName: 1,
    segmentName: "-",
    targetAudience: "1",
    action: "",
  },
  {
    id: 11,
    jobId: "Job#7044211",
    preview: "O.P. Jindal Global University",
    email: "Email",
    templateName: "JGBS-UG welcome email 2022",
    status: "Complete",
    callStatus: "Answered",
    cumStartDate: "20 Jan, 22 2:05 PM",
    listName: 1,
    segmentName: "-",
    targetAudience: "1",
    action: "",
  },
  {
    id: 12,
    jobId: "Job#7044212",
    preview: "O.P. Jindal Global University",
    email: "Email",
    templateName: "JGBS-UG welcome email 2022",
    status: "Incomplete",
    callStatus: "Answered",
    cumStartDate: "20 Jan, 22 2:05 PM",
    listName: 1,
    segmentName: "-",
    targetAudience: "1",
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

function CommunicationPerformance(props) {
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
  // Add Campaign Details
  const [addCampaign, setAddCampaign] = useState(false);

  return (
    <Box component="main" className="communication-performance" sx={{ py: 2 }}>
      <Container maxWidth={false}>
        <Grid container>
          <Grid item md={12} sm={12} xs={12}>
            {/* ------- Header Section----- */}
            <Box className="appCall_top">
              <Box className="appCalllog">
                <Box component="h5">Manage Communication Logs</Box>
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
                {/* ----end of drawer------ */}
              </Box>
            </Box>
            {/* ---- end of header section----- */}
            <Box>
              <Card {...props}>
                {/*--------- Email/SMS/whatsapp Consumption------- */}
                <CardHeader
                  sx={{ flexWrap: "wrap" }}
                  title="Total 100 Records"
                  action={
                    <Box className="consumption_main">
                      <Box
                        className="consumption_box"
                        onClick={() => setOpenModal(true)}
                      >
                        <IconButton>
                          <EmailRounded fontSize="small" color="warning" />
                        </IconButton>
                        <Typography
                          variant="body2"
                          color="warning.main"
                          className="e_consumption_txt"
                        >
                          Email Consumption
                        </Typography>
                      </Box>
                      <Box>
                        {openModal && (
                          <ConsumptionModal
                            openModal={openModal}
                            setOpenModal={setOpenModal}
                          />
                        )}
                      </Box>
                      <Box
                        className="consumption_box"
                        onClick={() => setOpenModalSms(true)}
                      >
                        <IconButton>
                          <ForumRounded fontSize="small" color="primary" />
                        </IconButton>
                        <Typography
                          variant="body2"
                          color="primary"
                          className="s_consumption_txt"
                        >
                          SMS Consumption
                        </Typography>
                      </Box>
                      <Box>
                        {openModalSms && (
                          <SmsConsumptionModal
                            openModalSms={openModalSms}
                            setOpenModalSms={setOpenModalSms}
                          />
                        )}
                      </Box>
                      <Box
                        className="consumption_box"
                        onClick={() => setOpenModalWhatsapp(true)}
                      >
                        <IconButton>
                          <WhatsappRounded fontSize="small" color="success" />
                        </IconButton>
                        <Typography
                          variant="body2"
                          color="success.main"
                          className="wh_consumption_txt"
                        >
                          Whatsapp Consumption
                        </Typography>
                      </Box>
                      <Box>
                        {openModalWhatsapp && (
                          <WhatsappConsumModal
                            openModalWhatsapp={openModalWhatsapp}
                            setOpenModalWhatsapp={setOpenModalWhatsapp}
                          />
                        )}
                      </Box>
                    </Box>
                  }
                />

                <TableContainer className="communicationLogTable">
                  <Table sx={{ minWidth: 700 }}>
                    <TableHead>
                      <TableRow>
                        <TableCell>&nbsp;</TableCell>
                        <TableCell>Job ID</TableCell>
                        <TableCell>Preview</TableCell>
                        <TableCell>Template Name</TableCell>
                        <TableCell> Status</TableCell>
                        <TableCell>Communication Start Date</TableCell>
                        <TableCell>List Name</TableCell>
                        <TableCell>Segment Name</TableCell>
                        <TableCell>Targeted Audience</TableCell>
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
                            <TableCell>
                              <IconButton>
                                <EmailRounded fontSize="small" />
                              </IconButton>
                            </TableCell>
                            <TableCell align="center">
                              <Link to="">
                                <Typography
                                  variant="body2"
                                  sx={{ fontWeight: "600" }}
                                >
                                  {cumData.jobId}
                                </Typography>
                              </Link>
                            </TableCell>
                            <TableCell align="center">
                              <Link to="" style={{ textDecoration: "none" }}>
                                <Typography
                                  variant="body2"
                                  className="emailPreview"
                                >
                                  {cumData.email}
                                </Typography>
                              </Link>
                              <Typography variant="body2" color="textSecondary">
                                {cumData.preview}
                              </Typography>
                            </TableCell>
                            <TableCell align="center">
                              {cumData.templateName}
                            </TableCell>
                            <TableCell align="center">
                              <Typography
                                variant="subtitle2"
                                color="success.main"
                              >
                                {cumData.status}
                              </Typography>
                            </TableCell>
                            <TableCell align="center">
                              {cumData.cumStartDate}
                            </TableCell>
                            <TableCell align="center">
                              {cumData.listName}
                            </TableCell>
                            <TableCell align="center">
                              {cumData.segmentName}
                            </TableCell>
                            <TableCell align="center">
                              {cumData.targetAudience}
                            </TableCell>
                            <TableCell align="center">
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
                                  <Link
                                    to="/communication-logs-details-report"
                                    style={{ textDecoration: "none" }}
                                  >
                                    <Typography>
                                      View Detailed Report
                                    </Typography>
                                  </Link>
                                </MenuItem>
                                <MenuItem
                                  onClick={() => {
                                    setAddCampaign(true);
                                    handleClose();
                                  }}
                                >
                                  Add Campaign Details
                                </MenuItem>
                              </Menu>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                  {/*------- Delivery Report component----- */}
                  {deliveryReport && (
                    <DeliveryReport
                      deliveryReport={deliveryReport}
                      setDeliveryReport={setDeliveryReport}
                    />
                  )}
                  {/* -------End of delivery reports---------- */}

                  {/*------- Add Campaign details component----- */}
                  {addCampaign && (
                    <AddCampaignDetails
                      addCampaign={addCampaign}
                      setAddCampaign={setAddCampaign}
                    />
                  )}
                  {/* -------End of add campaign ---------- */}
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

export default CommunicationPerformance;
