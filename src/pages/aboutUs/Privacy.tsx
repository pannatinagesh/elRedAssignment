import { Button, Card, CardActions, CardContent, Grid, Stack, Typography, IconButton, Avatar, List, ListItemButton, ListItemText, Paper, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Iconify from '../../components/Iconify'
import { privacy_policy } from '../../utils/DataSet';

const Privacy = () => {
    const [selectedIndex, setSelectedIndex]:any = useState(1);
    const [header, setHeader] = useState('Introdoction');
    const [context, setContext] = useState('');
    const [edit, setEdit] = useState(false);

    useEffect(()=> {
        setContext(privacy_policy[selectedIndex-1])
    },[selectedIndex])

    const handleListItemClick = (event: any,index: number) => {
      setHeader(event.target.textContent)
      setSelectedIndex(index);
    };

const handleClick = () => {
    setEdit(true)
}

const handleChange = (e:any) => {
    setContext(e.target.value)
};
    return (
        <>
        <Typography variant='h5'>Your Privacy Matters  <IconButton onClick={handleClick} sx={{width:'50px', height:'50px', color:'#B72136'}}><Iconify icon="ic:baseline-mode-edit" /></IconButton></Typography>
         <br />
         <Grid container spacing={2}>
            <Grid item xs={8}>
        {selectedIndex?<Typography variant='h6'>{selectedIndex}. &nbsp;{header}</Typography>:null}
        {edit?<TextField multiline fullWidth label="" id="fullWidth" value={context} onChange={handleChange} onBlur={()=>setEdit(false)} />:
        <Typography>{context}</Typography>}
        </Grid>
        <Grid item xs={4}>
            <Paper variant="outlined" elevation={3}>
            <Typography variant='h6' sx={{p:'8px 16px'}}>Table of Contents:</Typography>
            
            <List component="nav" sx={{color:'rgba(0, 0, 0, 0.38)', '& .Mui-selected': {backgroundColor:'white !important', color: 'black', '&:hover': { color: 'black', backgroundColor:'white !important' }} }}>
        <ListItemButton selected={selectedIndex === 1} onClick={(event:any) => handleListItemClick(event, 1)} >
          <ListItemText primary="Introdoction" />
        </ListItemButton>
        <ListItemButton selected={selectedIndex === 2} onClick={(event:any) => handleListItemClick(event, 2)} >
          <ListItemText primary="Data we collect" />
        </ListItemButton>
        <ListItemButton selected={selectedIndex === 3} onClick={(event:any) => handleListItemClick(event, 3)} >
          <ListItemText primary="How we use your data" />
        </ListItemButton>
        <ListItemButton selected={selectedIndex === 4} onClick={(event:any) => handleListItemClick(event, 4)} >
          <ListItemText primary="How we share Information" />
        </ListItemButton>
        <ListItemButton selected={selectedIndex === 5} onClick={(event:any) => handleListItemClick(event, 5)} >
          <ListItemText primary="Your choices and obligations" />
        </ListItemButton>
        <ListItemButton selected={selectedIndex === 6} onClick={(event:any) => handleListItemClick(event, 6)} >
          <ListItemText primary="Other important information" />
        </ListItemButton>
      </List>
            </Paper>
        </Grid></Grid>
        </>
    )
}

export default Privacy