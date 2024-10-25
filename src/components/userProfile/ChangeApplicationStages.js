import { Box, Button, Divider, Drawer, TextField, Typography } from '@mui/material';
import React from 'react';
import { DateTimePicker, LocalizationProvider } from '@mui/lab';
import { useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { QuillEditor } from './quilEditor/quilEditor';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

import TimeLine from './TimeLine';
import BootstrapDialogTitle from '../shared/Dialogs/BootsrapDialogsTitle';

const ChangeApplicationStages = (props) => {
    const formOptions = [
        {
            value: 'Chetna',
            label: 'Chetna'
        },
        {
            label: 'Harshe Ranjan Sinha',
            value: 'Harshe Ranjan Sinha'
        }
    ];
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
    const appSubOptions = [
        {
            value: 'Application Stage',
            label: 'Application Stage'
        }
        ,
        {
            label: 'To Attempt in Entrance',
            value: 'To Attempt in Entrance'
        }
        ,
        {
            label: 'Entrance attended',
            value: 'Entrance attended'
        }
        ,
        {
            label: 'Offer letter sent',
            value: 'Offer letter sent'
        }
        ,
        {
            label: 'Registered ',
            value: 'Registered '
        }
        ,
        {
            label: 'Interview Done ',
            value: 'Interview Done '
        }
        ,
        {
            label: 'Refund  ',
            value: 'Refund  '
        }
        ,
        {
            label: 'Enrolled  ',
            value: 'Enrolled  '
        }
        ,
        {
            label: 'Unpaid  ',
            value: 'Unpaid  '
        }
        ,
        {
            value: 'Incomplete',
            label: 'Incomplete'
        },
        {
            label: 'Complete',
            value: 'Complete'
        }
    ];
    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1),
        },
        '& .MuiDialog-root': {
            maxWidth: false,
        },
    }));



    const [followupDate, setFollowUpDate] = useState(new Date());
    return (
        <Box>
            <BootstrapDialog
                onClose={props?.handleCloseDialogs}
                aria-labelledby="customized-dialog-title"
                open={props?.openDialogs}
                maxWidth={false}
            >
                <Box
                    sx={{
                        backgroundColor: 'background.paper',
                        minHeight: '100%',
                    }}

                >
                    <BootstrapDialogTitle color={props?.color} id="customized-dialog-title" onClose={props?.handleCloseDialogs}>
                        Change Application Stage
                    </BootstrapDialogTitle>
                    <Box
                        sx={{
                            pb: 3,
                            pt: 2,
                            px: 2
                        }}
                    >
                        <form onSubmit={(event) => event.preventDefault()}>
                            <TextField
                                fullWidth
                                label="Application Stage"
                                name="category"
                                select
                                SelectProps={{ native: true }}
                                sx={{ mb: 2 }}
                            >
                                {appOptions.map((category) => (
                                    <option
                                        key={category.value}
                                        value={category.value}
                                    >
                                        {category.label}
                                    </option>
                                ))}
                            </TextField>
                            <TextField
                                fullWidth
                                label="Application Sub Stage"
                                name="category"
                                select
                                SelectProps={{ native: true }}
                                sx={{ mb: 2 }}
                            >
                                {appSubOptions.map((category) => (
                                    <option
                                        key={category.value}
                                        value={category.value}
                                    >
                                        {category.label}
                                    </option>
                                ))}
                            </TextField>

                            <TextField
                                fullWidth
                                label="Select Counselor"
                                name="category"
                                select
                                SelectProps={{ native: true }}
                                sx={{ mb: 2 }}
                            >
                                {formOptions.map((category) => (
                                    <option
                                        key={category.value}
                                        value={category.value}
                                    >
                                        {category.label}
                                    </option>
                                ))}
                            </TextField>
                            <Box sx={{ mt: 2 }}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DateTimePicker
                                        onChange={(newDate) => setFollowUpDate(newDate)}
                                        label="Followup Date"
                                        renderInput={(inputProps) => (
                                            <TextField
                                                fullWidth
                                                {...inputProps}
                                            />
                                        )}
                                        value={followupDate}
                                    />
                                </LocalizationProvider>

                            </Box>

                            <QuillEditor
                                placeholder="Note"
                            />
                            <Button
                                sx={{ mt: 2 }}
                                type="submit"
                                variant="contained"
                                size='small'
                            >
                                Save
                            </Button>
                        </form>
                    </Box>
                    <Divider />
                    <Box >
                        <Typography

                            sx={{
                                mt: 2,
                                mb: 1,
                                ml: 2,

                            }}
                            variant="h6"
                            align='center'
                        >
                            Personal Activities
                        </Typography>
                        <TimeLine timeLineData={props?.timeLineData}></TimeLine>
                    </Box>


                </Box>
            </BootstrapDialog>
        </Box>
    );
};

export default ChangeApplicationStages;