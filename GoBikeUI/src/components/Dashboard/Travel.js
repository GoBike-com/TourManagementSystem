import React from "react";
import { withRouter } from "react-router-dom";
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import moment from "moment";
import {Card,Typography, CardHeader,CardActions, 
  CardContent,Grid,TextField,
  Button as Btn, Switch, FormControlLabel} from '@material-ui/core';
import { fade, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { red } from '@material-ui/core/colors';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { config } from '../Constants'
import image from "../../assets/img/travel.png";

// const PurpleSwitch = withStyles({
//   switchBase: {
//     color: purple[300],
//     '&$checked': {
//       color: purple[500],
//     },
//     '&$checked + $track': {
//       backgroundColor: purple[500],
//     },
//   },
//   checked: {},
//   track: {},
// })(Switch);

class Travel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: "",
      searchResult: "",
      onewayflag: "",
      departurecity: "",
      arrivalcity: "",
      countoftravellers: "",
      travellerclass: "",
      stop:false,
      roundtrip:false,
      returnFlights:"",
      flights:"",
    };
    // this.handleEmailIDChange = this.handleEmailIDChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDateChange1 = this.handleDateChange1.bind(this);
    this.handleChangeMode = this.handleChangeMode.bind(this);
    this.handleResetMode = this.handleResetMode.bind(this);
    this.handleChangeLeavingFrom = this.handleChangeLeavingFrom.bind(this);
    this.handleChangeArrivalAt = this.handleChangeArrivalAt.bind(this);
    this.handleCountoftravellers = this.handleCountoftravellers.bind(this);
    this.handletravellerclass = this.handletravellerclass.bind(this);
    this.handleAirportSearch = this.handleAirportSearch.bind(this);
    this.handleStopClass = this.handleStopClass.bind(this)
    this.handleRoundTrip = this.handleRoundTrip.bind(this)
    this.handleFlightSearch = this.handleFlightSearch.bind(this)
    this.renderFlights = this.renderFlights.bind(this)
    this.addToItinerary = this.addToItinerary.bind(this)
    // this.handleChangeLeavingFrom2 = this.handleChangeLeavingFrom2.bind(this);
    // this.handleChangeLeavingFrom1 = this.handleChangeLeavingFrom1.bind(this);
  }

  travellerclass = ["ECONOMY", "PREMIUM_ECONOMY", "BUSINESS", "FIRST"];

  useStyles = makeStyles((theme) => ({
    avatar: {
      backgroundColor: red[1000],
    },
    root1: {
      minWidth: 100,
    },
    title1: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    root: {
      flexGrow: 2,
      // float:"right",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    logo: {
      color: "green",
      click: "cursor",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  handleChangeLeavingFrom = (event, value) => {
    event.preventDefault();
    console.log(value);
    this.setState({ departurecity: value });
  };

  handleCountoftravellers = (event) => {
    event.preventDefault();
    this.setState({ countoftravellers: event.target.value });
  }

  addToItinerary(flight){
    var targetUrl = config.API_URL + "/itinerary/"+window.sessionStorage.getItem("username") + "/travel";
    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // source: this.state.departurecity[0].iataCode,
        // destination: this.state.arrivalcity[0].iataCode,
        travelDate: this.state.depatureDate,
        returnDate: this.state.arrivaldDate,
        nonStop: this.state.stop,
        adults: this.state.countoftravellers,
        travelClass: this.state.travellerclass,
        flight: {
            price: flight.price,
            duration: flight.duration,
            takeOffTime: flight.takeOffTime,
            arrivalTime: flight.arrivalTime,
            airline: flight.airline,
            arrivalTerminal: flight.arrivalTerminal,
            deptTerminal : flight.deptTerminal,
            arrivalIataCode: flight.arrivalIataCode,
            deptIataCode : flight.deptIataCode,
            returnFlight: flight.deptIataCode === this.state.arrivalIataCode
        }
      }),
    };

    fetch(targetUrl, requestOptions)
      .then((response) => {
        // check for error response
        if (response.status == "200") {
        }

        // this.setState({ totalReactPackages: data.total })
      })
      .catch((error) => {
        // this.setState({ errorMessage: error.toString() });
        console.error("There was an error!", error);
      });
  };

  handletravellerclass = (event,value) => {
    event.preventDefault();
    console.log(value);
    this.setState({ travellerclass: value });
  }

  
  handleStopClass = (event) => {
    event.preventDefault();
    this.setState({ stop: event.target.checked });
  }

  handleRoundTrip = (event) => {
    event.preventDefault();
    this.setState({ roundtrip: event.target.checked });
  }

  handleDateChange = (date) => {
    const arrivalDate = moment(date).format("YYYY-MM-DD");
    this.setState({ selectedDate: arrivalDate });
  };

  handleChangeArrivalAt = (event, value) => {
    event.preventDefault();
    console.log(value);
    this.setState({ arrivalcity: value });
  };

  handleDateChange1 = (date) => {
    console.log(date)
    const beginDate = moment(date).format("YYYY-MM-DD");
    console.log(beginDate);
    this.setState({ depatureDate: beginDate });
  };

  classes = this.useStyles;

  handleFlightSearch = (event) => {
    event.preventDefault();
    this.state.searchResult = true;

    console.log("departure date " + this.state.depatureDate);
    console.log("arrival date " + this.state.selectedDate);
    console.log("arrival city " + this.state.arrivalcity);
    console.log("departure city " + this.state.departurecity);
    console.log("no of travellers " + this.state.countoftravellers);
    console.log("traveller class " + this.state.travellerclass);

    var targetUrl = config.API_URL + "/travel/search/flight";
    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: this.state.departurecity[0].iataCode,
        destination: this.state.arrivalcity[0].iataCode,
        travelDate:this.state.depatureDate,
        returnDate: this.state.arrivaldDate,
        nonStop: this.state.stop,
        adults: this.state.countoftravellers,
        travelClass: this.state.travellerclass,
      }),
    };
    fetch(targetUrl, requestOptions)
    .then(res => res.json())
    .then((response) => {
       if(response.flights.length === 0 && response.returnFlights.length === 0){
          alert("No flights found for your search. Please select different route!")
          console.log("test")
       } else {
         this.setState({
          flights : response.flights,
          returnFlights : response.returnFlights,
         })
       }
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });
  };

  handleAirportSearch = (query) => {
    //setIsLoading(true);
    console.log(query)
    var targetUrl = config.API_URL + "/travel/airport/search/"+query;
    fetch(targetUrl,{
      method: "GET",
       credentials: "include",
       headers: {'Content-Type': 'application/json', Accept: 'application/json'},
     })
     .then(res => res.json())
      .then((res) => {
        console.log(res)
        const options = res.data.map((i) => ({
          name: i.name,
          iataCode: i.iataCode
        }));

       this.setState({ options: options,
                      isLoading : true,
                    });
        // setIsLoading(false);
      });
  };

  handleChangeMode = (event) => {
    event.preventDefault();
    this.setState({ onewayflag: true });
  };

  handleResetMode = (event) => {
    event.preventDefault();
    this.setState({ onewayflag: false });
  };

  renderFlights = (flights) => {
    return (
      flights.map(flight => {
        return (
        <div>
          <Card
            className={this.classes.root1}
            raised="true"
            style={{ display: 'flex', margin:"2%"}}
          >
            <div style={{ display: 'flex' }}>
              <CardHeader 
                  title={flight.airline}
                  subheader = {flight.duration}
                  />
               <Typography style={{ display: 'end' }} paragraph variant="h5">
                    ${flight.price}
                </Typography>  
            </div>
           <div style={{ display: 'flex' }}>
              <CardContent>
                <Typography paragraph >
                    {flight.deptIataCode}
                </Typography>    
                <Typography paragraph>
                    {flight.takeOffTime}
                </Typography>
                <Typography paragraph>
                    {flight.deptTerminal}
                </Typography>
              </CardContent>
              <CardContent>
              <Typography paragraph>
                    {flight.arrivalIataCode}
                </Typography>
                <Typography paragraph>
                    {flight.arrivalTime}
                </Typography>
                <Typography paragraph>
                    {flight.arrivalTerminal}
                </Typography>
              </CardContent>
              <CardActions>
                <Btn size="small" color="primary" onClick={e => 
                 {
                  e.preventDefault()
                  this.addToItinerary(flight)
                 }}>
                  Add to itinerary
                </Btn>
              </CardActions>   
            </div> 
          </Card>
        </div>
        )
      })
    )
  }

  render() {
    return (
      <Grid container justify="center" style={{
        backgroundImage: "url(" + image + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        }} >
        <CssBaseline />
          <Grid>
            <h1 justify="center">Search your travel route</h1>
            <Card
              raised="true"
              style={{ width: "100%"}}
            >
              <div style={{width: "100%" }}>
                  <Grid>
                  <div style={{ display: "inline-block" }}>
                    <LocationOnIcon />
                    <AsyncTypeahead
                    style={{ padding: "2%", marginRight:"4%" }}
                      id="source"
                      labelKey="name"
                      minLength={3}
                      onChange={(selected) => this.setState({departurecity : selected})}
                      onSearch={this.handleAirportSearch}
                      options={this.state.options}
                      placeholder="Enter source"
                  />
                  </div>
                  <div style={{ display: "inline-block" }}>
                    <LocationOnIcon />
                    <AsyncTypeahead
                      id="destination"
                      labelKey="name"
                      style={{ padding: "2%", marginRight:"4%" }}
                      minLength={3}
                      onChange={(selected) => this.setState({arrivalcity : selected})}
                      onSearch={this.handleAirportSearch}
                      options={this.state.options}
                      placeholder="Enter destination"
                      renderMenuItemChildren={(option, props) => (
                      <React.Fragment>
                        <span>{option.name}</span>
                      </React.Fragment>
                    )}
                  />
                  </div>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      // style={{
                      //   fontFamily:
                      //     "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;",
                      // }}
                      disableToolbar
                      variant="inline"
                      format="yyyy-MM-dd"
                      size="small"
                      margin="normal"
                      id="date-picker-inline"
                      label="Select departure date"
                      color="primary"
                      font="Helvetica"
                      // inputFormat={(date) => moment(new Date()).format('MM-DD-YYYY')}
                      value={this.state.depatureDate}
                      onChange={this.handleDateChange1}
                    />
                  </MuiPickersUtilsProvider>
                  {this.state.roundtrip && (
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        // style={{
                        //   marginLeft: "15px",
                        //   marginTop: "45px",
                        //   height: "20px",
                        //   width: "20%",
                        // }}
                        disableToolbar
                        variant="inline"
                        format="yyyy-MM-dd"
                        size="small"
                        margin="normal"
                        id="date-picker-inline"
                        label="Select returning date"
                        color="primary"
                        font="Helvetica"
                        value={this.state.selectedDate}
                        onChange={this.handleDateChange}
                      />
                    </MuiPickersUtilsProvider>
                  )}
                  </Grid>
                  <Grid>
                    <div style={{ display: "inline-block" }}>
                      <TextField 
                        id="count" 
                        label="No. of passengers" 
                        onChange={this.handleCountoftravellers}
                        value={this.state.countoftravellers}
                      />
                    </div>
                    <div style={{ display: "inline-block" }}>
                      <Autocomplete
                        id="combo-box-demo4"
                        options={this.travellerclass}
                        // getOptionLabel={(option) => option.value}
                        // style={{ width: "15%", display: "inline-block" }}
                        autoSelect
                        value={this.state.travellerclass}
                        onChange={this.handletravellerclass}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            id="start"
                            // style={{
                            //   width: "200px",
                            //   // marginTop: "5px",
                            //   marginLeft: "10px",
                            //   marginBottom: "10px",
                            // }}
                            // select
                            label="class"
                            // value={value}
                            onChange={this.handleChange}
                            variant="outlined"
                            color="primary"
                            size="medium"
                          />
                        )}
                      />
                    </div>
                    <div style={{ display: "inline-block" }}>
                      <FormControlLabel
                          control={
                            <Switch
                              checked={this.state.roundtrip}
                              onChange={this.handleRoundTrip}
                              name="roundtrip"
                              color="primary"
                            />
                          }
                          label="roundtrip"
                        />
                      </div>
                    <div style={{ display: "inline-block" }}>
                      <FormControlLabel
                          control={
                            <Switch
                              checked={this.state.stop}
                              onChange={this.handleStopClass}
                              name="nonstop"
                              color="primary"
                            />
                          }
                          label="nonstop"
                        />
                    </div>
                  </Grid>
                </div>
                <Grid justify="center" >
                    <Btn
                     color="primary"
                     variant="contained"
                    onClick={this.handleFlightSearch}
                  >
                    Search
                  </Btn>
                </Grid>   
            </Card>
            </Grid>
            <Grid>
              <div style={{ width: "85%", marginLeft: "100px", marginTop: "40px"} }>
                {this.state.flights && this.renderFlights(this.state.flights)}
                {this.state.returnFlights &&this.renderFlights(this.state.returnFlights)}
              </div>
            </Grid>      
        
      </Grid>
    );
  }
}

export default withRouter(Travel);