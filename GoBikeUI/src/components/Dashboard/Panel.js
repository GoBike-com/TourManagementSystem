import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Itinerary from '../Itinerary/itinerary';

function Panel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

Panel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} style={{marginTop:"30px"}}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        scrollButtons="off"
      >
        <Tab label="View Itinerary" {...a11yProps(0)} />
        <Tab label="Upcoming Tours" {...a11yProps(1)} />
        <Tab label="Past Tours" {...a11yProps(2)} />
        <Tab label="Chats" {...a11yProps(3)} />
        <Tab label="Feedback" {...a11yProps(4)} />
        <Tab label="Recommendations" {...a11yProps(5)} />
       
      </Tabs>
      <Panel value={value} index={0}>
        <Itinerary
        />
      </Panel>
      <Panel value={value} index={1}>
        Upcoming Tours
      </Panel>
      <Panel value={value} index={2}>
        Past Tours
      </Panel>
      <Panel value={value} index={3}>
        Chat
      </Panel>
      <Panel value={value} index={4}>
        Feedback
      </Panel>
      <Panel value={value} index={5}>
        Recommendations
      </Panel>
    </div>
  );
}