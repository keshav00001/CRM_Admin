import React, { useState } from 'react';
import AddPhotoIcon from '@mui/icons-material/AddPhotoAlternate';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MinimizeIcon from '@mui/icons-material/Minimize';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import CancelIcon from '@mui/icons-material/Cancel';

import { Backdrop, Box, Button, Divider, IconButton, Input, Paper, Portal, Tooltip, Typography, styled } from '@mui/material';
import { QuillEditor } from './quilEditor/quilEditor';


const Mail = (props) => {
    const { open, onClose } = props;
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [messageBody, setMessageBody] = useState('');

    const handleChange = (value) => {
        setMessageBody(value);
    };

    const handleExitFullScreen = () => {
        setIsFullScreen(false);
    };

    const handleEnterFullScreen = () => {
        setIsFullScreen(true);
    };

    if (!open) {
        return null;
    }
    return (
        <Portal>
            <Backdrop open={isFullScreen} />
            <Paper
                sx={{
                    bottom: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    margin: 3,
                    maxHeight: (theme) => `calc(100% - ${theme.spacing(6)})`,
                    maxWidth: (theme) => `calc(100% - ${theme.spacing(6)})`,
                    minHeight: 500,
                    outline: 'none',
                    position: 'fixed',
                    right: 0,
                    width: 600,
                    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
                    zIndex: 2000,
                    ...(
                        isFullScreen && {
                            height: '100%',
                            width: '100%'
                        }
                    )
                }}
                elevation={12}
            >
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        px: 2,
                        py: 1
                    }}
                >
                    <Typography variant="h6">
                        New Message
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    {
                        isFullScreen
                            ? (
                                <IconButton onClick={handleExitFullScreen}>
                                    <MinimizeIcon fontSize="small" />
                                </IconButton>
                            )
                            : (
                                <IconButton onClick={handleEnterFullScreen}>
                                    <OpenWithIcon fontSize="small" />
                                </IconButton>
                            )
                    }
                    <IconButton onClick={onClose}>
                        <CancelIcon></CancelIcon>
                    </IconButton>
                </Box>
                <Input
                    disableUnderline
                    fullWidth
                    placeholder="To"
                    sx={{
                        p: 1,
                        borderBottom: 1,
                        borderColor: 'divider'
                    }}
                />
                <Input
                    disableUnderline
                    fullWidth
                    placeholder="Subject"
                    sx={{
                        p: 1,
                        borderBottom: 1,
                        borderColor: 'divider'
                    }}
                />
                <QuillEditor
                    onChange={handleChange}
                    placeholder="Leave a message"
                    sx={{
                        border: 'none',
                        flexGrow: 1
                    }}
                    value={messageBody}
                />
                <Divider />
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        p: 2
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
            </Paper>
        </Portal>
    );
};

export default Mail;