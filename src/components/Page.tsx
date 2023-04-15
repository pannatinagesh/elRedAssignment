import { forwardRef } from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = '', meta, ...other } : Props, ref) => (
  <>
    <Helmet>
      <title>elRed</title>
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
