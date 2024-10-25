import React from "react";
import { Modal } from "rsuite";
import { Box, Button, IconButton, Typography } from "@mui/material";
import {
  CloseRounded,
  SendRounded,
  CheckCircleOutlineRounded,
  PinDropRounded,
  ErrorOutlineRounded,
  DraftsOutlined,
  InfoOutlined,
  ArrowRightOutlined,
  NotInterestedOutlined,
  RemoveCircleOutlineOutlined,
} from "@mui/icons-material";

function DeliveryReport(props) {
  const { deliveryReport, setDeliveryReport } = props;
  return (
    <Box className="modal-container">
      <Modal open={deliveryReport} onClose={() => setDeliveryReport(false)}>
        <Box className="modalHeader">
          <Typography variant="h6" className="">
            Delivery Report
          </Typography>
          <Box>
            <IconButton>
              <CloseRounded onClick={() => setDeliveryReport(false)} />
            </IconButton>
          </Box>
        </Box>
        <Modal.Body>
          <Box className="report_body">
            <Box className="report_main">
              <Box className="rpt_icon">
                <SendRounded size="small" />
              </Box>
              <Box className="rpt_report">
                <Typography variant="body1" className="report_txt">
                  Sent To
                </Typography>
              </Box>
              <Box className="rpt_total">
                <Typography variant="body1" className="report_txt">
                  2703
                </Typography>
              </Box>
            </Box>
            <Box className="report_main">
              <Box className="rpt_icon deliv_icon">
                <CheckCircleOutlineRounded size="small" />
              </Box>
              <Box className="rpt_report">
                <Typography variant="body1" className="report_txt">
                  delivered
                </Typography>
              </Box>
              <Box className="rpt_total">
                <Typography variant="body1" className="report_txt">
                  2476
                </Typography>
              </Box>
            </Box>
            <Box className="report_main">
              <Box className="rpt_icon drop_icon">
                <PinDropRounded size="small" />
              </Box>
              <Box className="rpt_report">
                <Typography variant="body1" className="report_txt">
                  Dropped
                </Typography>
              </Box>
              <Box className="rpt_total">
                <Typography variant="body1" className="report_txt">
                  205
                </Typography>
              </Box>
            </Box>
            <Box className="report_main">
              <Box className="rpt_icon span_icon">
                <ErrorOutlineRounded size="small" />
              </Box>
              <Box className="rpt_report">
                <Typography variant="body1" className="report_txt">
                  Spam
                </Typography>
              </Box>
              <Box className="rpt_total">
                <Typography variant="body1" className="report_txt">
                  0
                </Typography>
              </Box>
            </Box>
            <Box className="report_main">
              <Box className="rpt_icon open_icon">
                <DraftsOutlined size="small" />
              </Box>
              <Box className="rpt_report">
                <Typography variant="body1" className="report_txt">
                  Opened
                </Typography>
              </Box>
              <Box className="rpt_total">
                <Typography variant="body1" className="report_txt">
                  248
                </Typography>
              </Box>
            </Box>
            <Box className="report_main">
              <Box className="rpt_icon clk_icon">
                <ArrowRightOutlined size="small" />
              </Box>
              <Box className="rpt_report">
                <Typography variant="body1" className="report_txt">
                  Clicked
                </Typography>
              </Box>
              <Box className="rpt_total">
                <Typography variant="body1" className="report_txt">
                  14
                </Typography>
              </Box>
            </Box>
            <Box className="report_main">
              <Box className="rpt_icon bounce_icon">
                <InfoOutlined size="small" />
              </Box>
              <Box className="rpt_report">
                <Typography variant="body1" className="report_txt">
                  Bounced
                </Typography>
              </Box>
              <Box className="rpt_total">
                <Typography variant="body1" className="report_txt">
                  22
                </Typography>
              </Box>
            </Box>
            <Box className="report_main">
              <Box className="rpt_icon invalid_icon">
                <NotInterestedOutlined size="small" />
              </Box>
              <Box className="rpt_report">
                <Typography variant="body1" className="report_txt">
                  InValid
                </Typography>
              </Box>
              <Box className="rpt_total">
                <Typography variant="body1" className="report_txt">
                  0
                </Typography>
              </Box>
            </Box>
            <Box className="report_main">
              <Box className="rpt_icon unsubs_icon">
                <RemoveCircleOutlineOutlined size="small" />
              </Box>
              <Box className="rpt_report">
                <Typography variant="body1" className="report_txt">
                  Unsubscribe
                </Typography>
              </Box>
              <Box className="rpt_total">
                <Typography variant="body1" className="report_txt">
                  3
                </Typography>
              </Box>
            </Box>
          </Box>
        </Modal.Body>
      </Modal>
    </Box>
  );
}

export default DeliveryReport;
