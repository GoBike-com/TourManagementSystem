import React from "react";
import { withRouter } from "react-router-dom";
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import moment from "moment";
import {Card,Typography, CardHeader,CardActions, 
  CardContent,Grid,TextField,
  Button as Btn, Switch, FormControlLabel} from '@material-ui/core';
import { fade, makeStyles } from "@material-ui/core/styles";
import Alert from '@material-ui/lab/Alert';
import Autocomplete from "@material-ui/lab/Autocomplete";
import { red } from '@material-ui/core/colors';
import { config } from '../Constants'
import image from "../../assets/img/travel.png";
import ItineraryPopup from "../Itinerary/ItineraryPopup";

class Travel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: "",
      onewayflag: "",
      departurecity: "",
      arrivalcity: "",
      countoftravellers: "",
      travellerclass: "ECONOMY",
      stop:false,
      roundtrip:false,
      returnFlights:"",
      flights:"",
      loading:false,
      depatureDate:moment().format("YYYY-MM-DD"),
      error:false
      //returnDate:moment().format("YYYY-MM-DD")
    };
    // this.handleEmailIDChange = this.handleEmailIDChange.bind(this);
    this.handleReturnDate = this.handleReturnDate.bind(this);
    this.handleDeptDate = this.handleDeptDate.bind(this);
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
      width: 300
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

  addToItinerary(flight, itineraryName){
    var targetUrl = config.API_URL + "/travel/flight/"+window.sessionStorage.getItem("username");
    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // source: this.state.departurecity[0].iataCode,
        // destination: this.state.arrivalcity[0].iataCode,
        travelDate: this.state.depatureDate,
        returnDate: this.state.returnDate,
        nonStop: this.state.stop,
        adults: this.state.countoftravellers,
        travelClass: this.state.travellerclass,
        itineraryName :itineraryName,
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
          alert("Travel is added to your itinerary "+itineraryName);
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

  handleReturnDate = (date) => {
    const returnDate = moment(date.target.value).format("YYYY-MM-DD");
    this.setState({ selectedDate: returnDate });
  };

  handleChangeArrivalAt = (event, value) => {
    event.preventDefault();
    console.log(value);
    this.setState({ arrivalcity: value });
  };

  handleDeptDate = (date) => {
    console.log(date)
    const beginDate = moment(date.target.value).format("YYYY-MM-DD");
    console.log(beginDate);
    this.setState({ depatureDate: beginDate });
  };

  classes = this.useStyles;

  handleFlightSearch = (event) => {
    event.preventDefault();
    this.state.loading = true;

    if(this.state.departurecity ==='' ||
      this.state.arrivalcity === '' ||
      this.state.countoftravellers === '') {
        this.setState({
          error : true
        })
    } else {
        this.setState({
          error : false
        })

        var targetUrl = config.API_URL + "/travel/search/flight";
        const requestOptions = {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            source: this.state.departurecity[0].iataCode,
            destination: this.state.arrivalcity[0].iataCode,
            travelDate:this.state.depatureDate,
            returnDate: this.state.returnDate,
            nonStop: this.state.stop,
            adults: this.state.countoftravellers,
            travelClass: this.state.travellerclass,
          }),
        };
        fetch(targetUrl, requestOptions)
        .then(res => res.json())
        .then((response) => {
          this.state.loading = false;
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
    } 
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
            ///className={this.classes.root1}
            raised="true"
            style={{ margin:"2%"}}
          >
            <div style={{ display: 'flex', background:'#0d47a1' }}>
              <CardHeader 
                  title={flight.airline}
                  subheader = {flight.duration}
                  /> 
            </div>
              <div style={{ display: 'flex' }}>
                <CardContent>
                  <Typography paragraph >
                      {flight.deptIataCode}-{flight.arrivalIataCode}
                  </Typography>    
                  <Typography paragraph>
                      {flight.takeOffTime} -  {flight.arrivalTime}
                  </Typography>
                  <Typography paragraph>
                      {flight.deptTerminal} -  {flight.arrivalTerminal}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography style={{ display: 'end' }} paragraph variant="h5">
                      ${flight.price}
                  </Typography> 
                </CardContent>
              </div>
              <CardActions>
                <ItineraryPopup addToItinerary={(name) => {
                  //console.log(flight)
                  this.addToItinerary(flight,name);
                }}/>
              </CardActions> 
          </Card>
        </div>
        )
      })
    )
  }

  render() {
    return(
        <div
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "100vh",
          }}
        >
           <Grid container justify="center">
              <div style={{ display: "inline-block"}}>
                <h1 style={{textAlign: "center"}}>Search your travel route</h1>
                {this.state.error && 
                  <Alert severity="error">Please populate required fields for searching flights</Alert>
                } 
              </div>
            </Grid>
            <Grid container justify="center">
              <Card
                raised="true"
                style={{ width: "75%"}}
              >
                <div style={{ display: "flex"}}>
                    <div style={{ paddingLeft: "4%",paddingTop: "5.5%",paddingRight: "4%" }}>
                      <Autocomplete
                          id="combo-box-demo4"
                          options={this.travellerclass}
                          style={{ width: "180px" }}
                          autoSelect
                          value={this.state.travellerclass}
                          onChange={this.handletravellerclass}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              id="start"
                              margin="normal"
                              ///label="Class"
                              onChange={this.handleChange}
                              color="primary"
                              size="small"
                            />
                        )}
                      />
                    </div>
                    <div style={{ paddingLeft: "4%",paddingTop: "5.5%",paddingRight: "12%" }}>
                        <TextField 
                            id="count" 
                            label="Traveler" 
                            onChange={this.handleCountoftravellers}
                            value={this.state.countoftravellers}
                            style={{
                              width: "70px",
                            }}
                        />
                    </div>
                    <div style={{ paddingLeft: "4%",paddingTop: "8%",paddingRight: "8%" }}>
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
                    <div style={{ paddingLeft: "4%",paddingTop: "8%",paddingRight: "4%" }}>
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
                </div>
                <div style={{ display: "flex"}}>  
                    <div style={{ display: "inline-block", padding: "4%" }}>
                      <Typography> Source </Typography>
                      <AsyncTypeahead
                            id="source"
                            labelKey="name"
                            minLength={3}
                            onChange={(selected) => this.setState({departurecity : selected})}
                            onSearch={this.handleAirportSearch}
                            options={this.state.options}
                            placeholder="Enter source"
                        />
                    </div>
                    <div style={{ display: "inline-block", padding: "4%"  }}>
                        <Typography>Destination</Typography>
                        <AsyncTypeahead
                          id="destination"
                          labelKey="name"
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
                    <div style={{ padding: "4%"}}>
                        <TextField
                              id="date"
                              label="Departure Date"
                              type="date"
                              value={this.state.depatureDate}
                              InputLabelProps={{
                                shrink: true,
                              }}
                              onChange={this.handleDeptDate}
                          />
                    </div>
                    <div style={{padding: "4%"}}>
                        {this.state.roundtrip && (
                        <TextField
                              id="date"
                              label="Return Date"
                              type="date"
                              // className={classes.textField}
                              value={this.state.returnDate}
                              InputLabelProps={{
                                shrink: true,
                              }}
                              onChange={this.handleReturnDate}
                            />
                          )}
                    </div>
                  </div>
                <div style={{ paddingLeft: "43%",paddingBottom: "2%"}} >
                    <Btn
                      color="primary"
                      variant="contained"
                      onClick={this.handleFlightSearch}
                      >
                      Search
                    </Btn>
                </div> 
              </Card>
           </Grid>
           <Grid container justify="center">
              <div style={{display: "inline-block"} }>
                {this.state.flights && this.renderFlights(this.state.flights)}
                {this.state.returnFlights &&this.renderFlights(this.state.returnFlights)}
              </div>
           </Grid>
        </div>

    );
  }
}

export default withRouter(Travel);