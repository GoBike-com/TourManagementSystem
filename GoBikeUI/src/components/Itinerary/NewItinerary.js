
import React from "react";
import moment from "moment";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import image1 from "../../assets/img/image46.jpg";
import itinerary_bg from "../../assets/img/itinerary_bg.jpg";
import {
  Link,
  Toolbar,
  DialogContent,
  Dialog,
  DialogTitle,
  DialogActions,
  TextField,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  IconButton,
  Box,
  Button,
  Typography,
  CardActionArea,
  CardMedia, InputLabel, Select,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { config } from "../Constants";
import fetch from "cross-fetch";
import GobikeMap from '../Itinerary/GobikeMap';
import Divider from "@material-ui/core/Divider";
import AccordionActions from "@material-ui/core/AccordionActions";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCommentIcon from "@material-ui/icons/AddComment";
import CancelIcon from "@material-ui/icons/Cancel";
import { indigo } from "@material-ui/core/colors";
import "react-bootstrap-typeahead/css/Typeahead.css";
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import ChatApp from "../Chat/ChatApp";
import InputMask from 'react-input-mask';
import MomentUtils from "@date-io/moment";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DialogContentText from "@material-ui/core/DialogContentText";
import MenuItem from "react-bootstrap-typeahead/lib/components/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import MapIcon from '@material-ui/icons/Map';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import BookIcon from '@material-ui/icons/Book';
import DateRangeIcon from '@material-ui/icons/DateRange';
import GroupIcon from '@material-ui/icons/Group';
import CloseIcon from '@material-ui/icons/Close';
import FlightLandRounded from '@material-ui/icons/FlightLandRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import HotelRoundedIcon from '@material-ui/icons/HotelRounded';
import NotesIcon from '@material-ui/icons/Notes';
import Rating from "@material-ui/lab/Rating";

class NewItinerary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itineraries: [],
      open: false,
      user: "",
      itineraryName: "",
      plan: "",
      showComment: false,
      error: false,
      showmap: false,
      sharedWithUser: false,
      displayChat: false,
      startDate: moment().format("YYYY-MM-DD"),
      endDate: moment().format("YYYY-MM-DD"),
      addItineraryOpen: false,
      addItineraryName: "",
      chatusers: [],

      checkoutOpen: false,
      creditCardNumber: null,
      creditCardExpirationDate: null,
      creditCardCCV: null,
      checkoutItinerary: {flights: [], accommodations: []},

      currency: "USD",
      currencySymbol: "$",
      exchangeRate: 1,
      selectedItinerary:'',
      day:''
    };
    this.addItinerary = this.addItinerary.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAddItineraryOpen = this.handleAddItineraryOpen.bind(this);
    this.handleAddItineraryClose = this.handleAddItineraryClose.bind(this);
    this.handleCheckoutOpen = this.handleCheckoutOpen.bind(this);
    this.handleCheckoutClose = this.handleCheckoutClose.bind(this);
    this.handleUserSearch = this.handleUserSearch.bind(this);
    this.toggleShowComment = this.toggleShowComment.bind(this);
    this.handleChat = this.handleChat.bind(this);
    this.deletePlaceFromItinerary = this.deletePlaceFromItinerary.bind(this);
    this.deleteAccommodationFromItinerary = this.deleteAccommodationFromItinerary.bind(this);
    this.deleteFlightFromItinerary = this.deleteFlightFromItinerary.bind(this);
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
  }

  handleCurrencyChange = (event) => {
    this.setState({
      currency: event.target.value,
      currencySymbol: (event.target.value === "USD" ? "$" : (event.target.value === "EUR") ? "€" : "£")
    });
    //https://openexchangerates.org/api/latest.json?app_id=5856f739436e43f5bc9ab2a208cd9280

    const targetCreateUrl = "https://openexchangerates.org/api/latest.json?app_id=5856f739436e43f5bc9ab2a208cd9280";

    fetch(targetCreateUrl)
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            exchangeRate: data.rates[event.target.value]
          });
        })
        .catch((error) => {
          alert("Error!");
          console.error("There was an error!", error);
        });


    // const targetCreateUrl = config.API_URL + "/currency/convert";
    // const requestOptions = {
    //   method: "POST",
    //   credentials: "include",
    //   headers: {"Content-Type": "application/json"},
    //   body: JSON.stringify({
    //     baseCurrency: "USD",
    //     targetCurrency: event.target.value,
    //     amount: parseFloat(this.state.totalCost)
    //   }),
    // };
    //
    // fetch(targetCreateUrl, requestOptions)
    //     .then((response) => {
    //       if (response.status == "200") {
    //         alert("Hello");
    //       }
    //     })
    //     .catch((error) => {
    //       alert("Error!");
    //       console.error("There was an error!", error);
    //     });

  };

  deleteFlightFromItinerary = (flight) => {
    const targetCreateUrl = config.API_URL + "/travel/flight/" + flight.id;
    const requestOptions = {
      method: "DELETE",
      credentials: "include",
      headers: {"Content-Type": "application/json"},
    };

    fetch(targetCreateUrl, requestOptions)
        .then((response) => {
          if (response.status == "200") {
            this.getAllItineraries();
            alert("\"" + flight.airline + "\"" + " was removed from itinerary.");
          }
        })
        .catch((error) => {
          alert("Error removing!");
          console.error("There was an error!", error);
        });
  };

  deleteAccommodationFromItinerary = (accommodation) => {
    const targetCreateUrl = config.API_URL + "/accommodation/" + accommodation.id;
    const requestOptions = {
      method: "DELETE",
      credentials: "include",
      headers: {"Content-Type": "application/json"},
    };

    fetch(targetCreateUrl, requestOptions)
        .then((response) => {
          if (response.status == "200") {
            this.getAllItineraries();
            alert("\"" + accommodation.name + "\"" + " was removed from itinerary.");
          }
        })
        .catch((error) => {
          alert("Error removing!");
          console.error("There was an error!", error);
        });
  };

  deletePlaceFromItinerary = (place) => {
    const targetCreateUrl = config.API_URL + "/place/" + place.id;
    const requestOptions = {
      method: "DELETE",
      credentials: "include",
      headers: {"Content-Type": "application/json"},
    };

    fetch(targetCreateUrl, requestOptions)
        .then((response) => {
          if (response.status == "200") {
            this.getAllItineraries();
            alert("\"" + place.place.name + "\"" + " was removed from itinerary.");
          }
        })
        .catch((error) => {
          alert("Error removing!");
          console.error("There was an error!", error);
        });
  };

  handleCheckoutOpen = (itinerary) => {
    let booked = false;

    let totalCost = 0;
    itinerary.flights.map((flight) => {
      totalCost += parseFloat(flight.price);
      if (flight.booked) {
        booked = true;
      }
    });
    itinerary.accommodations.map((accommodation) => {
      totalCost += parseFloat(accommodation.amount);
      if (accommodation.booked) {
        booked = true;
      }
    });
    itinerary.totalCost = parseFloat(totalCost);

    if (booked) {
      alert("You have already booked this itinerary.")
    } else {
      this.setState({
        checkoutOpen: true,
        checkoutItinerary: itinerary,
      });
    }
  };

  handleCloseMap = () => {
    this.setState({
      showmap: false,
      selectedItinerary:''
    });
  };

  handleCheckoutClose = (save) => {
    // *name: itineraryData.itinerary.name,
    // *startDate: itineraryData.itinerary.startDate,
    // *endDate: itineraryData.itinerary.endDate,
    // *createdDate: itineraryData.itinerary.createdDate,
    // *createdBy: itineraryData.itinerary.createdBy,
    // *flights: itineraryData.flights,
    // accommodations: itineraryData.accommodations,
    // *plans: itineraryData.itinerary.plans,
    // *places: itineraryData.itinerary.places,
    // *users: itineraryData.users

    if (save) {
      if (this.state.creditCardNumber.length !== 19) {
        alert("Please enter a valid credit card.")
        return;
      } else if (this.state.creditCardExpirationDate.length !== 5) {
        alert("Please enter a valid credit card expiration date.")
        return;
      } else if (this.state.creditCardCCV.length !== 3) {
        alert("Please enter a valid CCV.")
        return;
      }

      const targetCreateUrl = config.API_URL + "/itinerary/" + this.state.checkoutItinerary.name + "/book/" + window.sessionStorage.getItem("username");
      const requestOptions = {
        method: "PUT",
        credentials: "include",
        headers: {"Content-Type": "application/json"},
      };

      fetch(targetCreateUrl, requestOptions)
          .then((response) => {
            if (response.status == "200") {
              this.getAllItineraries();
              this.setState({
                checkoutOpen: false
              });
              alert("\"" + this.state.checkoutItinerary.name + "\"" + " was booked.");
            }
          })
          .catch((error) => {
            alert("Error booking!");
            console.error("There was an error!", error);
          });
    } else {
      this.setState({
        checkoutOpen: false
      });
    }
  };

  componentDidMount() {
    this.getAllItineraries();
  }

  handleOpen = (name) => {
    this.setState({
      open: true,
      itineraryName: name,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleAddItineraryOpen = () => {
    this.setState({
      addItineraryOpen: true
    });
  };

  handleChat = (event) =>{
    event.preventDefault();
    this.setState({
      displayChat: !this.state.displayChat,
    });
  };

  handleAddItineraryClose = (save, name, startDate, endDate) => {
    if (save && name && startDate && endDate) {
      const targetCreateUrl =
          config.API_URL +
          "/itinerary/" +
          window.sessionStorage.getItem("username");
      const requestOptions = {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          startDate: moment(startDate).format("YYYY-MM-DD"),
          endDate: moment(endDate).format("YYYY-MM-DD")
        }),
      };

      fetch(targetCreateUrl, requestOptions)
          .then((response) => {
            if (response.status == "200") {
              this.getAllItineraries();
              this.setState({
                addItineraryOpen: false
              });
              alert("\"" + name + "\"" + " was added.");
            } else if (response.status == "422") {
              alert(
                  "Please enter different itinerary name. This name has already been taken."
              );
            }
          })
          .catch((error) => {
            console.error("There was an error!", error);
          });
    } else if(save && !name) {
      alert("Please enter an itinerary name.")
    } else {
      this.setState({
        addItineraryOpen: false
      });
    }
  };

  displayMap = (itinerary) => {
    //event.preventDefault();
    console.log("show map clicked")
    this.setState({
      showmap: !this.state.showmap,
      selectedItinerary:itinerary
    });
  };

  displayChat = (event) => {
    event.preventDefault();
    this.setState({
      displayChat: !this.state.displayChat,
    });
  };

  showChat = () => {
    const targetGetUrl =
      config.API_URL + "/userchat/" + window.sessionStorage.getItem("username");
    fetch(targetGetUrl, {
      method: "GET",
      headers: { Accept: "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        if (data === true) {
            console.log("getting the response from user")
          this.setState({ sharedWithUser: true });
        }
      });
  };

  //Gets all of the itineraries with their details
  getAllItineraries = () => {
    this.showChat();
    const targetGetUrl =
      config.API_URL +
      "/itinerary/" +
      window.sessionStorage.getItem("username");
    fetch(targetGetUrl, {
      method: "get",
      headers: { Accept: "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ itineraries: [] });

        for (let i = 0; i < data.itineraryDetails.length; i++) {
          const itineraryData = data.itineraryDetails[i];

          const itinerary = {
            name: itineraryData.itinerary.name,
            startDate: itineraryData.itinerary.startDate,
            endDate: itineraryData.itinerary.endDate,
            createdDate: itineraryData.itinerary.createdDate,
            createdBy: itineraryData.itinerary.createdBy,
            flights: itineraryData.flights,
            accommodations: itineraryData.accommodations,
            plans: itineraryData.itinerary.plans,
            places: itineraryData.itinerary.places,
          };

          let users =
            itineraryData.users[0].firstName +
            " " +
            itineraryData.users[0].lastName;
          for (let j = 1; j < itineraryData.users.length; j += 1) {
            users +=
              ", " +
              itineraryData.users[j].firstName +
              " " +
              itineraryData.users[j].lastName;
          }
          itinerary.users = users;

          let usernames = [];
          for (let j = 0; j < itineraryData.users.length; j += 1) {
            usernames.push(itineraryData.users[j].userName);
          }
          //DEEPIKA HERE
          itinerary.usernames = usernames;
          this.setState({chatusers: itinerary.usernames});
          this.shareChat(itinerary.usernames);
          this.setState({
            itineraries: this.state.itineraries.concat(itinerary),
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  shareChat = (usernames) => {
    this.setState({sharedWithUser: true})
    for(let i = 0 ; i < usernames.length; i++){
      // console.log(usernames[i].userName)
      const url = config.API_URL + "/userchat/" + usernames[i] + "/true";
      const requestOptions = {
        method: "POST",
        credentials: "include",
      };
      fetch(url, requestOptions).then((response) => {
        if (response.status == "200") {
          console.log("success");
        }
      });
    }
  };


  // shareChat1 = (user) => {
  //   this.setState({sharedWithUser: true})
    
  //     // console.log(usernames[i].userName)
  //   const url = config.API_URL + "/userchat/" + user + "/true";
  //   const requestOptions = {
  //       method: "POST",
  //       credentials: "include",
  //     };
  //   fetch(url, requestOptions).then((response) => {
  //       if (response.status == "200") {
  //         console.log("success");
  //       }
  //     });
  //   }

  share = () => {
    // this.shareChat1(this.state.user[0].userName);
    var targetUrl = config.API_URL + "/itinerary/adduser";
    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: window.sessionStorage.getItem("username"),
        itineraryName: this.state.itineraryName,
        newUserName: this.state.user[0],
      }),
    };

    fetch(targetUrl, requestOptions)
      .then((response) => {
        if (response.status == "200") {
          alert("User was added!");
          this.setState({
            open: false,
            
          });
        }
        window.sessionStorage.setItem("shared", true);
        this.refresh();
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  handleUserSearch = (query) => {
    //setIsLoading(true);
    console.log(query);
    var targetUrl = config.API_URL + "/user/search/" + query;
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
        this.setState({ options: res });
        // setIsLoading(false);
      });
  };

  addItinerary = (event) => {
    console.log("why")
    event.preventDefault();
    if(window.sessionStorage.getItem("username")){
      this.handleAddItineraryOpen();
    } else {
      window.location.href="/traveller/signin"
    }
    
  };

  useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  savePlan = (itineraryName) => {
    if (this.state.plan === "" || !this.state.day) {
      this.setState({
        error: true,
      });
    } else {
      this.setState({
        error: false,
      });

      var targetUrl = config.API_URL + "/itinerary/plan";
      const requestOptions = {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          loggedInUser: window.sessionStorage.getItem("username"),
          description: this.state.plan,
          date: this.state.day,
          itineraryName: itineraryName,
        }),
      };
      fetch(targetUrl, requestOptions).then((response) => {
        // check for error response
        if (response.status == "200") {
          alert("Plan is added to your itinerary " + itineraryName);
          this.refresh();
        }
      });
    }
  };

  handleDescription = (event) => {
    this.setState({ plan: event.target.value });
  };

  handleDay = (event) => {
    const day = moment(event.target.value).format("YYYY-MM-DD");
    this.setState({ day: day });
  };

  commentComponent = (itinerary) => {
    console.log(itinerary)
    return (
      <Box
        style={{ width: "100%" }}
        borderColor="primary.main"
        border={2}
        m={1}
        borderRadius="borderRadius"
      >
        {this.state.error && (
          <Alert severity="error">Please enter details for adding Plan.</Alert>
        )}
        <div style={{ display: "flex", padding: "1%" }}>
          <TextField
            id="date"
            label={<b>Day</b>}
            type="date"
            value={this.state.day}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              min: moment(itinerary.startDate).format("YYYY-MM-DD"),
              max: moment(itinerary.endDate).format("YYYY-MM-DD")
            }}
            style={{ paddingRight: "2%",width:'70%%' }}
            onChange={this.handleDay}
          />
          <TextField
            id="comment"
            label={<b>Enter your plan</b>}
            fullWidth
            multiline
            value={this.state.plan}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.handleDescription}
          />
        </div>
        <div style={{ display: "flex", width: "100%", padding: "1%" }}>
          <Button
            size="small"
            color="primary"
            startIcon={<SaveIcon />}
            onClick={(e) => {
              e.preventDefault();
              this.savePlan(itinerary.name);
            }}
          >
            Save
          </Button>
          <Button
            size="small"
            color="primary"
            startIcon={<CancelIcon />}
            onClick={(e) => {
              e.preventDefault();
              this.toggleShowComment();
            }}
          >
            Cancel
          </Button>
        </div>
      </Box>
    );
  };

  onDelete = (plan) => {
    console.log(plan);
    var targetUrl = config.API_URL + "/itinerary/plan/" + plan.id;
    fetch(targetUrl, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      alert("Plan is deleted");
      this.refresh();
    });
  };

  refresh = () => {
    window.location.reload(false);
  };

  renderPlans = (plans) => {
    return plans.map((plan) => {
      return (
        <Card style={{ margin: "0.5%" }}>
          <CardHeader
            subheader={moment(plan.day).format("YYYY-MM-DD")}
            subheaderTypographyProps={{ variant: "h6" }}
            style={{ backgroundColor: indigo[700], textAlign: "center" }}
          />
          <CardContent style={{ width: "100%" }}>
            {plan.description}
          </CardContent>
          <CardActions>
            <IconButton
              component="span"
              size="small"
              onClick={(e) => {
                e.preventDefault();
                this.onDelete(plan);
              }}
            >
              <DeleteIcon color="primary" />
            </IconButton>
          </CardActions>
        </Card>
      );
    });
  };

  toggleShowComment = () => {
    this.setState({
      showComment: !this.state.showComment,
    });
  };

  render() {
    const itineraries = this.state.itineraries;
    const classes = this.useStyles;

    if (itineraries.length === 0) {
      return (
        <div style={{
          backgroundImage: "url(" + image1 + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "100vh",
        }}>
          <Typography variant="h1" align="center">
            Itineraries
          </Typography>
          <Typography variant="h5" align="center">
            <NotesIcon/> <b> Trip planning has become easy. Create, Plan, Manage, share your itinerary.</b>
          </Typography>
          <Typography variant="h5" align="center">
             <DirectionsBikeIcon/> <b> Bike is on us. Unlimited access for entire trip. Enjoy!!</b>
          </Typography>
          <Typography variant="h5" align="center">
            <b>Plan your trip now. </b>
            <Link onClick={() => {
              window.location.href = "/search"
            }}>Explore here!!</Link>
          </Typography>
          <br />
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.addItinerary}
            >
              Create an Itinerary
            </Button>
          </Grid>
          <br />
          {/*Add Itinerary Popup*/}
          <Dialog open={this.state.addItineraryOpen} onClose={() => this.handleAddItineraryClose(false)} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add Itinerary</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To add an itinerary, please enter the name of the itinerary and the start/end dates below.
              </DialogContentText>
              <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Itinerary Name"
                  type="text"
                  fullWidth
                  required={true}
                  onChange={(event) => {
                    this.setState({
                      addItineraryName: event.target.value
                    })
                  }}
              />
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
                    label="Start Date"
                    value={this.state.startDate}
                    onChange={(date) => {
                      this.setState({startDate: date});
                      if(date >= this.state.endDate) {
                        this.setState({
                          endDate: date
                        });
                      }
                    }}
                />
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
                      label="End Date"
                      value={this.state.endDate}
                      onChange={(date) => {
                        this.setState({endDate: date});
                        if(date <= this.state.startDate) {
                          this.setState({
                            startDate: date
                          });
                        }
                      }}

                  />
                </MuiPickersUtilsProvider>
              </MuiPickersUtilsProvider>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => this.handleAddItineraryClose(false)} color="primary">
                Cancel
              </Button>
              <Button onClick={() => this.handleAddItineraryClose(true, this.state.addItineraryName, this.state.startDate, this.state.endDate)} color="primary">
                Add
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    } else {
      return (
        <div style={{
          backgroundImage: "url(" + image1 + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "100vh",
        }}>
          <Typography variant="h1" align="center">
            Itineraries
          </Typography>
          <Typography variant="h5" align="center">
            <NotesIcon/> <b> Trip planning has become easy. Create, Plan, Manage, share your itinerary.</b>
          </Typography>
          <Typography variant="h5" align="center">
             <DirectionsBikeIcon/> <b> Bike is on us. Unlimited access for entire trip. Enjoy!!</b>
          </Typography>
        

          <br />
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.addItinerary}
            >
              Create an Itinerary
            </Button>
          </Grid>
          <br />

          {this.state.itineraries.map((itinerary) => (
             <div>
              <br />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  style = {{backgroundColor:'#e0e0e0'}}
                >
                  <div style = {{display:'inline-block', width:'100%'}}>
                    <Typography className={classes.heading} variant="h4" style = {{color :'#01579b'}}>
                      <b>{itinerary.name}</b>
                    </Typography>
                    <Typography className={classes.secondaryHeading}  style = {{paddingLeft :'2%'}}>
                      <div style = {{display :'flex'}}>
                        <DateRangeIcon color="primary"/>
                        <div><b>{moment(itinerary.startDate).format("YYYY-MM-DD")} to {moment(itinerary.endDate).format("YYYY-MM-DD")}</b>
                        </div>
                      </div>
                    </Typography>
                    <Typography className={classes.secondaryHeading} style = {{paddingLeft :'2%'}}>
                      <div style = {{display :'flex'}}>
                        <GroupIcon color="primary"/> 
                        <div>{itinerary.users}</div>
                      </div>
                    </Typography>
                    <Typography className={classes.secondaryHeading}  style = {{paddingLeft :'2%'}}>
                        <i> Created by </i> {itinerary.createdBy}
                    </Typography>
                  </div>
                </AccordionSummary>
                <Divider style = {{height: '2px', backgroundColor:"#01579b" }}/>
                <div style={{
                    backgroundImage: "url(" + itinerary_bg + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "100%",
                  }}>
                    {itinerary.plans.length > 0 && (
                      <AccordionDetails>
                        {this.renderPlans(itinerary.plans)}
                      </AccordionDetails>
                    )}
                    <AccordionDetails>
                      {this.state.showComment ? (
                        this.commentComponent(itinerary)
                      ) : (
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                          style={{ margin: "0.5%" }}
                          startIcon={<AddCommentIcon />}
                          onClick={(e) => {
                            e.preventDefault();
                            this.toggleShowComment();
                          }}
                        >
                          Add Plan
                        </Button>
                      )}
                    </AccordionDetails>
                    <Divider style = {{height: '2px', backgroundColor:"#01579b" }}/>

                    {/*Places*/}
                    {itinerary.places.length == 0 ? (
                      <AccordionDetails>
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                          style={{ margin: "0.5%" }}
                          href="/search"
                        >
                          Add Place
                        </Button>
                      </AccordionDetails>
                    ) : (
                      <div>
                        <AccordionDetails>
                        <LocationOnRoundedIcon fontSize='large'/><Typography variant="h4"><b>Places on Trip</b></Typography>
                        </AccordionDetails>
                        {itinerary.places.map((places) => (
                          <div>
                            <AccordionDetails>
                              <Typography variant="h5">
                                {places.place.name}
                              </Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                              <Typography>{places.place.description}</Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                              <Typography variant="h6">Restaurants</Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                              <Grid container spacing={1}>
                                {places.place.restaurant.map((tile) => (
                                  <Grid item md={3}>
                                    <Card className={classes.root}>
                                      <CardActionArea
                                        href={tile.websiteURL}
                                        target="_blank"
                                      >
                                        <CardMedia
                                          component="img"
                                          className={classes.media}
                                          height="140"
                                          image={tile.imageURL}
                                          title={tile.name}
                                        />
                                        <CardContent>
                                          <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                          >
                                            {tile.name}
                                          </Typography>
                                        </CardContent>
                                      </CardActionArea>
                                      <CardActions>
                                        <Button
                                          size="small"
                                          color="primary"
                                          href={tile.websiteURL}
                                          target="_blank"
                                        >
                                          Learn More
                                        </Button>
                                      </CardActions>
                                    </Card>
                                  </Grid>
                                ))}
                              </Grid>
                            </AccordionDetails>
                            <AccordionDetails>
                              <Button variant="contained" color="secondary" onClick={(e) => {
                                e.preventDefault();
                                this.deletePlaceFromItinerary(places);
                              }}>
                                Remove {places.place.name} from Itinerary
                              </Button>
                            </AccordionDetails>
                          </div>
                        ))}
                      </div>
                    )}

                    {/*Flights*/}
                    <Divider style = {{height: '2px', backgroundColor:"#01579b" }}/>

                    {itinerary.flights.length == 0 ? (
                      <AccordionDetails>
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                          style={{ margin: "0.5%" }}
                          href="/travel"
                        >
                          Add Flight
                        </Button>
                      </AccordionDetails>
                    ) : (
                      <div>
                        <AccordionDetails>
                          <FlightLandRounded fontSize='large'/><Typography variant="h4"><b>Flights Added</b></Typography>
                        </AccordionDetails>
                        {itinerary.flights.map((flight) => (
                          <div>
                            <Card
                              variant="outlined"
                              style={{ width: "50%" }}
                            >
                               <CardHeader title={flight.airline} />
                               <CardContent>
                                <Typography>
                                  <b>Departs</b> from {flight.deptIataCode}, terminal{" "}
                                  {flight.deptTerminal}, at {flight.deptTime} and{" "}
                                  <b>arrives</b> at {flight.arrivalIataCode} at{" "}
                                  {flight.arrivalTime}
                                </Typography>
                               </CardContent>
                               <CardContent>
                                <Typography>
                                    <b>Travel Date: </b>
                                    {moment(flight.travelDate).format("YYYY-MM-DD")}
                                </Typography>
                                <Typography>
                                    <b>Duration: </b>
                                    {flight.duration}
                                </Typography>
                               </CardContent>
                               <CardContent>
                                  <Typography>
                                      <b>Class: </b>
                                      {flight.travelClass}
                                  </Typography>
                                  <Typography>
                                    <b>Price: </b>${flight.price}
                                  </Typography>
                               </CardContent>
                               <CardActions>
                                  <Button size="small" color="secondary" onClick={(e) => {
                                      e.preventDefault();
                                      this.deleteFlightFromItinerary(flight);
                                     }}>
                                      Remove {flight.airline} from Itinerary
                                  </Button>
                               </CardActions>
                            </Card>
                            {/* <AccordionDetails>
                              <Typography variant="h5">{flight.airline}</Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                              <Typography>
                                <b>Departs</b> from {flight.deptIataCode}, terminal{" "}
                                {flight.deptTerminal}, at {moment(flight.deptTime).format("YYYY-MM-DD")} and{" "}
                                <b>arrives</b> at {flight.arrivalIataCode} at{" "}
                                {moment(flight.arrivalTime).format("YYYY-MM-DD")}.
                              </Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                              <Typography>
                                <b>Date: </b>
                                {moment(flight.travelDate).format("YYYY-MM-DD")}
                              </Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                              <Typography>
                                <b>Class: </b>
                                {flight.travelClass}
                              </Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                              <Typography>
                                <b>Price: </b>${flight.price}
                              </Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                              <Typography>
                                <b>Duration: </b>
                                {flight.duration}
                              </Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                              <Button variant="contained" color="secondary" onClick={(e) => {
                                e.preventDefault();
                                this.deleteFlightFromItinerary(flight);
                              }}>
                                Remove {flight.airline} from Itinerary
                              </Button>
                            </AccordionDetails> */}
                          </div>
                        ))}
                      </div>
                    )}
                    {/*Accommodations*/}
                    <Divider style = {{height: '2px', backgroundColor:"#01579b"}}/>

                    {itinerary.accommodations.length == 0 ? (
                      <AccordionDetails>
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                          style={{ margin: "0.5%" }}
                          href="/accomodation"
                        >
                          Add Accommodation
                        </Button>
                      </AccordionDetails>
                    ) : (
                      <div>
                        <AccordionDetails>
                        <HotelRoundedIcon fontSize='large'/><Typography variant="h4"><b>Accommodations</b></Typography>
                        </AccordionDetails>
                        {itinerary.accommodations.map((accommodation) => (
                          <div>
                            <Card
                              variant="outlined"
                              style={{ width: "50%" }}
                            >
                               <CardHeader title={accommodation.name} subheader= {
                                  <Rating
                                    name="read-only"
                                    value={accommodation.ratings+''}
                                    readOnly
                                  />
                                } />
                               <CardContent>
                                  <Typography>
                                    <b>Address: </b>
                                    {accommodation.address}
                                  </Typography>
                                  <Typography>
                                    <b>Zip Code: </b>
                                    {accommodation.postalCode}
                                  </Typography>
                                  <Typography>
                                    <b>Phone Number: </b>{accommodation.contact}
                                  </Typography>
                               </CardContent>
                               <CardContent>
                                  <Typography>
                                    <b>Check In: </b>{moment(accommodation.checkIn).format("YYYY-MM-DD")}
                                  </Typography>
                                  <Typography>
                                    <b>Check Out: </b>{moment(accommodation.checkOut).format("YYYY-MM-DD")}
                                  </Typography>
                               </CardContent>
                               <CardContent>
                                  <Typography>
                                    <b>Price: </b>${accommodation.amount}
                                  </Typography>
                                  {/* <Typography>
                                    <b>Rating: </b>{accommodation.ratings}
                                  </Typography> */}
                               </CardContent>
                               <CardActions>
                                  <Button size="small" color="secondary" onClick={(e) => {
                                      e.preventDefault();
                                      this.deleteAccommodationFromItinerary(accommodation);
                                     }}>
                                      Remove {accommodation.name} from Itinerary
                                  </Button>
                               </CardActions>
                            </Card>
                            {/* <AccordionDetails>
                              <Typography variant="h5">
                                {accommodation.name}
                              </Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                              <Typography>
                                <b>Address: </b>
                                {accommodation.address}
                              </Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                              <Typography>
                                <b>Zip Code: </b>
                                {accommodation.postalCode}
                              </Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                              <Typography>
                                <b>Price: </b>${accommodation.amount}
                              </Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                              <Typography>
                                <b>Rating: </b>{accommodation.ratings}
                              </Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                              <Typography>
                                <b>Check in: </b>{moment(accommodation.checkIn).format("YYYY-MM-DD")}
                              </Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                              <Typography>
                                <b>Check Out: </b>{moment(accommodation.checkOut).format("YYYY-MM-DD")}
                              </Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                              <Typography>
                                <b>Phone Number: </b>{accommodation.contact}
                              </Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                              <Typography>
                                <b>Chain: </b>
                                {accommodation.chainCode}
                              </Typography>
                            </AccordionDetails> */}
                            {/* <Button variant="contained" color="secondary" onClick={(e) => {
                              e.preventDefault();
                              this.deleteAccommodationFromItinerary(accommodation);
                            }}>
                              Remove {accommodation.name} from Itinerary
                            </Button> */}
                          </div>
                        ))}
                      </div>
                    )}
              </div>
                {/*Map*/}
                <Divider style = {{height: '2px', backgroundColor:"#01579b"}}/>
                {this.state.displayChat === true ? <ChatApp chats={ itinerary.users} topic={itinerary.name}/> : null}
                
                {/*Actions*/}
                <Divider style = {{height: '2px', backgroundColor:"#01579b"}}/>
                <AccordionActions style = {{backgroundColor:'#e0e0e0'}}>
                  <Button
                    size="large"
                    color="primary"
                    onClick={(e) => {
                      e.preventDefault();
                      this.handleOpen(itinerary.name);
                    }}
                    startIcon={<ShareIcon/>}
                  >
                    Share
                  </Button>
                  <Button
                    size="large"
                    color="primary"
                    onClick={(e) => {
                      e.preventDefault();
                      this.handleCheckoutOpen(itinerary);
                    }}
                    startIcon={<BookIcon/>}
                  >
                    Book
                  </Button>
                  <Button size="large" color="primary"  onClick={(e) => {
                      e.preventDefault();
                      this.displayMap(itinerary);
                    }} startIcon={<MapIcon/>}>
                    {this.state.showmap ? "Hide Map" : "Show Map"}
                  </Button>
                  <Button size="large" color="primary" onClick={this.displayChat} startIcon={<ChatIcon/>}>
                    {this.state.displayChat ? "Hide Chat" : "Show Chat"}
                  </Button>
                </AccordionActions>
              </Accordion>
              <br />
            </div>
          ))}
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            className={classes.modal}
          >
            <DialogTitle
              style={{ backgroundColor: indigo[700] }}
              id="simple-dialog-title"
            >
              Share with other traveler
            </DialogTitle>
            <DialogContent>
              <div style={{ display: "flex" }}>
                <Typography>UserName:</Typography>
                <AsyncTypeahead
                  id="source"
                  labelKey="name"
                  minLength={2}
                  onChange={(selected) => this.setState({ user: selected })}
                  onSearch={this.handleUserSearch}
                  options={this.state.options}
                  placeholder="Search user.."
                />
              </div>
              <DialogActions>
                {this.state.user === "" ? (
                  <Button size="small" color="primary" disabled>
                    Share
                  </Button>
                ) : (
                  <Button size="small" color="primary" onClick={this.share}>
                    Share
                  </Button>
                )}
              </DialogActions>
            </DialogContent>
          </Dialog>
          {/* {console.log("sharedwithuser ", this.state.sharedWithUser)}
          {console.log(
            "window.sessionStorage.getItem('shared') ",
            window.localStorage.getItem("shared")
          )}
          {this.state.sharedWithUser === true ||
          window.sessionStorage.getItem("shared") === "true" ? (
            <div>
              <Button
                variant="contained"
                color="primary"
                startIcon={<ChatIcon />}
                onClick={this.displayChat}
              >
                Chat
              </Button>
            </div>
          ) : null}
          {console.log("this.state.displayChat ", this.state.displayChat)}
          {this.state.displayChat === true ? <ChatApp /> : null} */}

          {/*Add Itinerary Popup*/}
          <Dialog open={this.state.addItineraryOpen} onClose={() => this.handleAddItineraryClose(false)} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add Itinerary</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To add an itinerary, please enter the name of the itinerary and the start/end dates below.
              </DialogContentText>
              <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Itinerary Name"
                  type="text"
                  fullWidth
                  required={true}
                  onChange={(event) => {
                    this.setState({
                      addItineraryName: event.target.value
                    })
                  }}
              />
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
                    label="Start Date"
                    value={this.state.startDate}
                    onChange={(date) => {
                      this.setState({startDate: date});
                      if(date >= this.state.endDate) {
                        this.setState({
                          endDate: date
                        });
                      }
                    }}
                />
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
                      label="End Date"
                      value={this.state.endDate}
                      onChange={(date) => {
                        this.setState({endDate: date});
                        if(date <= this.state.startDate) {
                          this.setState({
                            startDate: date
                          });
                        }
                      }}

                  />
                </MuiPickersUtilsProvider>
              </MuiPickersUtilsProvider>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => this.handleAddItineraryClose(false)} color="primary">
                Cancel
              </Button>
              <Button onClick={() => this.handleAddItineraryClose(true, this.state.addItineraryName, this.state.startDate, this.state.endDate)} color="primary">
                Add
              </Button>
            </DialogActions>
          </Dialog>
        {/*Checkout Popup*/}
          <Dialog open={this.state.checkoutOpen} onClose={() => this.handleCheckoutClose(false)} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Checkout</DialogTitle>
            <DialogContent>
              <div>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                  <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={this.state.currency}
                      onChange={(event) => this.handleCurrencyChange(event)}
                  >
                    <MenuItem value={"USD"}>USD</MenuItem>
                    <MenuItem value={"EUR"}>Euro</MenuItem>
                    <MenuItem value={"GBP"}>Pound Sterling</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <DialogContentText>
                Confirm the details below to pay and book your itinerary.
              </DialogContentText>
              {/*Credit Card Number*/}
              <InputMask
                  mask="9999 9999 9999 9999"
                  value={this.state.creditCardNumber}
                  disabled={false}
                  maskChar={null}
                  onChange={(event) => {
                    this.setState({
                      creditCardNumber: event.target.value
                    })
                  }}
              >
                {() => <TextField label="Credit Card Number" fullWidth autoFocus/>}
              </InputMask>
              {/*Expiration Date*/}
              <InputMask
                  mask="99/99"
                  value={this.state.creditCardExpirationDate}
                  disabled={false}
                  maskChar={null}
                  onChange={(event) => {
                    this.setState({
                      creditCardExpirationDate: event.target.value
                    })
                  }}
              >
                {() => <TextField label="MM/YY" fullWidth/>}
              </InputMask>
              {/*CCV*/}
              <InputMask
                  mask="999"
                  minLength={3}
                  value={this.state.creditCardCCV}
                  disabled={false}
                  maskChar={null}
                  onChange={(event) => {
                    this.setState({
                      creditCardCCV: event.target.value
                    })
                  }}
              >
                {() => <TextField label="CCV" fullWidth/>}
              </InputMask>
              {/*
              // *name: itineraryData.itinerary.name,
              // *startDate: itineraryData.itinerary.startDate,
              // *endDate: itineraryData.itinerary.endDate,
              // *createdDate: itineraryData.itinerary.createdDate,
              // *createdBy: itineraryData.itinerary.createdBy,
              // *flights: itineraryData.flights,
              // accommodations: itineraryData.accommodations,
              // *plans: itineraryData.itinerary.plans,
              // *places: itineraryData.itinerary.places,
              // *users: itineraryData.users
              */}
              {/*Flights*/}
              <Typography><b>Flights</b></Typography>
              {this.state.checkoutItinerary.flights.length === 0 ?
                  "None"
                  :
                  this.state.checkoutItinerary.flights.map((flight) => (
                  <div>
                    <Typography>
                      {this.state.currencySymbol}{(flight.price * this.state.exchangeRate).toFixed(2)} - {flight.airline}
                    </Typography>
                  </div>
              ))}
              {/*Accommodations*/}
              <Typography><b>Accommodations</b></Typography>
              {this.state.checkoutItinerary.accommodations.length === 0 ?
                  "None"
                  :
                  this.state.checkoutItinerary.accommodations.map((accommodation) => (
                      <div>
                        <Typography>
                          {this.state.currencySymbol}{(accommodation.amount * this.state.exchangeRate).toFixed(2)} - {accommodation.name}
                        </Typography>
                      </div>
                  ))}
                  <Divider/>
              {/*Total*/}
              <Typography><b>Total: </b>{this.state.currencySymbol}{(this.state.checkoutItinerary.totalCost * this.state.exchangeRate).toFixed(2)}</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => this.handleCheckoutClose(false)} color="primary">
                Cancel
              </Button>
              <Button disabled={(this.state.checkoutItinerary.flights.length === 0 && this.state.checkoutItinerary.accommodations.length === 0)} onClick={() => this.handleCheckoutClose(true)} color="primary">
                Pay and Book
              </Button>
            </DialogActions>
          </Dialog>
           {/* {Map popup} */}
           <Dialog
              open={this.state.showmap}
              onClose={this.handleCloseMap} 
              maxWidth = 'lg'
              fullScreen 
            >
              <Toolbar>
                <IconButton edge="start" color="primary" onClick={this.handleCloseMap} aria-label="close">
                  <CloseIcon fontSize='large' color ='primary' />
                </IconButton>
                <Typography variant="h4" color ='primary' className={classes.title}>
                    Places
                </Typography>
              </Toolbar>
              <GobikeMap places={this.state.selectedItinerary.places} /> 
          </Dialog>
        </div>
      );
    }
  }
}

export default NewItinerary;
