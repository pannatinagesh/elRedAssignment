import { Avatar, Card, CardContent, Drawer, IconButton, Paper, Stack, TextField, Typography, Button, CardActions } from '@mui/material';
import React, { useEffect, useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Iconify from '../../components/Iconify';
import { address } from '../../utils/DataSet';

const EditAddress = (props:any) => {
    const [data, setData]:any = useState({});

    useEffect(()=> {
     setData(address);
    },[])
    
const handleClose = () => {
    props.parentCallback(false)
    props.ParentData(data)
};

 const handleChange = (e:any) => {
    const list = {...data}
    list[e.target.id] = e.target.value
    setData(list)
 }
    return (
        <Drawer anchor="right" open={props.record.open} onClose={handleClose} sx={{ '& .MuiDrawer-paper': { minWidth: '300px', maxWidth: '300px' } }}>
        <Paper sx={{p:3}}>
        <Stack direction={'row'} spacing={2}>
       <IconButton size="medium" color="inherit" onClick={handleClose} aria-label="close"><KeyboardBackspaceIcon /> </IconButton>
        <Typography variant='h6' textAlign={'center'} display={'flex'} alignItems={'center'}>Address</Typography>
        </Stack>

<React.Fragment>
    <TextField multiline fullWidth label="" id="office_name" placeholder='Floor Number / Block no / Office Name' variant='filled' value={data.office_name} onChange={(e)=>handleChange(e)} margin='none' helperText=" "/>
    <TextField multiline fullWidth label="" id="area" variant='filled' placeholder="Area / Locality" value={data.area} onChange={(e)=>handleChange(e)} margin='none' helperText=" "/>
    <TextField multiline fullWidth label="" id="ladmark" variant='filled' placeholder="Nearest Landmark" value={data.ladmark} onChange={(e)=>handleChange(e)} margin='none' helperText=" "/>
    <TextField multiline fullWidth label="" id="town" variant='filled' placeholder="Town / City" value={data.town} onChange={(e)=>handleChange(e)} margin='none' helperText=" "/>
    <TextField multiline fullWidth label="" id="city" variant='filled' placeholder="City" value={data.city} onChange={(e)=>handleChange(e)} margin='none' helperText=" "/>
    <TextField multiline fullWidth label="" id="pincode" variant='filled' placeholder="Pincode" value={data.pincode} onChange={(e)=>handleChange(e)} margin='none' helperText=" "/>
</React.Fragment>

<div style={{ position: 'fixed', bottom: '0px', margin:'10px 0px', width:'27%' }}>
<Button variant='contained' fullWidth onClick={handleClose} sx={{color:'white', backgroundColor: '#B72136 !important'}}>Save</Button>
</div>
        </Paper>
      </Drawer>
    )
}

export default EditAddress