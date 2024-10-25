import React, { useState } from "react";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Divider,
  Paper,
  Typography,
  Container,
  Box,
  TablePagination,
  TextField,
  Card,
} from "@mui/material";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FilterListIcon from "@mui/icons-material/FilterList";
import IconButton from "@mui/material/IconButton";
import "../../styles/UserManager.css";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import DownloadSharpIcon from "@mui/icons-material/DownloadSharp";
// data
const datas = [
  {
    name: "Monika Sighal",
    email: "msinghal@jgu.edu.in",
    userRole: "Counsellor",
    institutesAllocated: "O.P.Jindal Global University",
    assignedPublisher: "-",
    createdOn: "01/12/2021",
    lastActiveOn: "20/01/2022 12:05 PM",
    status: "Enabled",
  },
  {
    name: "Arpit Solanki",
    email: "asolanki@jgu.edu.in",
    userRole: "Counsellor",
    institutesAllocated: "O.P.Jindal Global University",
    assignedPublisher: "-",
    createdOn: "29/11/2021",
    lastActiveOn: "20/01/2022 11:46 AM",
    status: "Enabled",
  },
  {
    name: "Saurav Kumar",
    email: "skumar10@jgu.edu.in",
    userRole: "Counsellor",
    institutesAllocated: "O.P.Jindal Global University",
    assignedPublisher: "-",
    createdOn: "29/11/2021",
    lastActiveOn: "19/01/2022 9:30 PM",
    status: "Enabled",
  },
  {
    name: "Anupriya Chowdhury",
    email: "achowdhury1@jgu.edu.in",
    userRole: "Counsellor",
    institutesAllocated: "O.P.Jindal Global University",
    assignedPublisher: "-",
    createdOn: "29/11/2021",
    lastActiveOn: "19/01/2022 9:30 PM ",
    status: "Enabled",
  },
  {
    name: "Vikas Chawla",
    email: "vchawla@jgu.edu.in",
    userRole: "Counsellor",
    institutesAllocated: "O.P.Jindal Global University",
    assignedPublisher: "-",
    createdOn: "29/11/2021",
    lastActiveOn: "20/01/2022 1:14 PM ",
    status: "Enabled",
  },
  {
    name: "Dolamani Sahu",
    email: "dsahu@jgu.edu.in",
    userRole: "Counsellor",
    institutesAllocated: "O.P.Jindal Global University",
    assignedPublisher: "-",
    createdOn: "29/11/2021",
    lastActiveOn: "18/01/2022 4:16 PM",
    status: "Enabled",
  },
  {
    name: "Tarun Arora",
    email: "tarora@jgu.edu.in",
    userRole: "Counsellor",
    institutesAllocated: "O.P.Jindal Global University",
    assignedPublisher: "-",
    createdOn: "25/11/2021",
    lastActiveOn: "19/01/2022 10:16 PM",
    status: "Enabled",
  },
  {
    name: "Nupur",
    email: "nmadaan@jgu.edu.in",
    userRole: "Counsellor",
    institutesAllocated: "O.P.Jindal Global University",
    assignedPublisher: "-",
    createdOn: "25/11/2021",
    lastActiveOn: "18/01/2022 4:16 PM",
    status: "Enabled",
  },
];
// column data
const columns = [
  "Name",
  "Email",
  "User Role",
  "Institute Allocated",
  "Assined Publiser",
  "Created On",
  "Last Active On",
  "Status",
  "Action",
];
const AddRemoveColumns = () => {
  const [open, setOpen] = React.useState(false);
  const [openDialogue, setOpenDialogue] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // // dialog
  const handleClickDialogueOpen = () => {
    setOpenDialogue(true);
  };
  const handleDialogueClose = (value) => {
    setOpenDialogue(false);
  };
  // dialog
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (checked) {
      setChecked1(true);
      setChecked2(true);
      setChecked3(true);
      setChecked4(true);
      setChecked5(true);
      setChecked6(true);
      if (!columns.includes("Device Model")) {
        columns.push("Device Model");
      }
      if (!columns.includes("Device Brand")) {
        columns.push("Device Brand");
      }
      if (!columns.includes("Os Version")) {
        columns.push("Os Version");
      }
      if (!columns.includes("App Version")) {
        columns.push("App Version");
      }
      if (!columns.includes("App Tracker Version")) {
        columns.push("App Tracker Version");
      }
      if (!columns.includes("Other Recording App")) {
        columns.push("Other Recording App");
      }
    } else {
      setChecked1(false);
      setChecked2(false);
      setChecked3(false);
      setChecked4(false);
      setChecked5(false);
      setChecked6(false);
      columns.splice(9, 15);
    }
  };
  const handleChange1 = (event) => {
    setChecked1(event.target.checked);
    if (event.target.checked) {
      if (!columns.includes("Device Model")) {
        columns.push("Device Model");
      }
    }
    if (event.target.checked === false) {
      if (columns.includes("Device Model")) {
        const index = columns.indexOf("Device Model");
        if (index > -1) {
          columns.splice(index, 1);
        }
      }
    }
  };
  const handleChange2 = (event) => {
    setChecked2(event.target.checked);
    if (event.target.checked) {
      if (!columns.includes("Device Brand")) {
        columns.push("Device Brand");
      }
    }
    if (event.target.checked === false) {
      if (columns.includes("Device Brand")) {
        const index = columns.indexOf("Device Brand");
        if (index > -1) {
          columns.splice(index, 1);
        }
      }
    }
  };
  const handleChange3 = (event) => {
    setChecked3(event.target.checked);
    if (event.target.checked) {
      if (!columns.includes("Os Version")) {
        columns.push("Os Version");
      }
    }
    if (event.target.checked === false) {
      if (columns.includes("Os Version")) {
        const index = columns.indexOf("Os Version");
        if (index > -1) {
          columns.splice(index, 1);
        }
      }
    }
  };
  const handleChange4 = (event) => {
    setChecked4(event.target.checked);
    if (event.target.checked) {
      if (!columns.includes("App Version")) {
        columns.push("App Version");
      }
    }
    if (event.target.checked === false) {
      if (columns.includes("App Version")) {
        const index = columns.indexOf("App Version");
        if (index > -1) {
          columns.splice(index, 1);
        }
      }
    }
  };
  const handleChange5 = (event) => {
    setChecked5(event.target.checked);
    if (event.target.checked) {
      if (!columns.includes("App Tracker Version")) {
        columns.push("App Tracker Version");
      }
    }
    if (event.target.checked === false) {
      if (columns.includes("App Tracker Version")) {
        const index = columns.indexOf("App Tracker Version");
        if (index > -1) {
          columns.splice(index, 1);
        }
      }
    }
  };
  const handleChange6 = (event) => {
    setChecked6(event.target.checked);
    if (event.target.checked) {
      if (!columns.includes("Other Recording App")) {
        columns.push("Other Recording App");
      }
    }
    if (event.target.checked === false) {
      if (columns.includes("Other Recording App")) {
        const index = columns.indexOf("Other Recording App");
        if (index > -1) {
          columns.splice(index, 1);
        }
      }
    }
  };
  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
        <FormControlLabel
          label="Device Model"
          control={<Checkbox checked={checked1} onChange={handleChange1} />}
        />
        <FormControlLabel
          label="Device Brand"
          control={<Checkbox checked={checked2} onChange={handleChange2} />}
        />
        <FormControlLabel
          label="Os Version"
          control={<Checkbox checked={checked3} onChange={handleChange3} />}
        />
        <FormControlLabel
          label="App Version"
          control={<Checkbox checked={checked4} onChange={handleChange4} />}
        />
        <FormControlLabel
          label="App Tracker Version"
          control={<Checkbox checked={checked5} onChange={handleChange5} />}
        />
        <FormControlLabel
          label="Other Recording App"
          control={<Checkbox checked={checked6} onChange={handleChange6} />}
        />
      </Box>
    </Box>
  );
  return (
    <div className="manager">
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item md={12} sm={12} xs={12}>
            <Box sx={{backgrounColor:"#FFFFFF"}} className="header">
              <Typography color="textPrimary" gutterBottom variant="h5">
                User Manager
              </Typography>
              <Box className="buttons_alignment">
                <Button className="filter-btn" variant="outlined">
                  <IconButton>
                    <FilterListIcon />
                  </IconButton>
                  Filter
                </Button>
                {/*  */}
                <div>
                  <Button
                    variant="outlined"
                    className="filter-btn"
                    onClick={handleClickOpen}
                  >
                    Create User
                  </Button>
                  <Dialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                  >
                    <Box className="create_user">
                      <DialogTitle
                        id="customized-dialog-title"
                        onClose={handleClose}
                      >
                        Create User
                      </DialogTitle>
                      <Button autoFocus onClick={handleClose} color="primary">
                        <i class="far fa-times-circle fa-2x"></i>
                      </Button>
                    </Box>
                    <DialogContent dividers>
                      <TextField
                        className="email_field"
                        id="outlined-search"
                        label="Enter Email Address"
                        type="search"
                        variant="outlined"
                        placeholder="Enter email address"
                      />
                      <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-age-native-simple">
                          User Role
                        </InputLabel>
                        <Select
                          className="email_field"
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="User Role"
                        >
                          <MenuItem value={10}>College Admin</MenuItem>
                          <MenuItem value={20}>College Staff</MenuItem>
                          <MenuItem value={30}>Counsellor</MenuItem>
                          <MenuItem value={30}>Agent</MenuItem>
                        </Select>
                      </FormControl>
                      <TextField
                        className="email_field"
                        label="Search"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment>
                              <IconButton>
                                <SearchIcon />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button variant="contained" color="primary">
                        Invite
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </Box>
            </Box>
            <Divider sx={{ mb: 2 }} />
            {/* button */}
            <Grid item md={12} sm={12} xs={12}>
              <Box className="pagination">
                <Box>
                  <Button
                    variant="contained"
                    size="small"
                    className="college_user_btn"
                  >
                    <i class="far fa-building icon"></i> College User
                  </Button>
                  <Link to="/snapshots">
                  <Button
                    variant="outlined"
                    size="small"
                    className="snapshot_btn"
                  >
                    <i class="far fa-chart-bar icon"></i> Quick Snapshot
                  </Button>
                    </Link>
                  
                </Box>
                {/* middle */}
                <Box>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={datas.length}
                    rowsPerPage={5}
                    page={0}
                  />
                </Box>
                {/* end */}
                <Box>
                  <Button
                    className="add_rmv_btn"
                    size="small"
                    variant="outlined"
                    onClick={handleClickDialogueOpen}
                  >
                    <i className="fas fa-plus-circle icon"></i> Add/Remove
                    Column
                  </Button>
                  {/* dialog */}
                  <Dialog
                    onClose={handleDialogueClose}
                    aria-labelledby="customized-dialog-title"
                    open={openDialogue}
                    PaperProps={{
                      sx: {
                        position: "fixed",
                        top: 0,
                        right: 0,
                        marginRight: "0",
                        padding: "8px",
                        height: "400px",
                      },
                    }}
                  >
                    <TextField
                      id="standard-basic"
                      label="Search"
                      variant="standard"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment>
                            <IconButton>
                              <SearchIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <FormGroup>
                      <FormControlLabel
                        label="Select All"
                        control={
                          <Checkbox
                            checked={checked1 && checked2 && checked3}
                            onChange={handleChange}
                          />
                        }
                      />
                      {children}
                    </FormGroup>
                  </Dialog>
                  {/* dialog */}
                  <Button
                    className="download_btn"
                    size="small"
                    variant="outlined"
                  >
                    {" "}
                    <i className="fas fa-download icon"></i> Download
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Card sx={{ p: 2 }}>
        <Grid item md={12} sm={12} xs={12}>
          <Card>
            <TableContainer component={Paper} sx={{ width:'100%' }}>
              <Table sx={{ width:'100%' }}
                aria-label="a dense table"
              >
                <TableHead sx={{ backgroundColor: "#F2F9FE" }}>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell className="data" align="left" width={"15%"}>
                        {column}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* second row */}
                  {datas.map((data) => (
                    <TableRow hover>
                      <TableCell
                        className="data1"
                        component="th"
                        scope="row"
                        color="textPrimary"
                      >
                        {data.name}
                      </TableCell>
                      <TableCell className="data1" align="left">
                        {data.email}
                      </TableCell>
                      <TableCell className="data1" align="left">
                        {data.userRole}
                      </TableCell>
                      <TableCell className="data1" align="left">
                        {data.institutesAllocated}
                      </TableCell>
                      <TableCell className="data1" align="left">
                        {data.assignedPublisher}
                      </TableCell>
                      <TableCell className="data1" align="left">
                        {data.createdOn}{" "}
                      </TableCell>
                      <TableCell className="data1" align="left">
                        {data.lastActiveOn}{" "}
                      </TableCell>
                      <TableCell className="data1" align="left">
                        <Button
                          variant="contained"
                          size="small"
                          className="enableButton"
                        >
                          {data.status}
                        </Button>
                      </TableCell>
                      <TableCell align="center">
                        <IconButton>
                          <DownloadSharpIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
      </Card>
    </div>
  );
};

export default AddRemoveColumns;
