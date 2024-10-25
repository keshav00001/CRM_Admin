import React, { useState, useContext } from "react";
import {
  Box,
  Typography,
  Button,
  FormControl,
  MenuItem,
  Select,
  ListItemText,
  Switch,
} from "@mui/material";
import { Drawer } from "rsuite";

import CreateIcon from "@mui/icons-material/Create";
import CloseIcon from "@mui/icons-material/Close";
import { LayoutSettingContext } from "../../../store/contexts/LayoutSetting";

export default function AdminHeader(props) {
  const [personName, setPersonName] = useState([
    "Indian Institute of Technology Bombay (IITB)",
  ]);

  const [openWithHeader, setOpenWithHeader] = useState(false);
  const [category, setCategory] = useState(["Select Category"]);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      },
    },
  };
  const names = [
    "Indian Institute of Technology Bombay (IITB)",
    "Indian Institute of Science (IISC) Bangalore",
    "Indian Institute of Technology Delhi (IITD)",
    "University of Delhi",
    "Indian Institute of Technology Roorkee (IITR)",
    "Indian Institute of Technology Guwahati (IITG)",
  ];
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  const label = { inputProps: { "aria-label": "Switch demo" } };

  const categoryList = [
    "Score Board",
    "Application Funnel",
    "Top Performing Channel",
    "Lead Funnel",
    "Leads vs Applications ",
  ];

  const handleCategory = (event) => {
    const {
      target: { value },
    } = event;
    setCategory(typeof value === "string" ? value.split(",") : value);
  };

  // show/hide navbar


  const { showTopNavbar, setShowTopNavbar } = useContext(LayoutSettingContext);

  console.log("++++++++++++", showTopNavbar);




  return (
    <Box className="main-header">
      <Box className="admin-header">
        <Box>
          <Typography color="textPrimary" variant="h5">
            Admin Dashboard
          </Typography>
        </Box>
        <Box>
          <Typography color="textPrimary" variant="body" className="sync-time">
            Last Synced at: 27 Nov 2021 10:21 PM
          </Typography>
        </Box>
      </Box>
      <Box className="admin-bottom">
        <FormControl sx={{ width: 300 }}>
          <Select
            size="small"
            labelId="filter-multiple-checkbox-label"
            id="filter-multiple-checkbox"
            SelectDisplayProps={{
              style: {
                paddingTop: 9,
                paddingBottom: 10,
                backgroundColor: "#ffffff",
                border: "1px solid #d3d4d7",
                fontSize: 15,
              },
            }}
            value={personName}
            onChange={handleChange}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button variant="contained">Search</Button>
        <Button
          variant="contained"
          color="success"
          startIcon={<CreateIcon />}
          onClick={() => setOpenWithHeader(true)}
        >
          Save Layout
        </Button>
        <Button variant="contained" color="error" startIcon={<CloseIcon />}>
          Cancel
        </Button>
      </Box>
      <Drawer open={openWithHeader} onClose={() => setOpenWithHeader(false)}>
        <Drawer.Header>
          <Drawer.Title>Add Dashlets</Drawer.Title>
          <Box sx={{ width: 200 }}>
            <FormControl sx={{ width: 200 }}>
              <Select
                size="small"
                labelId="filter-multiple-checkbox-label"
                id="filter-multiple-checkbox"
                SelectDisplayProps={{
                  style: {
                    paddingTop: 9,
                    paddingBottom: 10,
                    backgroundColor: "#ffffff",
                    border: "1px solid #d3d4d7",
                    fontSize: 15,
                  },
                }}
                value={category}
                onChange={handleCategory}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {categoryList.map((name) => (
                  <MenuItem key={name} value={name}>
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Drawer.Header>
        <Drawer.Body className="drawer-body">
          <Box className="drawer-item">
            <Box className="drawer-item-left">
              <Typography color="textPrimary" variant="subtitle2">
                Application Funnel
              </Typography>
              <Typography color="textPrimary" variant="body2">
                Quick access the total applications received segregated on the
                basis of the payment status and method
              </Typography>
            </Box>
            <Box className="drawer-item-right">
              <Switch {...label} defaultChecked />
            </Box>
          </Box>
          <Box className="drawer-item">
            <Box className="drawer-item-left">
              <Typography color="textPrimary" variant="subtitle2">
                Top Performing Chnnels
              </Typography>
              <Typography color="textPrimary" variant="body2">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature.
              </Typography>
            </Box>
            <Box className="drawer-item-right">
              <Switch {...label} defaultChecked />
            </Box>
          </Box>
          <Box className="drawer-item">
            <Box className="drawer-item-left">
              <Typography color="textPrimary" variant="subtitle2">
                Lead Funnel
              </Typography>
              <Typography color="textPrimary" variant="body2">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </Typography>
            </Box>
            <Box className="drawer-item-right">
              <Switch {...label} defaultChecked />
            </Box>
          </Box>
          {/* ------ Top Navbar show/hide----- */}
          <Box className="drawer-item">
            <Box className="drawer-item-left">
              <Typography color="textPrimary" variant="subtitle2">
                Top Navbar
              </Typography>
              <Typography color="textPrimary" variant="body2">
                If you want to show top navbar in header click on switch ON/OFF.
              </Typography>
            </Box>
            <Box className="drawer-item-right">

              <Switch
                {...label}
                defaultChecked
                onChange={() => setShowTopNavbar(!showTopNavbar)}
              />

              <Switch {...label} defaultChecked />
            </Box>
          </Box>
        </Drawer.Body>
      </Drawer>
    </Box>
  );
}
