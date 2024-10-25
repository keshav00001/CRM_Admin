import { Alert, Avatar, Box, Button, Checkbox, ClickAwayListener, DialogActions, FormControl, FormControlLabel, Grid, IconButton, Link, Radio, RadioGroup, styled, TextField, Tooltip, tooltipClasses, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../../styles/generateRules.css'

import Divider from '@mui/material/Divider';
import { Input, Modal, SelectPicker } from 'rsuite';

import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';

import SmartButtonIcon from '@mui/icons-material/SmartButton';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import DehazeIcon from '@mui/icons-material/Dehaze';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const GenerateRules = () => {

    const navigate = useNavigate()
    const { state } = useLocation();


    const [assignedTask, setAssignedTask] = useState(false)
    const [assignedSubject, setAssignedSubject] = useState('')
    const [value, setValue] = React.useState('');
    const [value1, setValue1] = React.useState('');
    const [nextClick, setNextClick] = React.useState(true);
    const [nextClick1, setNextClick1] = React.useState(true);
    const [selectConditionOne, setSelectConditionOne] = useState(null)
    const [selectConditionTwo, setSelectConditionTwo] = useState(null)
    const [selectDueReason, setSelectDueReason] = useState(null)
    const [dueTimeExtensions, setDueTimeExtension] = useState(null)
    const [dueDaysTypes, setDueDaysType] = useState(null)
    const [typeConditionInput, setTypeConditionInput] = useState(0)
    const [conditionsSetArray, setConditionsSetArray] = useState(['1'])
    const conditionArray = [...conditionsSetArray]

    const [conditionsSetArray1, setConditionsSetArray1] = useState([])
    const conditionArray1 = [...conditionsSetArray1]
    const [openTooltip, setOpenToolTip] = React.useState(false);

    // const resultArray = [...conditionResultArray]
    // const [conditionResultArray, setConditionResultArray] = useState([])
    const [openEmail, setOpenEmail] = React.useState(false);
    const [openAssignTask, setAssignTask] = React.useState(false);
    const [checkedEmail, setCheckedEmail] = React.useState(false);
    const [actionData, setActionData] = useState([])
    const actionDataCopy = [...actionData]
    const [taskPriorityLevel, setTaskPriorityLevel] = useState('')

    const condition1 = [

        {
            label: "Actual Cost",
            value: "Actual Cost",
            role: "Master",
        },
        {
            label: "Budget Cost",
            value: "Budget Cost",
            role: "Master",
        },
        {
            label: "Campaign Name",
            value: "Campaign Name",
            role: "Master",
        },
        {
            label: "Campaign Owner",
            value: "Campaign Owner",
            role: "Master",
        },
        {
            label: "Created By",
            value: "Created By",
            role: "Master",
        },
        {
            label: "Created Time",
            value: "Created Time",
            role: "Master",
        },

    ];
    const condition2 = [

        {
            label: "=",
            value: "=",
            role: "Master",
        },
        {
            label: "!=",
            value: "!=",
            role: "Master",
        },
        {
            label: "<",
            value: "<",
            role: "Master",
        },
        {
            label: ">",
            value: ">",
            role: "Master",
        },
        {
            label: "<=",
            value: "<=",
            role: "Master",
        },
        {
            label: ">=",
            value: ">=",
            role: "Master",
        },
        {
            label: "between",
            value: "between",
            role: "Master",
        },

    ];
    const dueReason = [

        {
            label: "Trigger Date",
            value: "Trigger Date",
            role: "Master",
        },
        {
            label: "Created Time",
            value: "Created Time",
            role: "Master",
        },
        {
            label: "Modified Time",
            value: "Modified Time",
            role: "Master",
        },
        {
            label: "Start Date",
            value: "Start Date",
            role: "Master",
        },
        {
            label: "End date",
            value: "End Date",
            role: "Master",
        }

    ];
    const dueTimeExtension = [

        {
            label: "Plus",
            value: "Plus",
            role: "Master",
        },
        {
            label: "Minus",
            value: "Minus",
            role: "Master",
        }

    ];
    const dueDaysType = [

        {
            label: "Business1",
            value: "Business1",
            role: "Master",
        },
        {
            label: "Business2",
            value: "Business2",
            role: "Master",
        }

    ];
    const statusType = [

        {
            label: "Deferred",
            value: "Deferred",
            role: "Master",
        },
        {
            label: "Deferred1",
            value: "Deferred1",
            role: "Master",
        }

    ];
    const priorityLevel = [

        {
            label: "Highest",
            value: "Highest",
            role: "Master",
        },

        {
            label: "High",
            value: "High",
            role: "Master",
        },
        {
            label: "Medium",
            value: "Medium",
            role: "Master",
        },
        {
            label: "Low",
            value: "Low",
            role: "Master",
        },
        {
            label: "Lowest",
            value: "Lowest",
            role: "Master",
        }

    ];


    const handleTooltipClose = () => {
        setOpenToolTip(false);
    };
    const handleTooltipOpen = () => {
        setOpenToolTip(true);
    };

    const handleChangeArray = (i) => {
        conditionArray1[i] = {
            selectConditionOne: selectConditionOne ? selectConditionOne : '',
            selectConditionTwo: selectConditionTwo ? selectConditionTwo : '',
            typeConditionInput: typeConditionInput ? typeConditionInput : '',
        }

        conditionArray.push('1')

        setConditionsSetArray(conditionArray)
        setConditionsSetArray1(conditionArray1)

    }

    const handleChangeArray1 = (i) => {

        if (i > -1) {
            conditionArray.splice(i, 1); // 2nd parameter means remove one item only
        }
        setConditionsSetArray(conditionArray)
    }

    const HtmlTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: '#fff',
            color: 'rgba(0, 0, 0, 0.87)',
            maxWidth: 220,
            fontSize: '22px',
            border: '1px solid #dadde9',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
        },
    }));


    const handleOpenEmail = () => setOpenEmail(true);
    const handleCloseEmail = () => setOpenEmail(false);



    const handleOpenAssignTask = () => setAssignTask(true);
    const handleCloseAssignTask = () => setAssignTask(false);

    const handleChangeEmail = (event) => {
        setCheckedEmail(event.target.checked);
    };



    const handleAllTask = (e) => {
        actionDataCopy.push(e)
        setActionData(actionDataCopy)

    }

    return (

        <Box p={2}>
            <Box id='generate-rules-top-section'>
                <Box>
                    <IconButton onClick={() => navigate('/allRules')} aria-label="Example">
                        <ArrowBackIcon />
                    </IconButton>
                </Box>
                <Box className='generale-rules-top' sx={{ mt: 0.5 }}>
                    <Typography variant='h5'>{state.ruleName}</Typography>
                    <Typography sx={{ mb: 1 }} variant='body1'><span className='email-modal-span-item'>@{state.module}</span></Typography>
                    <Typography variant='body2'><span className='email-modal-span-item'>{state.description}</span> </Typography>
                </Box>
            </Box>


            <Box sx={{ ml: 5, mt: 4 }}>

                <Box className='generate-rules-stepper-round'>
                    <Box className='generate-rules-stepper-round-text'>
                        <Typography sx={{ fontSize: '15px' }} variant='body1'>WHEN</Typography>
                    </Box>

                    <Box className='generate-rules-stepper-connector-horizontal-box' >
                        <Divider className='generate-rules-stepper-connector-horizontal' />
                    </Box>

                    <Box className={nextClick ? 'generate-rules-stepper-time-selector-section' : 'generate-rules-stepper-time-selector-section-active1'}>
                        {nextClick || <Typography > This rule is executed when a campaign is <span style={{ fontWeight: 'bold' }}>{value}</span> to meet the condition (if any)</Typography>}
                        {nextClick && <Typography fontWeight={'bold'}> When do you want to execute this rule ?</Typography>}
                        {nextClick && <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-Radio size='small'-buttons-group-label"
                                name="Radio size='small'-buttons-group"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            >
                                <FormControlLabel size='small' value="create" control={<Radio size='small' />} label="Create" />

                                <FormControlLabel value="create/edit" control={<Radio size='small' />} label="Create or Edit" />
                                {value === 'create/edit' && <FormControlLabel className='generate-rules-stepper-time-selector-section-checkbox' sx={{ ml: 3 }} control={<Checkbox size="small" color="default" />} label="Repeat this workflow whenever a campaign is edited" />}

                                <FormControlLabel value="edit" control={<Radio size='small' />} label="Edit" />
                                {value === 'edit' && <FormControlLabel className='generate-rules-stepper-time-selector-section-checkbox' sx={{ ml: 3 }} control={<Checkbox size="small" color="default" />} label="Repeat this workflow whenever a campaign is edited" />}
                            </RadioGroup>
                        </FormControl>}
                        {nextClick && <DialogActions>
                            <Button onClick={() => setNextClick(false)} sx={{ backgroundColor: '#0F7AE7' }} disabled={value ? false : true} size='small' variant='contained'>
                                Next
                            </Button>
                        </DialogActions>}

                    </Box>
                </Box>

            </Box>


            {nextClick || <Box>

                <Box className='generate-rules-stepper-connector-vertical-box' >
                    <Divider orientation="vertical" className='generate-rules-stepper-connector-vertical' />
                </Box>

                <Box sx={{ ml: 2.83, mt: 4 }} className='generate-rules-stepper-rhombus' >

                    <Box className="shape-outer3 rhombus1">
                        <Box className="shape-inner3 rhombus1">
                            <Typography sx={{ color: 'white', fontSize: '15px', ml: -0.2, mt: 0.2 }} variant='body1'>CONDITION</Typography>
                        </Box>
                    </Box>

                    <Box className='generate-rules-stepper-connector-horizontal-box2' >
                        <Divider className='generate-rules-stepper-connector-horizontal2' />
                    </Box>

                    <Box className={nextClick1 ? 'generate-rules-stepper-time-selector-section' : 'generate-rules-stepper-time-selector-section-active2'}>
                        {nextClick1 || <Box sx={{ display: 'flex', gap: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', px: 1 }}>
                                <Avatar
                                    className='generate-rules-stepper-avatar'
                                ><StarBorderRoundedIcon /></Avatar>
                                <Typography sx={{ color: '#3bad78', ml: 1, fontWeight: 'bold' }} variant='body1'>{selectConditionOne}</Typography>
                                <Typography sx={{ ml: 1, mr: 1, fontWeight: 'bold' }} variant='body1'>{selectConditionTwo}</Typography>
                                <Typography sx={{ color: '#3bad78', fontWeight: 'bold' }} variant='body1'>{typeConditionInput}</Typography>

                            </Box>
                            <IconButton sx={{ mt: -2 }} onClick={() => setNextClick1(true)} aria-label="Example">
                                <EditOutlinedIcon sx={{ fontSize: '15px' }} />
                            </IconButton>


                        </Box>}
                        {nextClick1 && <Typography mb={0.5} fontWeight={'bold'}> Which Campaigns would you like to apply the rule to ?</Typography>}
                        {nextClick1 && <FormControl sx={{ mb: 1 }}>
                            <RadioGroup
                                aria-labelledby="demo-Radio size='small'-buttons-group-label"
                                name="Radio size='small'-buttons-group"
                                value={value1}
                                row
                                onChange={(e) => setValue1(e.target.value)}
                            >
                                <FormControlLabel size='small' value="Campaigns matching certain conditions" control={<Radio size='small' />} label="Campaigns matching certain conditions" />

                                <FormControlLabel value="All Campaigns" control={<Radio size='small' />} label="All Campaigns" />

                            </RadioGroup>
                        </FormControl>}


                        {nextClick1 && <Box>
                            {conditionArray.map((item, i) => (<Box>
                                {item.length !== 0 && <Box>
                                    {value1 === 'Campaigns matching certain conditions' && <Box sx={{ mt: 1, display: 'flex', alignItems: 'center' }}>
                                        <Avatar
                                            className='generate-rules-stepper-avatar'
                                        ><StarBorderRoundedIcon /></Avatar>
                                        <FormControl variant="outlined" sx={{ width: "150px", ml: 1 }}>

                                            <SelectPicker
                                                onChange={setSelectConditionOne}
                                                placeholder="Select types"
                                                data={condition1}
                                                size="sm"
                                            />
                                        </FormControl>
                                        <FormControl variant="outlined" sx={{ width: "90px", ml: 1 }}>

                                            <SelectPicker
                                                onChange={setSelectConditionTwo}
                                                placeholder="Select types"
                                                data={condition2}
                                                size="sm"
                                            />
                                        </FormControl>

                                        <Input onChange={setTypeConditionInput} size='sm' style={{ width: '150px', marginLeft: '5px' }} placeholder="Type" />

                                        <IconButton onClick={() => handleChangeArray(i)} aria-label="Example">
                                            <AddCircleOutlineRoundedIcon />
                                        </IconButton>
                                        {conditionsSetArray.length > 1 && <IconButton onClick={() => handleChangeArray1(i)} aria-label="Example">
                                            <RemoveCircleOutlineIcon />
                                        </IconButton>}

                                    </Box>}
                                </Box>}
                            </Box>))}
                        </Box>}


                        {nextClick1 && <DialogActions>
                            <Button onClick={() => setNextClick1(false)} sx={{ backgroundColor: '#0F7AE7' }} disabled={value1 ? false : true} size='small' variant='contained'>
                                Next
                            </Button>
                        </DialogActions>}

                    </Box>
                </Box>
                {nextClick1 || <Box>
                    <Box className='generate-rules-stepper-connector-vertical-box1' >
                        <Divider orientation="vertical" className='generate-rules-stepper-connector-vertical1' />
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Box className={assignedTask ? 'instant-action-listener-assigned-task' : 'instant-action-listener'}>
                            {assignedTask || <ClickAwayListener onClickAway={handleTooltipClose}>
                                <Box>
                                    <HtmlTooltip
                                        PopperProps={{
                                            disablePortal: true,
                                        }}

                                        arrow
                                        onClose={handleTooltipClose}
                                        open={openTooltip}
                                        disableFocusListener
                                        disableHoverListener
                                        disableTouchListener
                                        title={
                                            <React.Fragment>

                                                <Button onClick={() => { handleOpenEmail(); handleTooltipClose() }} sx={{ width: '200px', backgroundColor: 'white' }} color='inherit'>Email Notification</Button>
                                                <Button onClick={() => { handleOpenAssignTask(); handleTooltipClose() }} sx={{ width: '200px', backgroundColor: 'white' }} color='inherit'>Task</Button>

                                            </React.Fragment>
                                        }

                                    >
                                        <Button variant='text' startIcon={<SmartButtonIcon></SmartButtonIcon>} sx={{ width: '100%' }} onClick={handleTooltipOpen}>Instant Action</Button>
                                    </HtmlTooltip>
                                </Box>
                            </ClickAwayListener>}

                            {assignedTask && <Box>
                                <Button type='text' startIcon={<SmartButtonIcon></SmartButtonIcon>} sx={{ color: 'black' }} >Instant Action</Button>

                                {actionDataCopy.map((perTask, item) => <Box>
                                    <Box sx={{ pl: 1.5, mt: 1 }}>
                                        <Typography fontWeight='bold' variant='body1'>Task {item + 1}</Typography>
                                        <Typography variant='body2'>{perTask.subject}</Typography>
                                        <Typography variant='body2'>{perTask.assIgnedTo}</Typography>
                                        <Typography mb={1} variant='body2'>
                                            {perTask.priority}
                                            {perTask.priority === 'Highest' && <IconButton sx={{ ml: -0.5 }} >
                                                <DoubleArrowIcon sx={{ fontSize: '18px', color: '#F06360' }} />
                                            </IconButton>}
                                            {perTask.priority === 'High' && <IconButton sx={{ ml: -0.5 }}  >
                                                <KeyboardArrowRightIcon sx={{ fontSize: '19px', color: '#F06360' }} />
                                            </IconButton>}
                                            {perTask.priority === 'Medium' && <IconButton sx={{ ml: -0.5 }} >
                                                <DehazeIcon sx={{ fontSize: '19px', color: '#FFA117' }} />
                                            </IconButton>}
                                            {perTask.priority === 'Low' && <IconButton sx={{ ml: -0.5 }} >
                                                <KeyboardArrowLeftIcon sx={{ fontSize: '19px', color: '#1AB1F5' }} />
                                            </IconButton>}
                                            {perTask.priority === 'Lowest' && <IconButton sx={{ ml: -0.5 }} >
                                                <KeyboardDoubleArrowLeftIcon sx={{ fontSize: '19px', color: '#1AB1F5' }} />
                                            </IconButton>}
                                        </Typography>

                                    </Box>
                                    <Divider ></Divider>
                                </Box>)}

                                <Button onClick={handleOpenAssignTask} className='assignedTask-button' size='medium' variant="text">+ Action</Button>

                            </Box>}
                        </Box>

                        <Box className='generate-rules-stepper-connector-horizontal-box3' >
                            <Divider className='generate-rules-stepper-connector-horizontal3' />
                        </Box>
                        <Box className='generate-rules-stepper-dashed-Box'>
                            <Box>
                                <HourglassEmptyIcon></HourglassEmptyIcon>
                            </Box>
                            <Box>
                                <Typography variant='body1'>Scheduled Actions</Typography>
                                <Typography variant='body2'>The option to create scheduled option is only available from the standard edition </Typography>
                                <Box>
                                    <Link
                                        component="button"
                                        variant="body2"
                                        sx={{ mr: 2 }}
                                    >
                                        Upgrade Now
                                    </Link>
                                    <Link
                                        component="button"
                                        variant="body2"
                                    >
                                        Read more
                                    </Link>
                                </Box>
                            </Box>

                        </Box>

                    </Box>

                </Box>}

            </Box>}

            <Box>
                <Box className="modal-container">

                    <Modal size='md' open={openEmail} onClose={handleCloseEmail}>
                        <form action="" onSubmit={(e) => e.preventDefault()}>
                            <Modal.Header>
                                <Modal.Title > <span className='email-modal-span-item-left'> Email Notifications -</span> <span className='email-modal-span-item'>categories</span> </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                                <Grid sx={{ mt: 2 }} container columns={{ xs: 4, sm: 8, md: 12 }}>
                                    <Grid item xs={1} sm={4} md={5} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                        <Typography variant='body1'>Name</Typography>
                                    </Grid>
                                    <Grid item xs={3} sm={4} md={7} >
                                        <TextField
                                            fullWidth
                                            color="warning"
                                            name="description"
                                            multiline
                                            variant='standard'
                                            size="small"

                                            required
                                        />
                                    </Grid>
                                    <Grid mt={-0.1} item xs={4} sm={8} md={12} >
                                        <Divider></Divider>
                                    </Grid>
                                    <Grid item xs={1} sm={4} md={5} >
                                        <Typography mt={2} variant='body1'>To</Typography>
                                    </Grid>
                                    <Grid mt={2} item xs={3} sm={4} md={7} >
                                        <Typography mb={1} variant='body1'>Choose groups, users,role etc</Typography>
                                        <Box className='email-notification-upgrade-edition'>
                                            <Typography mb={1} variant='body1'>Sending email notifications to customers by choosing the email address field is available in the
                                                Professional Edition only <Link
                                                    component="button"
                                                    variant="body2"
                                                >
                                                    Upgrade edition
                                                </Link></Typography>
                                        </Box>
                                        <TextField
                                            fullWidth
                                            color="warning"
                                            name="ccEmail"
                                            multiline
                                            variant='standard'
                                            size="small"
                                            required
                                            type='email'
                                        />
                                    </Grid>
                                    <Grid mt={-0.1} item xs={4} sm={8} md={12} >
                                        <Divider></Divider>
                                    </Grid>
                                    <Grid item xs={1} sm={4} md={5} >

                                    </Grid>
                                    <Grid item xs={3} sm={4} md={7} >
                                        <FormControlLabel control={<Checkbox
                                            checked={checkedEmail}
                                            onChange={handleChangeEmail}
                                            size='small' />} label="Send this notification as a Single mass Email With all recipients displayed" />
                                    </Grid>

                                    {checkedEmail && <Grid item xs={1} sm={4} md={5} >
                                        <Typography mt={2} variant='body1'>CC</Typography>
                                    </Grid>}
                                    {checkedEmail && <Grid mt={1} item xs={3} sm={4} md={7} >
                                        <Alert sx={{ mb: 1 }} severity="warning">Email tracking unavailable for this kind of notification!
                                            <Link
                                                component="button"
                                                variant="body2"
                                            >
                                                know more
                                            </Link>

                                        </Alert>
                                        <Typography mb={1} variant='body1'>Add users,recipients etc</Typography>
                                        <Box className='email-notification-upgrade-edition'>
                                            <Typography mb={1} variant='body1'>Sending email notifications to customers by choosing the email address field is available in the
                                                Professional Edition only <Link
                                                    component="button"
                                                    variant="body2"
                                                >
                                                    Upgrade edition
                                                </Link></Typography>


                                        </Box>
                                        <TextField
                                            fullWidth
                                            color="warning"
                                            name="Bcc"
                                            multiline
                                            variant='standard'
                                            size="small"
                                            required
                                            type='email'
                                        />
                                    </Grid>}
                                    {checkedEmail && <Grid mt={-0.1} item xs={4} sm={8} md={12} >
                                        <Divider></Divider>
                                    </Grid>}

                                    <Grid item xs={1} sm={4} md={5} sx={{ display: 'flex', alignItems: 'flex-end', mt: 1, mb: 1 }}>
                                        <Typography variant='body1'>Email Template</Typography>
                                    </Grid>
                                    <Grid sx={{ mt: 1, mb: 1 }} item xs={3} sm={4} md={7} >
                                        <Button size='small' variant="outlined" component="span">
                                            Select template
                                        </Button>
                                    </Grid>
                                    <Grid item xs={4} sm={8} md={12} >
                                        <Divider></Divider>
                                    </Grid>
                                </Grid>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button size='small' variant="contained" color='inherit' onClick={handleCloseEmail} >
                                    Cancel
                                </Button>
                                <Button type='submit' size='small' sx={{ backgroundColor: '#2e89e6', ml: 1 }} variant="contained" >
                                    Save and Associated
                                </Button>
                            </Modal.Footer>
                        </form>
                    </Modal>
                </Box>

                {/* assigned task  */}
                <Box className="modal-container">
                    <Modal size='md' open={openAssignTask} onClose={handleCloseAssignTask}>
                        <form action="" onSubmit={(e) => { e.preventDefault(); handleCloseAssignTask() }}>
                            <Modal.Header>
                                <Modal.Title > <span className='email-modal-span-item-left'> Assign Tasks -</span> <span className='email-modal-span-item'>categories</span> </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                                <Grid sx={{ mt: 2 }} container columns={{ xs: 4, sm: 8, md: 12 }}>
                                    <Grid item xs={2} sm={3} md={5} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                        <Typography variant='body1'>Subject</Typography>
                                    </Grid>
                                    <Grid item xs={2} sm={5} md={7} >
                                        <TextField
                                            fullWidth
                                            color="warning"
                                            name="subject"
                                            multiline
                                            variant='standard'
                                            size="small"

                                            onChange={(e) => setAssignedSubject(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid mt={-0.1} item xs={2} sm={8} md={12} >
                                        <Divider></Divider>
                                    </Grid>
                                    <Grid item xs={4} sm={3} md={5} sx={{ display: 'flex', alignItems: 'flex-end', mt: 1 }}>
                                        <Typography variant='body1'>Due Date</Typography>
                                    </Grid>
                                    <Grid sx={{ mt: 1 }} item xs={4} sm={5} md={7} >
                                        <FormControl variant="outlined" sx={{ width: "120px" }}>

                                            <SelectPicker
                                                onChange={setSelectDueReason}
                                                placeholder="Trigger date"
                                                data={dueReason}
                                                size="sm"
                                                appearance='subtle'

                                            />
                                        </FormControl>
                                        <FormControl variant="outlined" sx={{ width: "80px", ml: 1 }}>

                                            <SelectPicker
                                                onChange={setDueTimeExtension}
                                                defaultValue={'Plus'}
                                                data={dueTimeExtension}
                                                size="sm"
                                                appearance='subtle'

                                            />
                                        </FormControl>
                                        <Input onChange={setTypeConditionInput} size='sm' style={{ display: 'inline-block', width: '60px', marginLeft: '5px' }} placeholder="0000" />
                                        <FormControl variant="outlined" sx={{ width: "120px", ml: 1 }}>

                                            <SelectPicker
                                                onChange={setDueDaysType}
                                                defaultValue={'Business1'}
                                                data={dueDaysType}
                                                size="sm"
                                                appearance='subtle'

                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid mt={-0.1} item xs={4} sm={8} md={12} >
                                        <Divider></Divider>
                                    </Grid>
                                    <Grid item xs={2} sm={3} md={5} sx={{ display: 'flex', alignItems: 'flex-end', mt: 1 }}>
                                        <Typography variant='body1'>Status</Typography>
                                    </Grid>
                                    <Grid sx={{ mt: 1 }} item xs={2} sm={5} md={7} >
                                        <FormControl variant="outlined" sx={{ width: "120px" }}>

                                            <SelectPicker
                                                placeholder="Status"
                                                data={statusType}
                                                size="sm"
                                                appearance='subtle'

                                            />
                                        </FormControl>

                                    </Grid>
                                    <Grid mt={-0.1} item xs={4} sm={8} md={12} >
                                        <Divider></Divider>
                                    </Grid>
                                    <Grid item xs={2} sm={3} md={5} sx={{ display: 'flex', alignItems: 'flex-end', mt: 1 }}>
                                        <Typography variant='body1'>Priority</Typography>
                                    </Grid>
                                    <Grid sx={{ mt: 1 }} item xs={2} sm={5} md={7} >
                                        <FormControl variant="outlined" sx={{ width: "120px" }}>

                                            <SelectPicker
                                                placeholder=""
                                                data={priorityLevel}
                                                size="sm"
                                                appearance='subtle'
                                                onChange={setTaskPriorityLevel}

                                            />
                                        </FormControl>

                                    </Grid>
                                    <Grid mt={-0.1} item xs={4} sm={8} md={12} >
                                        <Divider></Divider>
                                    </Grid>
                                    <Grid item xs={2} sm={3} md={5} sx={{ display: 'flex', alignItems: 'flex-end', mt: 1 }}>
                                        <Typography variant='body1'>Assigned To</Typography>
                                    </Grid>
                                    <Grid item xs={2} sm={5} md={7} sx={{ display: 'flex', alignItems: 'flex-end', mt: 1 }}>
                                        <Typography fontWeight={'bold'} ml={1} variant='body2'>Gourav Dubey</Typography>
                                    </Grid>
                                    <Grid mt={-0.1} item xs={4} sm={8} md={12} >
                                        <Divider></Divider>
                                    </Grid>
                                    <Grid item xs={4} sm={8} md={12} sx={{ display: 'flex', alignItems: 'flex-end', mt: 1 }}>
                                        <FormControlLabel control={<Checkbox

                                            size='small' />} label="Notify Assignee" />

                                        <FormControlLabel control={<Checkbox

                                            size='small' />} label="Remind Assignee" />
                                    </Grid>

                                    <Grid mt={-0.1} item xs={4} sm={8} md={12} >
                                        <Divider></Divider>
                                    </Grid>
                                    <Grid item xs={2} sm={3} md={5} sx={{ display: 'flex', alignItems: 'flex-end', mt: 1 }}>
                                        <Typography variant='body1'>Description</Typography>
                                    </Grid>
                                    <Grid item xs={2} sm={5} md={7} sx={{ display: 'flex', alignItems: 'flex-end', mt: 1 }}>
                                        <TextField
                                            fullWidth
                                            color="warning"
                                            name="subject"
                                            variant='standard'
                                            size="small"
                                        />

                                    </Grid>
                                    <Grid mt={-0.1} item xs={4} sm={8} md={12} >
                                        <Divider></Divider>
                                    </Grid>
                                </Grid>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button size='small' variant="contained" color='inherit' onClick={handleCloseAssignTask} >
                                    Cancel
                                </Button>
                                <Button onClick={() => { setAssignedTask(true); handleAllTask({ subject: assignedSubject ? assignedSubject : '', assIgnedTo: 'Gaurav Dubey', priority: taskPriorityLevel }) }} type='submit' size='small' sx={{ backgroundColor: '#2e89e6', ml: 1 }} variant="contained" >
                                    Save and Associated
                                </Button>
                            </Modal.Footer>
                        </form>
                    </Modal>
                </Box>
            </Box>
        </Box>

    );
};

export default GenerateRules;