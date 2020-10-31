import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import Panel from "./Panel";
import { Grid, Paper } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import Button from "../../assets/components/CustomButtons/Button.js";
import CssBaseline from "@material-ui/core/CssBaseline";
import Search from "./SearchComponent";
import ItineraryList from "./ItineraryList";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import someJson from "./someJson.js";
import FlightIcon from "@material-ui/icons/Flight";
import Card from "@material-ui/core/Card";
import image from "../../assets/img/Image3.jpg";
import DisplayMapClass from "../Dashboard/Map";

class Itinerary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: someJson,
      showitinerary:false,
      showmap:false,
    };
    // this.handleEmailIDChange = this.handleEmailIDChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  useStyles = makeStyles((theme) => ({
    root1: {
      width: "50%",
      maxWidth: "300px",
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: "inline",
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

  classes = this.useStyles;

  handleSubmit = (event) => {
    event.preventDefault();
    var targetUrl = "http://localhost:8080/traveller/logout";

    fetch(targetUrl, {
      method: "post",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        // check for error response
        if (response.status == "200") {
          this.state.isLoggedOut = "True";
          if (this.state.isLoggedOut == "True") {
            console.log("redirecting to home page.....");
            this.props.history.push("/traveller/signin");
            // <Redirect to={'/traveller/success'} />
          }
          // get error message from body or default to response statusText
        }

        // this.setState({ totalReactPackages: data.total })
      })
      .catch((error) => {
        // this.setState({ errorMessage: error.toString() });
        console.error("There was an error!", error);
      });
  };

  showItinerary = (event) => {
    event.preventDefault();
    this.setState({showitinerary:true});
  }

  displayMap = (event) => {
    event.preventDefault();
    this.setState({showmap:true})
  }

  render() {
    return (
      <Grid>
        <CssBaseline />
        <div className={this.classes.root}>
          <AppBar position="static" style={{ backgroundColor: "indigo" }}>
            <Toolbar>
              <Typography
                className={this.classes.title}
                variant="h6"
                noWrap
                style={{
                  fontSize: "24px",
                  marginLeft: "275px",
                  paddingRight: "800px",
                }}
              >
                GoBike
                <DirectionsBikeIcon className={this.classes.logo} />
              </Typography>

              <Link to={"/traveller/signin"} style={{ float: "right" }}>
                <Button
                  size="sm"
                  style={{ alignItems: "right", marginRight: "10px" }}
                  onClick={this.handleSubmit}
                >
                  logout
                </Button>
              </Link>
            </Toolbar>
          </AppBar>
        </div>
        <Grid container>
          <Grid item xs={2}>
            <Panel />
          </Grid>
          <Grid item xs={10}>
            {this.state.showitinerary === false ?
            <div>
            <h1
              style={{
                alignItems: "center",
                marginLeft: "50px",
              }}
            >
              Review your trip summary
            </h1>
            <div>
              <Card
                raised="true"
                style={{
                  float: "right",
                  marginTop: "30px",
                  height: "420px",
                  width: "40%",
                  marginRight: "20px",
                }}
              >
                <div style={{ background: "lightblue" }}>
                  <Typography style={{ float: "center" }}>
                    Price Summary
                  </Typography>
                </div>

                <List className={this.classes.root1}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Booking" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Flight + Accomodation + Activities"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={this.classes.inline}
                            color="textPrimary"
                          >
                            Total Booking cost
                          </Typography>
                          <div style={{ float: "right" }}>$548</div>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Dooking" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Discount with GoBike"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={this.classes.inline}
                            color="textPrimary"
                          >
                            Trip Discount
                          </Typography>
                          <div style={{ float: "right" }}>$58</div>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem
                    alignItems="flex-start"
                    style={{ marginTop: "80px" }}
                  >
                    <ListItemAvatar>
                      <Divider variant="inset" component="li" />
                      <Avatar
                        alt="Total Cost"
                        src="/static/images/avatar/1.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Discount with GoBike"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={this.classes.inline}
                            color="textPrimary"
                          >
                            Total Trip Cost
                          </Typography>
                          <div style={{ float: "right" }}>$488</div>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </List>
                <Button fullWidth
                  style={{
                    backgroundColor: "#f2cf07",
                    backgroundImage:
                      "linear-gradient(315deg, #f2cf07 0%, #55d284 74%);",
                      textAlign:"center",
                      color:"black",
                      fontSize:"20px",

                  }}
                  onClick={this.showItinerary}
                >Confirm Booking</Button>
               
              </Card>
            </div>
            <List
              className={this.classes.root1}
              style={{
                alignItems: "center",
                marginTop: "30px",
                marginLeft: "50px",
                marginRight: "600px",
              }}
            >
              {this.state.data1.map((item, key) => (
                <Card style={{ margin: "10px" }}>
                  <div alignItems="flex-start">
                    {item.category === "Flight" ? (
                      <div style={{ background: "lightblue" }}>
                        <FlightIcon />
                        <Typography style={{ float: "right" }}>
                          {item.category} Bookings Summary
                        </Typography>
                      </div>
                    ) : null}
                    <div>
                      <Typography>{item.from}</Typography>
                      <Typography>{item.to}</Typography>
                      <Typography>{item.dateofjourney}</Typography>
                      <Typography>{item.noOfTickets}</Typography>
                      {/* style={{ float: "right" }} */}
                      <Button onClick={this.displayMap} color="primary">Locate your place</Button>
                      {this.state.showmap === true ? <DisplayMapClass /> : null}
                      {/* <img
                          style={{ height: "200px", width: "200px",float:"right" }}
                          src={image}
                          alt="Italian Trulli"
                        /> */}
                      {/* </div> */}
                    </div>
                  </div>
                </Card>
              ))}
            </List></div>
  :null}
            {this.state.showitinerary === true ? 
            <ItineraryList /> : null
            }
            {/* <ItineraryList /> */}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(Itinerary);
