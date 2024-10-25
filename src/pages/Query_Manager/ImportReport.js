import React, { useEffect } from 'react';
import '../../styles/ImportReport.css';
import {
    Box,
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
    Card, Grid
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { SelectPicker, InputPicker, DateRangePicker } from "rsuite";
import '../../styles/ImportReport.css';
// data
const data = [
    {
        importedDate: new Date('02/22/2022, 14:11:37'),

        uploadedWith: "Phone",
        uploadType: "New Leads",
        importStatus: "Completed",
        importBy: "Azad",
        leadProcessed: 142,
        importedLead: 0,
        duplicateLead: 0,
        failedLead: 142,
        updatedLeads: 0, importType: 'Single'
    },
    {
        importedDate: new Date('02/19/2022, 14:11:37'),
        uploadedWith: "uploadedWith",
        uploadType: "-",
        importStatus: "Completed",
        importBy: "Shivaji Grant",
        leadProcessed: 1,
        importedLead: 1,
        duplicateLead: 0,
        failedLead: 0,
        updatedLeads: 0, importType: 'Bulk'
    },
    {
        importedDate: new Date('02/13/2022, 14:11:37'),
        uploadedWith: "Phone",
        uploadType: "-",
        importStatus: "Completed",
        importBy: "Adil Mishra",
        leadProcessed: 1,
        importedLead: 1,
        duplicateLead: 0,
        failedLead: 0,
        updatedLeads: 0, importType: 'Single'
    },
    {
        importedDate: new Date('02/08/2022, 14:11:37'),
        uploadedWith: "Phone",
        uploadType: "-",
        importStatus: "In Process",
        importBy: "Adil Mishra",
        leadProcessed: 1,
        importedLead: 1,
        duplicateLead: 0,
        failedLead: 0,
        updatedLeads: 0, importType: 'Bulk'
    },
    {
        importedDate: new Date('01/10/2022, 14:11:37'),
        uploadedWith: "Email",
        uploadType: "-",
        importStatus: "Completed",
        importBy: "Adil Mishra",
        leadProcessed: 1,
        importedLead: 1,
        duplicateLead: 0,
        failedLead: 0,
        updatedLeads: 0, importType: 'Single'
    },
    {
        importedDate: new Date('01/07/2022, 14:11:37'),
        uploadedWith: "Email",
        uploadType: "-",
        importStatus: "In Process",
        importBy: "Varun Kakkar",
        leadProcessed: 1,
        importedLead: 1,
        duplicateLead: 0,
        failedLead: 0,
        updatedLeads: 0,
        importType: 'Single'
    },
]
const finalData = [...data]

const data1 = [

    {
        label: "Kalpana Dahiya",
        value: "Kalpana Dahiya",
        role: "Master",
    },
    {
        label: "Adil Mishra",
        value: "Adil Mishra",
        role: "Master",
    },
    {
        label: "Shivaji Grant",
        value: "Shivaji Grant",
        role: "Master",
    },
    {
        label: "Shivaji Saini",
        value: "Shivaji Saini",
        role: "Master",
    },
    {
        label: "Surbhi",
        value: "Surbhi",
        role: "Master",
    },
    {
        label: "Ishaan",
        value: "Ishaan",
        role: "Master",
    },
    {
        label: "Taranjeet Singh Manku",
        value: "Taranjeet Singh Manku",
        role: "Master",
    },
    {
        label: "Vikram Singh Tomar",
        value: "Vikram Singh Tomar",
        role: "Master",
    },
    {
        label: "Azad",
        value: "Azad",
        role: "Master",
    },

];
const data2 = [

    {
        label: "In Process",
        value: "In Process",
        role: "Master",
    },
    {
        label: "Completed",
        value: "Completed",
        role: "Master",
    },

];
const data3 = [
    {
        label: "Today",
        value: "Today",
        role: "Master",
    },
    {
        label: "Yesterday",
        value: "Yesterday",
        role: "Master",
    },
    {
        label: "Last 7 Days",
        value: "Last 7 Days",
        role: "Master",
    },
    {
        label: "Last 30 Days",
        value: "Last 30 Days",
        role: "Master",
    },
    {
        label: "This Month",
        value: "This Month",
        role: "Master",
    },
    {
        label: "Last Month",
        value: "Last Month",
        role: "Master",
    },
    {
        label: "Custom Range",
        value: "Custom Range",
        role: "Master",
    },

];
const data4 = [

    {
        label: "Single",
        value: "Single",
        role: "Master",
    },
    {
        label: "Bulk",
        value: "Bulk",
        role: "Master",
    },

];
const data5 = [
    {
        label: "Email",
        value: "Email",
        role: "Master",
    },
    {
        label: "Phone",
        value: "Phone",
        role: "Master",
    },

];
const data6 = [
    {
        label: "Update Leads",
        value: "Update Leads",
        role: "Master",
    },
    {
        label: "New Leads",
        value: "New Leads",
        role: "Master",
    }

];
let filter = {
    // importedDate: date
    // ,
}

const ImportReport = () => {
    const [importValue, setImportValue] = React.useState(null);
    const [importedStatusValue, setImportedStatusValue] = React.useState(null);
    const [date, setdate] = React.useState(null);
    const [importTypeValue, setImportTypeValue] = React.useState(null);
    const [uploadedWithValue, setUploadedWithValue] = React.useState(null);
    const [updatedLeadsValue, setUpdatedLeadsValue] = React.useState(null);


    const [searchedResult, setSearchResult] = React.useState([]);

    useEffect(() => {
        setSearchResult(data)
    }, [])

    const handleSearch = () => {
        const find = data.filter(function (item) {
            for (let key in filter) {
                if (item[key] === undefined || item[key] !== filter[key])
                    return false;
            }
            return true;
        });
        // date !== null ?(
        //     var startDate = new Date("2015-08-04");
        //     var endDate = new Date("2015-08-12");

        //     var resultProductData = product_data.filter(function (a) {
        //         var hitDates = a.ProductHits || {};
        //         // extract all date strings
        //         hitDates = Object.keys(hitDates);
        //         // improvement: use some. this is an improment because .map()
        //         // and .filter() are walking through all elements.
        //         // .some() stops this process if one item is found that returns true in the callback function and returns true for the whole expression
        //         hitDateMatchExists = hitDates.some(function(dateStr) {
        //             var date = new Date(dateStr);
        //             return date >= startDate && date <= endDate
        //         });
        //         return hitDateMatchExists;
        //     });
        //     console.log(resultProductData);
        // ):()
        setSearchResult(find)
        console.log(find);
    }
    const handleReset = () => {
        setSearchResult(data)
        filter = {}
    }


    return (
        <div>
            <Box sx={{ margin: "20px", borderBottom: "1px solid #e6e8f0" }}>
                <Typography variant="h6" sx={{ mb: 2 }}>Import Report</Typography>
            </Box>
            <Box sx={{ borderRadius: "50px", textAlign: "center", marginBottom: "20px" }}>
                <Card sx={{ maxWidth: '90%', padding: "30px 0px", margin: '0 auto' }}>
                    <Grid
                        container
                        md={12}
                        sm={12}
                        xs={12}
                        sx={{ width: "900px", margin: "0 auto" }}
                    >
                        <Grid item md={4} sm={12} xs={12} sx={{ textAlign: "left" }}>
                            <FormControl variant="outlined" sx={{ width: "280px" }}>
                                <InputLabel id="demo-simple-select-outlined-label">
                                    Imported By
                                </InputLabel>
                                <SelectPicker
                                    onChange={(e) => { setImportValue(e); filter.importBy = e; e === null && delete filter.importBy; }}
                                    placeholder="Imported by"
                                    data={data1}
                                    size="lg"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={4} sm={4} xs={4} sx={{ textAlign: "left" }}>
                            <FormControl variant="outlined" sx={{ width: "280px" }}>
                                <InputLabel id="demo-simple-select-outlined-label">
                                    Imported Status
                                </InputLabel>
                                <SelectPicker
                                    onChange={(e) => { setImportedStatusValue(e); filter.importStatus = e; e === null && delete filter.importStatus; }}
                                    placeholder="Imported Status"
                                    data={data2}
                                    size="lg"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={4} sm={4} xs={12} sx={{ textAlign: "left" }}>
                            <Box sx={{ width: "280px" }}>
                                <FormControl fullWidth>
                                    <DateRangePicker size="lg" format="MM-dd-yyyy" placeholder="Date Range" onChange={setdate} />
                                </FormControl>
                            </Box>
                        </Grid>
                    </Grid>
                    {/* second grid */}
                    <Grid
                        container
                        md={12}
                        sm={12}
                        xs={12}
                        sx={{ width: "900px", margin: "0 auto", mt: 2 }}
                    >
                        <Grid item md={4} sm={12} xs={12} sx={{ textAlign: "left" }}>
                            <FormControl variant="outlined" sx={{ width: "280px" }}>
                                <InputLabel id="demo-simple-select-outlined-label">
                                    Import Type
                                </InputLabel>
                                <SelectPicker
                                    onChange={(e) => { setImportTypeValue(e); filter.importType = e; e === null && delete filter.importType; }}
                                    placeholder="Import Type"
                                    data={data4}
                                    size="lg"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12} sx={{ textAlign: "left" }}>
                            <FormControl variant="outlined" sx={{ width: "280px" }}>
                                <InputLabel id="demo-simple-select-outlined-label">
                                    Updated With
                                </InputLabel>
                                <SelectPicker
                                    onChange={(e) => { setUploadedWithValue(e); filter.uploadedWith = e; e === null && delete filter.uploadedWith; }}
                                    placeholder="Updated With"
                                    data={data5}
                                    size="lg"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12} sx={{ textAlign: "left" }}>
                            <FormControl variant="outlined" sx={{ width: "280px" }}>
                                <InputLabel id="demo-simple-select-outlined-label">
                                    Upload Type
                                </InputLabel>
                                <SelectPicker
                                    onChange={(e) => { setUpdatedLeadsValue(e); filter.uploadType = e; e === null && delete filter.uploadType; }}
                                    placeholder="Upload Type"
                                    data={data6}
                                    size="lg"
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Box className="btn_box">
                        <Button onClick={handleSearch} variant='contained'>Search</Button>
                        <Button onClick={handleReset} variant='outlined' sx={{ marginLeft: "10px" }}>Reset</Button>
                    </Box>
                </Card>
            </Box>
            <Card sx={{ boxShadow: 2, width: "96%", margin: "0 auto" }}>
                <Table>
                    <TableHead sx={{ backgroundColor: "#F2F9FE" }}>
                        <TableRow>
                            <TableCell>Import Date & Time</TableCell>
                            <TableCell>Uploaded With</TableCell>
                            <TableCell>Upload Type</TableCell>
                            <TableCell>Import Status</TableCell>
                            <TableCell>Imported By</TableCell>
                            <TableCell>Lead Processed</TableCell>
                            <TableCell>Successfully Imported Lead</TableCell>
                            <TableCell>Duplicate Lead</TableCell>
                            <TableCell>Failed Lead</TableCell>
                            <TableCell>Updated Leads</TableCell>
                            <TableCell>Import Type</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {searchedResult.map((data) => (
                            <TableRow hover>
                                <TableCell>{data.importedDate.toLocaleString()}</TableCell>
                                <TableCell>{data.uploadedWith}</TableCell>
                                <TableCell>{data.uploadType}</TableCell>
                                <TableCell>{data.importStatus}</TableCell>
                                <TableCell>{data.importBy}</TableCell>
                                <TableCell>{data.leadProcessed}</TableCell>
                                <TableCell>{data.importedLead}</TableCell>
                                <TableCell>{data.duplicateLead}</TableCell>
                                <TableCell>{data.failedLead}</TableCell>
                                <TableCell>{data.updatedLeads}</TableCell>
                                <TableCell>{data.importType}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
};

export default ImportReport;