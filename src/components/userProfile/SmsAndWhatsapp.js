import { Box, Button, Drawer, IconButton, Input, Typography } from '@mui/material';
import React from 'react';
import { QuillEditor } from './quilEditor/quilEditor';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import BootstrapDialogTitle from '../shared/Dialogs/BootsrapDialogsTitle';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const SmsAndWhatsapp = (props) => {
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
                        width: { md: '430px' }

                    }}
                >

                    <BootstrapDialogTitle color={props?.color} id="customized-dialog-title" onClose={props?.handleCloseDialogs}>
                        {props.name}
                    </BootstrapDialogTitle>
                    <Box
                        sx={{
                            pb: 3,
                            px: 2
                        }}
                    >
                        <form onSubmit={(event) => event.preventDefault()}>
                            <QuillEditor
                                placeholder="Type Message"
                                sx={{ height: 200 }}
                            />
                            <Box
                                sx={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    mt: 2
                                }}
                            >
                                <Button size='small' variant="contained">
                                    Send
                                </Button>

                                <label htmlFor="icon-button-file">
                                    <Input sx={{ display: 'none' }} accept="*" id="icon-button-file" type="file" />
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                        <AttachFileIcon fontSize="small" />
                                    </IconButton>
                                </label>
                            </Box>
                        </form>
                    </Box>

                </Box>
            </BootstrapDialog>
        </Box>
    );
};

export default SmsAndWhatsapp;