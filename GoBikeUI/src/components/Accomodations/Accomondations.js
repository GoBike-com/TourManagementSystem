import React from "react";
import "date-fns";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import image from "../../assets/img/image17.jpg";
import image1 from "../../assets/img/image18.jpg";

import { config } from "../Constants";
import moment from "moment";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { CardHeader, CardActions } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";

class Accomondations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      destination: "",
      roomqty: "",
      adults: "",
      ratings: "",
      boardType: "",
      hotels: "",
      loading: "false",
      selectedOption: "",
      open: "",
      Errorvalidation: "false",
      noResponse:"false",
    };
    this.handleDateChange1 = this.handleDateChange1.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.selectRooms = this.selectRooms.bind(this);
    this.handlePersons = this.handlePersons.bind(this);
    this.handleRatings = this.handleRatings.bind(this);
    this.handleBoarding = this.handleBoarding.bind(this);
    this.handleAirportSearch = this.handleAirportSearch.bind(this);
    this.handleHotelSearch = this.handleHotelSearch.bind(this);
    this.renderHotels = this.renderHotels.bind(this);
    this.validations = this.validations.bind(this);
    this.errorComponent = this.errorComponent.bind(this);
  }

  noOfRooms = ["1", "2", "3"];
  noOfPeople = ["1", "2", "3"];
  rating = [("5", "5"), ("4", "4"), ("3", "3"), ("2", "2"), ("1", "1")];
  // boarding = [
  //   ("RO", "RO"),
  //   ("BB", "BB"),
  //   ("DBB", "DBB"),
  //   ("FB", "FB"),
  //   ("AI", "AI"),
  // ];

  handleAirportSearch = (query) => {
    //setIsLoading(true);
    console.log(query);
    var targetUrl = config.API_URL + "/travel/airport/search/" + query;
    fetch(targetUrl, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        const options = res.data.map((i) => ({
          name: i.name,
          iataCode: i.iataCode,

        }));

        this.setState({ options: options });
      });
  };

  handleDateChange1 = (date) => {
    console.log(date);
    const beginDate = moment(date).format("YYYY-MM-DD");
    console.log(beginDate);
    this.setState({ depatureDate: beginDate });
  };

  handleDateChange = (date) => {
    const arrivalDate = moment(date).format("YYYY-MM-DD");
    this.setState({ selectedDate: arrivalDate });
  };

  selectRooms = (event, value) => {
    event.preventDefault();
    this.setState({ roomqty: value });
  };

  handlePersons = (event, value) => {
    event.preventDefault();
    this.setState({ adults: value });
  };

  handleRatings = (event, value) => {
    event.preventDefault();
    this.setState({ ratings: value });
  };

  handleBoarding = (event, value) => {
    event.preventDefault();
    console.log(Object.values(value)[4].value);
    this.setState({ boardType: Object.values(value)[4].value });
  };

  handleHotelSearch = (event) => {
    event.preventDefault();
    this.setState({ Errorvalidation: "false" });
    this.setState({ hotels: "" });
    this.state.loading = "false";
    this.state.noResponse = "false";
    console.log(this.state.Errorvalidation)
    // this.state.searchResult = true;

    // console.log("destination " + this.state.destination[0].iataCode);
    // console.log("arrival date " + this.state.selectedDate);
    // console.log("departure date " + this.state.depatureDate);
    // console.log("no of rooms " + this.state.roomqty);
    // console.log("no of travellers " + this.state.adults);
    // console.log("ratings " + this.state.ratings);
    // console.log("boardtype " + this.state.boardType);
    if (
      this.state.destination === undefined ||
      this.state.selectedDate === undefined ||
      this.state.depatureDate === undefined ||
      this.state.roomqty === undefined ||
      this.state.adults === undefined ||
      this.state.ratings === undefined ||
      this.state.boardType === undefined
    ) {
      console.log("hello");
      return this.setState({ Errorvalidation: "true" });
    }

    // if(this.state.destination !== null && this.state.destination[0].iataCode === undefined){
    //   return this.setState({ invalidIataCode: "true" });
    // }
    // console.log("destination " + this.state.destination[0].iataCode);
    // console.log("arrival date " + this.state.selectedDate);
    // console.log("departure date " + this.state.depatureDate);
    // console.log("no of rooms " + this.state.roomqty);
    // console.log("no of travellers " + this.state.adults);
    // console.log("ratings " + this.state.ratings);
    // console.log("boardtype " + this.state.boardType);

    this.setState({ loading: "true" });

    var targetUrl = config.API_URL + "/restaurant/city/hotels";
    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        destination: this.state.destination[0].iataCode,
        checkInDate: this.state.depatureDate,
        checkOutDate: this.state.selectedDate,
        roomqty: this.state.roomqty,
        adults: this.state.adults,
        ratings: this.state.ratings,
        boardType: this.state.boardType,
      }),
    };
    fetch(targetUrl, requestOptions)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.length === 0) {
          console.log("test");
          this.setState({loading: "false"});
          return this.setState({ noResponse: "true"});
          // console.log("test");
        } else {
          this.setState({
            hotels: response,
            loading: "false",
          });
        
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };


  renderHotels = (hotels) => {
    return hotels.map((hotel) => {
      return (
        <Card
          raised="true"
          style={{
            marginLeft: "10%",
            height: "400px",
            margin: "2%",
          }}
        >
          <div
            style={{
              backgroundColor: "darkgreen",
              color: "white",
              border: "none",
            }}
          >
            <Typography
              style={{
                fontFamily:
                  "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
                marginLeft: "3%",
                fontSize: "24px",
                fontWeight: "16px",
                fontStretch: "expanded",
              }}
              paragraph
            >
              {hotel.name}
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              backgroundColor: "floralwhite",
            }}
          >
            <CardContent>
              <Typography
                style={{
                  fontFamily:
                    "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
                  marginLeft: "3%",
                }}
                paragraph
              >
                {hotel.address}
              </Typography>
              <Typography
                style={{
                  fontFamily:
                    "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
                  marginLeft: "3%",
                }}
                paragraph
              >
                Connect at : {hotel.postalCode}
              </Typography>
              <Typography
                style={{
                  fontFamily:
                    "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
                  marginLeft: "3%",
                }}
                paragraph
              >
                Our Rating : {hotel.rating}
              </Typography>
              <Typography
                style={{
                  fontFamily:
                    "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
                  marginLeft: "3%",
                }}
                paragraph
              >
                Postal Code: {hotel.postalnumber}
              </Typography>
              <Typography
                style={{
                  fontFamily:
                    "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
                  marginLeft: "3%",
                }}
                paragraph
              >
                Chain code : {hotel.chaincode}
              </Typography>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  Add to itinerary
                </Button>
              </CardActions>
            </CardContent>
            <CardContent style={{ display: "flex", width: "30%" }}>
              <div>
                <img
                  style={{ height: "40%", marginLeft: "30%" }}
                  src={image}
                ></img>
              </div>
            </CardContent>
            {/* <CardContent>
             
            </CardContent> */}
            {/* </div> */}
          </div>
        </Card>
      );
    });
  };

  variants = () => {
    return (
      <div style={{ padding: "10%" }}>
        <Skeleton variant="text" animation="pulse" />
        <Skeleton variant="circle" width={210} height={60} animation="pulse" />
        <Skeleton variant="rect" width={210} height={118} animation="pulse" />
      </div>
    );
  };

  validations = (props) => {
    return (
      <div
        style={{
          backgroundColor: "#d40035",
          color: "white",
          textAlign: "left",
          marginLeft: "14%",
          maxWidth:"80%",
          marginBottom:"2%",
          padding:"2%",
          borderRadius:"8%"

        }}
      >
        <Typography
          style={{
            fontSize: "18px",
            fontWeight: "10px",
          }}
        >
          To continue please correct the following details,
          {props}
        </Typography>
      </div>
    );
  };

  errorComponent = (props) => {
    console.log("helllllllllllo")
    this.state.loading = "false";
    // this.setState({loading: "false"})
    return (
      <div
        style={{
          // backgroundColor: "#d40035",
          // color: "white",
          textAlign: "center",
          // marginLeft: "14%",
          width:"100%",
          marginBottom:"2%",
          padding:"2%",
          // borderRadius:"8%",
          // backgroundImage: image1
        }}
      >
        <Typography
          style={{
            fontSize: "18px",
            fontWeight: "10px",
            alignContent:"center",
            color:"indigo",
            marginLeft:"25%"
          }}
        >
          The hotels for the dates are unavailable. please try to select different dates or amenties
        </Typography>
        <div>
                <img
                  style={{ height: "40%", marginLeft: "30%" }}
                  src={image1}
                ></img>
              </div>
        
      </div>
    );
  };

  render() {
    return (
      <Grid>
         <Grid item xs={12}>
            {this.state.Errorvalidation === "true" ? this.validations("all fields are mandatory") : null}
            {this.state.invalidIataCode === "true" ? this.validations("Destination value is incorrect") : null}
          </Grid>
        <Grid
          container
          // spacing={2}
          style={{
            backgroundColor: "lightgray",
            maxWidth: "150%",
            marginLeft: "10%",
            marginBottom: "14%",
            // alignItems: "center",
            display: "flex",
            // marginLeft:"50px"
          }}
        >
          <Grid item xs={12}>
            <div
              style={{
                backgroundColor: "royalblue",
                color: "white",
                textAlign: "center",
                padding: "2%",
              }}
            >
              <Typography
                style={{
                  fontSize: "24px",
                  fontWeight: "16px",
                  fontStretch: "expanded",
                }}
              >
                Find your stays
              </Typography>
              <div></div>
            </div>
          </Grid>
         
          <div style={{ width: "100%", display: "flex", margin: "2%" }}>
            <Grid item xs={12} sm={3}>
              <div
                style={{ display: "inline" }}
                // style={{ padding: "2%" }}
              >
                <Typography
                  style={{
                    fontFamily:
                      "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;",
                  }}
                >
                  Destination
                </Typography>
                <AsyncTypeahead
                  style={{ padding: "2%", marginRight: "4%" }}
                  id="source"
                  labelKey="name"
                  minLength={3}
                  onChange={(selected) =>
                    this.setState({ destination: selected })
                  }
                  onSearch={this.handleAirportSearch}
                  options={this.state.options}
                  placeholder="Find..."
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={3}>
              <div
                style={{ display: "inline" }}
                style={{ width: "90%", marginLeft: "10%", paddingTop: "4%" }}
              >
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    style={{
                      fontFamily:
                        "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;",
                    }}
                    disableToolbar
                    variant="inline"
                    format="yyyy-MM-dd"
                    size="small"
                    id="date-picker-inline"
                    label="Departure date"
                    value={this.state.depatureDate}
                    onChange={this.handleDateChange1}
                  />
                </MuiPickersUtilsProvider>
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div
                style={{ display: "inline" }}
                style={{ width: "90%", marginLeft: "8%", paddingTop: "4%" }}
              >
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    style={{
                      fontFamily:
                        "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;",
                    }}
                    disableToolbar
                    variant="inline"
                    format="yyyy-MM-dd"
                    size="small"
                    id="date-picker-inline"
                    label="Arival date"
                    value={this.state.selectedDate}
                    onChange={this.handleDateChange}
                  />
                </MuiPickersUtilsProvider>
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div
                style={{ display: "inline" }}
                style={{ width: "90%" }}
              >
                <Autocomplete
                  options={this.noOfRooms}
                  autoSelect
                  value={this.state.roomqty}
                  onChange={this.selectRooms}
                  renderInput={(params) => (
                    <TextField
                      style={{
                        fontFamily:
                          "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;",
                      }}
                      {...params}
                      id="start"
                      label="Select rooms"
                      onChange={this.selectRooms}
                      variant="outlined"
                      color="primary"
                    />
                  )}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div
                style={{ display: "inline" }}
                style={{ width: "90%" }}
              >
                <Autocomplete
                  id="combo-box-demo4"
                  options={this.noOfPeople}
                  autoSelect
                  value={this.state.adults}
                  onChange={this.handlePersons}
                  renderInput={(params) => (
                    <TextField
                      style={{
                        fontFamily:
                          "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;",
                        color: "indigo",
                      }}
                      {...params}
                      id="start"
                      label="Persons"
                      // value={value}
                      onChange={this.handlePersons}
                      variant="outlined"
                      color="primary"
                    />
                  )}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div
                style={{ display: "inline" }}
                style={{ width: "90%"}}
              >
                <Autocomplete
                  required
                  options={this.rating}
                  autoSelect
                  value={this.state.ratings}
                  onChange={this.handleRatings}
                  renderInput={(params) => (
                    <TextField
                      style={{
                        fontFamily:
                          "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;",
                        color: "indigo",
                      }}
                      {...params}
                      id="start"
                      label="Ratings"
                      // value={value}
                      onChange={this.handleRatings}
                      variant="outlined"
                      color="primary"
                    />
                  )}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div
                style={{ display: "inline" }}
                style={{ maxWidth: "90%" }}
              >
                <FormControl variant="outlined" style={{ width: "90%" }}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Amenties
                  </InputLabel>

                  <Select
                    style={{ width: "120%" }}
                    label="Amenties"
                    open={this.open}
                    onClose={this.handleClose}
                    onOpen={this.handleOpen}
                    value={this.state.boardType}
                    onChange={this.handleBoarding}
                    inputProps={{
                      name: "boardType",
                      InputLabel: "Amenties",
                    }}
                    variant="outlined"
                  >
                    <MenuItem value="RO">Room only</MenuItem>
                    <MenuItem value="BB">Breakfast and bed</MenuItem>
                    <MenuItem value="DBB">Diner breakfast bed</MenuItem>
                    <MenuItem value="FB">Board all</MenuItem>
                    <MenuItem value="AI">Inclusive only</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Button
                color="primary"
                variant="contained"
                style={{ width: "90%", marginLeft: "2%", padding: "9%" }}
                onClick={this.handleHotelSearch}
              >
                Search
              </Button>
            </Grid>
          </div>
        </Grid>

        <Grid>
          <div style={{ width: "80%", height: "80%", marginLeft: "15%" }}>
            {console.log(this.state.noResponse)}
            {console.log(this.state.loading)}
            {this.state.loading === "false" ? null : this.variants()}

            {this.state.noResponse === "true" ? this.errorComponent("hello") : null};
            {this.state.hotels && this.renderHotels(this.state.hotels)}
            
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default Accomondations;
