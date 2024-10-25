import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LinkIcon from '@mui/icons-material/Link';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';
import '../styles/userprofileTablelayout.css'
import LeadDetails from '../components/userProfile/LeadDetails';
import TimeLineTab from '../components/userProfile/TimeLineTab';
import FollowUpAndNotes from '../components/userProfile/FollowUpAndNotes';
import CommunicationLog from '../components/userProfile/CommunicationLog';
import DocumentLocker from '../components/userProfile/DocumentLocker';
import TicketManager from '../components/userProfile/TicketManager';
import CallLogs from '../components/userProfile/CallLogs';
import { useMediaQuery } from '@mui/material';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
            style={{ width: '100%' }}
        >
            {value === index && (
                <Box >
                    {children}
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
    };



    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}

        >
            <Tabs
                orientation={'vertical'}
                variant={"scrollable"}
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{
                    width: '270px',
                    '& .MuiTabs-indicator': {
                        fontSize: 12,
                        fontWeight: 'normal',
                        top: -6,
                        backgroundColor: 'unset',
                        display: 'none'
                    }
                }}


            >
                <Tab className={`user-profile-table-layout-tab ${value === 0 ? 'user-profile-table-layout-tab-active' : 'user-profile-table-layout-tab-box-shadow'}`} icon={<PersonOutlineIcon />} iconPosition="start" label="Lead Details" {...a11yProps(0)} />

                <Tab className={`user-profile-table-layout-tab ${value === 1 ? 'user-profile-table-layout-tab-active' : 'user-profile-table-layout-tab-box-shadow'}`} icon={<AccessTimeIcon />} iconPosition="start" label="Timeline" {...a11yProps(1)} />

                <Tab className={`user-profile-table-layout-tab ${value === 2 ? 'user-profile-table-layout-tab-active' : 'user-profile-table-layout-tab-box-shadow'}`} icon={<LinkIcon />} iconPosition="start" label="Followup And Notes" {...a11yProps(2)} />

                <Tab className={`user-profile-table-layout-tab ${value === 3 ? 'user-profile-table-layout-tab-active' : 'user-profile-table-layout-tab-box-shadow'}`} icon={<MailOutlineIcon />} iconPosition="start" label="Communications Logs" {...a11yProps(3)} />

                <Tab className={`user-profile-table-layout-tab ${value === 4 ? 'user-profile-table-layout-tab-active' : 'user-profile-table-layout-tab-box-shadow'}`} icon={<FolderOpenIcon />} iconPosition="start" label="Document Locker" {...a11yProps(4)} />

                <Tab className={`user-profile-table-layout-tab ${value === 5 ? 'user-profile-table-layout-tab-active' : 'user-profile-table-layout-tab-box-shadow'}`} icon={<ConfirmationNumberOutlinedIcon />} iconPosition="start" label="Ticket" {...a11yProps(5)} />

                <Tab className={`user-profile-table-layout-tab ${value === 6 ? 'user-profile-table-layout-tab-active' : 'user-profile-table-layout-tab-box-shadow'}`} icon={<WifiCalling3OutlinedIcon />} iconPosition="start" label="Call Logs" {...a11yProps(6)} />

            </Tabs>
            {/* lead details section  */}
            <TabPanel value={value} index={0}>
                <LeadDetails></LeadDetails>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TimeLineTab timeLineData={props?.timeLineData}></TimeLineTab>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <FollowUpAndNotes handleFollowupDrawer={props?.handleFollowupDrawer} handleNoteDrawer={props?.handleNoteDrawer} followUpData={props?.followUpData}></FollowUpAndNotes>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <CommunicationLog communicationData={props?.communicationData}></CommunicationLog>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <DocumentLocker></DocumentLocker>
            </TabPanel>
            <TabPanel value={value} index={5}>
                <TicketManager></TicketManager>
            </TabPanel>

            <TabPanel value={value} index={6}>
                <CallLogs callLogs={props?.callLogs}></CallLogs>
            </TabPanel>

        </Box>
    );
}