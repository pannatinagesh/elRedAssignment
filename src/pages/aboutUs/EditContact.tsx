import { Avatar, Card, CardContent, Drawer, IconButton, Paper, Stack, TextField, Typography, Button, CardActions } from '@mui/material';
import React, { useEffect, useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Iconify from '../../components/Iconify';
import { contact } from '../../utils/DataSet';
import useResponsive from '../../hooks/useResponsive';

const EditConatct = (props:any) => {
    const isDesktop = useResponsive('up', 'lg');
    console.log(isDesktop)
    const [data, setData]:any = useState([]);
    const [edit, setEdit] = useState(false);
    const [editIndex, setEditIndex]:any = useState();

    useEffect(()=> {
     setData(contact);
    },[])
    
const handleClose = () => {
    props.parentCallback(false)
    props.ParentData(data)
};

const handleDelete = (i:number) => {
    const list = [...data];
    list[i]['email'] = []
    list[i]['phone'] = []
    setData(list)
 };

 const handleEdit = (i:number) => {
    setEdit(true)
    setEditIndex(i)
 }

 const handleChange = (e:any, i:number) => {
    const list = [...data]
    list[editIndex][e.target.id][i] = e.target.value
    setData(list)
 }

 const handleAddEmail = () => {
    const list = [...data]
    list[editIndex]['email'].push('')
    setData(list)
 }

 const handleAddPhone = () => {
    const list = [...data]
    list[editIndex]['phone'].push('')
    setData(list)
 }
    return (
        <Drawer anchor="right" open={props.record.open} onClose={handleClose} sx={{ '& .MuiDrawer-paper': { minWidth: isDesktop?'30%':'300px', maxWidth: isDesktop?'30%':'300px' } }}>
        <Paper sx={{p:3}}>
        <Stack direction={'row'} spacing={2}>
       {edit ? <IconButton size="medium" color="inherit" onClick={()=>setEdit(false)} aria-label="close"><KeyboardBackspaceIcon /> </IconButton>:
       <IconButton size="medium" color="inherit" onClick={handleClose} aria-label="close"><KeyboardBackspaceIcon /> </IconButton>}
        <Typography variant='h6' textAlign={'center'} display={'flex'} alignItems={'center'}>Contacts</Typography>
        </Stack>
        <Typography variant="caption" gutterBottom marginLeft={1} color={'rgba(0, 0, 0, 0.38)'}>Please Provide Company's email & conatacts</Typography>
        <Stack direction={'column'} spacing={2} sx={{mb: '40px'}}>
    {!edit ? data.map((data:any, i:number)=> (
    <Card variant="outlined" sx={{height:'auto', marginTop: 3}} key={i}>
      <CardContent>
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
      <Typography variant='h5' gutterBottom alignItems={'center'} display={'flex'}> <Iconify icon='bxs:contact' sx={{color:'rgba(0, 0, 0, 0.38)'}} width={25} height={25}/>&nbsp; {data.title}</Typography>
      <Stack direction="row" spacing={0}>
      <IconButton sx={{width:'50px', height:'50px', color:'#B72136'}} onClick={()=>handleDelete(i)}><Iconify icon="ri:delete-bin-5-fill" /></IconButton>
      <IconButton sx={{width:'50px', height:'50px', color:'#B72136'}} onClick={()=>handleEdit(i)}><Iconify icon="ic:baseline-mode-edit" /></IconButton>
      </Stack></Stack>
      <br />
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
      <Typography gutterBottom > <Iconify icon='material-symbols:mail-rounded' sx={{color:'rgba(0, 0, 0, 0.38)'}} />&nbsp; {data.email.join(' / ')} </Typography>
      </Stack>
      <Typography gutterBottom alignItems={'center'} display={'flex'}> <Iconify icon='ic:round-phone' sx={{color:'rgba(0, 0, 0, 0.38)'}} />&nbsp; {data.phone.join(' / ')}</Typography>
    </CardContent>  
        </Card>
)) :

<React.Fragment>
    <Typography sx={{mt:3}}>Email ID</Typography>
     {data[editIndex]['email'].map((d:any, i:number) => (
    <TextField multiline fullWidth label="" id="email" placeholder='e.g.slaes.team@br.in' variant='filled' value={d} onChange={(e)=>handleChange(e, i)} margin='none' helperText=" "/>
    ))}
    <Button variant='contained' fullWidth onClick={handleAddEmail} sx={{color:'#B72136', backgroundColor: 'rgba(255, 72, 66, 0.16) !important'}} startIcon={<Iconify icon="material-symbols:add-circle-outline" />}>Add More</Button>
   
    <Typography sx={{mt:2}}>Contact Number</Typography>
    {data[editIndex]['phone'].map((d:any, i:number) => (
    <TextField multiline fullWidth label="" id="phone" variant='filled' placeholder="e.g.8511092482" value={d} onChange={(e)=>handleChange(e, i)} margin='none' helperText=" "/>
    ))}
    <Button variant='contained' fullWidth onClick={handleAddPhone} sx={{color:'#B72136', backgroundColor: 'rgba(255, 72, 66, 0.16) !important'}} startIcon={<Iconify icon="material-symbols:add-circle-outline" />}>Add More</Button>
</React.Fragment>
}


<div style={{ position: 'fixed', bottom: '0px', margin:'10px 0px', width:'27%' }}>
<Button variant='contained' fullWidth onClick={handleClose} sx={{color:'white', backgroundColor: '#B72136 !important'}}>Save</Button>
</div>
</Stack>
        </Paper>
      </Drawer>
    )
}

export default EditConatct