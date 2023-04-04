import { Button, Card, CardActions, CardContent, Grid, Stack, Typography, IconButton, Avatar, List, ListItemButton, ListItemText, Paper, TextField } from '@mui/material'
import React, {useEffect, useState} from 'react'
import Iconify from '../../components/Iconify'
import { terms_conditions } from '../../utils/DataSet';

const TermsConditions = () => {
    const [selectedIndex, setSelectedIndex]:any = useState(1);
    const [header, setHeader] = useState('Agreement');
    const [context, setContext] = useState('');
    const [edit, setEdit] = useState(false);

    useEffect(()=> {
        setContext(terms_conditions[selectedIndex-1])
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
        <Typography variant='h5'>Terms & Conditions  <IconButton onClick={handleClick} sx={{width:'50px', height:'50px', color:'#B72136'}}><Iconify icon="ic:baseline-mode-edit" /></IconButton></Typography>
         <br />
         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12} sm={8} md={8}>
        {selectedIndex?<Typography variant='h6'>{selectedIndex}. &nbsp;{header}</Typography>:null}
        {edit?<TextField multiline fullWidth label="" id="fullWidth" value={context} onChange={handleChange} onBlur={()=>setEdit(false)} />:
           <Typography>{context}</Typography>}
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
            <Paper variant="outlined" elevation={3}>
            <Typography variant='h6' sx={{p:'8px 16px'}}>Table of Contents:</Typography>
            
            <List component="nav" sx={{color:'rgba(0, 0, 0, 0.38)', '& .Mui-selected': {backgroundColor:'white !important', color: 'black', '&:hover': { color: 'black', backgroundColor:'white !important' }} }}>
        <ListItemButton selected={selectedIndex === 1} onClick={(event:any) => handleListItemClick(event, 1)} >
          <ListItemText primary="Agreement" />
        </ListItemButton>
        <ListItemButton selected={selectedIndex === 2} onClick={(event:any) => handleListItemClick(event, 2)} >
          <ListItemText primary="Services & Paid Subsription" />
        </ListItemButton>
        <ListItemButton selected={selectedIndex === 3} onClick={(event:any) => handleListItemClick(event, 3)} >
          <ListItemText primary="Rights & Laws" />
        </ListItemButton>
        <ListItemButton selected={selectedIndex === 4} onClick={(event:any) => handleListItemClick(event, 4)} >
          <ListItemText primary="3rd Party Applications" />
        </ListItemButton>
        <ListItemButton selected={selectedIndex === 5} onClick={(event:any) => handleListItemClick(event, 5)} >
          <ListItemText primary="Rights you grand us" />
        </ListItemButton>
      </List>
            </Paper>
        </Grid></Grid>
        </>
    )
}

export default TermsConditions