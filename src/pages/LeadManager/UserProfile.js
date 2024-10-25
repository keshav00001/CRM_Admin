import { Box, Grid, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import '../../styles/userProfile.css'
import ApplicationHeader from '../../components/userProfile/ApplicationHeader';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';
import { tooltipClasses } from '@mui/material/Tooltip';
import FollowUpListUpdate from '../../components/userProfile/FollowUpListUpdate';
import AddNote from '../../components/userProfile/AddNote';
import SmsAndWhatsapp from '../../components/userProfile/SmsAndWhatsapp';
import Mail from '../../components/userProfile/Mail';
import PoperComponent from '../../components/userProfile/PoperComponent';
import ChangeApplicationStages from '../../components/userProfile/ChangeApplicationStages';
import VerticalTabs from '../../layout/UserProfileTableLayout';

const UserProfile = () => {
    const userDetails = {
        userName: 'Hriday Vharat Thakur',
        userApplicationStage: 'incomplete',
        userLeadStage: 'no response',
        userEmail: 'globalHridoy@yahoo.com',
        userMobile: '+91-9965426278',
        addedOn: '14 JAN 2022',
        lastActiveDate: '20 JAN 2022',
        lastActiveTime: '01:46 PM',
        communicationStatus: {
            emailSent: 6,
            smsSent: 3,
            whatAppSent: 0,

        },
        upcomingFollowUp: 'NA',
        telephonyStatus: {
            inboundCall: 0,
            outBoundCall: 0
        },
        assignedCounselor: 'Chetna',
        leadSource: 'Direct'

    }
    const BootstrapTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} arrow classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.arrow}`]: {
            color: theme.palette.common.black,
        },
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: theme.palette.common.black,
        },
    }));



    const [openDialogsApplication, setOpenDialogsApplication] = React.useState(false);
    const handleClickOpenDialogsApplication = () => {
        setOpenDialogsApplication(true);
    };

    const handleCloseDialogsApplication = () => {
        setOpenDialogsApplication(false);
    };

    const [openDialogsFollowup, setOpenDialogsFollowup] = React.useState(false);
    const handleClickOpenDialogsFollowup = () => {
        setOpenDialogsFollowup(true);
    };
    const handleCloseDialogsFollowup = () => {
        setOpenDialogsFollowup(false);
    };

    const [openDialogsNote, setOpenDialogsNote] = React.useState(false);
    const handleClickOpenDialogsNote = () => {
        setOpenDialogsNote(true);
    };
    const handleCloseDialogsNote = () => {
        setOpenDialogsNote(false);
    };
    const [openDialogsSms, setOpenDialogsSms] = React.useState(false);
    const handleClickOpenDialogsSms = () => {
        setOpenDialogsSms(true);
    };
    const handleCloseDialogsSms = () => {
        setOpenDialogsSms(false);
    };
    const [openDialogsWhatsapp, setOpenDialogsWhatsapp] = React.useState(false);
    const handleClickOpenDialogsWhatsapp = () => {
        setOpenDialogsWhatsapp(true);
    };
    const handleCloseDialogsWhatsapp = () => {
        setOpenDialogsWhatsapp(false);
    };






    const [isComposeOpen, setIsComposeOpen] = useState(false)


    const handleComposeClick = () => {

        setIsComposeOpen(true)
    };

    const handleComposerClose = () => {
        setIsComposeOpen(false)
    };

    const [openPopper1, setOpenPopper1] = React.useState(false);
    const [anchorEl1, setAnchorEl1] = React.useState(null);

    const handleClickPopper1 = (event) => {
        setAnchorEl1(event.currentTarget);
        setOpenPopper1((previousOpen) => !previousOpen);
    };
    const [openPopper2, setOpenPopper2] = React.useState(false);
    const [anchorEl2, setAnchorEl2] = React.useState(null);

    const handleClickPopper2 = (event) => {
        setAnchorEl2(event.currentTarget);
        setOpenPopper2((previousOpen) => !previousOpen);
    };

    const timeLineData = [
        { timelineAbout: 'application', timeLineDataDate: '20 Jan 2022', timeLineDataTime: '01:46 PM', timeLineDataText: 'Hriday Bharat Thakkar completed Stage Number:5,Stage Name:Academic Details for the Form: MA in Diplomacy Law & Business Application 2022' }
        ,
        { timelineAbout: 'application', timeLineDataDate: '18 Jan 2022', timeLineDataTime: '07:46 PM', timeLineDataText: 'Hriday Bharat Thakkar completed Stage Number:5,Stage Name:Academic Details for the Form: MA in Diplomacy Law & Business Application 2022' }
        ,
        { timelineAbout: 'application', timeLineDataDate: '16 Jan 2022', timeLineDataTime: '12:46 PM', timeLineDataText: 'Hriday Bharat Thakkar completed Stage Number:5,Stage Name:Academic Details for the Form: MA in Diplomacy Law & Business Application 2022' }
        ,
        { timelineAbout: 'application', timeLineDataDate: '15 Jan 2022', timeLineDataTime: '08:46 PM', timeLineDataText: 'Hriday Bharat Thakkar completed Stage Number:5,Stage Name:Academic Details for the Form: MA in Diplomacy Law & Business Application 2022' }
        ,
        { timelineAbout: 'payment', timeLineDataDate: '15 Jan 2022', timeLineDataTime: '01:30 AM', timeLineDataText: 'Hriday completed payment using Online payment mode of Amount: 1014.8 INR with Application Number: IAMA220112 for Form: MA in Diplomacy Law & Business Application 2022.' }
        ,
        { timelineAbout: 'payment', timeLineDataDate: '15 Jan 2022', timeLineDataTime: '01:30 AM', timeLineDataText: 'Payment completed mail sent to the Hriday on globalhriday@yahoo.com Warto' }
        ,
        { timelineAbout: 'payment', timeLineDataDate: '15 Jan 2022', timeLineDataTime: '01:30 AM', timeLineDataText: 'Payment completed SMS sent to the Hriday on 9606307909' }

    ]

    const followUpData = [
        { timelineAbout: 'note', timeLineDataDate: '19 Jan 2022', timeLineDataTime: '01:46 PM', note: 'no answer Whats app sent', addedBy: 'Chetna' }
        ,
        { timelineAbout: 'followup', timeLineDataDate: '17 Jan 2022', timeLineDataTime: '01:46 PM', followupNote: 'with Hriday Vharat Thakur', assignedTo: 'Chetna', due: '19 JAN 11:21 Am', createdBy: 'Chetna', status: 'Completed' }
        ,

        { timelineAbout: 'note', timeLineDataDate: '16 Jan 2022', timeLineDataTime: '01:46 PM', note: 'no answer ', addedBy: 'Chetna' }
    ]

    const communicationData = [

        { timelineAbout: 'note', timeLineDataDate: '16 Jan 2022', timeLineDataTime: '01:46 PM', initiatedText: 'Chetna (Counsellor) initiated whatsapp conversation on 9606307909' },

        { timelineAbout: 'note', timeLineDataDate: '16 Jan 2022', timeLineDataTime: '01:46 PM', emailText: 'Hriday Bharat Thakkar clicked email on globalhriday@yahoo.com with subject line:', emailSubjectLine: 'Masters in Diplomacy. Law and Business at Jindal School of International Affairs ({ud.name | Registered Name}}' }
        ,
        { timelineAbout: 'note', timeLineDataDate: '16 Jan 2022', timeLineDataTime: '01:46 PM', emailText: 'Hriday Bharat Thakkar clicked email on globalhriday@yahoo.com with subject line:', emailSubjectLine: 'Masters in Diplomacy. Law and Business at Jindal School of International Affairs ({ud.name | Registered Name}}' }
        ,
        { timelineAbout: 'note', timeLineDataDate: '16 Jan 2022', timeLineDataTime: '01:46 PM', emailText: 'Hriday Bharat Thakkar clicked email on globalhriday@yahoo.com with subject line:', emailSubjectLine: 'Masters in Diplomacy. Law and Business at Jindal School of International Affairs ({ud.name | Registered Name}}' }
        ,
        { timelineAbout: 'note', timeLineDataDate: '16 Jan 2022', timeLineDataTime: '01:46 PM', emailText: 'Hriday Bharat Thakkar clicked email on globalhriday@yahoo.com with subject line:', emailSubjectLine: 'Masters in Diplomacy. Law and Business at Jindal School of International Affairs ({ud.name | Registered Name}}' }
        ,
        { timelineAbout: 'note', timeLineDataDate: '16 Jan 2022', timeLineDataTime: '01:46 PM', emailText: 'Hriday Bharat Thakkar clicked email on globalhriday@yahoo.com with subject line:', emailSubjectLine: 'Masters in Diplomacy. Law and Business at Jindal School of International Affairs ({ud.name | Registered Name}}' }
        ,


    ]

    const callLogs = [
        { timelineAbout: 'call', timeLineDataDate: '20 Jan 2022', timeLineDataTime: '01:46 PM', callText: 'Mansi Singh (Counsellor) has initiated an Outbound Call to ASEES MANKU on 8800927124 at 2022-01-19 11:07:41 AM-In-App Calling)' }
        ,
        { timelineAbout: 'call', timeLineDataDate: '18 Jan 2022', timeLineDataTime: '07:46 PM', callText: 'Mansi Singh (Counsellor) called ASEES MANKU and had a conversation for 104 Seconds at 18-01-2022 05:40:44 PM.' }
    ]

    return (
        <Box sx={{ p: 2, mr: 6 }}>

            <Box sx={{ display: 'flex' }}>
                <Box

                    sx={{ flexGrow: 1, bgcolor: 'background.default', marginTop: '-60px' }}
                >
                    <Toolbar />
                    <Box sx={{ mb: 1 }} >
                        <Grid justifyContent="space-between" container columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={6} sm={6} md={6}>
                                <Typography variant='h5'> Applications Details</Typography>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>

                                <button id='user-profile-top-arrow-button'><i className="fas fa-angle-right"></i></button>
                            </Grid>
                        </Grid>

                    </Box>

                    {/* application header  */}
                    <Box>
                        <ApplicationHeader handleChangeApplicationDrawer={handleClickOpenDialogsApplication} userDetails={userDetails}></ApplicationHeader>
                    </Box>

                    {/* user application stages  */}
                    <Box sx={{ mt: 1 }} id='user-application-all-stages'>
                        <Box sx={{ mt: { xs: 1 } }} className="shape-outer sign-right">

                            <Box className="shape-inner sign-right">
                                <Typography align='center' sx={{ fontWeight: 'bold', fontSize: '14px' }} >Unverified</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ mt: { xs: 1 } }} className="shape-outer chevron-right">
                            <Box className="shape-inner chevron-right">
                                <Typography align='center' sx={{ fontWeight: 'bold', fontSize: '14px' }} >Verified</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ mt: { sm: 1, xs: 1 } }} className="shape-outer chevron-right">
                            <Box className="shape-inner chevron-right">
                                <Typography align='center' sx={{ fontWeight: 'bold', fontSize: '14px', pl: 2 }} >
                                    Application Started
                                    <span
                                        style={{ cursor: 'pointer' }}
                                        onClick={handleClickPopper1} className='user-profile-application-stages-span-notification'>1</span>

                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ mt: { sm: 1, xs: 1 } }} className="shape-outer chevron-right">
                            <Box id='user-application-stages-payment' className="shape-inner chevron-right">
                                <Typography align='center' sx={{ fontWeight: 'bold', fontSize: '14px', pl: 2 }} >Payment Approved
                                    <span
                                        style={{ cursor: 'pointer' }}
                                        onClick={handleClickPopper2} className='user-profile-application-stages-span-notification'>1</span>
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ mt: { sm: 1, xs: 1 } }} className="shape-outer chevron-right">
                            <Box className="user-application-stages-application-section chevron-right">
                                <Typography align='center' sx={{ fontWeight: 'bold', fontSize: '14px' }} > Application Submitted
                                    <span
                                        style={{ cursor: 'pointer' }}
                                        className='user-profile-application-stages-span-notification-grey'>0</span>

                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ mt: { sm: 1, xs: 1 } }} className="shape-outer chevron-right">
                            <Box className="user-application-stages-application-section chevron-right">
                                <Typography align='center' sx={{ fontWeight: 'bold', fontSize: '14px' }} >Enrollments
                                    <span
                                        style={{ cursor: 'pointer' }}
                                        className='user-profile-application-stages-span-notification-grey'>0</span>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <VerticalTabs callLogs={callLogs} timeLineData={timeLineData} followUpData={followUpData} communicationData={communicationData} handleFollowupDrawer={handleClickOpenDialogsFollowup} handleNoteDrawer={handleClickOpenDialogsNote}></VerticalTabs>
                    </Box>
                </Box>
                <Drawer
                    sx={{
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: 46,
                            boxSizing: 'border-box',
                            marginTop: '50px',
                            fontSize: '17px',

                        },
                        zIndex: 1,
                        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
                    }}

                    variant="permanent"
                    anchor="right"
                >

                    <List>
                        <BootstrapTooltip arrow title="Change Application Stage" placement="left">
                            <ListItem onClick={handleClickOpenDialogsApplication} className='user-profile-sidebar-icon' sx={{ mb: 1 }}>
                                <i style={{ color: '#347EDD' }} className="fas fa-random "></i>
                            </ListItem>
                        </BootstrapTooltip>

                        <BootstrapTooltip arrow title="Add Follow up" placement="left">
                            <ListItem onClick={handleClickOpenDialogsFollowup} className='user-profile-sidebar-icon' sx={{ mb: 1 }}>
                                <i style={{ color: 'tomato' }} className="fas fa-calendar-alt"></i>
                            </ListItem>
                        </BootstrapTooltip>

                        <BootstrapTooltip arrow title="Add Note" placement="left">
                            <ListItem onClick={handleClickOpenDialogsNote} className='user-profile-sidebar-icon' sx={{ mb: 1 }}>

                                <i style={{ color: '#34dd8e' }} className="fas fa-sticky-note"></i>


                            </ListItem>
                        </BootstrapTooltip>
                        <BootstrapTooltip arrow title="SMS" placement="left">
                            <ListItem onClick={handleClickOpenDialogsSms} className='user-profile-sidebar-icon' sx={{ mb: 1 }}>

                                <i style={{ color: '#dd34b8' }} className="fas fa-envelope"></i>
                            </ListItem>
                        </BootstrapTooltip>
                        <BootstrapTooltip arrow title="WhatsApp" placement="left">
                            <ListItem onClick={handleClickOpenDialogsWhatsapp} className='user-profile-sidebar-icon' sx={{ mb: 1 }}>

                                <i style={{ color: '#25D366' }} className="fab fa-whatsapp-square"></i>


                            </ListItem>
                        </BootstrapTooltip>
                        <BootstrapTooltip arrow title="Send mail" placement="left">
                            <ListItem onClick={handleComposeClick} className='user-profile-sidebar-icon' sx={{ mb: 1 }}>


                                <i style={{ color: '#dd34b8' }} className="fas fa-inbox"></i>

                            </ListItem>
                        </BootstrapTooltip>
                        <BootstrapTooltip arrow title="Share" placement="left">
                            <ListItem className='user-profile-sidebar-icon' sx={{ mb: 1 }}>

                                <i className="fas fa-share-alt"></i>

                            </ListItem>
                        </BootstrapTooltip>

                    </List>
                </Drawer>
            </Box>

            {/* Change application Stages */}
            <Box>
                <ChangeApplicationStages color={'application'} timeLineData={timeLineData} handleClickOpenDialogs={handleClickOpenDialogsApplication} handleCloseDialogs={handleCloseDialogsApplication} openDialogs={openDialogsApplication} setOpenDialogs={setOpenDialogsApplication}></ChangeApplicationStages>
            </Box>
            {/* Add Follow Up */}
            <Box>
                <FollowUpListUpdate color={'followup'} followUpData={followUpData} handleClickOpenDialogs={handleClickOpenDialogsFollowup} handleCloseDialogs={handleCloseDialogsFollowup} openDialogs={openDialogsFollowup} setOpenDialogs={setOpenDialogsFollowup}></FollowUpListUpdate>
            </Box>
            {/* Add Note */}
            <Box>
                <AddNote color={'note'} followUpData={followUpData} handleClickOpenDialogs={handleClickOpenDialogsNote} handleCloseDialogs={handleCloseDialogsNote} openDialogs={openDialogsNote} setOpenDialogs={setOpenDialogsNote}></AddNote>
            </Box>
            {/* Send Sms  */}
            <Box>
                <SmsAndWhatsapp color='sms' name={'SMS'} handleClickOpenDialogs={handleClickOpenDialogsSms} handleCloseDialogs={handleCloseDialogsSms} openDialogs={openDialogsSms} setOpenDialogs={setOpenDialogsSms}></SmsAndWhatsapp>
            </Box>
            <Box>
                <SmsAndWhatsapp color='whatsapp' name={'WhatsApp'} handleClickOpenDialogs={handleClickOpenDialogsWhatsapp} handleCloseDialogs={handleCloseDialogsWhatsapp} openDialogs={openDialogsWhatsapp} setOpenDialogs={setOpenDialogsWhatsapp}></SmsAndWhatsapp>
            </Box>
            <Box>
                <Mail open={isComposeOpen}
                    onClose={handleComposerClose}>
                </Mail>
            </Box>

            <Box>
                <PoperComponent openPopper={openPopper1} index={1} anchorEl={anchorEl1} title={'MA In Diplomacy Law and Business Application'} percentage={'92'} subText={'Application Complete'}></PoperComponent>
                <PoperComponent openPopper={openPopper2} index={2} anchorEl={anchorEl2} title={'MA in Diplomacy Law and business application '}  ></PoperComponent>
            </Box>
        </Box>
    );
};

export default UserProfile;
