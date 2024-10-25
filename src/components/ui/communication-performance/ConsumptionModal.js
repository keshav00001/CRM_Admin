import React, { useState } from "react";
import { Modal } from "rsuite";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { CloseRounded, MailOutlineRounded } from "@mui/icons-material";

function ConsumptionModal(props) {
  const { openModal, setOpenModal } = props;

  return (
    <Box className="modal-container">
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box className="modalHeader">
          <Typography variant="h6" className="info_head">
            Email Consumption Info
          </Typography>
          <Box>
            <IconButton>
              <CloseRounded onClick={() => setOpenModal(false)} />
            </IconButton>
          </Box>
        </Box>
        <Modal.Body>
          <Box className="modalBody">
            <Box className="emailStatic">Email Statistics</Box>
            <Box className="emailMain">
              <Box className="emailTotal">
                <Box className="e_icon">
                  <MailOutlineRounded fontSize="small" />
                </Box>
                <Typography variant="subtitle2" className="emaiTxt">
                  Email Allocated
                </Typography>
                <Typography variant="h6" className="total_email">
                  46,12,996
                </Typography>
                <Box className="billable">Billable: 46,12,996</Box>
              </Box>
              <Box className="emailTotal consumed">
                <Box className="e_icon con_icon">
                  <MailOutlineRounded fontSize="small" />
                </Box>
                <Typography variant="subtitle2" className="emaiTxt">
                  Email Consumed
                </Typography>
                <Typography variant="h6" className="total_email consume_no">
                  10,29,843
                </Typography>
                {/* <Box className="billable con_bill"></Box> */}
              </Box>
              <Box className="emailTotal credit">
                <Box className="e_icon credit_icon">
                  <MailOutlineRounded fontSize="small" />
                </Box>
                <Typography variant="subtitle2" className="emaiTxt">
                  Email Credit Left
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

export default ConsumptionModal;
