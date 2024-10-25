import { Box, Button, Divider, FormControl, InputLabel, Menu, MenuItem, Select, Stack, Typography, } from '@mui/material';
import React, { useState } from 'react';
import TimeLine from './TimeLine';
import '../../styles/timeLineTab.css'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TabularFilterComponent from './TabularFilterComponent';

const TimeLineTab = (props) => {

    const [action, setAction] = React.useState('');
    const [openFilter, setFilterOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState('');
    const [startingDate, setStartingDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const appOptions = [
        {
            value: 'Incomplete',
            label: 'Incomplete'
        },
        {
            label: 'Complete',
            value: 'Complete'
        }
    ];

    const handleChange = (event) => {
        setAction(event.target.value);
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
            <Box sx={{ pb: 0.5 }} id='time-line-tab-top-section'>
                <Typography pl={2} variant='h6'> Time Line</Typography>
                <Box id='time-line-tab-action-and-filter'>
                    <Stack direction="row" spacing={2}>

                        <Button className='time-line-tab-button' onClick={handleClick} size='small' variant="outlined" endIcon={<ArrowDropDownIcon />}>
                            Action
                        </Button>
                        <Button id='time-line-tab-button-icon' size='small' variant="outlined"  >
                            <FilterAltOutlinedIcon onClick={handleClickFilterOpen} id='time-line-tab-filter-icon'></FilterAltOutlinedIcon>
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
            <TimeLine timeLineData={props?.timeLineData}></TimeLine>

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

export default TimeLineTab;

