import React from "react";
import moment from "moment";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {
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
  CardMedia,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { config } from "../Constants";
import fetch from "cross-fetch";
import Divider from "@material-ui/core/Divider";
import AccordionActions from "@material-ui/core/AccordionActions";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCommentIcon from "@material-ui/icons/AddComment";
import CancelIcon from "@material-ui/icons/Cancel";
import { indigo } from "@material-ui/core/colors";
import "react-bootstrap-typeahead/css/Typeahead.css";
import DisplayMapClass from "../Dashboard/Map";
import ChatApp from "../Chat/ChatApp";
import ChatIcon from "@material-ui/icons/Chat";
import MomentUtils from "@date-io/moment";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DialogContentText from "@material-ui/core/DialogContentText";

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
    };
    this.addItinerary = this.addItinerary.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAddItineraryOpen = this.handleAddItineraryOpen.bind(this);
    this.handleAddItineraryClose = this.handleAddItineraryClose.bind(this);
    this.handleUserSearch = this.handleUserSearch.bind(this);
    this.toggleShowComment = this.toggleShowComment.bind(this);
    this.handleChat = this.handleChat.bind(this);
  }

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

  displayMap = (event) => {
    event.preventDefault();
    this.setState({
      showmap: !this.state.showmap,
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
    event.preventDefault();
    this.handleAddItineraryOpen();
  };

  useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
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
        border={1}
        m={1}
        borderRadius="borderRadius"
      >
        {this.state.error && (
          <Alert severity="error">Please enter details for adding Plan.</Alert>
        )}
        <div style={{ display: "flex", padding: "1%" }}>
          <TextField
            id="date"
            label="Day"
            type="date"
            color="primary"
            value={this.state.day}
            // InputLabelProps={{
            //   shrink: true,
            // }}
            inputProps={{
              min: moment(itinerary.startDate).format("YYYY-MM-DD"),
              max: moment(itinerary.endDate).format("YYYY-MM-DD")
            }}
            style={{ paddingRight: "2%" }}
            onChange={this.handleDay}
          />
          <TextField
            id="comment"
            label="Enter your plan"
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
        <div>
          <Typography variant="h1" align="center">
            Itineraries
          </Typography>
          <Typography variant="h5" align="center">
            It appears you do not have any itineraries. Please select the create
            an itinerary button to start planning your amazing journey with
            GoBike.
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
        <div>
          <Typography variant="h1" align="center">
            Itineraries
          </Typography>
          <Typography variant="h5" align="center">
            You can manage your itineraries below. GoBike provides a bike upon arrival to your destination for the entire duration of your trip.
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
                >
                  <Typography className={classes.heading} variant="h3">
                    {itinerary.name}
                  </Typography>
                </AccordionSummary>
                <Divider />
                <AccordionDetails>
                  <Typography>
                    Created by {itinerary.createdBy} at {itinerary.createdDate}.
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <b>Start Date: </b>
                    {itinerary.startDate}
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <b>End Date: </b>
                    {itinerary.endDate}
                  </Typography>
                </AccordionDetails>
                {/*Users*/}
                <AccordionDetails>
                  <Typography>
                    <b>Group Members: </b>
                    {console.log("itinerary.users", itinerary.users)}
                    {itinerary.users}
                  </Typography>
                </AccordionDetails>

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
                {/* <AccordionDetails>
                                    {this.commentComponent(itinerary.name)}
                                </AccordionDetails> */}
                <Divider />

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
                      <Typography variant="h4">Places on Trip</Typography>
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
                      </div>
                    ))}
                  </div>
                )}

                {/*Flights*/}
                <Divider />

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
                      <Typography variant="h4">Flights Added</Typography>
                    </AccordionDetails>
                    {itinerary.flights.map((flight) => (
                      <div>
                        <AccordionDetails>
                          <Typography variant="h5">{flight.airline}</Typography>
                        </AccordionDetails>
                        <AccordionDetails>
                          <Typography>
                            <b>Departs</b> from {flight.deptIataCode}, terminal{" "}
                            {flight.deptTerminal}, at {flight.deptTime} and{" "}
                            <b>arrives</b> at {flight.arrivalIataCode} at{" "}
                            {flight.arrivalTime}.
                          </Typography>
                        </AccordionDetails>
                        <AccordionDetails>
                          <Typography>
                            <b>Date: </b>
                            {flight.travelDate}
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
                      </div>
                    ))}
                  </div>
                )}

                {/*
                                *name: itineraryData.itinerary.name,
                                *startDate: itineraryData.itinerary.startDate,
                                *endDate: itineraryData.itinerary.endDate,
                                *createdDate: itineraryData.itinerary.createdDate,
                                *createdBy: itineraryData.itinerary.createdBy,
                                *flights: itineraryData.flights,
                                accommodations: itineraryData.accommodations,
                                *plans: itineraryData.itinerary.plans,
                                *places: itineraryData.itinerary.places,
                                *users: itineraryData.users*/}

                {/*Accommodations*/}
                <Divider />

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
                      <Typography variant="h4">Accommodations</Typography>
                    </AccordionDetails>
                    {itinerary.accommodations.map((accommodation) => (
                      <div>
                        <AccordionDetails>
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
                            <b>Rating: </b>${accommodation.rating}
                          </Typography>
                        </AccordionDetails>
                        <AccordionDetails>
                          <Typography>
                            <b>Chain: </b>
                            {accommodation.chaincode}
                          </Typography>
                        </AccordionDetails>
                      </div>
                    ))}
                  </div>
                )}

                {/*Map*/}
                <Divider />
                {this.state.showmap === true ? <DisplayMapClass /> : null}
                {this.state.displayChat === true ? <ChatApp chats={ itinerary.users} topic={itinerary.name}/> : null}

                {/*Actions*/}
                <Divider />
                <AccordionActions>
                  <Button
                    size="small"
                    onClick={(e) => {
                      e.preventDefault();
                      this.handleOpen(itinerary.name);
                    }}
                  >
                    Share
                  </Button>
                  <Button
                    size="small"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Itinerary has been booked.");
                    }}
                  >
                    Book
                  </Button>
                  <Button size="small" onClick={this.displayMap}>
                    {this.state.showmap ? "Hide Map" : "Show Map"}
                  </Button>
                  <Button size="small" onClick={this.displayChat}>
                    {this.state.displayChat ? "Hide Chat" : "Show Chat"}
                  </Button>
                  <Button size="small" color="primary">
                    Edit
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
        </div>
      );
    }
  }
}

export default NewItinerary;
