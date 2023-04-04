import * as React from 'react';
import { Tabs, Tab, Typography, Box } from '@mui/material';
import Info from './Info';
import Privacy from './Privacy';
import TermsConditions from './TermsConditions';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabView() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', minWidth:'250px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} sx={{ '& .Mui-selected': {color: 'currentcolor !important' },
         '& .MuiTabs-indicator': { backgroundColor: '#B72136' }}} variant="scrollable" scrollButtons="auto">
          <Tab label="Info" {...a11yProps(0)} />
          <Tab label="FAQ" {...a11yProps(1)} />
          <Tab label="Complaints and feedback" {...a11yProps(2)} />
          <Tab label="Privacy Policy" {...a11yProps(3)} />
          <Tab label="Terms & Conditions" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Info />
      </TabPanel>
      <TabPanel value={value} index={1}>
        FAQ
      </TabPanel>
      <TabPanel value={value} index={2}>
        Complaints and feedback
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Privacy />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <TermsConditions />
      </TabPanel>
    </Box>
  );
}
