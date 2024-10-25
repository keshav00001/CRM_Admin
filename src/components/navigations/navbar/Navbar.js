import React, { useState, useContext } from "react";


import {
  Box,
  Typography,
  Container,
  Grid,
  IconButton,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  Popover,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import {
  Search,
  Group,
  Notifications,
  PersonAdd,
  Logout,
  Settings,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

import "./Navbar.css";

import ContactModal from "./ContactModal";
import { LayoutSettingContext } from "./../../../store/contexts/LayoutSetting";

export default function Navbar(props) {
  const { showTopNavbar } = useContext(LayoutSettingContext);

  const { fixed, setFixed, onSidebarOpen } = props;

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  // profile
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Contact
  const [contactPopover, setContactPopover] = React.useState(null);

  const contactOpen = Boolean(contactPopover);
  const id = contactOpen ? "simple-popover" : undefined;

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: 60,
        // lineHeight: "60px",
        paddingTop: "6px",
        boxShadow: 1,
        zIndex: 10,
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={12} sm={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {/* <MenuIcon
                sx={{ mr: 2, cursor: "pointer" }}
                onClick={onSidebarOpen}
              /> */}

                <MenuIcon
                  sx={{ mr: 2, cursor: "pointer" }}
                  onClick={() => setFixed(!fixed)}
                />



                <Typography color="textPrimary" variant="body4">
                  Admin Dashboard
                </Typography>
              </Box>
              {/*-------------------- Top Menu------------- */}

              {showTopNavbar && (

                <Box className="topMenu">
                  <List
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                      py: 0,
                    }}
                  >
                    <ListItem className="topMenuList">
                      <ListItemButton>
                        <ListItemText sx={{ fontSize: "13px" }}>
                          Dashboard
                        </ListItemText>
                      </ListItemButton>
                      <Box className="submenuWrapper">
                        <Box className="subMenu">
                          <Link to="/" className="subMenulist">
                            Admin Dashboard
                          </Link>
                          <Link to="/traffic-dashboard" className="subMenulist">
                            Traffic Dashborad
                          </Link>
                          <Link to="/trend-analysis" className="subMenulist">
                            Trends Analysis
                          </Link>
                          <Link
                            to="/student-quality-index"
                            className="subMenulist"
                          >
                            Student Quality Index
                          </Link>
                          <Link
                            to="/benchmarking-dashboard"
                            className="subMenulist"
                          >
                            Benchmarking Dashboard
                          </Link>
                          <Link
                            to="/counsellor-dashboard"
                            className="subMenulist"
                          >
                            Counsellor Dashboard
                          </Link>
                        </Box>
                      </Box>
                    </ListItem>
                    <ListItem className="topMenuList">
                      <ListItemButton>
                        <ListItemText>FormDesk</ListItemText>
                      </ListItemButton>
                      <Box className="submenuWrapper">
                        <Box className="subMenu">
                          <Link to="/form-manager" className="subMenulist">
                            Document Listing
                          </Link>
                          <Link to="/manage-forms" className="subMenulist">
                            Manage Forms
                          </Link>
                          <Link to="/manage-documents" className="subMenulist">
                            Manage Documents
                          </Link>
                          <Link to="/manage-exam" className="subMenulist">
                            Manage Exam
                          </Link>
                        </Box>
                      </Box>
                    </ListItem>
                    <ListItem className="topMenuList">
                      <ListItemButton>
                        <ListItemText>LeadManager</ListItemText>
                      </ListItemButton>
                      <Box className="submenuWrapper">
                        <Box className="subMenu">
                          <Link to="/userProfile" className="subMenulist">
                            User Profile
                          </Link>
                          <Link to="/scoring" className="subMenulist">
                            Scoring
                          </Link>
                        </Box>
                      </Box>
                    </ListItem>

                    <ListItem
                      className="topMenuList1"
                      onMouseEnter={onHover}
                      onMouseLeave={onLeave}
                    >
                      <ListItemButton>
                        <ListItemText>Others</ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>
              )}


              {/* ------ Mega Menu option--------- */}
              {hover && (
                <Box
                  className="megaMenu"
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                >
                  <Container>
                    <Grid container>
                      <Grid item md={12}>
                        <Box className="megamenu-content">
                          <Grid container>
                            <Grid item md={3} sm={3} xs={12}>
                              <Box className="menuListContent">
                                <Typography
                                  component="h6"
                                  className="list-heading"
                                >
                                  Application Forms
                                </Typography>
                                <Link
                                  to="/in-app-call-logs"
                                  className="subMenulist"
                                  onClick={() => setHover(false)}
                                >
                                  In-App Call Logs
                                </Link>
                              </Box>
                            </Grid>
                            <Grid item md={3} sm={3} xs={12}>
                              <Box className="menuListContent">
                                <Typography
                                  component="h6"
                                  className="list-heading"
                                >
                                  Campaign Manager
                                </Typography>
                                <Link
                                  to="/campaign-manager"
                                  className="subMenulist"
                                  onClick={() => setHover(false)}
                                >
                                  Campaign manager
                                </Link>
                              </Box>
                            </Grid>
                            <Grid item md={3} sm={3} xs={12}>
                              <Box className="menuListContent">
                                <Typography
                                  component="h6"
                                  className="list-heading"
                                >
                                  User Access Control
                                </Typography>
                                <Link
                                  to="/users/user-manager"
                                  className="subMenulist"
                                  onClick={() => setHover(false)}
                                >
                                  User Manager
                                </Link>
                                <Link
                                  to="/reports/download-request-list"
                                  className="subMenulist"
                                  onClick={() => setHover(false)}
                                >
                                  Download Request List
                                </Link>
                                <Link
                                  to="/users/manage-sessions"
                                  className="subMenulist"
                                  onClick={() => setHover(false)}
                                >
                                  Manage Sessions
                                </Link>
                                <Link
                                  to="/users/activity"
                                  className="subMenulist"
                                  onClick={() => setHover(false)}
                                >
                                  Users Activity
                                </Link>
                                <Link
                                  to="/client-registration"
                                  className="subMenulist"
                                  onClick={() => setHover(false)}
                                >
                                  Client Registration
                                </Link>
                              </Box>
                            </Grid>
                            <Grid item md={3} sm={3} xs={12}>
                              <Box className="menuListContent">
                                <Typography
                                  component="h6"
                                  className="list-heading"
                                >
                                  Marketing
                                </Typography>
                                <Link
                                  to="/marketing"
                                  className="subMenulist"
                                  onClick={() => setHover(false)}
                                >
                                  Marketing
                                </Link>
                              </Box>
                            </Grid>
                            <Grid item md={3} sm={3} xs={12}>
                              <Box className="menuListContent">
                                <Typography
                                  component="h6"
                                  className="list-heading"
                                >
                                  Application Manager
                                </Typography>
                                <Link
                                  to="/applications"
                                  className="subMenulist"
                                  onClick={() => setHover(false)}
                                >
                                  Applications
                                </Link>
                                <Link
                                  to="/application-manager"
                                  className="subMenulist"
                                  onClick={() => setHover(false)}
                                >
                                  Manage Applications
                                </Link>

                                <Link
                                  to="/communication-performance"
                                  className="subMenulist"
                                  onClick={() => setHover(false)}
                                >
                                  Communication Logs
                                </Link>

                              </Box>
                            </Grid>
                            <Grid item md={3} sm={3} xs={12}>
                              <Box className="menuListContent">
                                <Typography
                                  component="h6"
                                  className="list-heading"
                                >
                                  Query Manager
                                </Typography>
                                <Link
                                  to="/query-manager"
                                  className="subMenulist"
                                  onClick={() => setHover(false)}
                                >
                                  Query Manager
                                </Link>
                              </Box>
                            </Grid>
                            <Grid item md={3} sm={3} xs={12}>
                              <Box className="menuListContent">
                                <Typography
                                  component="h6"
                                  className="list-heading"
                                >
                                  Report and Analytics
                                </Typography>
                                <Link
                                  to="/reports"
                                  className="subMenulist"
                                  onClick={() => setHover(false)}
                                >
                                  Reports
                                </Link>
                              </Box>
                            </Grid>
                            <Grid item md={3} sm={3} xs={12}>
                              <Box className="menuListContent">
                                <Typography
                                  component="h6"
                                  className="list-heading"
                                >
                                  Template Manager
                                </Typography>
                                <Link
                                  to="/create-template"
                                  className="subMenulist"
                                  onClick={() => setHover(false)}
                                >
                                  Create Template
                                </Link>
                                <Link
                                  to="/manage-template"
                                  className="subMenulist"
                                  onClick={() => setHover(false)}
                                >
                                  Manage Template
                                </Link>
                                <Link
                                  to="/create-communication-template"
                                  className="subMenulist"
                                  onClick={() => setHover(false)}
                                >
                                  Create Communication Template
                                </Link>
                                <Link
                                  to="/manage-communication-template"

                                  className="subMenulist"
                                  onClick={() => setHover(false)}
                                >
                                  Manage Communication Template
                                </Link>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Grid>
                    </Grid>
                  </Container>
                </Box>
              )}

              {/* ---------------- */}

              <Box className="header_item">
                <Box className="custom_search">
                  <input
                    className="searchInput"
                    name="search"
                    type="search"
                    placeholder="Search..."
                  />
                  <Typography variant="span" className="search_icon">
                    <IconButton>
                      <Search size="small" />
                    </IconButton>
                  </Typography>
                </Box>
                {/* ----Contact in header----- */}
                <Box className="iconsGroup">
                  <IconButton
                    aria-describedby={id}
                    onClick={(event) => setContactPopover(event.currentTarget)}
                  >
                    <Group />
                  </IconButton>
                  <Popover
                    id={id}
                    open={contactOpen}
                    contactPopover={contactPopover}
                    onClose={() => setContactPopover(null)}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <ContactModal />
                  </Popover>
                </Box>
                {/*------Notification in header----- */}
                <Box className="notifications">
                  <Badge badgeContent={2} color="primary">
                    <Notifications color="action" />
                  </Badge>
                </Box>
                {/* -------Profile in header------- */}
                <Box className="profile">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar alt="John" src="" />
                  </IconButton>
                </Box>
                {/* ---- profile modal content----- */}
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                >
                  <MenuItem>
                    <Avatar />
                    <Typography variant="body2" component="span" sx={{ ml: 2 }}>
                      Profile
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <Avatar />
                    <Typography variant="body2" component="span" sx={{ ml: 2 }}>
                      My Account
                    </Typography>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
