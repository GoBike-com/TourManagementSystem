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
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
  TimePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Autocomplete from "@material-ui/lab/Autocomplete";
import moment from "moment";

class Travel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: "",
      // SelectedDate: "",
      // depatureDate:"",
      searchResult: "",
      onewayflag: "",
      departurecity: "",
      arrivalcity: "",
      countoftravellers: "",
      travellerclass: "",
    };
    // this.handleEmailIDChange = this.handleEmailIDChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDateChange1 = this.handleDateChange1.bind(this);
    this.handleChangeMode = this.handleChangeMode.bind(this);
    this.handleResetMode = this.handleResetMode.bind(this);
    this.handleChangeLeavingFrom = this.handleChangeLeavingFrom.bind(this);
    this.handleChangeArrivalAt = this.handleChangeArrivalAt.bind(this);
    this.handleCountoftravellers = this.handleCountoftravellers.bind(this);
    this.handletravellerclass = this.handletravellerclass.bind(this);
    // this.handleChangeLeavingFrom2 = this.handleChangeLeavingFrom2.bind(this);
    // this.handleChangeLeavingFrom1 = this.handleChangeLeavingFrom1.bind(this);
  }

  countoftravellers = ["1", "2", "3", "4"];

  travellerclass = ["Economy", "Premium Economy", "Business", "First"];

  cities = ["Chicago", "Bloomington"];

  useStyles = makeStyles((theme) => ({
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

  handleCountoftravellers = (event,value) => {
    event.preventDefault();
    console.log(value);
    this.setState({ countoftravellers: value });
  }

  handletravellerclass = (event,value) => {
    event.preventDefault();
    console.log(value);
    this.setState({ travellerclass: value });
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

  handleSearch = (event) => {
    event.preventDefault();
    this.state.searchResult = true;

    console.log("departure date " + this.state.depatureDate);
    console.log("arrival date " + this.state.selectedDate);
    console.log("arrival city " + this.state.arrivalcity);
    console.log("departure city " + this.state.departurecity);
    console.log("no of travellers " + this.state.countoftravellers);
    console.log("traveller class " + this.state.travellerclass);

    var targetUrl = "https:// URL name ";
    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        departurecity: this.state.departurecity,
        arrivalcity: this.state.arrivalcity,
        depaturedate:this.state.depatureDate,
        arrivaldate: this.state.arrivaldDate,
        countoftravellers: this.state.countoftravellers,
        travellerclass: this.state.travellerclass,
      }),
    };
    fetch(targetUrl, requestOptions)
      .then((response) => {
        // check for error response
        if (response.status == "200") {
          this.state.isRegistered = "True";
          if (this.state.isRegistered == "True") {
            console.log("redirecting to home page.....");
            // this.props.history.push("/traveller/success");
            return this.setState({isRegistered : true})
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

  handleChangeMode = (event) => {
    event.preventDefault();
    this.setState({ onewayflag: true });
  };

  handleResetMode = (event) => {
    event.preventDefault();
    this.setState({ onewayflag: false });
  };

  render() {
    return (
      <Grid>
        {/* {console.log(this.state.depatureDate)}
        {console.log(this.state.selectedDate)} */}
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
            <h1 style={{ marginLeft: "20px" }}>Search your travel route</h1>
            <div style={{ marginLeft: "20px" }}>
              <Button
                style={{ backgroundColor: "indigo", color: "white" }}
                onClick={this.handleResetMode}
              >
                Roundtrip
              </Button>
              <Button
                style={{ backgroundColor: "indigo", color: "white" }}
                onClick={this.handleChangeMode}
              >
                one-way
              </Button>
            </div>
            <Card
              raised="true"
              style={{ width: "85%", marginLeft: "100px", marginTop: "40px" }}
            >
              <div style={{ backgroundColor: "lightyellow" }}>
                {/* // style={{ backgroundColor: "lightyellow" }}> */}
                <div style={{ display: "inline-block" }}>
                  <LocationOnIcon />
                  <Autocomplete
                    id="combo-box-demo"
                    options={this.cities}
                    // getOptionLabel={(option) => option.city}
                    style={{ backgroundColor: "lightyellow" }}
                    // style={{ width: "600", marginTop: "5px",marginLeft:"5px" }}
                    // autoSelect
                    value={this.state.departurecity}
                    onInputChange={this.handleChangeLeavingFrom}
                    // onChange={this.handleChangeLeavingFrom}
                    onChange={this.handleChangeLeavingFrom}
                    // value={this.state.departurecity}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        style={{
                          width: "500px",
                          marginTop: "5px",
                          marginLeft: "20px",
                          backgroundColor: "lightyellow",
                        }}
                        id="start"
                        // select
                        label="Leaving from"
                        // value={this.state.departurecity}
                        // onChange={(val) => this.handleChangeLeavingFrom(val)}
                        variant="outlined"
                        color="primary"
                        // size="medium"
                      />
                    )}
                  />
                </div>

                <div style={{ display: "inline-block" }}>
                  <LocationOnIcon />
                  <Autocomplete
                    id="combo-box-demo2"
                    options={this.cities}
                    // getOptionLabel={(option) => option.city}
                    style={{ width: "15%", display: "inline-block" }}
                    autoSelect
                    value={this.state.arrivalcity}
                    onInputChange={this.handleChangeArrivalAt}
                    onChange={this.handleChangeArrivalAt}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        id="start"
                        style={{
                          width: "500px",
                          marginTop: "5px",
                          marginLeft: "5px",
                        }}
                        // select
                        label="Going to"
                        // value={value}
                        // onChange={this.handleChange}
                        variant="outlined"
                        color="primary"
                        size="medium"
                      />
                    )}
                  />
                </div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    style={{
                      marginLeft: "15px",
                      height: "20px",
                      width: "20%",
                      marginTop: "45px",
                    }}
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
                {this.state.onewayflag === true ? null : (
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      style={{
                        marginLeft: "15px",
                        marginTop: "45px",
                        height: "20px",
                        width: "20%",
                      }}
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
                <div style={{ display: "inline-block" }}>
                  <Autocomplete
                    id="combo-box-demo3"
                    options={this.countoftravellers}
                    // getOptionLabel={(option) => option.value}
                    // style={{ width: "15%", display: "inline-block" }}
                    autoSelect
                    value={this.state.countoftravellers}
                    onChange={this.handleCountoftravellers}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        id="start"
                        style={{
                          width: "200px",
                          // marginTop: "5px",
                          marginLeft: "10px",
                          marginBottom: "10px",
                        }}
                        // select
                        label="No. of passengers"
                        // value={value}
                        // onChange={this.handleChange}
                        variant="outlined"
                        color="primary"
                        size="medium"
                      />
                    )}
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
                        style={{
                          width: "200px",
                          // marginTop: "5px",
                          marginLeft: "10px",
                          marginBottom: "10px",
                        }}
                        // select
                        label="Preferred class"
                        // value={value}
                        onChange={this.handleChange}
                        variant="outlined"
                        color="primary"
                        size="medium"
                      />
                    )}
                  />
                </div>
                <Button
                  style={{
                    backgroundColor: "indigo",
                    width: "15%",
                    marginTop: "35px",
                    marginLeft: "15px",
                    height: "55px",
                    fontSize: "18px",
                    fontFamily: "Arial",
                    color: "white",
                  }}
                  onClick={this.handleSearch}
                >
                  Search
                </Button>
              </div>
            </Card>
            <div>
              <Card
                className={this.classes.root1}
                raised="true"
                style={{ width: "80%", marginLeft: "140px", marginTop: "40px" }}
              >
                <CardContent>
                  <Typography
                    className={this.classes.title1}
                    color="textSecondary"
                    gutterBottom
                  >
                    <button
                      style={{ backgroundColor: "darkgreen", color: "white" }}
                    >
                      No change fees
                    </button>
                    <div
                      style={{
                        float: "right",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      $49
                    </div>
                  </Typography>
                  <Typography className={this.classes.pos} color="primary">
                    9:00am - 4:47pm
                  </Typography>
                  <Typography>
                    <div style={{ float: "right" }}>
                      6h 47m (1 stop) 1h 58m in Tampa (TPA)
                    </div>
                  </Typography>
                  <Typography variant="body2" component="p">
                    Chicago to Indianapolis
                    <br />
                    Spirit Airlines • Wed, Nov 4
                  </Typography>
                  <Typography component="p" variant="body2">
                    3 cleaning and safety practices
                  </Typography>
                  <CardActions
                    style={{ float: "right", paddingBottom: "20px" }}
                  >
                    <Button
                      size="small"
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        width: "30",
                      }}
                    >
                      Add to Itinerary
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>

              <Card
                className={this.classes.root1}
                raised="true"
                style={{ width: "80%", marginLeft: "140px", marginTop: "40px" }}
              >
                <CardContent>
                  <Typography
                    className={this.classes.title1}
                    color="textSecondary"
                    gutterBottom
                  >
                    <button
                      style={{ backgroundColor: "darkgreen", color: "white" }}
                    >
                      No change fees
                    </button>
                    <div
                      style={{
                        float: "right",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      $49
                    </div>
                  </Typography>
                  <Typography className={this.classes.pos} color="primary">
                    9:00am - 4:47pm
                  </Typography>
                  <Typography>
                    <div style={{ float: "right" }}>
                      6h 47m (1 stop) 1h 58m in Tampa (TPA)
                    </div>
                  </Typography>
                  <Typography variant="body2" component="p">
                    Chicago to Indianapolis
                    <br />
                    Spirit Airlines • Wed, Nov 4
                  </Typography>
                  <Typography component="p" variant="body2">
                    3 cleaning and safety practices
                  </Typography>
                  <CardActions
                    style={{ float: "right", paddingBottom: "20px" }}
                  >
                    <Button
                      size="small"
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        width: "30",
                      }}
                    >
                      Add to Itinerary
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
              <Card
                className={this.classes.root1}
                raised="true"
                style={{ width: "80%", marginLeft: "140px", marginTop: "40px" }}
              >
                <CardContent>
                  <Typography
                    className={this.classes.title1}
                    color="textSecondary"
                    gutterBottom
                  >
                    <button
                      style={{ backgroundColor: "darkgreen", color: "white" }}
                    >
                      No change fees
                    </button>
                    <div
                      style={{
                        float: "right",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      $49
                    </div>
                  </Typography>
                  <Typography className={this.classes.pos} color="primary">
                    9:00am - 4:47pm
                  </Typography>
                  <Typography>
                    <div style={{ float: "right" }}>
                      6h 47m (1 stop) 1h 58m in Tampa (TPA)
                    </div>
                  </Typography>
                  <Typography variant="body2" component="p">
                    Chicago to Indianapolis
                    <br />
                    Spirit Airlines • Wed, Nov 4
                  </Typography>
                  <Typography component="p" variant="body2">
                    3 cleaning and safety practices
                  </Typography>
                  <CardActions
                    style={{ float: "right", paddingBottom: "20px" }}
                  >
                    <Button
                      size="small"
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        width: "30",
                      }}
                    >
                      Add to Itinerary
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </div>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(Travel);
