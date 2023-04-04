import { useRef, useState } from 'react';
import { Link as RouterLink, Navigate, useLocation } from 'react-router-dom';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton, Tooltip } from '@mui/material';
// components
import MenuPopover from '../../components/MenuPopover';
// mocks_
import { dotCase, sentenceCase, capitalCase } from 'change-case';
import React from 'react';
import Iconify from '../../components/Iconify';
import useResponsive from '../../hooks/useResponsive';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: 'eva:home-fill',
    linkTo: '/',
  },
  {
    label: 'Profile',
    icon: 'eva:person-fill',
    linkTo: '#',
  },
  {
    label: 'Settings',
    icon: 'eva:settings-2-fill',
    linkTo: '#',
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const anchorRef = useRef(null);
  const isDesktop = useResponsive('between', 'lg', 'sm', 'lg');

  const location = useLocation();
  const [open, setOpen] = useState(null);
  const [account, setAccount]:any = useState({first_name: 'Nani', last_name: 'Nagesh', email:'pannatinagesh12345@gmail.com'});

  const handleOpen = (event:any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLogout = () => {
    setOpen(null);
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('password');
  }

  return (
    <>
        {isDesktop?<Avatar src='/profile.png'></Avatar>:null}
        {isDesktop? <Typography sx={{color:'black'}}>User Admin</Typography>:null}
      <IconButton ref={anchorRef} onClick={handleOpen}><Iconify icon='material-symbols:keyboard-arrow-down' /></IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          '& .MuiMenuItem-root': {
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
          {account.first_name?capitalCase(account.first_name):null}&nbsp;{account.last_name?capitalCase(account.last_name):null}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {account.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem component={RouterLink} to='/login' onClick={handleLogout} sx={{ m: 1 }}>
        <Typography variant="subtitle2" noWrap> Logout  </Typography>
        </MenuItem>
      </MenuPopover>
    </>
  );
}
