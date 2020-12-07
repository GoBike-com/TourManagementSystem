import React from "react";
import "date-fns";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
// import DateFnsUtils from "@date-io/date-fns";
import MomentUtils from '@date-io/moment';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import image from "../../assets/img/image17.jpg";
import image1 from "../../assets/img/bg3.jpg";


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
import LinearProgress from '@material-ui/core/LinearProgress';
import ItineraryPopup from '../Itinerary/ItineraryPopup';
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import DialogActions from '@material-ui/core/DialogActions';



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
      city:"",
      registered:"",
      dateError:"false",
      iatacodee:"",
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
    this.addToItinerary = this.addToItinerary.bind(this);
    this.manageClose = this.manageClose.bind(this);
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
        this.setState({iatacodee:options.iataCode})
        this.setState({city: options.name})
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
    console.log("helllo" )
    this.setState({ Errorvalidation: "false" });
    this.setState({ hotels: "" });
    this.state.loading = "false";
    this.state.noResponse = "false";
    // this.state.searchResult = true;
    console.log("iatacode" + this.state.iatacodee)
    console.log("destination " + this.state.iatacodee);
    console.log("arrival date " + this.state.selectedDate);
    console.log("departure date " + this.state.depatureDate);
    console.log("no of rooms " + this.state.roomqty);
    console.log("no of travellers " + this.state.adults);
    console.log("ratings " + this.state.ratings);
    console.log("boardtype " + this.state.boardType);
    // console.log("itacodeeeeeeeeee" ,typeof this.state.destination[0].iataCode)

    // if(this.state.destination[0].iataCode === null){
    //   return this.setState({ dateError: "true" });
    // }
    // else{
    //   return console.log("not finally")
    // }
    if (
      this.state.iatacodee === "" || 
      this.state.destination === "" ||
      this.state.destination[0].iataCode == undefined || 
      this.state.selectedDate === undefined ||
      this.state.depatureDate === undefined ||
      this.state.roomqty === "" ||
      this.state.adults === "" ||
      //this.state.ratings === "" ||
      this.state.boardType === ""
    ) {
      console.log("hello");
      return this.setState({ Errorvalidation: "true" });
    }
    if(moment(this.state.selectedDate) < moment(this.state.depatureDate)){
      return this.setState({ dateError: "true" });
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
    // console.log("itacodeee", this.state.iatacodee);
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

  manageClose = () => {
    this.setState({registered : "false"})
  }

  myDialogue = () => {
    return (
      // alert("hello")
      <Dialog aria-labelledby="customized-dialog-title" open="true" onClose={this.manageClose}>
        <MuiDialogTitle id="customized-dialog-title">
          Welcome GoBikers..!!
        </MuiDialogTitle>
        <MuiDialogContent dividers>
          <Typography gutterBottom>
            Hotel booking has confirmed and added to your itinerary.
          </Typography>
        </MuiDialogContent>
        {/* <DialogActions>
          <Button onClick={manageClose} color="primary">
            Close
          </Button>
        </DialogActions> */}
      </Dialog>
    );
  };


  addToItinerary = (name, hotel) => {
    console.log("helere")
    console.log(name)
    console.log("RATGHHJJ", hotel.rating)
    console.log("itineray name " , name)
    
    console.log("      checkInDate:", this.state.depatureDate)
    console.log("      checkOutDate: ", this.state.selectedDate)
    console.log("city:", this.state.city)
	  console.log("      adults: ",this.state.adults)
    console.log("      travelClass:", this.state.travelClass)
    console.log("      amount:", hotel.amount)
    console.log("rating" , hotel.rating)
    console.log("name", hotel.name)
    console.log("address:", hotel.address)
    console.log("         phonenumber:", hotel.phonenumber)
    console.log("          postalCode:", hotel.postalCode)
    console.log("          chaincode:", hotel.chaincode)
          // hotel: {
          //     amount: hotel.amount,
          //     rating: this.state.ratings,
          //     name: hotel.name,
          //     address: hotel.address,
          //     phonenumber: hotel.phonenumber,
          //     postalCode: hotel.postalCode,
          //     chaincode: hotel.chaincode
          // }
  
      var targetUrl = config.API_URL + "/accommodation/"+window.sessionStorage.getItem("username");
      const ph = hotel.phonenumber.replace(/\s+/g, '');
      console.log(this.state.city);
      console.log(ph);

      const requestOptions = {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          itineraryName: name,
          checkInDate: this.state.selectedDate,
          checkOutDate: this.state.arrivalDate,
         	city: this.state.city,
	        adults: this.state.adults,
          hotel: {
              amount: hotel.amount,
              rating: hotel.rating,
              name: hotel.name,
              address: hotel.address,
              phonenumber: ph,
              postalCode: hotel.postalCode,
              chaincode: hotel.chaincode
          }
        }),
      };

      fetch(targetUrl, requestOptions)
        .then((response) => {
          // check for error response
          if (response.status == "200") {
            console.log("successfull")
            this.setState({"registered":true})
          }

          // this.setState({ totalReactPackages: data.total })
        })
        .catch((error) => {
          // this.setState({ errorMessage: error.toString() });
          console.error("There was an error!", error);
        });
    };

  renderHotels = (hotels) => {
    return hotels.map((hotel) => {
      return (
        <Card
          raised="true"
          style={{
            // marginLeft: "10%",
            // height: "400px",
            margin: "2%",
            width:"70%"
          }}
        >
          <div
            style={{
              backgroundColor: "darkgreen",
              color: "white",
              // border: "none",
              // marginLeft: "4%",
            }}
          >
            <Typography
              style={{
                fontFamily:
                  "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
                fontSize: "24px",
                fontWeight: "16px",
                fontStretch: "expanded",
                marginLeft:"4%"
              }}
              paragraph
            >
              {hotel.name}
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              // backgroundColor: "floralwhite",
            }}
          >
            <CardContent>
              <Typography
                style={{
                  fontFamily:
                    "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
                }}
                paragraph
              >
                {hotel.address}
              </Typography>
              <Typography
                style={{
                  fontFamily:
                    "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
                }}
                paragraph
              >
                Connect at : {hotel.postalCode}
              </Typography>
              <Typography
                style={{
                  fontFamily:
                    "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
                }}
                paragraph
              >
                Our Rating : {hotel.rating}
              </Typography>
              <Typography
                style={{
                  fontFamily:
                    "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
                }}
                paragraph
              >
                Postal Code: {hotel.postalnumber}
              </Typography>
              <Typography
                style={{
                  fontFamily:
                    "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
                }}
                paragraph
              >
                Chain code : {hotel.chaincode}
              </Typography>
              {/* <CardContent>
              <div style={{}}>
                <img
                  // style={{ height: "40%", marginLeft: "30%" }}
                  src={image}
                ></img>
              </div>
            </CardContent> */}
              <CardActions>
              <ItineraryPopup addToItinerary={(name) => {
                 this.addToItinerary(name,hotel);
            }}/>
              </CardActions>
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
      <Card raised="true">
      <h1>Searching....</h1>
      <LinearProgress />
      <LinearProgress color="secondary" />
      </Card>
    );
  };

  validations = (props) => {
    return (
      <div
        style={{
          backgroundColor: "#d40035",
          color: "white",
          // margin: "auto",
          // marginLeft: "14%",
          // width:"40%",
          // marginBottom:"1%",
          // padding:"1%",
          borderRadius:"8%"

        }}
      >
        {/* <Typography
          style={{
            fontSize: "18px",
            fontWeight: "10px",
          }}
        > */}
          To continue please correct the following details,
          {props}
        {/* </Typography> */}
      </div>
    );
  };

  errorComponent = (props) => {
   
    this.state.loading = "false";
 
    return (
      <Card raised="true"
        style={{
          margin:"auto",
          flex:"left"
        }}
      >
        <Typography
          style={{
            fontSize: "18px",
            fontWeight: "10px",
            alignContent:"center",
            color:"indigo",
            padding:"10%"
            // marginLeft:"25%"
          }}
        >
          The hotels for the dates are unavailable. please try to select different dates or amenties
        </Typography>
        {/* <div>
                <img
                  style={{ height: "40%", marginLeft: "30%" }}
                  src={image1}
                ></img>
              </div> */}
        
      </Card>
    );
  };

  render() {
    return (
      <Grid>
         {/* <Grid item xs={12}>
         {this.validations("all fields are mandatory")}
            {this.state.Errorvalidation === "true" ? this.validations("all fields are mandatory") : null}
            {this.state.invalidIataCode === "true" ? this.validations("Destination value is incorrect") : null}
          </Grid> */}
        <Grid
          container 

          // // spacing={2}
          style={{
            backgroundImage: "url(" + image1 + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "100vh",
          }}
        >
          {/* <Grid item xs={12}>
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
          </Grid> */}


          
         
           <Card raised="true" style={{display:"flex", width:"20%", height:"10%", margin:"4%"}}>
            
          <div style={{margin:"auto"}} >
          <div> 
          {this.state.dateError === "true" ? this.validations("departure date is later than arrival date") : null}
          {this.state.Errorvalidation === "true" ? this.validations("all fields are mandatory") : null}
            {this.state.invalidIataCode === "true" ? this.validations("Destination value is incorrect") : null}</div>
            {/* <Grid item xs={12} sm={12}> */}
              <div

              // style={{alignItems:"center", margin:"2%", }}
                // style={{ display: "inline" }}
                style={{ padding: "5%" }}
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
                  id="source"
                  labelKey="name"
                  minLength={5}
                  onChange={(selected) =>
                    this.setState({ destination: selected })
                  }
                  onSearch={this.handleAirportSearch}
                  options={this.state.options}
                  placeholder="Find..."
                />
              </div>
            {/* </Grid> */}

            {/* <Grid item xs={12} sm={12}> */}
              <div
                style={{ padding: "5%" }}
                // style={{ width: "90%", marginLeft: "10%", paddingTop: "4%" }}
              >
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <KeyboardDatePicker
                    style={{
                      fontFamily:
                        "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;",
                    }}
                    disableToolbar
                    variant="inline"
                    format="yyyy-MM-DD"
                    size="small"
                    id="date-picker-inline"
                    label="Departure date"
                    value={this.state.depatureDate}
                    onChange={this.handleDateChange1}
                  />
                </MuiPickersUtilsProvider>
              </div>
            {/* </Grid> */}
            {/* <Grid item xs={12} sm={12}> */}
              <div
               style={{ padding: "5%" }}
              >
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <KeyboardDatePicker
                    style={{
                      fontFamily:
                        "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;",
                    }}
                    disableToolbar
                    variant="inline"
                    format="yyyy-MM-DD"
                    size="small"
                    id="date-picker-inline"
                    label="Arival date"
                    value={this.state.selectedDate}
                    onChange={this.handleDateChange}
                  />
                </MuiPickersUtilsProvider>
              </div>
            {/* </Grid> */}
            {/* <Grid item xs={12} sm={12}> */}
              <div
                // style={{ display: "inline" }}
               style={{ padding: "5%" }}
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
            {/* </Grid> */}
            {/* <Grid item xs={12} sm={12}> */}
              <div
                style={{ padding: "6%" }}
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
            {/* </Grid> */}
            {/* <Grid item xs={12} sm={12}> */}
              
            {/* </Grid> */}
            {/* <Grid item xs={12} sm={12}> */}
              <div
                style={{ padding: "6%" }}
              >
                <FormControl variant="outlined" style={{ width: "83%" }}>
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

              <div
                style={{ padding: "6%" }}
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
            {/* </Grid> */}
<div
                style={{ padding: "5%" }}
              >
            {/* <Grid item xs={12} sm={12}> */}
              <Button
                color="primary"
                variant="contained"
                // style={{ padding: "5%" }}
                onClick={this.handleHotelSearch}
              >
                Search
              </Button>
              </div>
            {/* </Grid> */}
         
          </div>
          </Card>
        {/* </Grid>
        <Grid> */}
          <div style={{margin:"auto", width:"40%", height:"20%"}}>
    

       
            {console.log(this.state.noResponse)}
            {console.log(this.state.loading)}
            {/* {this.variants()} */}
            {this.state.loading === "false" ? null : this.variants()}
            {/* {this.errorComponent("hello")} */}
            {this.state.noResponse === "true" ? this.errorComponent("hello") : null};
            {this.state.hotels && this.renderHotels(this.state.hotels)}
            {this.state.registered === true ? this.myDialogue() : null}

            
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default Accomondations;