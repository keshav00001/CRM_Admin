import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../../styles/leadDetails.css'
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import { Grid } from '@mui/material';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function LeadDetails() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs id='lead-details-tab-header' value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab className={`lead-details-sub-tabs ${value === 0 && 'lead-details-sub-tabs-active'}`} label="Lead Details" {...a11yProps(0)} icon={<OpenInNewOutlinedIcon className='lead-details-sub-tabs-icon' />} iconPosition="end" />
                    <Tab className={`lead-details-sub-tabs ${value === 1 && 'lead-details-sub-tabs-active'}`} label="Additional Details" {...a11yProps(1)} icon={<OpenInNewOutlinedIcon className='lead-details-sub-tabs-icon' />} iconPosition="end" />

                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    <Grid item xs={2} sm={4} md={3} >
                        <Typography variant='body2' fontWeight='bold'>Form Interested in </Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={9} >
                        <Typography variant='body2' >: MA in Diplomacy Law & Business Application 2022</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        <Typography variant='body2' fontWeight='bold'>Email Address </Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={9} >
                        <Typography variant='body2' >: globalhriday@yahoo.com</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        <Typography variant='body2' fontWeight='bold'>Mobile Number </Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={9} >
                        <Typography variant='body2' >: +91-9606307909</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        <Typography variant='body2' fontWeight='bold'>Alternate Mobile Number </Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={9} >
                        <Typography variant='body2' >: NA</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        <Typography variant='body2' fontWeight='bold'>Name </Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={9} >
                        <Typography variant='body2' >: Hriday Bharat Thakkar</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        <Typography variant='body2' fontWeight='bold'>State </Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={9} >
                        <Typography variant='body2' >: Karnataka</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        <Typography variant='body2' fontWeight='bold'>City </Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={9} >
                        <Typography variant='body2' >: Bengaluru</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        <Typography variant='body2' fontWeight='bold'>Programme Level
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={9} >
                        <Typography variant='body2' >: Post Graduate</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        <Typography variant='body2' fontWeight='bold'>Course
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={9} >
                        <Typography variant='body2' >: M.A. Diplomacy, Law and Business (Residential)</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        <Typography variant='body2' fontWeight='bold'>Mindler Scholarship Hunt Lea
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={9} >
                        <Typography variant='body2' >: NA</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        <Typography variant='body2' fontWeight='bold'>Application Stage
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={9} >
                        <Typography variant='body2' >: Incomplete</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        <Typography variant='body2' fontWeight='bold'>Note
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={9} >
                        <Typography variant='body2' >: no answer - whtsapp sent</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        <Typography variant='body2' fontWeight='bold'>Form Applied
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={9} >
                        <Typography variant='body2' >: MA In Diplomacy Law & Business Application 2022</Typography>
                    </Grid>

                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    <Grid item xs={2} sm={4} md={3} >
                        <Typography variant='body2' fontWeight='bold'>Alternative Mobile Number </Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={9} >
                        <Typography variant='body2' >: NA</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        <Typography variant='body2' fontWeight='bold'>Alternative Email ID </Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={9} >
                        <Typography variant='body2' >: NA</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        <Typography variant='body2' fontWeight='bold'>12th School Name</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={9} >
                        <Typography variant='body2' >: NA</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        <Typography variant='body2' fontWeight='bold'>12th Percentage </Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={9} >
                        <Typography variant='body2' >: NA</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        <Typography variant='body2' fontWeight='bold'>12th subject</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={9} >
                        <Typography variant='body2' >: NA</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        <Typography variant='body2' fontWeight='bold'>Graduation Subjects
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={9} >
                        <Typography variant='body2' >: NA</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        <Typography variant='body2' fontWeight='bold'>Graduation Year</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={9} >
                        <Typography variant='body2' >: NA</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        <Typography variant='body2' fontWeight='bold'>Allocated course</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={9} >
                        <Typography variant='body2' >: NA</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        <Typography variant='body2' fontWeight='bold'>Exam Taken</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={9} >
                        <Typography variant='body2' >: NA</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        <Typography variant='body2' fontWeight='bold'>Graduation College Name</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={9} >
                        <Typography variant='body2' >: NA</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        <Typography variant='body2' fontWeight='bold'>MAT/CAT Composite Percent ile</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={9} >
                        <Typography variant='body2' >: NA</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        <Typography variant='body2' fontWeight='bold'>callback Request</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={9} >
                        <Typography variant='body2' >: NA</Typography>
                    </Grid>
                </Grid>
            </TabPanel>

        </Box>
    );
}

