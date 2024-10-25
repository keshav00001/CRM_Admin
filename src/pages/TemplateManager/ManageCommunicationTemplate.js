import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Checkbox,
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
  Divider,
  Tab,
  Popover,
} from "@mui/material";
import { Drawer, InputGroup, Input } from "rsuite";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
// Icons
import {
  Search,
  FilterAlt,
  Settings,
  AddCircle,
  MailOutline,
  ForumOutlined,
  WhatsappOutlined,
  CloseRounded,
} from "@mui/icons-material";
import { ChevronDown as ChevronDownIcon } from "./../../icons/ChevronDown";
// import Loader from "./../../components/loader/Loader";

const CommunicationData = [
  {
    id: 1,
    TemName: "Countering China's 'infowar': India must the",
    SubLine: "Countering China's 'infowar': Indi...",
    email: "email",
    applicableFor: "Applications",
    autoJobId: "Campaign(s)-1",
    userList: "6 User(s)",
    status: "Enabled",
    action: "",
  },
  {
    id: 2,
    TemName: "Email for Admin Mettl 2022 MADLB",
    SubLine: "Entrance Exam Date 22nd Janua...",
    email: "email",
    applicableFor: "Applications",
    autoJobId: "-",
    userList: "5 User(s)",
    status: "Disabled",
    action: "",
  },
  {
    id: 3,
    TemName: "B.A Political Science-Public Annoucement",
    SubLine: "Jindal School of International Aff...",
    email: "email",
    applicableFor: "Leads",
    autoJobId: "Campaign(s)-3",
    userList: "3 User(s)",
    status: "Enabled",
    action: "",
  },
  {
    id: 4,
    TemName: "B.A Political Science-Public Annoucement",
    SubLine: "Jindal School of International Aff...",
    email: "email",
    applicableFor: "Applications",
    autoJobId: "Campaign(s)-30",
    userList: "3 User(s)",
    status: "Disabled",
    action: "",
  },
  {
    id: 5,
    TemName: "MA DLB Whtsapp info ",
    SubLine: "",
    email: "WhatsApp",
    applicableFor: "Applications",
    autoJobId: "Campaign(s)-1",
    userList: "4 User(s)",
    status: "Enabled",
    action: "",
  },
  {
    id: 6,
    TemName: "MA DLB Whtsapp info - 1639553634",
    SubLine: "",
    email: "WhatsApp",
    applicableFor: "Leads",
    autoJobId: "-",
    userList: "4 User(s)",
    status: "Disabled",
    action: "",
  },
  {
    id: 7,
    TemName: "MA DLB Whtsapp MSG - 1639555564",
    SubLine: "Countering China's 'infowar': Indi...",
    email: "WhatsApp",
    applicableFor: "Leads",
    autoJobId: "Campaign(s)-1",
    userList: "4 User(s)",
    status: "Enabled",
    action: "",
  },
  {
    id: 8,
    TemName: "MA DLB Whtsapp info ",
    SubLine: "Jindal School of International Aff...",
    email: "WhatsApp",
    applicableFor: "Applications",
    autoJobId: "-",
    userList: "4 User(s)",
    status: "Disabled",
    action: "",
  },
  {
    id: 9,
    TemName: "MA DLB Whtsapp info - 1639553634",
    SubLine: "",
    email: "WhatsApp",
    applicableFor: "Leads",
    autoJobId: "Campaign(s)-1",
    userList: "4 User(s)",
    status: "Enabled",
    action: "",
  },
  {
    id: 10,
    TemName: "MA DLB Whtsapp MSG - 1639555564",
    SubLine: "Jindal School of International Aff...",
    email: "WhatsApp",
    applicableFor: "Leads",
    autoJobId: "-",
    userList: "4 User(s)",
    status: "Disabled",
    action: "",
  },
  {
    id: 11,
    TemName: "Countering China's 'infowar': India must the",
    SubLine: "Countering China's 'infowar': Indi...",
    email: "email",
    applicableFor: "Applications",
    autoJobId: "Campaign(s)-1",
    userList: "6 User(s)",
    status: "Enabled",
    action: "",
  },
  {
    id: 12,
    TemName: "Countering China's 'infowar': India must the",
    SubLine: "Countering China's 'infowar': Indi...",
    email: "email",
    applicableFor: "Applications",
    autoJobId: "Campaign(s)-1",
    userList: "6 User(s)",
    status: "Enabled",
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

function ManageCommunicationTemplate(props) {
  // View version History
  const [size, setSize] = useState("sm");
  const [backdrop, setBackdrop] = useState(true);
  const [openVersion, setOpenVersion] = useState(false);
  // Template Preview
  const [previewSize, setPreviewSize] = useState("sm");
  const [backdrop2, setBackdrop2] = useState(true);
  const [templatePreviewOpen, setTemplatePreviewOpen] = useState(false);

  // Tabs
  const [recordsValue, setRecordsValue] = useState("1");

  const recordsHandleChange = (event, newValue) => {
    setRecordsValue(newValue);
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

  // Table Action button
  const [anchorE2, setAnchorE2] = useState(null);
  const open = Boolean(anchorE2);
  const handleClick1 = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorE2(null);
  };

  // create template button
  const [anchorE3, setAnchorE3] = useState(null);
  const open2 = Boolean(anchorE3);
  const createTemplateHandleClick = (event) => {
    setAnchorE3(event.currentTarget);
  };
  const createTemplateHandleClose = () => {
    setAnchorE3(null);
  };
  // Action Button Download report
  const [actionDownload, setActionDownload] = useState(null);
  const actionOpen = Boolean(actionDownload);
  const handleClickAction = (event) => {
    setActionDownload(event.currentTarget);
  };
  const handleCloseAction = () => {
    setActionDownload(null);
  };
  // User Popover
  const [userView, setUserView] = useState(null);
  const usersHandleClick = (event) => {
    setUserView(event.currentTarget);
  };
  const usersHandleClose = () => {
    setUserView(null);
  };
  const openUsers = Boolean(userView);
  const id = openUsers ? "simple-popover" : undefined;

  return (
    <Box component="main" className="communication-performance" sx={{ py: 2 }}>
      <Container maxWidth={false}>
        <Grid container>
          <Grid item md={12} sm={12} xs={12}>
            {/* ------- Header Section----- */}
            <Box className="appCall_top">
              <Box className="appCalllog">
                <Box component="h5">Manage Communication Template</Box>
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

                <Box
                  sx={{
                    marginLeft: "12px",
                  }}
                >
                  <Button
                    variant="contained"
                    startIcon={<FilterAlt fontSize="small" />}
                  >
                    Filter
                  </Button>
                </Box>

                <Box
                  sx={{
                    marginLeft: "12px",
                  }}
                >
                  <Button
                    variant="contained"
                    startIcon={<AddCircle fontSize="small" />}
                    endIcon={<ChevronDownIcon fontSize="small" />}
                    id="basic-button"
                    aria-controls={open2 ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open2 ? "true" : undefined}
                    onClick={createTemplateHandleClick}
                  >
                    Create Template
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorE3}
                    open={open2}
                    onClose={createTemplateHandleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <Link to="/email-template-builder">
                      <MenuItem onClick={createTemplateHandleClose}>
                        <MailOutline sx={{ mr: "10px" }} fontSize="small" />
                        Email
                      </MenuItem>
                    </Link>
                    <Link to="/sms-template">
                      <MenuItem onClick={createTemplateHandleClose}>
                        <ForumOutlined sx={{ mr: "10px" }} fontSize="small" />
                        SMS
                      </MenuItem>
                    </Link>
                    <Link to="/whatsApp-template">
                      <MenuItem onClick={createTemplateHandleClose}>
                        <WhatsappOutlined
                          sx={{ mr: "10px" }}
                          fontSize="small"
                        />
                        WhatsApp
                      </MenuItem>
                    </Link>
                  </Menu>
                </Box>
              </Box>
            </Box>
            {/* ---- end of header section----- */}
            <Box>
              <Card {...props}>
                <CardHeader
                  sx={{ flexWrap: "wrap" }}
                  title="Total 100 Records"
                  action={
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <Button
                        endIcon={<ChevronDownIcon fontSize="small" />}
                        sx={{ m: 1 }}
                        variant="outlined"
                        id="ActionDownload"
                        aria-controls={
                          actionOpen ? "action-download-menu" : undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={actionOpen ? "true" : undefined}
                        onClick={handleClickAction}
                      >
                        Actions
                      </Button>
                      <Menu
                        id="action-download-menu"
                        anchorEl={actionDownload}
                        open={actionOpen}
                        onClose={handleCloseAction}
                        MenuListProps={{
                          "aria-labelledby": "ActionDownload",
                        }}
                      >
                        <MenuItem onClick={handleCloseAction}>
                          Download Template
                        </MenuItem>
                        <MenuItem onClick={handleCloseAction}>
                          Assign User(s) to Template
                        </MenuItem>
                      </Menu>
                    </Box>
                  }
                />
                {/* -----Tabs----- */}
                <Box className="records-wrapper">
                  <TabContext value={recordsValue}>
                    <Box>
                      <TabList
                        onChange={recordsHandleChange}
                        aria-label="recordsTabs"
                      >
                        <Tab
                          label="View All"
                          value="1"
                          sx={{ fontWeight: "500" }}
                        />
                        <Tab
                          label="Active"
                          value="2"
                          sx={{ fontWeight: "500" }}
                        />
                        <Tab
                          label="InActive"
                          value="3"
                          sx={{ fontWeight: "500" }}
                        />
                        <Tab
                          label="Draft"
                          value="4"
                          sx={{ fontWeight: "500" }}
                        />
                      </TabList>
                    </Box>
                    <TabPanel value="1" sx={{ p: 0 }}>
                      <TableContainer className="manage-communicationTable">
                        <Table sx={{ minWidth: 700 }}>
                          <TableHead>
                            <TableRow>
                              <TableCell>
                                <Checkbox />
                              </TableCell>
                              <TableCell>Template Name</TableCell>
                              <TableCell>Subject Line</TableCell>
                              <TableCell>Campaign Type</TableCell>
                              <TableCell> Applicable For</TableCell>
                              <TableCell>Automation Job Id</TableCell>
                              <TableCell>User(s) Lists</TableCell>
                              <TableCell>Status</TableCell>
                              <TableCell>Action</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {CommunicationData.slice(
                              page * rowsPerPage,
                              page * rowsPerPage + rowsPerPage
                            ).map((cumData, i) => (
                              <TableRow key={i.id}>
                                <TableCell>
                                  <Checkbox />
                                </TableCell>
                                <TableCell>{cumData.TemName}</TableCell>
                                <TableCell>{cumData.SubLine}</TableCell>
                                <TableCell sx={{ textTransform: "uppercase" }}>
                                  {cumData.email}
                                </TableCell>
                                <TableCell>{cumData.applicableFor}</TableCell>
                                <TableCell>{cumData.autoJobId}</TableCell>
                                <TableCell>
                                  <Typography
                                    sx={{ cursor: "pointer" }}
                                    variant="subtitle2"
                                    color="success.main"
                                    aria-describedby={id}
                                    onClick={usersHandleClick}
                                  >
                                    {cumData.userList}
                                  </Typography>
                                  <Popover
                                    id={id}
                                    open={openUsers}
                                    anchorEl={userView}
                                    onClose={usersHandleClose}
                                    anchorOrigin={{
                                      vertical: "center",
                                      horizontal: "left",
                                    }}
                                    transformOrigin={{
                                      vertical: "center",
                                      horizontal: "right",
                                    }}
                                    arrow
                                  >
                                    <Box sx={{ p: 1 }}>
                                      <Typography variant="body2" component="p">
                                        1. Amrita Mishra (Counsellor)
                                      </Typography>
                                      <Typography variant="body2" component="p">
                                        2. Chetna (Counsellor)
                                      </Typography>
                                      <Typography variant="body2" component="p">
                                        3. Deepa Mishra (College Super Admin )
                                      </Typography>
                                      <Typography variant="body2" component="p">
                                        4. Harsh Ranjan Sinha (Counsellor)
                                      </Typography>
                                      <Typography variant="body2" component="p">
                                        5. Mansi Sinha (Counsellor)
                                      </Typography>
                                      <Typography variant="body2" component="p">
                                        6. Tanushree (Counsellor)
                                      </Typography>
                                    </Box>
                                  </Popover>
                                </TableCell>
                                <TableCell>
                                  <Typography
                                    color={
                                      cumData.status === "Enabled"
                                        ? "success.main"
                                        : "error"
                                    }
                                  >
                                    {cumData.status}
                                  </Typography>
                                </TableCell>

                                <TableCell align="center">
                                  <IconButton
                                    aria-label="more"
                                    id="long-button"
                                    aria-controls={
                                      open ? "long-menu" : undefined
                                    }
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
                                    anchorEl={anchorE2}
                                    open={open}
                                    onClose={handleClose}
                                    PaperProps={{
                                      style: {
                                        width: "200px",
                                      },
                                    }}
                                  >
                                    <MenuItem onClick={handleClose}>
                                      Edit
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                      Duplicate
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                      Preview & Test
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                      Disable
                                    </MenuItem>
                                    <MenuItem
                                      onClick={() => {
                                        setOpenVersion(true);
                                        handleClose();
                                      }}
                                    >
                                      View Version History
                                    </MenuItem>
                                  </Menu>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </TabPanel>
                    <TabPanel value="2" sx={{ p: 1 }}>
                      Active
                    </TabPanel>
                    <TabPanel value="3" sx={{ p: 1 }}>
                      InActive
                    </TabPanel>
                    <TabPanel value="4" sx={{ p: 1 }}>
                      Draft
                    </TabPanel>
                  </TabContext>
                </Box>

                <TablePagination
                  component="div"
                  rowsPerPageOptions={[5, 8, 10, 25]}
                  count={CommunicationData.length}
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
      {/*----------------View Version History Drawer------------ */}
      <Drawer
        size={size}
        backdrop={backdrop}
        open={openVersion}
        onClose={() => setOpenVersion(false)}
      >
        <Box className="drawer-header" component={Card}>
          <Box className="d_title">View Version History</Box>
          <Box className="">
            <Typography component="span" onClick={() => setOpenVersion(false)}>
              <IconButton>
                <CloseRounded />
              </IconButton>
            </Typography>
          </Box>
        </Box>
        <Box
          className="drawer-body"
          style={{ padding: "16px", maxWidth: "100%" }}
        >
          <TableContainer className="version-history">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Version</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Created By</TableCell>
                  <TableCell>Preview</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>5</TableCell>
                  <TableCell>10/01/2022, 02:28:45 PM</TableCell>
                  <TableCell>Chetna</TableCell>
                  <TableCell>
                    <Typography
                      component="span"
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        setTemplatePreviewOpen(true);
                        setOpenVersion(false);
                      }}
                    >
                      Preview
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>4</TableCell>
                  <TableCell>10/01/2022, 02:28:45 PM</TableCell>
                  <TableCell>Chetna</TableCell>
                  <TableCell>
                    <Typography
                      component="span"
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        setTemplatePreviewOpen(true);
                        setOpenVersion(false);
                      }}
                    >
                      Preview
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell>10/01/2022, 02:28:45 PM</TableCell>
                  <TableCell>Chetna</TableCell>
                  <TableCell>
                    <Typography
                      component="span"
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        setTemplatePreviewOpen(true);
                        setOpenVersion(false);
                      }}
                    >
                      Preview
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>10/01/2022, 02:28:45 PM</TableCell>
                  <TableCell>Chetna</TableCell>
                  <TableCell>
                    <Typography
                      component="span"
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        setTemplatePreviewOpen(true);
                        setOpenVersion(false);
                      }}
                    >
                      Preview
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>10/01/2022, 02:28:45 PM</TableCell>
                  <TableCell>Chetna</TableCell>
                  <TableCell>
                    <Typography
                      component="span"
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        setTemplatePreviewOpen(true);
                        setOpenVersion(false);
                      }}
                    >
                      Preview
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Drawer>
      {/* ----------Template Preview---------- */}
      <Drawer
        size={previewSize}
        backdrop={backdrop2}
        open={templatePreviewOpen}
        onClose={() => setTemplatePreviewOpen(false)}
      >
        <Box className="drawer-header" component={Card}>
          <Box className="d_title">View Version History</Box>
          <Box className="">
            <Typography
              component="span"
              onClick={() => setTemplatePreviewOpen(false)}
            >
              <IconButton>
                <CloseRounded />
              </IconButton>
            </Typography>
          </Box>
        </Box>
        <Box
          className="drawer-body"
          style={{ padding: "16px", maxWidth: "100%" }}
        >
          <Box className="previewBodyContent">This is Content Area</Box>
        </Box>
      </Drawer>
    </Box>
  );
}

export default ManageCommunicationTemplate;
