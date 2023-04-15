import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Button, Drawer, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useResponsive from '../../hooks/useResponsive';

const EditMedia = (props: any) => {
    const [data, setData]: any = useState({});
    const isDesktop = useResponsive('up', 'lg');

    const handleClose = () => {
        props.parentCallback(false)
    };

    const handleChange = (e: any) => {
        const list = { ...data }
        list[e.target.id] = e.target.value
        setData(list)
    }
    return (
        <Drawer anchor="right" open={props.record.open} onClose={handleClose} sx={{ '& .MuiDrawer-paper': { minWidth: isDesktop ? '30%' : '300px', maxWidth: isDesktop ? '30%' : '300px' } }}>
            <Paper sx={{ p: 3 }}>
                <Stack direction={'row'} spacing={2}>
                    <IconButton size="medium" color="inherit" onClick={handleClose} aria-label="close"><KeyboardBackspaceIcon /> </IconButton>
                    <Typography variant='h6' textAlign={'center'} display={'flex'} alignItems={'center'}>Social Media & Links</Typography>
                </Stack>
                <Typography variant="caption" gutterBottom marginLeft={1} color={'rgba(0, 0, 0, 0.38)'}>Please Provide the links to the social media accounts & website of the company</Typography>

                <React.Fragment>
                    <Typography variant='h6'>Instagram</Typography>
                    <TextField multiline fullWidth label="" id="instagram" placeholder='e.g. www.instagram.com/companyname' variant='filled' value={data.office_name} onChange={(e) => handleChange(e)} margin='none' helperText=" " />
                    <Typography variant='h6'>Facebook</Typography>
                    <TextField multiline fullWidth label="" id="facebook" variant='filled' placeholder="e.g. www.facebook.com/companyname" value={data.area} onChange={(e) => handleChange(e)} margin='none' helperText=" " />
                    <Typography variant='h6'>Twitter</Typography>
                    <TextField multiline fullWidth label="" id="twitter" variant='filled' placeholder="e.g. www.twitter.com/companyname" value={data.ladmark} onChange={(e) => handleChange(e)} margin='none' helperText=" " />
                    <Typography variant='h6'>Website</Typography>
                    <TextField multiline fullWidth label="" id="website" variant='filled' placeholder="e.g. www.companyname.com" value={data.town} onChange={(e) => handleChange(e)} margin='none' helperText=" " />
                </React.Fragment>

                <div style={{ position: 'fixed', bottom: '0px', margin: '10px 0px', width: '27%' }}>
                    <Button variant='contained' fullWidth onClick={handleClose} sx={{ color: 'white', backgroundColor: '#B72136 !important' }}>Save</Button>
                </div>
            </Paper>
        </Drawer>
    )
}

export default EditMedia