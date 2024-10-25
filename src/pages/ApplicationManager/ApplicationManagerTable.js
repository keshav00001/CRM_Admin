import React, { useState } from "react";
import { Drawer, InputGroup, Input } from "rsuite";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Card,
  IconButton,
  Button,
  Menu,
  MenuItem,
  InputBase,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import "../../styles/ApplicationManagerTable.css";

// Icons
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

// import ViewTable from "../../components/ui/application-manager/ViewTable";
import BasicDetailsTable from "../../components/ui/application-manager/BasicDetailsTable";

import QuickSnapshoot from "../../components/ui/application-manager/QuickSnapshoot";
import { ChevronDown as ChevronDownIcon } from "./../../icons/ChevronDown";

// ---------------

// ============
function ApplicationManagerTable(props) {
  const [openCol, setOpenCol] = useState(false);
  // action button-----
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // table tab------------
  const [tableTabs, setTableTabs] = useState(1);

  return (
    <Box component="main" className="mainTable" sx={{ flexGrow: 1, py: 2 }}>
      <Container maxWidth={false}>
        <Grid container>
          <Grid item md={12} sm={12} xs={12}>
            <Box className="application-main">
              <Box className="application-content">
                <Typography variant="h6" sx={{ paddingRight: "10px" }}>
                  Application Manager
                </Typography>

                <Typography variant="span" className="QuickView">
                  Quick View:
                  <Link href="#" variant="body2" sx={{ paddingLeft: "4px" }}>
                    System Default View
                  </Link>
                </Typography>
                <IconButton>
                  <SaveOutlined />
                </IconButton>
              </Box>
              <Box className="application-btn-area">
                <IconButton>
                  <Search />
                </IconButton>
                <IconButton>
                  <FilterAlt />
                </IconButton>
                <IconButton>
                  <FileUploadOutlined />
                </IconButton>
              </Box>
            </Box>
            <Card {...props} sx={{ marginBottom: 4 }}>
              <Box className="tableHeading">
                <Box className="tableTabWrapper">
                  <Box
                    className={`${tableTabs === 1 ? "active" : null} tableTab`}
                    onClick={() => setTableTabs(1)}
                  >
                    <TableChartOutlined sx={{ mr: "5px" }} /> Table view
                  </Box>
                  <Box
                    className={`${tableTabs === 2 ? "active" : null} tableTab`}
                    onClick={() => setTableTabs(2)}
                  >
                    <Timeline sx={{ mr: "5px" }} /> Quick Snapshot
                  </Box>
                </Box>

                {tableTabs == 1 && (
                  <Box className="actionBtn-area">
                    <IconButton>
                      <PostAddOutlined onClick={() => setOpenCol(true)} />
                    </IconButton>

                    <Button
                      id="action-button"
                      aria-controls={open ? "action-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      endIcon={<ChevronDownIcon fontSize="small" />}
                      sx={{ m: 1 }}
                      variant="outlined"
                    >
                      Actions
                    </Button>
                    <Menu
                      id="action-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "action-button",
                      }}
                    >
                      <MenuItem onClick={handleClose}>
                        Download Applications
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        View Upload Logs
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        Change Application Stage
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        Download Documents
                      </MenuItem>
                    </Menu>
                  </Box>
                )}
              </Box>
            </Card>
            <Card sx={{ my: 2 }}>
              <Box>
                {/* {tableTabs === 1 && <ViewTable />} */}
                {tableTabs === 1 && (
                  <BasicDetailsTable
                    openCol={openCol}
                    setOpenCol={setOpenCol}
                  />
                )}
                {tableTabs === 2 && <QuickSnapshoot />}
              </Box>
            </Card>
          </Grid>

          <Grid item md={12} sm={12} xs={12}></Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ApplicationManagerTable;
