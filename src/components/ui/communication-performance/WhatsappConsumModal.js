import React, { useState } from "react";
import { Modal } from "rsuite";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { CloseRounded, WhatsappRounded } from "@mui/icons-material";

function WhatsappConsumModal(props) {
  const { openModalWhatsapp, setOpenModalWhatsapp } = props;

  return (
    <Box className="modal-container">
      <Modal
        open={openModalWhatsapp}
        onClose={() => setOpenModalWhatsapp(false)}
      >
        <Box className="modalHeader">
          <Typography variant="h6" className="whatsappHead">
            WhatsApp Consumption Info
          </Typography>
          <Box>
            <IconButton>
              <CloseRounded onClick={() => setOpenModalWhatsapp(false)} />
            </IconButton>
          </Box>
        </Box>
        <Modal.Body>
          <Box className="modalBody">
            <Box className="emailStatic">WhatsApp Statistics</Box>
            <Box className="emailMain">
              <Box className="emailTotal">
                <Box className="e_icon">
                  <WhatsappRounded fontSize="small" />
                </Box>
                <Typography variant="subtitle2" className="emaiTxt">
                  WhatsApp Allocated
                </Typography>
                <Typography variant="h6" className="total_email">
                  96,20,896
                </Typography>
                <Box className="billable">Billable: 96,20,896</Box>
              </Box>
              <Box className="emailTotal consumed">
                <Box className="e_icon con_icon">
                  <WhatsappRounded fontSize="small" />
                </Box>
                <Typography variant="subtitle2" className="emaiTxt">
                  WhatsApp Consumed
                </Typography>
                <Typography variant="h6" className="total_email consume_no">
                  10,29,843
                </Typography>
                {/* <Box className="billable con_bill"></Box> */}
              </Box>
              <Box className="emailTotal credit">
                <Box className="e_icon credit_icon">
                  <WhatsappRounded fontSize="small" />
                </Box>
                <Typography variant="subtitle2" className="emaiTxt">
                  WhatsApp Credit Left
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

export default WhatsappConsumModal;
