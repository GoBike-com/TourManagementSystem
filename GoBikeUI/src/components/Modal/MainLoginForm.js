import React, { PropTypes } from "react";
import Button from "@material-ui/core/Button";
import { Link, withRouter, BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
import image from "../../assets/img/Image3.jpg";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import { withStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import firebase from "../Utility/firebase";
import FormDialog from "./FormDialog";
import FacebookLogin from "react-facebook-login";
import { Alert, AlertTitle } from "@material-ui/lab";
import { config } from '../Constants'

const CLIENT_ID = "194e95dcd20fa2f8e523";
const REDIRECT_URI = "http://localhost:3000/traveller/success";

const styles = (theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(" + image + ")",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
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
});

class MainLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      successful: "",
      cardAnimaton: "cardHidden",
      jsonResponse: "",
      captchavalue: null,
      showPassword: false,
      token: null,
      open: false,
      phoneNumber: "",
      isLoggedIn: "false",
      isUserAvailable: false,
      hasErr: false,
    };
    let currentURLPath = window.location.pathname;

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.getPhoneNumberFromUserInput = this.getPhoneNumberFromUserInput.bind(
      this
    );
    this.responseFacebook = this.responseFacebook.bind(this);
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  getPhoneNumberFromUserInput = (event) => {
    this.setState({ phoneNumber: event.target.value });
  };

  myalert = (props) => {
    if(this.state.hasErr === true){
      return(
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          <strong>{props}!</strong>
        </Alert>
      );
    }
    
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        <strong>Invalid Credentials</strong>
      </Alert>
    );
  };


  handleSubmit = () => {
    console.log("handleSubmit");

    if(this.state.username === "" || this.state.password ===""){
      return this.setState({ hasErr : true })
    }

    if(this.state.username !== "" && this.state.password !== "" ){
    var targetUrl = config.API_URL + "/user/login";

    // var targetUrl = config.API_URL + "/user/register?password="+this.state.password;
    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: {'Content-Type': 'application/json', Accept: 'application/json'},
      body: JSON.stringify({
        
        userName: this.state.username,
        password:this.state.password,
      }),
    };

    fetch(targetUrl, requestOptions)
      .then(data => {
        console.log(data.ok);
        // check for error response
        // if (response.status == "200") {
          
        //   this.state.isRegistered = "True";
          if (data.ok === true) {
            this.setState({isRegistered : true})
            console.log("redirecting to home page.....");
            this.props.history.push({pathname : '/traveller/success',state:{
              username:this.state.username
            }});
            // this.props.history.push("/traveller/success");
          //   return this.setState({isRegistered : true})
          //   // <Redirect to={'/traveller/success'} />
          }
          // get error message from body or default to response statusText
        // } 
        else {
          return this.setState({isRegistered : false})
        
        }
      //   // this.setState({ totalReactPackages: data.total })
      // }})
      // .catch((error) => {
      //   // this.setState({ errorMessage: error.toString() });
      //   console.error("There was an error!", error);
      // });
  });
}}

  responseFacebook = (response) => {
    this.setState({ username: response.email });
    this.setState({ password: "" });
    console.log(response);
    this.props.history.push({pathname : '/traveller/success',state:{
      username:this.state.username
    }})

    var firstName = "";
    var lastName = "";
    if (response.name !== null) {
      var name = "";
      name = response.name.split(" ");
      if (name.length === 1) {
        firstName = name[0];
      } else {
        for (let i = 0; i < name.length - 1; i++) {
          firstName = firstName + name[i] + " ";
        }
        firstName = firstName.substring(0, firstName.length - 1);
        lastName = name[name.length - 1];
      }
    }
  };

  handleClickShowPassword = (event) => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "visible",
        callback: function (response) {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log("captcha verified");
          this.onSignInSubmit();
        },
      }
    );
  };

  handleClickOpen = (event) => {
    this.setState({ open: !this.state.open });
  };

  handleClose = (event) => {
    this.setState({ open: !this.state.open });
  };

  // onSignInSubmit = (event) => {
  //   event.preventDefault();
  //   // this.handleClose();
  //   this.setUpRecaptcha();
  //   var pN = "+1-812-650-8064";
  //   console.log(pN);
  //   // setOpen(false);
  //   var appVerifier = window.recaptchaVerifier;

  //   console.log("recaptcha-verfied");
  //   firebase
  //     .auth()
  //     .signInWithPhoneNumber(pN, appVerifier)
  //     .then(function (confirmationResult) {
  //       console.log("helloooooooo");
  //       var code = window.prompt("Enter OTP");
  //       window.confirmationResult = confirmationResult;

  //       confirmationResult
  //         .confirm(code)
  //         .then(function (result) {
  //           // this.handleClose();
  //           console.log("user is signed in");
  //           this.props.history.push({pathname:"/traveller/success", state: {
  //             username: this.state.userName,
  //           }});
  //           // ...

  //           console.log("user is signed in");
  //         })
  //         .catch(function (error) {
  //           // User couldn't sign in (bad verification code?)
  //           // ...
  //         });
  //     })
  //     .catch(function (error) {
  //       // Error; SMS not sent
  //       // ...
  //     });
  // };

  websitename = "Get Set GoBike";

  render() {
    const { classes, history } = this.props;
    return (
      <div>
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <div className={classes.paper}>
              <Typography component="h1" variant="h5">
                <div
                  style={{ textAlign: "center" }}
                  className={classes.maindiv}
                >
                  <span className={classes.websitename}>
                    {this.websitename}
                  </span>
                  <span>
                    <DirectionsBikeIcon className={classes.logo} />
                  </span>
                </div>
              </Typography>
              <form className={classes.form} noValidate>
              {this.state.hasErr === true ? this.myalert("username and password are mandatory") : null}
              {this.state.isVerifiedUser === false ? this.myalert() : null}
              {this.state.isRegistered === false ? this.myalert("entered credentials are not correct"):null}
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Enter your username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  onChange={this.handleUsernameChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.handlePasswordChange}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                {/* <Link to={{pathname:"/traveller/success", state: {
              username: this.state.username,
            }}} > */}
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={this.handleSubmit}
                >
                  Sign In
                </Button>
                {/* </Link> */}
                <Grid container>
                  <Grid item xs>
                  <Link style={{textDecorationLine:"none",textAlign:'left'}} to={"/traveller/forgetpassword"}>
                    Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to={"/traveller/register"} style={{textDecorationLine:"none",textAlign:'right'}}>
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12} xm={8}>
                    <div
                      style={{
                        display: "flex",
                        justifyItems: "center",
                        alignItems: "center",
                        marginLeft: "240px",
                      }}
                    >
                      {" "}
                      Login with
                      <a
                        href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
                      >
                        <GitHubIcon />
                      </a>
                    </div>
                  </Grid>

                  
                  <Grid item xs={12} xm={8}>
                    <div
                      style={{
                        display: "flex",
                        justifyItems: "center",
                        alignItems: "center",
                        marginLeft: "200px",
                      }}
                    >
                      <div>
                        <FacebookLogin
                          appId="337521753991514"
                          size="small"
                          width="30px"
                          autoLoad={false}
                          fields="name,email,picture"
                          callback={this.responseFacebook}
                          buttonStyle={{borderRadius:"6px",marginTop:"6px",width:"180px",height:"45px",fontSize:"13px"}}
                          render={(renderProps) => (
                            <Button
                              justIcon
                              target="_blank"
                              color="primary"
                              onClick={renderProps.onClick}
                            >
                              
                            </Button>
                          )}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} xm={8}>
                    <div
                      style={{
                        display: "flex",
                        justifyItems: "center",
                        alignItems: "center",
                        marginLeft: "200px",
                        marginTop:"10px"
                      }}
                    >
                      <div>
                        <FormDialog />
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRouter(
  withStyles(styles, { withTheme: true })(MainLoginForm)
);
// export default withRouter(MainLoginForm);
