import { Box, Button, Divider, FormControl, InputLabel, Menu, MenuItem, Select, Stack, Typography, } from '@mui/material';
import React, { useState } from 'react';
import TimeLine from './TimeLine';
import '../../styles/timeLineTab.css'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

import TabularFilterComponent from './TabularFilterComponent';
import '../../styles/followUpAndNotes.css'
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AlarmIcon from '@mui/icons-material/Alarm';
import PendingActionsIcon from '@mui/icons-material/PendingActions';

const FollowUpAndNotes = (props) => {

    const [openFilter, setFilterOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState('');
    const [startingDate, setStartingDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());



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

    const [anchorElAction, setAnchorEl] = React.useState(null);
    const openAction = Boolean(anchorElAction);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleActionClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={{ pl: 2, pr: 2, pt: 0.5 }}>
            <Box sx={{ pb: 0.5 }} id='followup-note-tab-top-section'>
                <Typography pl={2} variant='h6'> Followup And Notes</Typography>
                <Box id='followup-note-tab-action-and-filter'>
                    <Stack direction="row" spacing={2}>
                        <Button onClick={props?.handleNoteDrawer} className='followup-and-note-button' size='small' variant="outlined" startIcon={<PendingActionsIcon />}>
                            Add Note
                        </Button>
                        <Button onClick={props?.handleFollowupDrawer} className='followup-and-note-button' size='small' variant="outlined" startIcon={<AlarmIcon />}>
                            Add Followup
                        </Button>
                        <Button className='followup-and-note-button' onClick={handleClick} size='small' variant="outlined" endIcon={<ArrowDropDownIcon />}>
                            Action
                        </Button>
                        <Button id='followup-and-note-button-icon' size='small' variant="outlined"  >
                            <FilterAltOutlinedIcon onClick={handleClickFilterOpen} id='followup-note-tab-filter-icon'></FilterAltOutlinedIcon>
                        </Button>

                    </Stack>

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorElAction}
                        open={openAction}
                        onClose={handleActionClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleActionClose}>Action1</MenuItem>
                        <MenuItem onClick={handleActionClose}>Action2</MenuItem>
                    </Menu>
                </Box>
            </Box>
            <Divider></Divider>
            <TimeLine timeLineData={props?.followUpData}></TimeLine>

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
    );
};

export default FollowUpAndNotes;