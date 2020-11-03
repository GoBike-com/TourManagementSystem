import React from "react";
import "date-fns";
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
// import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import HouseIcon from "@material-ui/icons/House";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DateFnsUtils from "@date-io/date-fns";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import image from "../../assets/img/hotel1.jpg";
import image1 from "../../assets/img/hotel2.jpg";
import image2 from "../../assets/img/hotel3.jpg";

import SkipNextIcon from '@material-ui/icons/SkipNext';

import TimePickerr from "../Accomodations/TimePickerr";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
  TimePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: 1,
    minWidth: 220,
  },
  btn: {
    color: "white",
    backgroundColor: "indigo",
    alignItems: "center",
    display: "flex",
    borderRadius: 8,
    textTransform: "none",
    marginLeft: "250px",
    marginTop: "2px",
    fontSize: "20px",
    position: "absolute",
    width: "30%",
  },
  primary: {
    "&:hover": {
      // changes colors for button hover state

      backgroundColor: "amber",

      color: "black",
    },
  },
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  
}));

export default function Accomodation() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [age, setAge] = React.useState("");
  const [age1, setAge1] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChange1 = (event) => {
    setAge1(event.target.value);
  };

  function a11yProps(index) {
    return {
      id: `scrollable-force-tab-${index}`,
      "aria-controls": `scrollable-force-tabpanel-${index}`,
    };
  }

  return (
    <Grid
      container
      className={classes.mainbody}
      spacing={2}
      style={{ 
        backgroundColor: "white",
        width:"90%",
        margin:"30px",
        display:"flex",
        marginLeft:"50px"
     }}
    >
      <Grid item xs={12}>
        <div 
        style={{
          backgroundColor:"royalblue"
        }}>
        <Tab
          label="Find your Stays"
          style={{alignItems:"center", marginLeft:"500px", fontFamily:"Tahoma", fontSize:"16px", color:"white"}}
          icon={<HouseIcon className={classes.tabs} style={{backgroundColor:"royalblue"}} />}
          {...a11yProps(0)}
          width="100%"
        />
        </div>
      </Grid>
      <Grid item xs={12} sm={3}>
        <InputLabel id="demo-simple-select-outlined-label">
          Hotel/Place
        </InputLabel>
        <Select
          className={classes.margin}
          value={age}
          onChange={handleChange}
        ></Select>
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
      <Grid item xs={12} sm={3}>
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
              "aria-label": "change date",
            }}
            style={{
              display:"relative",
              bottom:"15px"
            }}
          />
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item xs={12} sm={3}>
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
              "aria-label": "change date",
            }}
            style={{
              display:"relative",
              bottom:"15px"
            }}

          />
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item xs={12} sm={3}>
        <InputLabel>Number of person</InputLabel>
        <Select
          className={classes.margin}
          value={age1}
          onChange={handleChange1}
        >
          <MenuItem value="">Number of Person</MenuItem>
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
        <Button
        style={{
          display:"relative",
          left:"400px"
        }}
          className={classes.btn}
          color="primary"
          size="large"
          variant="contained"
        >
          Search
        </Button>
      </Grid>
      <div style={{margin:"50px", width:"100%", maxWidth:"1800px"}}>
      <Card className={classes.root} style={{width:"90%",height:"200px",marginTop:"10px"}}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
           Chicago paradise
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Free Breakfast
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Garden view, checkin before 9am
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        style={{
          display:"flex",
          marginLeft:"200px",
          width:"80%"
        }}
        className={classes.cover}
        image={image}
        title="Live from space album cover"
      />
    </Card>
    </div>
    <div style={{margin:"50px", width:"100%", maxWidth:"1800px"}}>
      <Card className={classes.root} style={{width:"90%",height:"200px",marginTop:"10px"}}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
           Boston paradise
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Free Breakfast
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Garden view, checkin before 9am
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        style={{
          display:"flex",
          marginLeft:"200px",
          width:"80%"
        }}
        className={classes.cover}
        image={image1}
        title="Live from space album cover"
      />
    </Card>
    </div>
    <div style={{margin:"50px", width:"100%", maxWidth:"1800px"}}>
      <Card className={classes.root} style={{width:"90%",height:"200px",marginTop:"10px"}}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
           Indianapolise paradise
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Free Breakfast
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Garden view, checkin before 9am
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        style={{
          display:"flex",
          marginLeft:"200px",
          width:"80%"
        }}
        className={classes.cover}
        image={image2}
        title="Live from space album cover"
      />
    </Card>
    </div>
    </Grid>
  );
}
