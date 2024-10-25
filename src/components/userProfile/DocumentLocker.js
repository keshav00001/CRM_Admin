import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import '../../styles/documentLocker.css'

const DocumentLocker = () => {
    return (
        <Box>
            <Box sx={{ pb: 1, pt: 1 }} id='document-locker-tab-top-section'>
                <Typography pl={2} variant='h6'> Document Locker</Typography>
                <Box id='document-locker-tab-action-and-filter'>
                    <Stack direction="row" spacing={2}>
                        <Button className='document-locker-button' size='small' variant="outlined" startIcon={<FileDownloadOutlinedIcon />}>
                            Download All
                        </Button>
                    </Stack>
                </Box>
            </Box>
            <Divider></Divider>
            <Box>
                <Typography pl={2} className='document-locker-sub-title'>Application Name - B.A. (Hons.) - Diplomacy & Foreign Policy Application 2022</Typography>
            </Box>

            <Box sx={{ pl: 2, mt: 2 }} >
                <Grid sx={{ ml: 2 }} rowSpacing={{ xs: 1, sm: 2, md: 3 }} container columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={2} sm={2} md={3.5}>
                        < Typography className='document-locker-single-document-text' variant='body2'> Upload Your Recent Passport Size Photograph(Selfies not accepted)</Typography>
                    </Grid>
                    <Grid item xs={2} sm={6} md={8.5}>
                        <Button className='document-locker-button' size='small' variant="outlined" startIcon={<FileDownloadOutlinedIcon />}>
                            Download
                        </Button>

                    </Grid>
                    <Grid item xs={2} sm={2} md={3.5}>
                        < Typography className='document-locker-single-document-text' variant='body2'> Personal Statement</Typography>
                    </Grid>
                    <Grid item xs={2} sm={6} md={8.5}>
                        <Button className='document-locker-button' size='small' variant="outlined" startIcon={<FileDownloadOutlinedIcon />}>
                            Download
                        </Button>

                    </Grid>
                    <Grid item xs={2} sm={2} md={3.5}>
                        < Typography className='document-locker-single-document-text' variant='body2'> Upload Your 10th MarkSheet</Typography>
                    </Grid>
                    <Grid item xs={2} sm={6} md={8.5}>
                        <Button className='document-locker-button' size='small' variant="outlined" startIcon={<FileDownloadOutlinedIcon />}>
                            Download
                        </Button>

                    </Grid>
                    <Grid item xs={2} sm={2} md={3.5}>
                        < Typography className='document-locker-single-document-text' variant='body2'> Upload Your 12th MarkSheet</Typography>
                    </Grid>
                    <Grid item xs={2} sm={6} md={8.5}>
                        <Button className='document-locker-button' size='small' variant="outlined" startIcon={<FileDownloadOutlinedIcon />}>
                            Download
                        </Button>

                    </Grid>
                </Grid>
            </Box>

        </Box >
    );
};

export default DocumentLocker;