import React, { useEffect } from "react";

import {
  Box,
  Collapse,
  Divider,
  Drawer,
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  useMediaQuery,
} from "@mui/material";
import "./Sidebar.js";

import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import {
  Settings,
  StackedBarChartOutlined,
  FileCopyOutlined,
  ManageAccountsOutlined,
  CampaignOutlined,
  DisplaySettingsOutlined,
  DvrOutlined,
  ContactsOutlined,
  QueryStatsOutlined,
  AccountTreeOutlined,
  ManageSearchOutlined,
  Lock,
} from "@mui/icons-material";

export default function Sidebar(props) {
  const { open, onClose, width, fixed } = props;

  const [opened, setOpened] = React.useState(true);
  const [leadManager, setLeadManager] = React.useState(true);
  const [applicationFormOpened, setApplicationFormOpened] =
    React.useState(true);
  const [campManager, setCampManager] = React.useState(true);
  const [userControlAccess, setUserControlAccess] = React.useState(true);
  const [formDeskOpen, setFormDeskOpen] = React.useState(true);
  const [applicationManegerOpen, setApplicationManegerOpen] =
    React.useState(true);
  const [marketing, setMarketing] = React.useState(true);
  const [queryManagerOpen, setQueryManagerOpen] = React.useState(true);
  const [reportOpen, setReportOpen] = React.useState(true);
  const [templateOpen, setTemplateOpen] = React.useState(true);
  const [settingsOpen, setSettingsOpen] = React.useState(true);
  const [loginOpen, setLoginOpen] = React.useState(true);

  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(() => {
    if (open) {
      return onClose?.();
    }
  }, []);

  const content = (
    <SimpleBar style={{ maxHeight: "100%" }}>
      <Box sx={{ height: "100%" }}>
        <div>
          {/* ----Dashboard------ */}
          <List>
            <ListItemButton onClick={() => setOpened(!opened)}>
              <ListItemIcon sx={{ pr: 0, minWidth: 44 }}>
                <GridViewOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#edeef0",
                }}
                primary="Dashboard"
              />
              {opened ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Box sx={{ backgroundColor: "#0f1522" }}>
              <Collapse in={!opened} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link to="/" onClick={onClose}>
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="Admin Dashboard"
                      />
                    </ListItemButton>
                  </Link>

                  <Link to="/traffic-dashboard">
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="Traffic Dashboard"
                      />
                    </ListItemButton>
                  </Link>

                  <Link to="/counsellor-dashboard">
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="Counsellor Dashboard"
                      />
                    </ListItemButton>
                  </Link>

                  <Link to="/benchmarking-dashboard">
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="Benchmarking Dashboard"
                      />
                    </ListItemButton>
                  </Link>

                  <Link to="/trend-analysis">
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="Trend Analysis"
                      />
                    </ListItemButton>
                  </Link>

                  <Link to="/student-quality-index">
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="Student Quality Index"
                      />
                    </ListItemButton>
                  </Link>
                </List>
              </Collapse>
            </Box>
            <Divider light />
          </List>

          {/* Application form */}
          <List>
            <ListItemButton
              onClick={() => setApplicationFormOpened(!applicationFormOpened)}
            >
              <ListItemIcon sx={{ pr: 0, minWidth: 44 }}>
                <FileCopyOutlined />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#edeef0",
                }}
                primary="Application Forms"
              />
              {applicationFormOpened ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Box sx={{ backgroundColor: "#0f1522" }}>
              <Collapse
                in={!applicationFormOpened}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  <Link to="/in-app-call-logs" onClick={onClose}>
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="In-App Call Logs"
                      />
                    </ListItemButton>
                  </Link>
                </List>
              </Collapse>
            </Box>
            <Divider light />
          </List>
          {/*-------Lead Manager----- */}
          <List>
            <ListItemButton onClick={() => setLeadManager(!leadManager)}>
              <ListItemIcon sx={{ pr: 0, minWidth: 44 }}>
                <ManageAccountsOutlined />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#edeef0",
                }}
                primary="Lead Manager"
              />
              {leadManager ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Box sx={{ backgroundColor: "#0f1522" }}>
              <Collapse in={!leadManager} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link to="/userProfile" onClick={onClose}>
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="User Profile"
                      />
                    </ListItemButton>
                  </Link>
                  <Link to="/scoring" onClick={onClose}>
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="Scoring"
                      />
                    </ListItemButton>
                  </Link>
                </List>
              </Collapse>
            </Box>
            <Divider light />
          </List>

          {/* --Campaign Manager---- */}
          <List>
            <ListItemButton onClick={() => setCampManager(!campManager)}>
              <ListItemIcon sx={{ pr: 0, minWidth: 44 }}>
                <CampaignOutlined />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#edeef0",
                }}
                primary="Campaign Manager"
              />
              {campManager ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Box sx={{ backgroundColor: "#0f1522" }}>
              <Collapse in={!campManager} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link to="/campaign-manager" onClick={onClose}>
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="Campaign Manager"
                      />
                    </ListItemButton>
                  </Link>
                </List>
              </Collapse>
            </Box>
            <Divider light />
          </List>
          {/* -----User Access Control----- */}
          <List>
            <ListItemButton
              onClick={() => setUserControlAccess(!userControlAccess)}
            >
              <ListItemIcon sx={{ pr: 0, minWidth: 44 }}>
                <DisplaySettingsOutlined />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#edeef0",
                }}
                primary="User Access Control"
              />
              {userControlAccess ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Box sx={{ backgroundColor: "#0f1522" }}>
              <Collapse in={!userControlAccess} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link to="/users/user-manager">
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="User Manager"
                      />
                    </ListItemButton>
                  </Link>
                  <Link to="/reports/download-request-list">
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="Download Request List"
                      />
                    </ListItemButton>
                  </Link>
                  <Link to="/users/manage-sessions">
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="Manage Sessions"
                      />
                    </ListItemButton>
                  </Link>
                  <Link to="/users/activity">
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="Users Activity"
                      />
                    </ListItemButton>
                  </Link>
                  <Link to="/client-registration">
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="Client Registration"
                      />
                    </ListItemButton>
                  </Link>
                </List>
              </Collapse>
            </Box>
            <Divider light />
          </List>
          {/* ----Form Desk----- */}
          <List>
            <ListItemButton onClick={() => setFormDeskOpen(!formDeskOpen)}>
              <ListItemIcon sx={{ pr: 0, minWidth: 44 }}>
                <DvrOutlined />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#edeef0",
                }}
                primary="Form Desk"
              />
              {formDeskOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Box sx={{ backgroundColor: "#0f1522" }}>
              <Collapse in={!formDeskOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link to="/form-manager">
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="Document Listing"
                      />
                    </ListItemButton>
                  </Link>
                  <Link to="/manage-forms">
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="Manage Forms"
                      />
                    </ListItemButton>
                  </Link>
                  <Link to="/manage-documents">
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="Manage Documents"
                      />
                    </ListItemButton>
                  </Link>
                  <Link to="/manage-exam">
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="Manage Exam"
                      />
                    </ListItemButton>
                  </Link>
                </List>
              </Collapse>
            </Box>
            <Divider light />
          </List>
          {/* -----Application Manager------ */}
          <List>
            <ListItemButton
              onClick={() => setApplicationManegerOpen(!applicationManegerOpen)}
            >
              <ListItemIcon sx={{ pr: 0, minWidth: 44 }}>
                <ContactsOutlined />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#edeef0",
                }}
                primary="Application Manager"
              />
              {applicationManegerOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Box sx={{ backgroundColor: "#0f1522" }}>
              <Collapse
                in={!applicationManegerOpen}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  <Link to="/applications">
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="Applications"
                      />
                    </ListItemButton>
                  </Link>
                  <Link to="/application-manager">
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="Manage Applications"
                      />
                    </ListItemButton>
                  </Link>
                  <Link to="/communication-performance">
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="Communication Logs"
                      />
                    </ListItemButton>
                  </Link>
                </List>
              </Collapse>
            </Box>
            <Divider light />
          </List>
          {/* -----Marketing------ */}
          <List>
            <ListItemButton onClick={() => setMarketing(!marketing)}>
              <ListItemIcon sx={{ pr: 0, minWidth: 44 }}>
                <StackedBarChartOutlined />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#edeef0",
                }}
                primary="Marketing"
              />
              {marketing ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Box sx={{ backgroundColor: "#0f1522" }}>
              <Collapse in={!marketing} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link to="/marketing">
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="Marketing"
                      />
                    </ListItemButton>
                  </Link>
                </List>
              </Collapse>
            </Box>
            <Divider light />
          </List>
          {/* -----Query manager------ */}
          <List>
            <ListItemButton
              onClick={() => setQueryManagerOpen(!queryManagerOpen)}
            >
              <ListItemIcon sx={{ pr: 0, minWidth: 44 }}>
                <QueryStatsOutlined />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#edeef0",
                }}
                primary="Query manager"
              />
              {queryManagerOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Box sx={{ backgroundColor: "#0f1522" }}>
              <Collapse in={!queryManagerOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link to="/query-manager">
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="Query manager"
                      />
                    </ListItemButton>
                  </Link>
                </List>
              </Collapse>
            </Box>
            <Divider light />
          </List>
          {/* -----Reports and Analytics------ */}
          <List>
            <ListItemButton onClick={() => setReportOpen(!reportOpen)}>
              <ListItemIcon sx={{ pr: 0, minWidth: 44 }}>
                <AccountTreeOutlined />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#edeef0",
                }}
                primary="Reports and Analytics"
              />
              {reportOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Box sx={{ backgroundColor: "#0f1522" }}>
              <Collapse in={!reportOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link to="/reports-analytics">
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="reports"
                      />
                    </ListItemButton>
                  </Link>
                </List>
              </Collapse>
            </Box>
            <Divider light />
          </List>
          {/* -----Template Manager------ */}
          <List>
            <ListItemButton onClick={() => setTemplateOpen(!templateOpen)}>
              <ListItemIcon sx={{ pr: 0, minWidth: 44 }}>
                <ManageSearchOutlined />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#edeef0",
                }}
                primary="Template Manager"
              />
              {templateOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Box sx={{ backgroundColor: "#0f1522" }}>
              <Collapse in={!templateOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link to="/create-template">
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="Create Template"
                      />
                    </ListItemButton>
                  </Link>
                  <Link to="/manage-template">
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="Manage Template"
                      />
                    </ListItemButton>
                  </Link>
                  <Link to="/create-communication-template">
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="Create Communication Template"
                      />
                    </ListItemButton>
                  </Link>
                  <Link to="/manage-communication-template">
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="Manage Communication Template"
                      />
                    </ListItemButton>
                  </Link>
                </List>
              </Collapse>
            </Box>
            <Divider light />
          </List>

          {/* -----Auth Login------ */}
          <List>
            <ListItemButton onClick={() => setLoginOpen(!loginOpen)}>
              <ListItemIcon sx={{ pr: 0, minWidth: 44 }}>
                <Lock />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#edeef0",
                }}
                primary="Auth"
              />
              {loginOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Box sx={{ backgroundColor: "#0f1522" }}>
              <Collapse in={!loginOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link to="/login">
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="Login"
                      />
                    </ListItemButton>
                  </Link>
                </List>
              </Collapse>
            </Box>
            <Divider light />
          </List>
          {/* -----Setting------ */}
          <List sx={{ pb: 7 }}>
            <ListItemButton onClick={() => setSettingsOpen(!settingsOpen)}>
              <ListItemIcon sx={{ pr: 0, minWidth: 44 }}>
                <Settings />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#edeef0",
                }}
                primary="Setting"
              />
              {settingsOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Box sx={{ backgroundColor: "#0f1522" }}>
              <Collapse in={!settingsOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link to="/settings">
                    <ListItemButton
                      sx={{
                        pl: 4,
                        color: "#D1D5DB",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255, 0.08)",
                          color: "#10B981",
                        },
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: "12px",
                          paddingLeft: "28px",
                        }}
                        primary="Setting"
                      />
                    </ListItemButton>
                  </Link>
                </List>
              </Collapse>
            </Box>
            <Divider light />
          </List>
        </div>
      </Box>
    </SimpleBar>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            transition: "all 0.2s",
            width: fixed ? width : 60,
            top: 60,
            "&:hover": {
              width: 240,
            },
          },
        }}
        variant="permanent"
        className="sidebar-scroll"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 240,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
}
