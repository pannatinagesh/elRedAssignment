import PropTypes from 'prop-types';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

interface Props {
  src : string
  sx?: object,
}

export default function SvgIconStyle({ src, sx }: Props) {
  return (
    <Box
      component="span"
      sx={{
        width: 24,
        height: 24,
        display: 'inline-block',
        bgcolor: 'currentColor',
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        ...sx,
      }}
    />
  );
}
