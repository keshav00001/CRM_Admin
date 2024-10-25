import { Box, Button, Card, Divider, Grid, Stack, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import '../../styles/communicationLog.css'
import Chart from "react-apexcharts";
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import UnsubscribeIcon from '@mui/icons-material/Unsubscribe';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import SendAndArchiveIcon from '@mui/icons-material/SendAndArchive';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import ReplyIcon from '@mui/icons-material/Reply';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import TabularFilterComponent from './TabularFilterComponent';
import TimeLine from './TimeLine';

const CommunicationLog = (props) => {
    const [openFilter, setFilterOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState('');
    const [startingDate, setStartingDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const emailItems = [
        {
            color: '#4CAF50',
            label: 'Open Rate',
            value: 67
        },
        {
            color: '#FF9800',
            label: 'Click Rate',
            value: 17
        }
    ];
    const whatsappItems = [
        {
            color: '#FF9800',
            label: 'Click Rate',
            value: 8
        },
        {
            color: '#F44336',
            label: 'Unsubscribe Rate',
            value: 0
        }
    ];
    const theme = useTheme();

    const chartOptions = {
        chart: {
            background: 'transparent',
            stacked: false,
            toolbar: {
                show: false
            }
        },
        fill: {
            opacity: 1
        },
        labels: ['Rate'],
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        show: true,
                        color: theme.palette.text.secondary,
                        fontSize: '12px',
                        fontWeight: 400,
                        offsetY: 20
                    },
                    value: {
                        color: theme.palette.text.primary,
                        fontSize: '18px',
                        fontWeight: 600,
                        offsetY: -20
                    }
                },
                hollow: {
                    size: '60%'
                },
                track: {
                    background: theme.palette.background.default
                }
            }
        },
        states: {
            active: {
                filter: {
                    type: 'none',
                    value: 0
                }
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0
                }
            }
        },
        theme: {
            mode: theme.palette.mode
        }
    };

    const handleClickFilterOpen = () => {
        setFilterOpen(true);
    };

    const handleFilterClose = () => {
        setFilterOpen(false);
        setSelectedIndex('')
    };
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };


    return (
        <Box sx={{ pl: 2 }}>
            <Box sx={{ pb: 0.5 }} id='communication-logs-top-header'>
                <Typography variant='h6'> Communication Log</Typography>
            </Box>
            <Divider></Divider>
            <Box>
                <Typography className='communication-logs-sub-section-header'  >Email Summary</Typography>

                <Box className='communication-logs-email'>
                    <Box className='communication-logs-email-box1'>
                        <Typography className='communication-logs-text-color1' align='center' fontWeight='bold'>6</Typography>

                        <Typography align='center' fontSize='13px' marginBottom={1}> Email sent</Typography>
                        <MarkEmailUnreadIcon ></MarkEmailUnreadIcon>
                    </Box>
                    <Box className='communication-logs-email-box2'>
                        <Typography className='communication-logs-text-color2' align='center' fontWeight='bold'>0</Typography>
                        <Typography align='center' fontSize='13px' marginBottom={1}> Email Bounded</Typography>
                        <UnsubscribeIcon></UnsubscribeIcon>
                    </Box>
                    <Box sx={{ display: "flex", gap: '15px' }}>
                        {emailItems.map((item) => (
                            <Box
                            >
                                <Card
                                    sx={{
                                        alignItems: 'center',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        p: 2,
                                        borderBottom: `2px solid ${item.color}`

                                    }}
                                    variant="outlined"
                                    className='communication-log-chart-design'
                                >
                                    <Typography
                                        sx={{ color: item.color, fontWeight: 'bold' }}
                                        variant="h7"
                                    >
                                        {item.label}
                                    </Typography>
                                    <Chart

                                        width={150}
                                        height={130}
                                        options={{
                                            ...chartOptions,
                                            colors: [item.color]
                                        }}
                                        series={[item.value]}
                                        type="radialBar"
                                    />

                                </Card>
                            </Box>
                        ))}
                    </Box>

                </Box>



            </Box>
            <Box>
                <Typography className='communication-logs-sub-section-header'  >SMS Summary</Typography>

                <Box className='communication-logs-email'>
                    <Box className='communication-logs-email-box1'>
                        <Typography className='communication-logs-text-color1' align='center' fontWeight='bold'>3</Typography>
                        <Typography align='center' fontSize='13px' marginBottom={1} marginBottom={1}> SMS sent</Typography>
                        <MarkEmailUnreadIcon></MarkEmailUnreadIcon>
                    </Box>
                    <Box className='communication-logs-email-box3'>
                        <Typography className='communication-logs-text-color3' align='center' fontWeight='bold'>0</Typography>
                        <Typography align='center' fontSize='13px' marginBottom={1}>  SMS Delivered</Typography>
                        <MarkEmailReadIcon></MarkEmailReadIcon>
                    </Box>
                </Box>
            </Box>

            {/* whatsapp summary  */}
            <Box>
                <Typography className='communication-logs-sub-section-header'  >WhatsApp Summary</Typography>

                <Box className='communication-logs-email'>
                    <Box className='communication-logs-email-box1'>
                        <Typography className='communication-logs-text-color1' align='center' fontWeight='bold'>0</Typography>
                        <Typography align='center' fontSize='13px' marginBottom={1}> WhatsApp sent</Typography>
                        <SendAndArchiveIcon></SendAndArchiveIcon>
                    </Box>
                    <Box className='communication-logs-email-box3'>
                        <Typography className='communication-logs-text-color3' align='center' fontWeight='bold'>0</Typography>
                        <Typography align='center' fontSize='13px' marginBottom={1}> WhatsApp Delivered</Typography>
                        <AllInboxIcon></AllInboxIcon>
                    </Box>
                    <Box className='communication-logs-email-box1'>
                        <Typography className='communication-logs-text-color1' align='center' fontWeight='bold'>0</Typography>
                        <Typography align='center' fontSize='13px' marginBottom={1}> Auto Apply</Typography>
                        <ReplyIcon></ReplyIcon>
                    </Box>
                    <Box sx={{ display: "flex", gap: '15px' }}>
                        {whatsappItems.map((item) => (
                            <Box
                            >
                                <Card
                                    sx={{
                                        alignItems: 'center',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        p: 2,
                                        borderBottom: `2px solid ${item.color}`

                                    }}
                                    variant="outlined"
                                    className='communication-log-chart-design'
                                >
                                    <Typography
                                        sx={{ color: item.color, fontWeight: 'bold' }}
                                        variant="h7"
                                    >
                                        {item.label}
                                    </Typography>
                                    <Chart

                                        width={150}
                                        height={130}
                                        options={{
                                            ...chartOptions,
                                            colors: [item.color]
                                        }}
                                        series={[item.value]}
                                        type="radialBar"
                                    />

                                </Card>
                            </Box>
                        ))}
                    </Box>

                </Box>



            </Box>

            <Box sx={{ pr: 2, pt: 0.5, mt: 5 }}>
                <Box sx={{ pb: 0.5 }} id='time-line-tab-top-section'>
                    <Typography variant='h6'> Communication Log</Typography>
                    <Box id='time-line-tab-action-and-filter'>
                        <Stack direction="row" spacing={2}>
                            <Button id='time-line-tab-button-icon' size='small' variant="outlined"  >
                                <FilterAltOutlinedIcon onClick={handleClickFilterOpen} id='time-line-tab-filter-icon'></FilterAltOutlinedIcon>
                            </Button>

                        </Stack>
                    </Box>
                </Box>
                <Divider></Divider>
                <TimeLine timeLineData={props?.communicationData}></TimeLine>

                <TabularFilterComponent
                    openFilter={openFilter}
                    handleFilterClose={handleFilterClose}
                    selectedIndex={selectedIndex}
                    handleListItemClick={handleListItemClick}
                    startingDate={startingDate}
                    setStartingDate={setStartingDate}
                    endDate={endDate}
                    setEndDate={setEndDate}
                ></TabularFilterComponent>

            </Box>

        </Box>
    );
};

export default CommunicationLog;