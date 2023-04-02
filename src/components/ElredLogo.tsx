import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import Iconify from './Iconify';
import { Box, Link } from '@mui/material';

// ----------------------------------------------------------------------

ElredLogo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function ElredLogo( disabledLink = false, sx:any ) {

  const logo = (
    <Box sx={{ width:'100%', height: 'auto', ...sx }} >
      <img src="/Logo 2.png" />
    </Box>
  );

  return  <Link underline="none" href=''  target="_blank">{logo}</Link>;
}
