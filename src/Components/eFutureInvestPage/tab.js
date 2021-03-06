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

{/* Tabs Wrapped Tool (eFutureInvest Page) */}
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
    background: 'linear-gradient(to bottom, #eff7ff, #ffffff)',
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
      <AppBar position="static" color="white">
        <Tabs value={value} onChange={handleChange} label="wrapped label tabs example" style={{color:"#00529a"}}>
          <Tab
            value="one"
            label=<b>Who Can Buy?</b>
            {...a11yProps('one')}
          />
          <Tab value="two" label=<b>View Details</b> {...a11yProps('two')} />
          <Tab value="three" label=<b>Calculate Premium</b> {...a11yProps('three')} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one">
        {/* CollapsibleTable */}
        <StickyHeadTable/>
      </TabPanel>
      
      <TabPanel value={value} index="two">
        {/* SimpleCard1(ViewDetailsTab) */}
        <SimpleCardviewDetails1/>

        {/* table1(ViewDetailsTab) */}
        <CustomizedTables1/>

        {/* table2(ViewDetailsTab) */}
        <CustomizedTables2/>

        {/* SimpleCard2(ViewDetailsTab) */}
        <SimpleCard2ViewDtails/>
      </TabPanel>

      <TabPanel value={value} index="three">
        {/* SimpleCard(CalculatePremiumTab) */}
        <SimpleCardCalculatePremium/>
      </TabPanel>
    </div>
  );
}
