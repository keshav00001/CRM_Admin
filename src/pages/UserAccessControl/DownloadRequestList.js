import React from "react";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Divider,
  Typography,
  Container,
  Box,
  TextField,
  Card,
} from "@mui/material";
import Popper from "@mui/material/Popper";
import FilterListIcon from "@mui/icons-material/FilterList";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import DownloadSharpIcon from "@mui/icons-material/DownloadSharp";
import InputAdornment from "@mui/material/InputAdornment";
import "../../styles/DownloadRequestList.css";

// Data

const requestData = [
  {
    id: 418783,
    requestedBy: "Harsh Ranjan Sinha",
    downloadType: "Applications",
    requestedOn: "14 Jan 2022 01:47 pm",
    status: "Completed",
    recordCounts: 95,
    downloads: 1,
  },
  {
    id: 403340,
    requestedBy: "Harsh Ranjan Sinha",
    downloadType: "Leads",
    requestedOn: "17 Dec 2021 02:08 pm",
    status: "Completed",
    recordCounts: 14354,
    downloads: 1,
  },
  {
    id: 402877,
    requestedBy: "Harsh Ranjan Sinha",
    downloadType: "Leads",
    requestedOn: "15 Dec 2021 11:30 am",
    status: "Completed",
    recordCounts: 222,
    downloads: 1,
  },
  {
    id: 401873,
    requestedBy: "Harsh Ranjan Sinha",
    downloadType: "Applications",
    requestedOn: "13 Dec 2021 04:36 pm",
    status: "Completed",
    recordCounts: 1544,
    downloads: 0,
  },
  {
    id: 400003,
    requestedBy: "Harsh Ranjan Sinha",
    downloadType: "Applications",
    requestedOn: "9 Dec 2021 03:17 pm",
    status: "Completed",
    recordCounts: 17,
    downloads: 1,
  },
  {
    id: 394830,
    requestedBy: "Harsh Ranjan Sinha",
    downloadType: "Applications",
    requestedOn: "1 Dec 2021 01:23 pm",
    status: "Completed",
    recordCounts: 1178,
    downloads: 0,
  },
  {
    id: 394826,
    requestedBy: "Harsh Ranjan Sinha",
    downloadType: "Leads",
    requestedOn: "1 Dec 2021 01:23 pm",
    status: "Completed",
    recordCounts: 95,
    downloads: 1,
  },
  {
    id: 394338,
    requestedBy: "Harsh Ranjan Sinha",
    downloadType: "Applications",
    requestedOn: "30 Nov 2021 01:47 pm",
    status: "Completed",
    recordCounts: 95,
    downloads: 1,
  },
  {
    id: 394335,
    requestedBy: "Harsh Ranjan Sinha",
    downloadType: "Applications",
    requestedOn: "30 Nov 2021 05:30 pm",
    status: "Completed",
    recordCounts: 52,
    downloads: 1,
  },
];

const DownloadRequestList = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  return (
    <div>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item md={12} sm={12} xs={12}>
            <Box className="header">
              <Typography color="textPrimary" gutterBottom variant="h5">
                Download Request Report
              </Typography>
              <Box className="buttons_alignment box_height">
                <TextField
                  size="small"
                  className="search_byrequest_field"
                  label="Search by Request Id"
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
                <Button variant="outlined" className="filter_btn_design">
                  <IconButton>
                    <FilterListIcon />
                  </IconButton>
                  Filter
                </Button>
              </Box>
            </Box>
            <Divider sx={{ marginTop: "10px" }} />
          </Grid>
        </Grid>
        {/* table */}
        <Box
          sx={{
            backgroundColor: "background.default",
            p: 3,
          }}
        >
          <Typography>Total 9 Records</Typography>
          <Card sx={{ minWidth: 800 }}>
            <Divider />
            {/* <Scrollbar> */}
            <Table sx={{ minWidth: 800 }}>
              <TableHead sx={{ backgroundColor: "#F2F9FE" }}>
                <TableRow>
                  <TableCell align="left" width={"10%"} sortDirection="desc">
                    #
                  </TableCell>
                  <TableCell align="left" width={"20%"}>
                    Requested By
                  </TableCell>
                  <TableCell align="left" width={"15%"}>
                    Download Type
                  </TableCell>
                  <TableCell align="left" width={"20%"}>
                    Requested on
                  </TableCell>
                  <TableCell align="left" width={"10%"}>
                    Status
                  </TableCell>
                  <TableCell width={"15%"} align="center">
                    Records Counts
                  </TableCell>
                  <TableCell align="left">Downloads</TableCell>
                  <TableCell align="left">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {requestData.map((data) => (
                  <TableRow hover key={data.id}>
                    <TableCell>
                      <Typography color="textPrimary" variant="subtitle2">
                        {data.id}
                      </Typography>
                    </TableCell>
                    <TableCell>{data.requestedBy}</TableCell>
                    <TableCell>{data.downloadType}</TableCell>
                    <TableCell>{data.requestedOn}</TableCell>
                    <TableCell>{data.status}</TableCell>
                    <TableCell align="center">{data.recordCounts}</TableCell>
                    <TableCell align="center">{data.downloads}</TableCell>
                    <TableCell align="center">
                      <Button
                        aria-describedby={id}
                        type="button"
                        onClick={handleClick}
                      >
                        <IconButton>
                          <DownloadSharpIcon />
                        </IconButton>
                      </Button>
                      <Popper id={id} open={open} anchorEl={anchorEl}>
                        <Box
                          sx={{
                            border: "1px solid gray",
                            p: 1,
                            bgcolor: "background.paper",
                          }}
                        >
                          Download
                        </Box>
                      </Popper>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </Box>
      </Container>
    </div>
  );
};

export default DownloadRequestList;
