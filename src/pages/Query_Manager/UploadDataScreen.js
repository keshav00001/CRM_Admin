import React, { useState } from "react";
import {
    Typography,
    TextField,
    Button,
    Stepper,
    Step,
    StepLabel, Container
} from "@mui/material";
import { Box, Card } from '@mui/material';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LocalOfferSharpIcon from '@mui/icons-material/LocalOfferSharp';
import DownloadIcon from '@mui/icons-material/Download';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import "../../styles/UploadDataScreen.css";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Link} from 'react-router-dom'
import Autocomplete from '@mui/material/Autocomplete';
const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    // ...(ownerState.active && {
    backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    color: "#fff",
    // }),
    ...(ownerState.completed && {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        color: "#fff"
    }),
}));
const top100Films = [
    { title: 'MA in Diplomacy Law & Business Application 2022' },
    { title: 'B.A. [Hons] Political Science Application 2022' },
];

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;
    const icons = {
        1: <DensitySmallIcon />,
        2: <InsertDriveFileIcon />,
        3: <LocalOfferSharpIcon />,
        4: <DownloadIcon />,
    };
    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}
function getSteps() {
    return [
        "Pre Step:Prepare your data for import",
        "Choose CSV file to import",
        "CSV Label Mapping with NPF Labels",
        "Start Import",
    ];
}

const UploadDataScreen = () => {
    //   const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [skippedSteps, setSkippedSteps] = useState([]);
    const steps = getSteps();

    const isStepSkipped = (step) => {
        return skippedSteps.includes(step);
    };
    const handleNext = () => {
        setActiveStep(activeStep + 1);
        setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
    };

    // const handleBack = () => {
    //     setActiveStep(activeStep - 1);
    // };
    const [personName, setPersonName] = React.useState({});

    const handleChange = (event) => {
        setPersonName(event.target.value)
    };

    return (
        <div>
            <Typography variant="h6" sx={{ textAlign: "center", mt: 2 }}>Upload your data in 3 easy steps</Typography>
            <Stepper sx={{ marginTop: "50px", marginBottom: '50px' }} alternativeLabel activeStep={activeStep}>
                {steps.map((step, index) => {
                    const labelProps = {};
                    const stepProps = {};
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (

                        <Step {...stepProps} >
                            <StepLabel {...labelProps} StepIconComponent={ColorlibStepIcon}>{step}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <Card variant="outlined" sx={{ mt: 3, width: "60%", margin: "0 auto", padding: "30px" }}>
                <form className="text-alignment">
                    <Container className="form-container">
                        <Box>
                            <InputLabel
                                sx={{ textAlign: "left" }}
                                variant="subtitle2"
                                required
                            >
                                Select Institute
                            </InputLabel>
                            <FormControl fullWidth>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={personName}
                                    onChange={handleChange}
                                    autoWidth
                                    className="field_width"
                                >
                                    <MenuItem value={10}>O.P. Jindal Global University</MenuItem>
                                    <MenuItem value={21}>Global University</MenuItem>
                                    <MenuItem value={22}>Jindal Global University</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        {/* 2nd */}
                        <Box sx={{ mt: 2, textAlign: "center" }}>
                            <InputLabel
                                sx={{ textAlign: "left" }}
                                variant="subtitle2"
                            >
                                Select Form(Optional)
                            </InputLabel>
                            <Autocomplete
                                multiple
                                limitTags={2}
                                id="multiple-limit-tags"
                                options={top100Films}
                                getOptionLabel={(option) => option.title}
                                defaultValue={[top100Films[0], top100Films[1]]}
                                renderInput={(params) => (
                                    <TextField {...params} />
                                )}
                                className="field_width"
                            />
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <InputLabel
                                variant="subtitle2"
                            >
                                List Name
                            </InputLabel>
                            <TextField
                                className="field_width"
                                name="email"
                                type="text"
                                placeholder="Type List Name(example-events,client name)"
                            />
                        </Box>
                        {/* */}
                        <Box sx={{ mt: 2 }}>
                            <InputLabel
                                // sx={{ mb: 1 }}
                                variant="subtitle2"
                            >
                                Description
                            </InputLabel>
                            <TextField
                                className="field_width"
                                name="phone"
                                required
                                type="text"
                                placeholder="Add description to list"
                            />
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <Button
                                // disabled={activeStep === 0}
                                // onClick={handleBack}
                                variant="outlined"
                            >
                                Reset
                            </Button>
                            <Link to="/checklist">
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ ml: 2 }}
                                onClick={handleNext}
                            >
                                Save & Next
                            </Button>
                            </Link>
                           
                        </Box>
                    </Container>
                </form>
            </Card>
        </div>
    );
};

export default UploadDataScreen;
