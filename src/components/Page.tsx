import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = '', meta, ...other } : Props, ref) => (
  <>
    <Helmet>
      <title>FDP</title>
      {meta}
    </Helmet>

    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
));

interface Props {
  children: React.ReactNode,
  title?: string,
  meta?: React.ReactNode,
}

export default Page;
