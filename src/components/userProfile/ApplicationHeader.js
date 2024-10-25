import { Avatar, Box, Grid, Typography } from '@mui/material';
import React from 'react';

import '../../styles/applicationHeader.css'

const ApplicationHeader = (props) => {

    const userDetails = props.userDetails
    return (
        <Box  >
            <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>


                <Grid item xs={4} sm={8} md={4} >
                    <Box className='second-box' sx={{ pt: 2 }}>
                        <Box sx={{ display: 'flex', gap: '14px', mb: 1 }}>
                            <Box>
                                <Avatar sx={{ backgroundColor: 'orange' }} variant="square">
                                    H
                                </Avatar>
                            </Box>

                            <Box >
                                <Typography fontWeight='bold' variant='h7'> {userDetails?.userName.toUpperCase()}</Typography>
                                <Typography variant='body2' ><span style={{ fontWeight: 'bold' }}>Application Stage:</span> <span onClick={props?.handleChangeApplicationDrawer} style={{ fontSize: '14px', color: '#146EBE', cursor: 'pointer' }}>{userDetails?.userApplicationStage} <i className="fas fa-external-link-alt"></i></span> </Typography>
                                <Typography variant='body2' ><span style={{ fontWeight: 'bold' }}>Lead Stage:</span> <span style={{ fontSize: '14px', color: '#146EBE', cursor: 'pointer' }}>{userDetails?.userLeadStage} <i className="fas fa-external-link-alt"></i></span> </Typography>
                            </Box>

                        </Box>
                        <Box >
                            <Typography variant='body2'><span style={{ color: '#143cbe', fontWeight: 'bold' }}>Email: </span> {userDetails?.userEmail} <span><i style={{ color: '#14be41' }} className="fas fa-check"></i></span> </Typography>
                            <Typography variant='body2'><span style={{ color: '#143cbe', fontWeight: 'bold' }}>Mobile: </span ><i style={{ color: '#25D366' }} className="fab fa-whatsapp"></i> {userDetails?.userMobile} <span><i style={{ color: 'red' }} className="fas fa-times"></i></span> </Typography>
                            <Typography variant='body2'><span style={{ color: '#143cbe', fontWeight: 'bold' }}>Added On: </span > {userDetails?.addedOn} <span style={{ color: '#767676', fontSize: '12px' }}>5 days ago</span> </Typography>
                            <Typography variant='body2'><span style={{ color: '#143cbe', fontWeight: 'bold' }}>Last Active: </span > {userDetails?.lastActiveDate} | {userDetails?.lastActiveTime} <span style={{ color: '#767676', fontSize: '12px' }}>5 minutes ago</span> </Typography>

                        </Box>
                    </Box>

                </Grid>
                <Grid item xs={4} sm={8} md={8} >

                    <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 2, sm: 8, md: 12 }}>

                        <Grid item xs={2} sm={4} md={4} >
                            <Box className='first-box'>
                                <Typography variant='h7'><span style={{ color: '#143cbe', fontWeight: 'bold' }}> Communication Status  </span> </Typography>
                                <Typography variant='body2'>Email Sent:- {userDetails?.communicationStatus?.emailSent} </Typography>
                                <Typography variant='body2'>SMS Sent:- {userDetails?.communicationStatus?.smsSent} </Typography>
                                <Typography variant='body2'>WhatsApp Sent:- {userDetails?.communicationStatus?.whatAppSent} </Typography>
                            </Box>

                        </Grid>
                        <Grid item xs={2} sm={4} md={4} >
                            <Box className='first-box'>
                                <Typography variant='h7'><span style={{ color: '#143cbe', fontWeight: 'bold' }}> Telephony Status  </span> </Typography>
                                <Typography variant='body2'>Inbound Call:- {userDetails?.telephonyStatus?.inboundCall} </Typography>
                                <Typography variant='body2'>Outbound Call:- {userDetails?.telephonyStatus?.outBoundCall} </Typography>


                            </Box>

                        </Grid>
                        <Grid item xs={2} sm={4} md={4} >
                            <Box className='first-box'>
                                <Typography variant='h7'><span style={{ color: '#143cbe', fontWeight: 'bold' }}> Assigned Counselor  </span> </Typography>
                                <Typography variant='body2'>{userDetails?.assignedCounselor} </Typography>


                            </Box>

                        </Grid>
                        <Grid item xs={2} sm={4} md={4} >
                            <Box className='first-box'>
                                <Typography variant='h7'><span style={{ color: '#143cbe', fontWeight: 'bold' }}> Upcoming Followup </span> </Typography>
                                <Typography variant='body2'>{userDetails?.upcomingFollowUp} </Typography>


                            </Box>

                        </Grid>
                        <Grid item xs={2} sm={4} md={4} >
                            <Box className='first-box'>
                                <Typography variant='h7'><span style={{ color: '#143cbe', fontWeight: 'bold' }}> Lead Source  </span> </Typography>
                                <Typography variant='body2'>{userDetails?.leadSource} </Typography>

                            </Box>

                        </Grid>

                    </Grid>


                </Grid>

            </Grid>


        </Box >
    );
};

export default ApplicationHeader;