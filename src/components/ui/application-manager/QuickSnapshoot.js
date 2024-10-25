import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { SelectPicker } from "rsuite";
import { Download as DownloadIcon } from "../../../icons/Download";
import ApplicationTrendsGraph from "../../../components/ui/application-manager/chartjs/ApplicationTrendsGraph";
import StageWiseApplicationChart from "../../../components/ui/application-manager/chartjs/StageWiseApplicationChart";
import GeographicalChart from "../../../components/ui/application-manager/chartjs/GeographicalChart";
import ApplicationStageChart from "../../../components/ui/application-manager/chartjs/ApplicationStageChart";

const data = [
  {
    label: "Eugenia",
    value: "Eugenia",
    role: "Master",
  },
  {
    label: "Kariane",
    value: "Kariane",
    role: "Master",
  },
  {
    label: "Louisa",
    value: "Louisa",
    role: "Master",
  },
  {
    label: "Marty",
    value: "Marty",
    role: "Master",
  },
  {
    label: "Kenya",
    value: "Kenya",
    role: "Master",
  },
  {
    label: "Hal",
    value: "Hal",
    role: "Developer",
  },
  {
    label: "Julius",
    value: "Julius",
    role: "Developer",
  },
  {
    label: "Travon",
    value: "Travon",
    role: "Developer",
  },
  {
    label: "Vincenza",
    value: "Vincenza",
    role: "Developer",
  },
  {
    label: "Dominic",
    value: "Dominic",
    role: "Developer",
  },
  {
    label: "Pearlie",
    value: "Pearlie",
    role: "Guest",
  },
  {
    label: "Tyrel",
    value: "Tyrel",
    role: "Guest",
  },
  {
    label: "Jaylen",
    value: "Jaylen",
    role: "Guest",
  },
  {
    label: "Rogelio",
    value: "Rogelio",
    role: "Guest",
  },
];

function QuickSnapshoot(props) {
  const [snapShootTabs, setSnapShootTabs] = useState(1);
  return (
    <Box>
      <Box className="quickSnap_wrapper">
        <Box className="quickTab_main">
          <Box className="quick-tabs">
            <Box
              className={`${snapShootTabs === 1 ? "active" : null} snap-tabs`}
              onClick={() => setSnapShootTabs(1)}
            >
              Applications Trend
            </Box>
            <Box
              className={`${snapShootTabs === 2 ? "active" : null} snap-tabs`}
              onClick={() => setSnapShootTabs(2)}
            >
              Stage-wise Applications
            </Box>
            <Box
              className={`${snapShootTabs === 3 ? "active" : null} snap-tabs`}
              onClick={() => setSnapShootTabs(3)}
            >
              Geographical Segmentation
            </Box>
            <Box
              className={`${snapShootTabs === 4 ? "active" : null} snap-tabs`}
              onClick={() => setSnapShootTabs(4)}
            >
              Application Stages
            </Box>
          </Box>
          <Box className="quick-right-area">
            <Box>
              <SelectPicker
                data={data}
                size="lg"
                style={{ width: 200, marginRight: 10 }}
              />
            </Box>
            <Button
              variant="outlined"
              startIcon={<DownloadIcon fontSize="small" />}
            >
              Download
            </Button>
          </Box>
        </Box>
      </Box>
      <Box className="applicationTrends_graph">
        {snapShootTabs === 1 && <ApplicationTrendsGraph />}
        {snapShootTabs === 2 && <StageWiseApplicationChart />}
        {snapShootTabs === 3 && <GeographicalChart />}
        {snapShootTabs === 4 && <ApplicationStageChart />}
      </Box>
    </Box>
  );
}

export default QuickSnapshoot;
