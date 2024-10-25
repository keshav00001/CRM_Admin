import React from "react";
import {
  Grid,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Divider,
  Paper,
  Box,
  TablePagination,
} from "@mui/material";
import TableCell from "@mui/material/TableCell";
import "../../styles/UseSession.css";
const UserSessions = () => {
  return (
    <div>
      <Box className="pagination1">
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={5}
          rowsPerPage={5}
          page={0}
        />
        <Button className="refresh">
          <i class="fas fa-sync-alt"></i>
        </Button>
      </Box>

      <Paper sx={{ width: "100%", overflow: "hidden", p: 2 }}>
        <Grid item md={12} sm={12} xs={12}>
          <TableContainer component={Paper}>
            <Table
              sx={{
                minWidth: 650,
              }}
              aria-label="a dense table"
            >
              <TableHead sx={{ backgroundColor: "#F2F9FE" }}>
                <TableRow>
                  <TableCell align="left" width={"10%"}>
                    Username
                  </TableCell>
                  <TableCell align="left" width={"15%"}>
                    Role
                  </TableCell>
                  <TableCell align="left" width={"10%"}>
                    Email Id
                  </TableCell>
                  <TableCell align="left" width={"15%"}>
                    Session Starts
                  </TableCell>
                  <TableCell align="left" width={"15%"}>
                    Session Expires
                  </TableCell>
                  <TableCell align="left" width={"10%"}>
                    Source IP
                  </TableCell>
                  <TableCell align="left" width={"50%"}>
                    Last Activity
                  </TableCell>
                  <TableCell align="left" width={"8%"}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* second row */}
                <TableRow hover>
                  <TableCell component="th" scope="row">
                    Harsh Sinha
                  </TableCell>
                  <TableCell align="left">College Admin</TableCell>
                  <TableCell align="left">harsh.sinha@jklu.edu.in</TableCell>
                  <TableCell align="left">27/11/2021</TableCell>
                  <TableCell align="left">-</TableCell>
                  <TableCell align="left">119.82.83.81 </TableCell>
                  <TableCell align="left">
                    Harsh Sinha [college Admin] Logged in System at 27/11/2021
                    10:27:44 AM from Source IP 119.82.83.81{" "}
                  </TableCell>
                  <TableCell align="center">
                    <i class="fas fa-cog"></i>
                  </TableCell>
                </TableRow>
                <Divider />
                {/* third row */}
                <TableRow hover>
                  <TableCell component="th" scope="row">
                    Harsh Sinha
                  </TableCell>
                  <TableCell align="left">College Admin</TableCell>
                  <TableCell align="left">harsh.sinha@jklu.edu.in</TableCell>
                  <TableCell align="left">26/11/2021 5.50pm</TableCell>

                  <TableCell align="left">Session Auto logout</TableCell>
                  <TableCell align="left">119.82.83.81 </TableCell>
                  <TableCell align="left">
                    Harsh Sinha [college Admin] Logged in System at 27/11/2021
                    10:27:44 AM from Source IP 119.82.83.81{" "}
                  </TableCell>
                  <TableCell align="center">
                    <i class="fas fa-cog"></i>
                  </TableCell>
                </TableRow>
                <Divider />
                {/* forth row */}
                <TableRow hover>
                  <TableCell component="th" scope="row">
                    Abhik Gupta
                  </TableCell>
                  <TableCell align="left">Counsellor</TableCell>
                  <TableCell align="left">abhik.gupta@jklu.edu.in</TableCell>
                  <TableCell align="left">26/11/2021 12.53pm</TableCell>
                  <TableCell align="left">Session Auto logout</TableCell>
                  <TableCell align="left">115.243.180.170 </TableCell>
                  <TableCell align="left">
                    {" "}
                    Abhik Gupta [college Admin] Logged in System at 27/11/2021
                    10:27:44 AM from Source IP 119.82.83.81
                  </TableCell>
                  <TableCell align="center">
                    <i class="fas fa-cog"></i>
                  </TableCell>
                </TableRow>
                <Divider />
                {/* fifth row */}
                <TableRow hover>
                  <TableCell component="th" scope="row">
                    Harsh Sinha
                  </TableCell>
                  <TableCell align="left">College Admin</TableCell>
                  <TableCell align="left">harsh.sinha@jklu.edu.in</TableCell>
                  <TableCell align="left">27/11/2021</TableCell>
                  <TableCell align="left">Session Auto logout</TableCell>
                  <TableCell align="left">119.82.83.81 </TableCell>
                  <TableCell align="left">
                    Harsh Sinha [college Admin] Logged in System at 27/11/2021
                    10:27:44 AM from Source IP 119.82.83.81{" "}
                  </TableCell>
                  <TableCell align="center">
                    <i class="fas fa-cog"></i>
                  </TableCell>
                </TableRow>
                {/* sixth row */}
                <TableRow hover>
                  <TableCell component="th" scope="row">
                    Harsh Sinha
                  </TableCell>
                  <TableCell align="left">College Admin</TableCell>
                  <TableCell align="left">harsh.sinha@jklu.edu.in</TableCell>
                  <TableCell align="left">27/11/2021</TableCell>
                  <TableCell align="left">Session Auto logout</TableCell>
                  <TableCell align="left">119.82.83.81 </TableCell>
                  <TableCell align="left">
                    Harsh Sinha [college Admin] Logged in System at 27/11/2021
                    10:27:44 AM from Source IP 119.82.83.81{" "}
                  </TableCell>
                  <TableCell align="center">
                    <i class="fas fa-cog"></i>
                  </TableCell>
                </TableRow>
                {/* seventh row */}
                <TableRow hover>
                  <TableCell component="th" scope="row">
                    Girija Pareek
                  </TableCell>
                  <TableCell align="left">Counsellor</TableCell>
                  <TableCell align="left">girija.pareek@jklu.edu.in</TableCell>
                  <TableCell align="left">24/11/2021 2:54 PM</TableCell>
                  <TableCell align="left">Session Auto logout</TableCell>
                  <TableCell align="left">115.243.180.170 </TableCell>
                  <TableCell align="left">
                    Girija Pareek [Counsellor] Logged in System at 24/11/2021
                    2:54 PM from Source IP 115.243.180.170{" "}
                  </TableCell>
                  <TableCell align="center">
                    <i class="fas fa-cog"></i>
                  </TableCell>
                </TableRow>
                {/* eighth row */}
                <TableRow hover>
                  <TableCell component="th" scope="row">
                    Harsh Sinha
                  </TableCell>
                  <TableCell align="left">College Admin</TableCell>
                  <TableCell align="left">harsh.sinha@jklu.edu.in</TableCell>
                  <TableCell align="left">27/11/2021</TableCell>
                  <TableCell align="left">Session Auto logout</TableCell>
                  <TableCell align="left">119.82.83.81 </TableCell>
                  <TableCell align="left">
                    Harsh Sinha [college Admin] Logged in System at 27/11/2021
                    10:27:44 AM from Source IP 119.82.83.81{" "}
                  </TableCell>
                  <TableCell align="center">
                    <i class="fas fa-cog"></i>
                  </TableCell>
                </TableRow>
                {/* ninth row */}
                <TableRow hover>
                  <TableCell component="th" scope="row">
                    Harsh Sinha
                  </TableCell>
                  <TableCell align="left">College Admin</TableCell>
                  <TableCell align="left">harsh.sinha@jklu.edu.in</TableCell>
                  <TableCell align="left">27/11/2021</TableCell>
                  <TableCell align="left">Session Auto logout</TableCell>
                  <TableCell align="left">119.82.83.81 </TableCell>
                  <TableCell align="left">
                    Harsh Sinha [college Admin] Logged in System at 27/11/2021
                    10:27:44 AM from Source IP 119.82.83.81{" "}
                  </TableCell>
                  <TableCell align="center">
                    <i class="fas fa-cog"></i>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Paper>
    </div>
  );
};

export default UserSessions;
