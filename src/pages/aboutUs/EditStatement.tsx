import { Avatar, Card, CardContent, Drawer, IconButton, Paper, Stack, TextField, Typography, Button, CardActions } from '@mui/material';
import React, { useEffect, useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Iconify from '../../components/Iconify';
import { statement } from '../../utils/DataSet';

const EditStatement = (props:any) => {
    const [data, setData]:any = useState([]);
    const [edit, setEdit] = useState(false);
    const [editIndex, setEditIndex]:any = useState();

    useEffect(()=> {
        setData(statement);
       },[])

const handleClose = () => {
    props.parentCallback(false)
    props.ParentData(data)
};

 const handleChange = (e:any, i:number) => {
    const list = [...data]
    list[i] = e.target.value
    setData(list)
 }

 const handleDelete = (i:number) => {
    const list = [...data];
    list.splice(i, 1)
    setData(list)
 };

 const handleEdit = (i:number) => {
    setEdit(true)
    setEditIndex(i)
 };

 const handleAddStatement = () => {
    const list = [...data];
    list.push('')
    setData(list)
 }

    return (
        <Drawer anchor="right" open={props.record.open} onClose={handleClose} sx={{ '& .MuiDrawer-paper': { minWidth: '300px', maxWidth: '300px', pb: '40px' } }}>
        <Paper sx={{p:3}}>
        <Stack direction={'row'} spacing={2} justifyContent="space-between" alignItems="center">
        <Stack direction={'row'} spacing={2}>
       <IconButton size="medium" color="inherit" onClick={handleClose} aria-label="close"><KeyboardBackspaceIcon /> </IconButton>
        <Typography variant='h6' textAlign={'center'} display={'flex'} alignItems={'center'}>Statement</Typography>
        </Stack>
        <Button onClick={handleAddStatement} sx={{color:'#B72136'}} startIcon={<Iconify icon="material-symbols:add-circle-outline" />}>Add More</Button>
          </Stack> 
        <Typography variant="caption" gutterBottom marginLeft={1} color={'rgba(0, 0, 0, 0.38)'}>Write down the statements of the company in to convey your vision to the potential customer</Typography>
        <div>
        {data.map((d:any, i:number) => (
        <Card variant="outlined" sx={{height:'auto', marginTop: 3}} key={i}>
      <CardContent>
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
      <Iconify icon='ooui:quotes-ltr' sx={{color:'rgba(0, 0, 0, 0.38)'}} width={25} height={25}/>
      <Stack direction="row" spacing={0}>
      <IconButton sx={{width:'50px', height:'50px', color:'#B72136'}} onClick={()=>handleDelete(i)}><Iconify icon="ri:delete-bin-5-fill" /></IconButton>
      <IconButton sx={{width:'50px', height:'50px', color:'#B72136'}} onClick={()=>handleEdit(i)}><Iconify icon="ic:baseline-mode-edit" /></IconButton>
      </Stack></Stack>
      <br />
      {edit && editIndex === i ? <TextField multiline fullWidth label="" id="statement" value={d} onChange={(e)=>handleChange(e, i)} onBlur={()=>setEdit(false)} margin='none' helperText=" "/> :
      <Typography gutterBottom >{d} </Typography>}
    </CardContent>  
        </Card>
))}
 </div>
<div style={{ position: 'fixed', bottom: '0px', margin:'10px 0px', width:'27%' }}>
<Button variant='contained' fullWidth onClick={handleClose} sx={{color:'white', backgroundColor: '#B72136 !important'}}>Save</Button>
</div>
        </Paper>
      </Drawer>
    )
}

export default EditStatement