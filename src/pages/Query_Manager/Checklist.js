import React from 'react';
import {
    Typography,
    Button,
    Box, Card, Switch, Divider
} from "@mui/material";
import '../../styles/Checklist.css';
import { Link } from 'react-router-dom'

const label = { inputProps: { 'aria-label': 'Switch demo' } };
const Checklist = () => {
    return (
        <div>
            <Typography variant="h5" sx={{ marginTop: "15px", m: 2 }}>
                Checklist - Review few things before you starts
            </Typography>
            <Divider className="border" sx={{ mb: 2 }} />
            <Card sx={{ width: "90%", mb: 2, p: 2 }}>
                <Typography variant="h6" className='checklist_text'>  <Switch {...label} />The file is in CSV format.(Download a sample CSV file here)</Typography>
                <Typography variant="small" className='checklist_text1'>Using a excel sheet? Change a .XLS sheet as a CSV afile using "Save As".</Typography>
            </Card>
            <Card sx={{ width: "90%", mb: 2, p: 2 }}>
                <Typography variant="h6" className='checklist_text'>  <Switch {...label} />First row of sheet must have header labels</Typography>
                <Typography variant="small" className='checklist_text1'>Nopaperforms will use each column header to match will internal header label for better mapping and maintaining proper import data</Typography>
            </Card>
            <Card sx={{ width: "90%", mb: 2, p: 2 }}>
                <Typography variant="h6" className='checklist_text'>  <Switch {...label} /> Each row must contain valid email id or mobile number.</Typography>
                <Typography variant="small" className='checklist_text1'>Either email id or mobile number in each row is must for upload a CSV file.Increase both are missing, that perticular row data will not imported. Till the time either email id or mobile number is unique in a row of sheet, vontact will be imported.</Typography>
            </Card>
            <Card sx={{ width: "90%", mb: 2, p: 2 }}>
                <Typography variant="h6" className='checklist_text'><Switch {...label} sx={{ ml: 0 }} /> If email id and contact number already exist in the sheet or
                    list earlier will be skipped.</Typography>
                <Typography variant="small" className='checklist_text1'>When you import a contact having email id and mobile number that is already in our perticular list datanase, that contact record will be skipped.</Typography>
            </Card>
            <Box sx={{ display: "flex" }}>
                <Card sx={{ width: "90%", mb: 2, p: 2 }}>
                    <Typography variant="h6" className='checklist_text'>  <Switch {...label} /> Assign a tag to each sheet(optional)</Typography>
                    <Typography variant="small" className='checklist_text1'>Tags allow you to identify your contacts of a specific sheet or even you can assign a tag to identify how you obtained their information.</Typography>
                </Card>
            </Box>
            <Link to="/uploadfile">
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ m: 2 }}
                    className="btn_next"
                >
                    Next
                </Button>
            </Link>
        </div>
    );
};

export default Checklist;