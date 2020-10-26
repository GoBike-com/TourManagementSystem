import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import { withStyles } from "@material-ui/core/styles";

import { Link, withRouter, Redirect } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import img from "../../assets/img/image16.jpg";
import Avatar from "@material-ui/core/Avatar";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { createMuiTheme } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { config } from '../Constants';
class UserRegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailID: "",
      username: "",
      firstName: "",
      lastName: "",
      password: "",
      isRegistered: "",
      cardAnimaton: "cardHidden",
      hasError: false,
      Userpresent: false,
      firstNamepresent: false,
      lastNamepresent:false,
      passwordpresent:false,
      emailIDPresent:false,
    };

    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmailAddress = this.handleEmailAddress.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleUserName = this.handleUserName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleEmailAddress = (event) => {
    this.setState({ emailID: event.target.value });
  };

  handleFirstName = (event) => {
    this.setState({ firstName: event.target.value });
  };

  handleLastName = (event) => {
    this.setState({ lastName: event.target.value });
  };

  handleUserName = (event) => {
    this.setState({ username: event.target.value });
  };

  myalert = (props) => {
    // this.setState({ isBlank : false })
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        <strong>{props}</strong>
      </Alert>
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();
        if(this.state.username === "" && this.state.lastName === "" && this.state.firstName === "" &&
    this.state.emailID === "" && this.state.password === ""){

      return this.setState({passwordpresent:true,firstNamepresent:true,emailIDPresent:true,lastNamepresent:true,Userpresent:true})
    }

    if (this.state.firstName === "") {
      return this.setState({ firstNamepresent : true });
    }
    this.state.firstNamepresent = false;
    if(this.state.lastName === ""){
      return this.setState({ lastNamepresent : true });
    }
    this.state.lastNamepresent = false;
    if (this.state.emailID === "") {
      return this.setState({ emailIDPresent : true });
    }
    this.state.emailIDPresent = false;
    if(this.state.password === ""){
      return this.setState({ passwordpresent : true });
    }
    this.state.passwordpresent = false;
    if (this.state.username === ""){
      return this.setState({ Userpresent : true });
    }
    this.state.Userpresent = false;


    var targetUrl = config.API_URL + "/user/register?password="+this.state.password;
    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: {'Content-Type': 'application/json', Accept: 'application/json'},
      body: JSON.stringify({
        email: this.state.emailID,
        userName: this.state.username,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
      }),
    };
    fetch(targetUrl, requestOptions)
      .then(response => {
        console.log(response)
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
        } else {
          this.setState({isRegistered : false})
          // return (
          //   <Alert severity="error">
          //     <AlertTitle>Error</AlertTitle>
          //     <strong>Already registered</strong>
          //   </Alert>
          // );
        }
        // this.setState({ totalReactPackages: data.total })
      })
      // .catch((error) => {
      //   // this.setState({ errorMessage: error.toString() });
      //   console.error("There was an error!", error);
      // });
  };

  myDialogue = () => {
    return (
      // alert("hello")
      <Dialog aria-labelledby="customized-dialog-title" open="true">
        <MuiDialogTitle id="customized-dialog-title">
          Welcome GoBikers..!!
        </MuiDialogTitle>
        <MuiDialogContent dividers>
          <Typography gutterBottom>
            You account has successfully created with us. Please return to login page
            and start your journey with us.
          </Typography>
        </MuiDialogContent>
        <MuiDialogActions>
          <Link to={"/traveller/signin"}>
            <Button autoFocus style={{backgroundColor:'indigo',color:'white'}}>
              Return to Login
            </Button>
          </Link>
        </MuiDialogActions>
      </Dialog>
    );
  };

  myclasses = this.theme;

  styles = (theme) => ({
    root: {
      height: "100vh",
    },
    // image: {
    //   backgroundImage: "url(" + image + ")",
    //   backgroundRepeat: "no-repeat",
    //   backgroundColor:
    //     theme.palette.type === "light"
    //       ? theme.palette.grey[50]
    //       : theme.palette.grey[900],
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    // },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    logo: {
      color: "green",
      click: "cursor",
    },
    websitename: {
      color: "indigo",
      fontSize: "30px",
    },
    maindiv: {
      color: "linear-gradient(315deg, #0cbaba 0%, #380036 74%)",
    },
    root: {
      flexGrow: 2,
    },
    primary: {
      color: "black",
    },
  });

  classes = this.styles;

  websitename = "GoBike";

  render() {
    const { classes, history } = this.props;

    return (
      <div>
        {/* <div style={{ backgroundColor: "black", textAlign: "center" }}>
              <span>{this.websitename}</span>
              <span>
                <DirectionsBikeIcon className={classes.logo} />
              </span>
            </div>

            <Typography component="h1" variant="h5" style={{ color: "indigo" }}>
              Sign up
            </Typography> */}

        <CssBaseline />
        {this.state.isRegistered === true ? this.myDialogue() : this.state.isRegistered === false ? alert("Username or email is already registered"):null}
        <div className={this.classes.root}>
          <AppBar position="static" style={{ backgroundColor: "indigo" }}>
            <Toolbar>
              <Typography
                className={this.classes.title}
                variant="h6"
                noWrap
                style={{ fontSize: "24px", marginLeft: "300PX" }}
              >
                GoBike
                <DirectionsBikeIcon className={this.classes.logo} />
              </Typography>
            </Toolbar>
          </AppBar>
        </div>

        {/* <Grid item xs={false} sm={4} md={7} 
         style={{
          backgroundImage: "url(" + img + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          // width:"1200px",
          // marginLeft:"150px",
          // // backgroundColor:"blue",
          // padding: "60px",
        }} /> */}
        <Grid
          container
          direction="column"
          spacing="2px"
          style={{
            backgroundImage: "url(" + img + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            // width:"1200px",
            // marginLeft:"150px",
            backgroundColor: "blue",
            padding: "60px",
          }}
        >
          <Avatar
            className={this.classes.avatar}
            style={{
              alignItems: "center",
              textAlign: "center",
              marginLeft: "700px",
              backgroundColor: "indigo",
            }}
          >
            <AccountBoxIcon
              style={{ alignItems: "center", textAlign: "center" }}
            />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            style={{
              alignItems: "center",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            Register with GoBike
          </Typography>
          <Grid
            item
            xs={12}
            sm={4}
            style={{ marginLeft: "500px", marginTop: "40px" }}
          >
            {this.state.firstNamepresent === true
              ? this.myalert("First name cannot be blank")
              : null}
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              // color="primary"
              inputProps={{
                type: "text",
                onChange: this.handleFirstName,
              }}
              classes={this.myclasses}
              // onChange={this.handleFirstName}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            style={{ marginLeft: "500px", marginTop: "15px" }}
          >
            {this.state.lastNamepresent === true ? this.myalert("Last name cannot be blank") : null}
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lastName"
              inputProps={{
                type: "text",
                onChange: this.handleLastName,
              }}
              // onChange={this.handleLastName}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            style={{ marginLeft: "500px", marginTop: "15px" }}
          >
            {this.state.emailIDPresent === true ? this.myalert("EmailID cannot be blank") : null}
            <TextField
              variant="outlined"
              required
              fullWidth
              id="emailID"
              label="Email Address"
              name="emailID"
              autoComplete="email"
              inputProps={{
                type: "text",
                onChange: this.handleEmailAddress,
              }}
              // onChange={this.handleEmailAddress}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            style={{ marginLeft: "500px", marginTop: "15px" }}
          >
            {this.state.passwordpresent === true ? this.myalert("Password cannot be blank") : null}
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="password"
              inputProps={{
                type: "password",
                onChange: this.handlePassword,
              }}
              // onChange={this.handlePassword}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            style={{ marginLeft: "500px", marginTop: "15px" }}
          >
            {this.state.Userpresent === true ? this.myalert("Username cannot be blank") : null}
            <TextField
              variant="outlined"
              required
              fullWidth
              name="username"
              label="Preferred Username"
              id="username"
              autoComplete="username"
              inputProps={{
                type: "text",
                onChange: this.handleUserName,
              }}
              // onChange={this.handleUserName}
            />
          </Grid>
          {/* <Grid item xs={12} style={{ marginLeft: "500px",marginTop:"15px" }}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid> */}
          <Grid>
            <Link to="/traveller/success">
              <Button
                style={{
                  marginTop: "20px",
                  marginLeft: "500px",
                  marginRight: "500px",
                  backgroundColor: "indigo",
                }}
                variant="contained"
                color="primary"
                // className={classes.submit}
                onClick={this.handleSubmit}
              >
                Sign Up
              </Button>
            </Link>
            <Grid>
              <a
                href="/traveller/signin"
                variant="body2"
                style={{ marginLeft: "500px" }}
              >
                Already have an account? Sign in
              </a>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

// export default withStyles(styles, { withTheme: true })(UserRegistrationForm);

export default withRouter(UserRegistrationForm);
