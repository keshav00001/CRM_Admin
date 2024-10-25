import { Box, Button, DialogActions, DialogContent, Switch, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import Dialog from '@mui/material/Dialog';
import BootstrapDialogTitle from '../../components/shared/Dialogs/BootsrapDialogsTitle';
import { useNavigate } from 'react-router-dom';
import { Input, InputGroup } from 'rsuite';
import SearchIcon from '@mui/icons-material/Search';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const AllRules = () => {
    const [module, setModule] = React.useState('Campaign');
    const [ruleName, setRuleName] = React.useState("Automation");
    const [description, setDescription] = useState('empty');

    const allData =
    {
        module: module,
        ruleName: ruleName,
        description: description
    }


    const navigate = useNavigate()

    const moduleOptions = [
        {
            value: 'Campaign',
            label: 'Campaign'
        },
        {
            label: 'etc',
            value: 'etc'
        }
    ];
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)

    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const rows = [
        { name: 'Big Deal rule', allModules: 'potentials', description: 'Automation', action: 1, lastModified: '' }
    ];
    return (
        <Box sx={{ mt: 2, p: 2 }}>

            <Box>
                <Typography variant='h5'> Workflow Rules</Typography>
                <Typography variant='body1'> Workflow Rules allow you to perform contain automatic actions on specific records based on filter criteria </Typography>

            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                <InputGroup style={{ width: '200px' }}>
                    <Input placeholder='Search' />
                    <InputGroup.Addon>
                        <SearchIcon />
                    </InputGroup.Addon>
                </InputGroup>
                <Button size='sm' onClick={handleClickOpen} variant="contained" >
                    + Create Rule
                </Button>

            </Box>

            <Box sx={{ mt: 2 }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ borderTop: '1px solid #aaadab', borderBottom: '1px solid #aaadab' }}>
                                <TableCell>Rule name</TableCell>
                                <TableCell >All Modules</TableCell>
                                <TableCell >Description</TableCell>
                                <TableCell >Actions</TableCell>
                                <TableCell >Last modified</TableCell>
                                <TableCell >Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell >
                                        {row.name}
                                    </TableCell>
                                    <TableCell >{row?.allModules}</TableCell>
                                    <TableCell >{row?.description}</TableCell>
                                    <TableCell >{row?.action}</TableCell>
                                    <TableCell >{row?.lastModified}</TableCell>
                                    <TableCell ><Switch size="small" defaultChecked color="warning" /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>


            <Dialog open={open} onClose={handleClose}>
                <BootstrapDialogTitle color='application' id="customized-dialog-title" onClose={handleClose}>
                    Create New Rule
                </BootstrapDialogTitle>
                <DialogContent >
                    <form onSubmit={(event) => event.preventDefault()}>

                        <TextField
                            fullWidth

                            label="Module"
                            name="category"
                            size="small"
                            select
                            SelectProps={{ native: true }}
                            sx={{ mb: 2.5, mt: 1 }}
                            onBlur={(e) => setModule(e.target.value)}

                        >
                            {moduleOptions.map((category) => (
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
                            label="Rule Name"
                            name="contactName"
                            type='text'
                            size="small"
                            sx={{ mb: 2.5 }}
                            defaultValue={"Automation"}
                            InputProps={{
                                readOnly: true,
                            }}
                            required
                        />

                        <TextField
                            fullWidth
                            label="Description"
                            name="description"
                            multiline
                            size="small"

                            onChange={handleDescriptionChange}
                        />

                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={() => navigate('/generateRules', { state: allData })} type="submit">
                                Next
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>

            </Dialog>




        </Box >
    );
};

export default AllRules;