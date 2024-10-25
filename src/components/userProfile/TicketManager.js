import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Divider, Menu, MenuItem, Stack, Typography } from '@mui/material';
import React from 'react';
import '../../styles/ticketManager.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { SeverityPillTicket } from './severityPill/SeverityPIllTicket';

const TicketManager = () => {
    const [anchorElAction, setAnchorEl] = React.useState(null);
    const openAction = Boolean(anchorElAction);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleActionClose = () => {
        setAnchorEl(null);
    };

    const columns = [
        { field: 'id', headerName: 'Ticket Id', width: 80 },
        { field: 'description', headerName: 'Description', width: 280 },

        {
            field: 'createdAt',
            headerName: 'Created At',
            type: 'date',
            width: 110,
            valueGetter: ({ value }) => value && new Date(value),
        },

        {
            field: 'status',
            headerName: 'Status',
            renderCell: (params) => (
                <strong>
                    <SeverityPillTicket
                        color={
                            (params.value === 'Done' && 'success')
                            || (params.value === 'To Do' && 'info')
                            || (params.value === 'In Progress' && 'warning')
                            || 'error'
                        }
                    >
                        {params.value}
                    </SeverityPillTicket>
                </strong>
            ),
            sortable: false,
            width: 110,
            filterable: false,
            editable: true
        },
        {
            field: 'changeStatus',
            headerName: 'Change Status',
            renderCell: (params) => (
                <strong>
                    <Button className='followup-and-note-button' onClick={handleClick} size='small' variant="outlined" endIcon={<ArrowDropDownIcon />}>
                        Change
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorElAction}
                        open={openAction}
                        onClose={handleActionClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem sx={{ fontSize: '14px', pt: 0, pb: 0 }} onClick={handleActionClose}>To Do</MenuItem>
                        <Divider></Divider>
                        <MenuItem sx={{ fontSize: '14px', pt: 0, pb: 0 }} onClick={handleActionClose}>Inprogress</MenuItem>
                        <Divider></Divider>
                        <MenuItem sx={{ fontSize: '14px', pt: 0, pb: 0 }} onClick={handleActionClose}>Done</MenuItem>
                    </Menu>
                </strong>
            ),
            sortable: false,
            width: 120,
            filterable: false,
            editable: false
        },
        {
            field: 'openTicket',
            headerName: 'Open Ticket',
            renderCell: (params) => (
                <strong>
                    <Button className='ticket-manage-button' size='small' variant="outlined" >
                        Open
                    </Button>
                </strong>
            ),
            sortable: false,
            width: 110,
            filterable: false
        },

    ];

    const rows = [
        { id: 993345, description: 'Generel Query-> other general queries', createdAt: '02/05/2022', status: 'Done' },
        { id: 993344, description: 'Generel Query-> other general queries', createdAt: '9/23/2021', status: 'To Do' },
        { id: 993340, description: 'Generel Query-> other general queries', createdAt: '10/11/2021', status: 'In Progress' },
        { id: 993335, description: 'Generel Query-> other general queries', createdAt: '07/10/2021', status: 'Done' },
        { id: 993332, description: 'Generel Query-> other general queries', createdAt: '06/09/2021', status: 'To Do' },
        { id: 993323, description: 'Generel Query-> other general queries', createdAt: '05/23/2021', status: 'In Progress' },
        { id: 993320, description: 'Generel Query-> other general queries', createdAt: '02/10/2021', status: 'Done' },
        { id: 993319, description: 'Generel Query-> other general queries', createdAt: '06/09/2021', status: 'To Do' },
        { id: 993310, description: 'Generel Query-> other general queries', createdAt: '05/23/2021', status: 'In Progress' },
        { id: 993309, description: 'Generel Query-> other general queries', createdAt: '02/10/2021', status: 'To Do' },
    ];
    return (
        <Box>
            <Box sx={{ pb: 1.5, pt: 1.5 }} id='ticket-manage-tab-top-section'>
                <Typography pl={2} variant='h6'> Tickets Manager</Typography>
            </Box>
            <Divider></Divider>
            <Box sx={{ height: '425px', ml: 1 }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={6}
                    sx={{
                        width: '820px',
                    }}

                />
            </Box>



        </Box>
    );
};

export default TicketManager;