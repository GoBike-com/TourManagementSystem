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
import GoogleLogin from 'react-google-login';
import image from "../../assets/img/Image3.jpg";
import image1 from "../../assets/img/googlelogo.jpg";
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
    this.login = this.login.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.getPhoneNumberFromUserInput = this.getPhoneNumberFromUserInput.bind(
      this
    );
    this.responseFacebook = this.responseFacebook.bind(this);
    this.loginGitHub = this.loginGitHub.bind(this);
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

  loginGitHub = (res) => {
    console.log(res);
  }

  login = () => {
    console.log("login");

    if(this.state.username === "" || this.state.password ===""){
      return this.setState({ hasErr : true })
    }

    if(this.state.username !== "" && this.state.password !== "" ){
    var signUrl = config.API_URL + "/user/login";
    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: {'Content-Type': 'application/json', Accept: 'application/json'},
      body: JSON.stringify({
        
        userName: this.state.username,
        password:this.state.password,
      }),
    };

    fetch(signUrl, requestOptions)
      .then(data => {
        console.log(data.ok);
          if (data.ok === true) {
            this.setState({isRegistered : true})
            console.log("redirecting to home page.....");
            window.sessionStorage.setItem("username",this.state.username)
            // window.sessionStorage.setItem("itineraries",null)
            this.props.history.push({pathname : '/traveller/success',state:{
              username:this.state.username
            }});
          }
        else {
          return this.setState({isRegistered : false})
        
        }
  });
}}

  responseGoogle = (response) => {
    console.log(response.profileObj.givenName);
    this.setState({isRegistered : true})
            console.log("redirecting to home page.....");
            window.sessionStorage.setItem("username",response.profileObj.givenName)
            // window.sessionStorage.setItem("itineraries",null)
            this.props.history.push({pathname : '/traveller/success',state:{
              username:response.profileObj.givenName
            }});
          }


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

  websitename = "Get Set GoBike";

  render() {
    const { classes, history } = this.props;
    const inStyle = { backgroundColor:"#3f51b5", color:"white",borderRadius:"6px",marginTop:"6px",width:"100%",fontSize:"14px",height:"25%"
  ,fontFamily:"Roboto, Helvetica, Arial, sans-serif"}
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
                  onClick={this.login}
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
                      <GoogleLogin style={{backgroundColor:"lightblue"}}
                      clientId="1033980153229-mr9b8ff7on1u0k38t3on5n0a2qjk4upj.apps.googleusercontent.com"
                      buttonText="Login with Google"
                      onSuccess={this.responseGoogle}
                      onFailure={this.responseGoogle}
                      render={renderProps => (
                        <button onClick={renderProps.onClick} disabled={renderProps.disabled} style={inStyle}>LOGIN WITH GOOGLE</button>
                      )}
                      cookiePolicy={'single_host_origin'}/>
                      <Button
                          fullWidth
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                          onClick={this.loginGitHub}
                          href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
                      >
                        Login with GitHub
                        <GitHubIcon />
                      </Button>
                    <FacebookLogin
                        appId="337521753991514"
                        size="small"
                        width="70px"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={this.responseFacebook}
                        buttonStyle={{borderRadius:"6px",marginTop:"6px",width:"100%",fontSize:"13px"}}
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
