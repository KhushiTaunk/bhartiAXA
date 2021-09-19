import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import StickyHeadTable from './CollapsibleTable';
import SimpleCardviewDetails1 from './SimpleCard1(ViewDetailsTab)';
import CustomizedTables1 from './table1(ViewDetailsTab)';
import CustomizedTables2 from './table2(ViewDetailsTab)';
import SimpleCard2ViewDtails from './SimpleCard2(ViewDetailsTab)';
import SimpleCardCalculatePremium from './SimpleCard(CalculatePremiumTab)';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TabsWrappedLabel() {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab
            value="one"
            label="Who Can Buy?"
            wrapped
            {...a11yProps('one')}
          />
          <Tab value="two" label="View Details" {...a11yProps('two')} />
          <Tab value="three" label="Calculate Premium" {...a11yProps('three')} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one">
        <StickyHeadTable/>
      </TabPanel>
      
      <TabPanel value={value} index="two">
        <SimpleCardviewDetails1/>
        <CustomizedTables1/>
        <CustomizedTables2/>
        <SimpleCard2ViewDtails/>
      </TabPanel>

      <TabPanel value={value} index="three">
        <SimpleCardCalculatePremium/>
      </TabPanel>
    </div>
  );
}
