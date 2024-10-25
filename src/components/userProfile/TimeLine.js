import { Box, Typography } from '@mui/material';
import React from 'react';
import '../../styles/timeline.scss'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import PaymentIcon from '@mui/icons-material/Payment';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const TimeLine = (props) => {

    // this section is for design purpose 
    const design = []
    const nTrials = props.timeLineData.length;
    for (let i = 1; i <= nTrials / 2; i++) {
        design.push('1');
        design.push('2');
        design.push('3');

    }

    return (
        <Box>
            <Box id='timeline-body'>
                <Box className="timeline">
                    {
                        props?.timeLineData.map((timeLine, index) => <Box className={`timeline__event  animated fadeInUp delay-3s timeline__event--type${design[index]}`} >
                            <Box className="timeline__event__icon ">
                                {timeLine?.timelineAbout === 'application' && <ThumbUpOffAltIcon sx={{ fontSize: '30px', color: '#9251AC' }} className="lni-cake " />}
                                {timeLine?.timelineAbout === 'payment' && <PaymentIcon sx={{ fontSize: '30px', color: '#9251AC' }} className="lni-cake " />}
                                {timeLine?.timelineAbout === 'note' && <MailOutlineOutlinedIcon sx={{ fontSize: '30px', color: '#9251AC' }} className="lni-cake " />}
                                {timeLine?.timelineAbout === 'followup' && <CallOutlinedIcon sx={{ fontSize: '30px', color: '#9251AC' }} className="lni-cake " />}
                                {timeLine?.timelineAbout === 'call' && <LocalPhoneIcon sx={{ fontSize: '30px', color: '#9251AC' }} className="lni-cake " />}
                            </Box>
                            <Box className="timeline__event__date">
                                {timeLine?.timeLineDataDate} <br />
                                {timeLine?.timeLineDataTime}
                            </Box>
                            <Box className="timeline__event__content ">
                                <Box className="timeline__event__description">
                                    {timeLine?.timeLineDataText && timeLine?.timeLineDataText}
                                    {timeLine?.callText && timeLine?.callText}
                                    {timeLine?.note && <Box>
                                        <Typography variant='body2' > <span style={{ fontWeight: 'bold' }}>Note-</span>  {timeLine?.note}</Typography>
                                    </Box>}
                                    {timeLine?.followupNote && <Box>
                                        <Typography variant='body2' > <span style={{ fontWeight: 'bold' }}>Followup-</span>  {timeLine?.followupNote}</Typography>
                                    </Box>}
                                    {timeLine?.addedBy && <Box>
                                        <Typography variant='body2' > <span style={{ fontWeight: 'bold' }}>Added By :</span>  {timeLine?.addedBy}</Typography>
                                    </Box>}
                                    {timeLine?.assignedTo && <Box>
                                        <Typography variant='body2' > <span style={{ fontWeight: 'bold' }}>Assigned To :</span>  {timeLine?.assignedTo} | {timeLine?.due && <span>
                                            <span style={{ fontWeight: 'bold' }}>Due :</span> {timeLine?.due}
                                        </span>}</Typography>
                                    </Box>}
                                    {timeLine?.createdBy && <Box>
                                        <Typography variant='body2' > <span style={{ fontWeight: 'bold' }}>Created By :</span>  {timeLine?.createdBy} | {timeLine?.status && <span>
                                            <span style={{ fontWeight: 'bold' }}>Status :</span> <span style={{ color: '#08c290' }}>{timeLine?.status}</span>
                                        </span>}</Typography>
                                    </Box>}
                                    {timeLine?.initiatedText && timeLine?.initiatedText}

                                    <Box sx={{ textAlign: 'justify' }}>
                                        {timeLine?.emailText} <span id='time-line-email-subject-line'>
                                            {timeLine?.emailSubjectLine}
                                        </span>
                                    </Box>

                                    {/* TODO: in future this refresh button wil be added  */}
                                    {/* {timeLine?.emailText && <ReplayOutlinedIcon sx={{ fontSize: '15px', color: '#24b47e' }}></ReplayOutlinedIcon>} */}

                                </Box>
                            </Box>
                        </Box>)
                    }
                </Box>

            </Box>
        </Box>


    );
};

export default TimeLine;