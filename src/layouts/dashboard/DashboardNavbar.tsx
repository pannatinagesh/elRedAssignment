import { AppBar, Box, IconButton, InputAdornment, Stack, TextField, Toolbar, Button } from '@mui/material';
// material
import { alpha, styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
// components
import Iconify from '../../components/Iconify';
import Label from '../../components/Label';
import AccountPopover from './AccountPopover';
import NotificationsPopover from './NotificationsPopover';
import WarningIcon from '@mui/icons-material/Warning';
import { useParams } from 'react-router-dom';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import useResponsive from '../../hooks/useResponsive';
// ----------------------------------------------------------------------

const DRAWER_WIDTHOpen = 20;
const DRAWER_WIDTHClose = 8;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

interface Props {
  onOpenSidebar: () => void
  isOpenSidebarDesktop: boolean
}

export default function DashboardNavbar({ onOpenSidebar , isOpenSidebarDesktop }: Props) {
  const isDesktop = useResponsive('up', 'lg');
  const isDesktopCheckBox = useResponsive('up', 'sm');

 const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: 'white',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100%)`,
  },
}));

  return (
     <RootStyle>
      <ToolbarStyle>
       <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary', display: { lg: 'none' } }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton> 
      <Box sx={{ display: 'inline-flex', width:'19%', backgroundColor:'white' }}>
      <img src="/Logo 1.png" />
      </Box>
        {isDesktop ?<div style={{width:'40%', display:'flex'}} >
        <TextField label="" id="search" placeholder='Search...' variant="filled" size="small" fullWidth
        sx={{'& .MuiFilledInput-input': {p:'10px'}}}
          InputProps={{
            startAdornment: <InputAdornment position="start" sx={{m:'0px !important'}}><SearchIcon /></InputAdornment>
          }}
        />
        </div> :null}
        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
        {isDesktopCheckBox ? <Button variant='contained' startIcon={<Iconify icon='bi:cart3'/>} sx={{backgroundColor:'black', color: 'white', p:'4px 30px', '&:hover': {backgroundColor:'black', color: 'white'}}}>Check out(200)</Button>:null}
          <AccountPopover />
        </Stack>
      </ToolbarStyle>
    </RootStyle> 
  );
}
