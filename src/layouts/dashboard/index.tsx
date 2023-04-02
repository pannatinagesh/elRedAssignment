import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
//
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';
import Iconify from '../../components/Iconify';
import { Box, Button, Drawer, IconButton } from '@mui/material';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

const ButtonStyle = styled(IconButton)(({ theme }) => ({
width: '40px',
height: '40px',
position:'fixed',
top:'35px',
borderRadius:'50%',
border:'1px dashed rgba(145, 158, 171, 0.24)',
color:'rgb(99, 115, 129)',
zIndex:'1101'
}));


// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);
  const [openDesktop, setOpenDesktop] = useState(false);

  return (
    <RootStyle>
      <DashboardNavbar onOpenSidebar={() => setOpen(true)} isOpenSidebarDesktop={openDesktop} />
      <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)}  isOpenSidebarDesktop={openDesktop} />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}
