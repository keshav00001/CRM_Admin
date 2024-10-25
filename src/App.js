import React from "react";
import DashboardLayout from "./layout/DashboardLayout";
import { LayoutSettingProvider } from "../src/store/contexts/LayoutSetting";

function App() {
  return (
    <div className="App">
      <LayoutSettingProvider>
        <DashboardLayout />
      </LayoutSettingProvider>
    </div>
  );
}

export default App;
