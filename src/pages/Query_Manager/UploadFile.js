import React from 'react';
import {
    Typography,
    Button,
    Box, Divider, IconButton
} from "@mui/material";
import { Link } from 'react-router-dom';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const UploadFile = () => {
    return (
        <div>
            <Typography variant="h5" sx={{ marginTop: "15px", m: 2 }}>
                Choose a file to upload
            </Typography>
            <Divider className="border1" sx={{ mb: 2 }} />
            <Box className="upload_file">
                <IconButton variant="contained">
                    <CloudUploadIcon  className="upload_icon"/>
                </IconButton>
                <Typography>Drag and drop a CSV file here to upload</Typography>
                <Typography>or</Typography>
                <Typography> <Link to="/">Select a file</Link></Typography>

            </Box>
            <Box className="upload_file_btn">
                <Link to="/">Click here to download sample CSV</Link>
                <Link to="/checklist
                ">
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ m: 2 }}
                        className="btn_next"
                    >
                        Back
                    </Button>
                </Link>

            </Box>
        </div>
    );
};

export default UploadFile;