import { Box, Button, Divider, Drawer, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

import { QuillEditor } from './quilEditor/quilEditor';
import TimeLine from './TimeLine';
import BootstrapDialogTitle from '../shared/Dialogs/BootsrapDialogsTitle';


const AddNote = (props) => {
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
                        Add Note
                    </BootstrapDialogTitle>
                    <Box
                        sx={{
                            pb: 3,

                            px: 2
                        }}
                    >
                        <form onSubmit={(event) => event.preventDefault()}>
                            <QuillEditor
                                placeholder="Note"
                                sx={{ height: 200 }}
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
                            variant="h5"
                            align='center'
                        >
                            Personal Activities
                        </Typography>
                        <TimeLine timeLineData={props?.followUpData}></TimeLine>
                    </Box>


                </Box>
            </BootstrapDialog>
        </Box>
    );
};

export default AddNote;