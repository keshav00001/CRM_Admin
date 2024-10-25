import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import '../../styles/callLogs.css'
import TimeLine from './TimeLine';
const CallLogs = (props) => {
    return (
        <Box >
            <Box sx={{ pb: 1.5, pt: 1.5 }} id='call-log-tab-top-section'>
                <Typography pl={2} variant='h6'> Call Logs</Typography>
            </Box>
            <Divider></Divider>
            <Box sx={{ p: 2 }}>

                <Box className='call-log-summary'>
                    <Box className='  call-log-summary-box1'>
                        <Typography className='  call-log-text-color1' align='center' fontWeight='bold'>3</Typography>
                        <Typography align='center' fontSize='13px' marginBottom={1}> Outbound Call</Typography>
                        <PhoneCallbackIcon></PhoneCallbackIcon>
                    </Box>
                    <Box className='  call-log-summary-box2'>
                        <Typography className='  call-log-text-color2' align='center' fontWeight='bold'>0</Typography>
                        <Typography align='center' fontSize='13px' marginBottom={1}> Inbound Call</Typography>
                        <PhoneForwardedIcon></PhoneForwardedIcon>
                    </Box>
                    <Box className='  call-log-summary-box3'>
                        <Typography className='  call-log-text-color3' align='center' fontWeight='bold'>00:01:44</Typography>
                        <Typography align='center' fontSize='13px' marginBottom={1}> Call Duration</Typography>
                        <PhoneInTalkIcon></PhoneInTalkIcon>
                    </Box>
                </Box>

                <TimeLine timeLineData={props?.callLogs}></TimeLine>
            </Box>

        </Box>
    );
};

export default CallLogs;