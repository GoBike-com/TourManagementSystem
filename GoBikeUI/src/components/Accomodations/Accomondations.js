import React from 'react';
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import HouseIcon from '@material-ui/icons/House';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DateFnsUtils from '@date-io/date-fns';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';


import TimePickerr from '../Accomodations/TimePickerr';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,TimePicker
  } from '@material-ui/pickers';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: 1,
    minWidth: 220,
  },
  btn:{
      color:'white',
      backgroundColor:'indigo',
      alignItems: 'center',
      display:'flex',
      borderRadius: 8,
      textTransform: 'none',
      marginLeft:'250px',
      marginTop: '2px',
      fontSize: '20px',
      position: 'absolute',
      width: '30%',
  },
  primary: {

    '&:hover': { // changes colors for button hover state

      backgroundColor: "amber",

      color: "black",

    },

  },
}));

export default function Accomodation() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [age, setAge] = React.useState('');
  const [age1, setAge1] = React.useState('');


  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChange1 = (event) => {
    setAge1(event.target.value);
  };

  function a11yProps(index) {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
  }


  return (
    <Grid container className={classes.mainbody} spacing={4}>
      <Grid item xs={12}>
          <Tab label="Stays" icon={<HouseIcon className={classes.tabs} />} {...a11yProps(0)} />
      </Grid> 
      <Grid item xs={12} sm={4}>
          <InputLabel id="demo-simple-select-outlined-label">Hotel/Place</InputLabel>
              <Select className={classes.margin}
              value={age}
              onChange={handleChange}
              >
              </Select>
      </Grid>
        {/* <Grid item xs={12} sm={4}>
            <InputLabel>Going To</InputLabel>
                <Select className={classes.margin}
                value={age1}
                onChange={handleChange1}
                >
                <MenuItem value="">
                    Places
                </MenuItem>
                <MenuItem value={10}>Chicago</MenuItem>
                <MenuItem value={20}>Colorado</MenuItem>
                <MenuItem value={30}>Bloomington</MenuItem>
                </Select>
        </Grid>  */}
        <Grid item xs={12} sm={4}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Check-in"
                        font="Roboto ,Helvetica , Arial, sans-serif"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
            </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} sm={4}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Check-out"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
            </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} sm={4}>
            <InputLabel>Number of person</InputLabel>
                <Select className={classes.margin}
                value={age1}
                onChange={handleChange1}
                >
                <MenuItem value="">
                Number of Person
                </MenuItem>
                <MenuItem value={10}>1</MenuItem>
                <MenuItem value={20}>2</MenuItem>
                <MenuItem value={30}>3</MenuItem>
                </Select>
        </Grid> 
        {/* <Grid item xs={12} sm={4}>
            <InputLabel>Travelling for</InputLabel>
                <Select className={classes.margin}
                value={age1}
                onChange={handleChange1}
                >
                <MenuItem value="">
                Travelling for
                </MenuItem>
                <MenuItem value={10}>1</MenuItem>
                <MenuItem value={20}>2</MenuItem>
                <MenuItem value={30}>3</MenuItem>
                </Select>
        </Grid>  */}
        
        <Grid item xs={12}>
            <Button className={classes.btn} color="primary" size="large" variant="contained">Search
            </Button>
        </Grid> 
    </Grid>
  );
}
