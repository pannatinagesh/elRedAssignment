import { Box, IconButton, Link, Paper, Stack, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Iconify from '../../components/Iconify';
import { about } from '../../utils/DataSet';
import TabView from './TabView';

const AboutUs = () => {
    const [edit, setEdit] = useState(false);
    const [value, setValue] = useState('');

    useEffect(() => {
        setValue(about)
    }, [])

    const handleClick = () => {
        setEdit(true)
    };

    const handleChange = (e: any) => {
        setValue(e.target.value)
    };

    return (
        <Paper sx={{ p: 3, width: '100%', overflow: 'auto' }} elevation={3} >
            <Typography variant='h6' sx={{ pb: '30px' }} >About Us</Typography>

            <Stack direction={'row'} spacing={3}>
                <img src='/Logo 3.png' />
                <Stack direction={'row'} spacing={1}>
                    <img src="/verify.png" style={{ marginTop: '15px', width: '30px', height: '30px' }} />
                    <Link sx={{ mt: '15px !important', cursor: 'pointer', width: 'auto', height: '30px', alignItems: 'center', display: 'flex' }}>Verify Company</Link>
                </Stack></Stack>

            <Stack direction={'row'} sx={{ mx: 3 }}>
                {edit ? <TextField multiline fullWidth label="" id="fullWidth" value={value} onChange={handleChange} onBlur={() => setEdit(false)} sx={{ width: '60%' }} /> :
                    <Typography sx={{ width: '60%' }}>{value}</Typography>}
                <IconButton onClick={handleClick} sx={{ width: '50px', height: '50px', color: '#B72136' }}><Iconify icon="ic:baseline-mode-edit" /></IconButton>
            </Stack>
            <Box sx={{ p: 3 }} />

            <TabView />
        </Paper>
    )
}

export default AboutUs;