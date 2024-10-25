import React from "react";
import { Box, Typography, IconButton, Button, TextField } from "@mui/material";
import { Modal } from "rsuite";
import { Close } from "@mui/icons-material";
import SelectType from "./../../../components/ui/application-manager/form/SelectType";

function AddCampaignDetails(props) {
  const { addCampaign, setAddCampaign } = props;
  return (
    <Box className="addCampaign">
      <Modal
        keepMounted
        open={addCampaign}
        onClose={() => setAddCampaign(false)}
      >
        <Box className="campaign-modal-top">
          <Typography className="campHead" variant="h6" component="h2">
            Add Campaign Details
          </Typography>
          <IconButton>
            <Close onClick={() => setAddCampaign(false)} />
          </IconButton>
        </Box>
        <Box className="campaign-modal-inner">
          <Box sx={{ flexGrow: 1, width: "100%" }}>
            <TextField
              sx={{ mt: 2 }}
              fullWidth
              label="Campaign Name..."
              name="file-title"
              type="text"
            />
            <SelectType labelText="Select" />
          </Box>
          <Box className="save_btn" sx={{ mt: 2 }}>
            <Button variant="contained" color="success">
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default AddCampaignDetails;
