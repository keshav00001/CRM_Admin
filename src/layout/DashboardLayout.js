import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Sidebar from "./../components/navigations/sidebar/Sidebar";
import Navbar from "./../components/navigations/navbar/Navbar";
import AppRoutes from "../routes/AppRoutes";

const DashboardLayoutRoot = styled("div")(({ theme }) => ({
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 50,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 60,
  },
}));

function DashboardLayout(props) {
  const [isSideOpen, setSidebarOpen] = useState(true);
  const [width, setWidth] = useState(240);
  const [fixed, setFixed] = useState(false);

  return (
    <>
      <DashboardLayoutRoot>
        <AppRoutes />
      </DashboardLayoutRoot>
      <Sidebar
        width={width}
        fixed={fixed}
        open={isSideOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <Navbar
        fixed={fixed}
        setFixed={setFixed}
        onSidebarOpen={() => setSidebarOpen(true)}
      />
    </>
  );
}

export default DashboardLayout;
