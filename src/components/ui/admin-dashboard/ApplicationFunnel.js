import React, { useState } from "react";
import {
  Box,
  Card,
  Grid,
  List,
  ListItem,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Typography,
  Tooltip,
  Popover,
  Select,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Checkbox,
  FormControl,
  Button,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import { FunnelChart } from "react-funnel-pipeline";
import { useTheme } from "@mui/material/styles";
import "react-funnel-pipeline/dist/index.css";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import DateRange from "../../shared/filters/DateRange";

import Chart from "react-apexcharts";

const data = {
  series: [
    {
      color: "#688eff",
      data: 38,
      label: "Total Applications",
    },
    {
      color: "#4CAF50",
      data: 50,
      label: "Paid Applications",
    },
    {
      color: "#FF9800",
      data: 12,
      label: "Unpaid Applications",
    },
  ],
};

export default function ApplicationFunnel(props) {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [dateRange, setDateRange] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [state, setState] = useState({
    series: [
      {
        color: "#688eff",
        data: 38,
        label: "Total Applications",
      },
      {
        color: "#4CAF50",
        data: 50,
        label: "Paid Applications",
      },
      {
        color: "#FF9800",
        data: 12,
        label: "Unpaid Applications",
      },
    ],
    options: {
      chart: {
        background: "transparent",
        stacked: false,
        toolbar: {
          show: false,
        },
      },
      colors: data.series.map((item) => item.color),
      fill: {
        opacity: 1,
      },
      labels: [
        "Total Applications",
        "Paid Applications",
        "Unpaid Applications",
      ],
      plotOptions: {
        radialBar: {
          track: {
            background: theme.palette.background.default,
          },
        },
      },
      theme: {
        mode: theme.palette.mode,
      },
    },
  });
  const chartSeries = data.series.map((item) => item.data);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Card sx={{ height: "100%" }} {...props}>
      <CardHeader
        sx={{ py: 1.5 }}
        action={
          <Box sx={{ pt: 1.2 }}>
            <DateRange dateRange={dateRange} setDateRange={setDateRange} />
            <IconButton aria-label="Download">
              <FileDownloadOutlinedIcon />
            </IconButton>
            <IconButton
              aria-label="Filter"
              aria-describedby={id}
              onClick={handleClick}
            >
              <FilterAltIcon />
            </IconButton>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Box className="filter-popover-box">
                <FormControl sx={{ width: 200 }}>
                  <InputLabel
                    id="filter-multiple-checkbox-label"
                    sx={{ lineHeight: "13px" }}
                  >
                    Select
                  </InputLabel>
                  <Select
                    size="small"
                    labelId="filter-multiple-checkbox-label"
                    id="filter-multiple-checkbox"
                    SelectDisplayProps={{
                      style: { paddingTop: 10, paddingBottom: 12 },
                    }}
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Select" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={personName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <Box className="filter-buttons">
                  <Button variant="contained" onClick={handleClose}>
                    Apply
                  </Button>
                  <Button variant="text" onClick={() => setPersonName([])}>
                    Reset
                  </Button>
                </Box>
              </Box>
            </Popover>
          </Box>
        }
        title={
          <Typography color="textPrimary" variant="h6">
            Application Funnel{" "}
            <Tooltip
              title="The Application Funnel represents a complate breakup of the total applications received segregate on the basis of the payment status..."
              arrow
              placement="top"
            >
              <IconButton sx={{ p: 0.6, mt: -0.5 }}>
                <InfoOutlinedIcon sx={{ fontSize: 17 }} />
              </IconButton>
            </Tooltip>
          </Typography>
        }
        subheader={
          <Typography color="textSecondary" variant="caption">
            Date Range (23 Oct 2019 to 20 Jan 2022)
          </Typography>
        }
      />
      <Divider />
      <CardContent>
        <Grid container spacing={3} sx={{ p: 3 }}>
          <Grid item md={6} xs={12}>
            <Chart
              height={350}
              options={state.options}
              series={state.series.map((item) => item.data)}
              type="radialBar"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Divider sx={{ mt: 1 }} />
            <List disablePadding>
              {data.series.map((item, index) => (
                <ListItem
                  disableGutters
                  divider={index + 1 < data.series.length}
                  key={item.label}
                  sx={{ display: "flex" }}
                >
                  <Box
                    sx={{
                      border: 3,
                      borderColor: item.color,
                      borderRadius: "50%",
                      height: 16,
                      mr: 1,
                      width: 16,
                    }}
                  />
                  <Typography color="textSecondary" variant="body2">
                    {item.label}
                  </Typography>
                  <Box sx={{ flexGrow: 1 }} />
                  <Typography variant="subtitle2">{item.data}</Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
