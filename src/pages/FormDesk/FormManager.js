import React, { useState } from "react";
import { Drawer, SelectPicker } from "rsuite";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  Button,
  IconButton,
  CardHeader,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableSortLabel,
  TextareaAutosize,
  TableContainer,
  TextField,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";
import {
  FilterAlt,
  FileDownloadOutlined,
  Close,
  RestartAltRounded,
  Settings,
  ContentCopy,
} from "@mui/icons-material";

function createRowData(
  docTitle,
  docPath,
  collegeName,
  formName,
  createOn,
  action
) {
  return {
    docTitle,
    docPath,
    collegeName,
    formName,
    createOn,
    action,
  };
}
const rowsData = [
  createRowData(
    "Campus Tour-JSLH 2022",
    "https://mui.com/components/selects/#main-content",
    "OP Jindal Global University",
    "Bachelor of Fine Arts [Hons.] Application 2022",
    "14 Jan 2022"
  ),
  createRowData(
    "Campus1 Tour-JSLH 2022",
    "https://mui.com/components/selects/#main-content",
    "OP Jindal Global University",
    "Bachelor of Fine Arts [Hons.] Application 2022",
    "14 Jan 2022"
  ),
  createRowData(
    "Campus2 Tour-JSLH 2022",
    "https://mui.com/components/selects/#main-content",
    "OP Jindal Global University",
    "Bachelor of Fine Arts [Hons.] Application 2022",
    "14 Jan 2022"
  ),
  createRowData(
    "Campus-3 Tour-JSLH 2022",
    "https://mui.com/components/selects/#main-content",
    "OP Jindal Global University",
    "Bachelor of Fine Arts [Hons.] Application 2022",
    "14 Jan 2022"
  ),
  createRowData(
    "Campus-4 Tour-JSLH 2022",
    "https://mui.com/components/selects/#main-content",
    "OP Jindal Global University",
    "Bachelor of Fine Arts [Hons.] Application 2022",
    "14 Jan 2022"
  ),
  createRowData(
    "Campus-5 Tour-JSLH 2022",
    "https://mui.com/components/selects/#main-content",
    "OP Jindal Global University",
    "Bachelor of Fine Arts [Hons.] Application 2022",
    "14 Jan 2022"
  ),
];

const tableHeading = [
  {
    id: "docTitle",
    label: "Document Title",
  },
  {
    id: "docPath",
    label: "Document Path",
  },
  {
    id: "collegeName",
    label: "College Name",
  },
  {
    id: "formName",
    label: "Form Name",
  },
  {
    id: "createOn",
    label: "Created On",
  },
  {
    id: "action",
    label: "Action",
  },
];

function FormManager(props) {
  const [size, setSize] = useState("xs");
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleOpen = (key) => {
    setOpen(true);
    setPlacement(key);
  };

  return (
    <Box component="main" className="" sx={{ flexGrow: 1, py: 2 }}>
      <Container maxWidth={false}>
        <Grid container>
          <Grid item md={12} sm={12} xs={12}>
            <Box>
              <Box className="formManager-main" sx={{ marginBottom: 3 }}>
                <Box className="form-heading-left">
                  <Typography variant="h5">Documents Listing</Typography>
                </Box>
                <Box className="form-heading-right">
                  <Box className="upload_main">
                    <IconButton
                      sx={{
                        marginRight: "12px",
                        border: "1px solid #828DF8",
                      }}
                    >
                      <FilterAlt
                        color="primary"
                        onClick={() => handleOpen("right")}
                      />
                    </IconButton>
                    <Drawer
                      size={size}
                      placement={placement}
                      open={open}
                      onClose={() => setOpen(false)}
                    >
                      <Box className="flt_drawerHeader">
                        <Box className="filterTxt">
                          <Typography variant="h6">Filter By</Typography>
                          <IconButton>
                            <Close onClick={() => setOpen(false)} />
                          </IconButton>
                        </Box>
                      </Box>

                      <Box className="flt_drawerBody">
                        <Box>
                          <SelectPicker
                            // data={data}
                            size="lg"
                            appearance="default"
                            placeholder="University Name..."
                            style={{ width: "100%", marginBottom: "14px" }}
                          />
                        </Box>
                        <Box>
                          <SelectPicker
                            // data={data}
                            size="lg"
                            appearance="default"
                            placeholder="Course Name..."
                            style={{ width: "100%" }}
                          />
                        </Box>
                      </Box>

                      <Drawer.Actions component={Card}>
                        <Box className="column_footer">
                          <Button
                            variant="contained"
                            endIcon={<RestartAltRounded fontSize="small" />}
                            onClick={() => setOpen(false)}
                          >
                            Reset
                          </Button>
                          <Button
                            variant="outlined"
                            onClick={() => setOpen(false)}
                            appearance="primary"
                          >
                            Save Now
                          </Button>
                        </Box>
                      </Drawer.Actions>
                    </Drawer>
                    <Link to="/upload-document">
                      <Button variant="contained">Upload New Document</Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
              <Card {...props}>
                <CardHeader title="Total 111 Documents" />
                <Box className="fm_table">
                  <TableContainer>
                    <Table sx={{ minWidth: 750 }} aria-labelledby="table">
                      <TableHead>
                        <TableRow>
                          {tableHeading.map((tableHead) => (
                            <TableCell key={tableHead.id}>
                              <TableSortLabel>{tableHead.label}</TableSortLabel>
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rowsData.map((row, index) => (
                          <TableRow
                            key={index}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell>
                              <Typography variant="body2">
                                {row.docTitle}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Box
                                sx={{ display: "flex", alignItems: "center" }}
                              >
                                <TextareaAutosize
                                  maxRows={2}
                                  aria-label="maximum height"
                                  style={{ width: 250 }}
                                  defaultValue={row.docPath}
                                />
                                <IconButton>
                                  <ContentCopy />
                                </IconButton>
                                {/* <TextField
                                  fullWidth
                                  name="docPath"
                                  maxRows={2}
                                  defaultValue={row.docPath}
                                /> */}
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Typography variant="body2">
                                {row.collegeName}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="body2">
                                {row.formName}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="body2">
                                {row.createOn}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <IconButton>
                                <Settings />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default FormManager;
