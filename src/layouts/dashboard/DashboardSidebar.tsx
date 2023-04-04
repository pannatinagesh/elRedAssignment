import { Box, Drawer, IconButton, Typography, Button } from '@mui/material';
// material
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// components
import NavSection from '../../components/NavSection';
import Scrollbar from '../../components/Scrollbar';
// hooks
import useResponsive from '../../hooks/useResponsive';
//
import navConfig from './NavConfig';
import NavSectionDesktop from '../../components/NavSectionDesktop';
import ElredLogo from '../../components/ElredLogo';
import Iconify from '../../components/Iconify';

const DRAWER_WIDTHOpen = '18%';
const DRAWER_WIDTHClose = '6%';

// ----------------------------------------------------------------------

interface Props {
  isOpenSidebar: boolean
  onCloseSidebar: () => void
  isOpenSidebarDesktop: boolean 
  onCloseSidebarDesktop?: () => void
}

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar, isOpenSidebarDesktop, onCloseSidebarDesktop }: Props) {
  const isDesktop = useResponsive('up', 'lg');
  const { pathname } = useLocation();

  const RootStyle = styled('div')(({ theme }) => ({
    top: '115px',
    position:'relative',
    marginLeft:'20px',
    [theme.breakpoints.up('lg')]: {
      flexShrink: 0,
      width: isOpenSidebarDesktop ? DRAWER_WIDTHClose : DRAWER_WIDTHOpen,
    },
  }));

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        overflow: 'auto',
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
        <Box sx={{ p:0.5, backgroundColor:'white' }}>
        <ElredLogo />
      </Box>
      {isOpenSidebarDesktop ? <NavSectionDesktop navConfig={navConfig} /> :
      <NavSection navConfig={navConfig} /> }
      <Box sx={{ flexGrow: 1 }} />
      <div style={{ margin: '8px 16px', paddingBottom:'10px' }}>
      <Box sx={{ display: 'grid', backgroundColor:'white', border:'1px solid rgba(0, 0, 0, 0.38)', justifyItems:'center' }}>
        <Iconify icon={'fluent:chat-help-24-filled'} sx={{color:'rgba(0, 0, 0, 0.38)'}} width='30px' height='30px' />
        <Typography variant='h5' textAlign='center' sx={{mb:'10px'}}>Need Help?</Typography>
        <Typography textAlign='center' sx={{mb:'10px'}}>Our suppoer team is at your disposal.</Typography>
        <Button variant='contained' sx={{backgroundColor:'black', color: 'white', marginBottom:'10px'}}>Get Help</Button>
      </Box>
      </div>
     </Scrollbar>
  );

  return (
    <RootStyle>
      {!isDesktop && (
        <Drawer
          open = {isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: '140px',
              boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
              top:'115px',
              marginLeft:'20px',
              height:'80%',
              borderRadius: '8px'},
          }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: isOpenSidebarDesktop ? DRAWER_WIDTHClose : DRAWER_WIDTHOpen,
              // bgcolor: '#495057;',
              boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
              top:'115px',
              marginLeft:'20px',
              height:'80%',
              borderRadius: '8px'
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
}
