import { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterLink, matchPath, useLocation } from 'react-router-dom';
// material
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, List, Collapse, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';
//
import Iconify from './Iconify';
import Label from './Label';

// ----------------------------------------------------------------------

const ListItemStyle = styled((props) => <ListItemButton disableGutters {...props} />)(({ theme }) => ({
  ...theme.typography.body2,
  height: 'auto',
  position: 'relative',
  textTransform: 'capitalize',
  color: 'rgba(0, 0, 0, 0.38)',
  margin: '8px 0px',
  // backgroundColor: alpha(theme.palette.grey[500], theme.palette.action.selectedOpacity),
  borderRadius: theme.shape.borderRadius,
  transition: 'background-color 0ms cubic-bezier(0.4, 0, 0.2, 1) 150ms',
    '&:hover': {
      color: '#B72136',
      backgroundColor: 'rgba(255, 72, 66, 0.16) !important'
    }
}));

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

// ----------------------------------------------------------------------

interface Props {
  item: any,
  active: any
}

function NavItem({ item, active }: Props) {
  const theme = useTheme();

  const isActiveRoot = active(item.path);

  const { title, path, icon, info, children } = item;

  const [open, setOpen] = useState(isActiveRoot);

  const handleOpen = () => {
    setOpen((prev:boolean) => !prev);
  };

  const activeRootStyle = {
    color: '#B72136',
    fontWeight: 'fontWeightMedium',
    // bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    // bgcolor: alpha(theme.palette.grey[500], theme.palette.action.selectedOpacity)
    bgcolor: 'rgba(255, 72, 66, 0.16)'
  };

  const activeSubStyle = {
    color: '#B72136',
    fontWeight: 'fontWeightMedium',
    bgcolor: 'rgba(255, 72, 66, 0.16)'
  };

  if (children) {
    return (
      <>
        <ListItemStyle
        // @ts-ignore
          onClick={handleOpen}
          sx={{
            ...(isActiveRoot && activeRootStyle),
          }}
        >
          <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
          <ListItemText disableTypography primary={title} />
          {info && info}
          <Iconify
            icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        </ListItemStyle>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((item:any) => {
              const { title, path } = item;
              const isActiveSub = active(path);

              return (
                <ListItemStyle
                  key={title}
                  // @ts-ignore
                  component={RouterLink}
                  to={path}
                  sx={{
                    ...(isActiveSub && activeSubStyle),
                  }}
                >
                  <ListItemIconStyle>
                    <Box
                      component="span"
                      sx={{
                        width: 4,
                        height: 4,
                        display: 'flex',
                        borderRadius: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'text.disabled',
                        transition: (theme) => theme.transitions.create('transform'),
                        ...(isActiveSub && {
                          transform: 'scale(2)',
                          bgcolor: 'white',
                        }),
                      }}
                    />
                  </ListItemIconStyle>
                  <ListItemText disableTypography primary={title} />
                </ListItemStyle>
              );
            })}
          </List>
        </Collapse>
      </>
    );
  }

  return (
    <ListItemStyle
      // @ts-ignore
      component={RouterLink}
      to={path}
      sx={{
        ...(isActiveRoot && activeRootStyle),
      }}
    >
      {/* <Label color={'error'} variant={'ghost'} startIcon={icon && icon}>{title}</Label> */}
      <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
      <ListItemText disableTypography primary={title} />
      {info && info}
    </ListItemStyle>
  );
}

export default function NavSection({ navConfig, ...other }:any) {
  const { pathname } = useLocation();

  const match = (path:any) => (path ? !!matchPath({ path, end: false }, pathname) : false);

  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {navConfig.map((item:any) => (
          <NavItem key={item.title} item={item} active={match} />
        ))}
      </List>
    </Box>
  );
}
