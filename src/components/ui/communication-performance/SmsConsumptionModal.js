import React, { useState } from "react";
import { Modal } from "rsuite";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { CloseRounded, ForumRounded } from "@mui/icons-material";

function SmsConsumptionModal(props) {
  const { openModalSms, setOpenModalSms } = props;

  return (
    <Box className="modal-container">
      <Modal open={openModalSms} onClose={() => setOpenModalSms(false)}>
        <Box className="modalHeader">
          <Typography variant="h6" className="smsHead">
            SMS Consumption Info
          </Typography>
          <Box>
            <IconButton>
              <CloseRounded onClick={() => setOpenModalSms(false)} />
            </IconButton>
          </Box>
        </Box>
        <Modal.Body>
          <Box className="modalBody">
            <Box className="emailStatic">SMS Statistics</Box>
            <Box className="emailMain">
              <Box className="emailTotal">
                <Box className="e_icon">
                  <ForumRounded fontSize="small" />
                </Box>
                <Typography variant="subtitle2" className="emaiTxt">
                  SMS Allocated
                </Typography>
                <Typography variant="h6" className="total_email">
                  96,20,896
                </Typography>
                <Box className="billable">Billable: 96,20,896</Box>
              </Box>
              <Box className="emailTotal consumed">
                <Box className="e_icon con_icon">
                  <ForumRounded fontSize="small" />
                </Box>
                <Typography variant="subtitle2" className="emaiTxt">
                  SMS Consumed
                </Typography>
                <Typography variant="h6" className="total_email consume_no">
                  10,29,843
                </Typography>
                {/* <Box className="billable con_bill"></Box> */}
              </Box>
              <Box className="emailTotal credit">
                <Box className="e_icon credit_icon">
                  <ForumRounded fontSize="small" />
                </Box>
                <Typography variant="subtitle2" className="emaiTxt">
                  SMS Credit Left
                </Typography>
                <Typography variant="h6" className="total_email credit_no">
                  31,83,153
                </Typography>
                {/* <Box className="billable con_bill"></Box> */}
              </Box>
            </Box>
          </Box>
        </Modal.Body>
      </Modal>
    </Box>
  );
}

export default SmsConsumptionModal;
