import PropTypes from 'prop-types';
// material
import { Popover } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const ArrowStyle = styled('span')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    top: -7,
    zIndex: 1,
    width: 12,
    right: 20,
    height: 12,
    content: "''",
    position: 'absolute',
    borderRadius: '0 0 4px 0',
    transform: 'rotate(-135deg)',
    background: theme.palette.background.paper,
    borderRight: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
    borderBottom: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
  },
}));

// ----------------------------------------------------------------------

interface Props {
  children : React.ReactNode,
  sx: object,
  open: boolean,
  anchorEl: HTMLDivElement | null
  onClose: () => void
}

export default function MenuPopover({ children, sx, open, ...other }:Props) {
  return (
    <Popover
      open={open} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      PaperProps={{
        sx: {
          p: 1,
          width: 200,
          boxShadow: 'rgba(145, 158, 171, 0.2) 0px 5px 5px -3px, rgba(145, 158, 171, 0.14) 0px 8px 10px 1px, rgba(145, 158, 171, 0.12) 0px 3px 14px 2px',
          overflow: 'inherit',
          ...sx,
        },
      }}
      {...other}    >
      <ArrowStyle className="arrow" />

      {children}
    </Popover>
  );
}
