import React from "react";
// material-ui components
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// core components
import Button from "../../assets/components/CustomButtons/Button.js";
import CardBody from "../../assets/components/Card/CardBody.js";
import CardHeader from "../../assets/components/Card/CardHeader.js";
import CustomInput from "../../assets/components/CustomInput/CustomInput.js";
import CardFooter from "../../assets/components/Card/CardFooter";
import { Link,withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import { makeStyles } from "@material-ui/core/styles";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { Alert, AlertTitle } from '@material-ui/lab';


class OTPVerifyform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userOTP: "",
      cardAnimaton: "cardHidden",
      isValidOTP:"",
      hasError:false,
      isErr:false,
    };
    this.handleOTPChange = this.handleOTPChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOTPChange = (event) => {
    this.setState({ userOTP: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.userOTP === ""){
      return this.setState({isErr2 : true})
    }
    var targetUrl = "http://localhost:8080/traveller/verifyotp";
    const requestOptions = {
      method: "POST",
      credentials: 'include',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userOTP: this.state.userOTP,
      }),
    };
    fetch(targetUrl, requestOptions).then(response => response.json())
      .then(data => {
        // check for error response
        this.setState({isErr2:false});
        console.log(data)
        console.log("dsfasd" + data.isValidOTP);
        if (data.isValidOTP === true) {
          this.state.isValidOTP = "True";
          console.log("h1" + this.state.isValidOTP);
          console.log("h2" + window.sessionStorage.getItem("isRequestComingFromForgotPassword"))
          if (this.state.isValidOTP == "True" && window.sessionStorage.getItem("isRequestComingFromForgotPassword") == "True") {
            console.log("redirecting to password reset page.....");
            console.log(window.sessionStorage.getItem("isRequestComingFromForgotPassword"))
            window.sessionStorage.setItem("isRequestComingFromForgotPassword", "False");
            this.props.history.push("/traveller/resetpassword");
            // <Redirect to={'/traveller/success'} />
          }
          else{
          this.props.history.push("/traveller/success");
          }
          // get error message from body or default to response statusText
        }
        else{
          this.setState({ hasError: true });
        }

        // this.setState({ totalReactPackages: data.total })
      })
      .catch((error) => {
        // this.setState({ errorMessage: error.toString() });
        console.error("There was an error!", error);
      });
  };

  myStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    root: {
      flexGrow: 2,
    },
    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
  }));

  classes = this.myStyles;

  myalert = (props) => {
    this.setState({hasError:false});
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        <strong>Entered OTP is incorrect!</strong>
      </Alert>
    );
  };

  myalert2 = (props) => {
    // this.setState({isErr2:false});
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        <strong>Entered OTP is blank!</strong>
      </Alert>
    );
  };

  render() {
    return (

      <div>
      <div className={this.classes.root}>
          <AppBar position="static" style={{ backgroundColor: "indigo" }}>
            <Toolbar>
              <Typography
                className={this.classes.title}
                variant="h6"
                noWrap
                style={{ fontSize: "24px",marginLeft:"300PX" }}
              >
                GoBike
                <DirectionsBikeIcon className={this.classes.logo} />
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      <Container
        component="main"
        maxWidth="xs"
        style={{ alignItems: "center", marginTop: "150px" }}
      >
        <CssBaseline />
        

        <div className={this.classes.paper} style={{ marginTop: "100px" }}>
          <Avatar
            className={this.classes.avatar}
            style={{ alignItems: "center", textAlign:"center",  marginLeft:"180px", backgroundColor:"indigo"}}
          >
            <VpnKeyIcon style={{ alignItems: "center", textAlign:"center" }} />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            style={{ alignItems: "center", textAlign:"center", marginTop:"10px" }}
          >
            OTP Verification
          </Typography>
          <Typography
            component="h6"
            // variant="h6"
            style={{ alignItems: "center", textAlign:"center", marginTop:"10px" }}
          >
           Please enter your one time password sent to your registered email id
          </Typography>
          <form className={this.classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} >
              {this.state.isErr2 === true ? this.myalert2():null}
              {this.state.hasError === true ? this.myalert() : null} 
              {console.log("hereeeeee" + this.state.isInputNull)}
              
                <TextField
                  autoComplete="userOTP"
                  name="userOTP"
                  variant="outlined"
                  required
                  fullWidth
                  id="userOTP"
                  label="One time password"
                  autoFocus
                  style={{width:"100%",marginTop:"20px"}}
                  inputProps={{
                            type: "userOTP",
                            onChange: this.handleOTPChange,
                          }}
                  // style={{ paddingLeft:"200px", paddingTop:"50px"}}
                />
              </Grid>
            </Grid>
            <Link to={"/traveller/otpverify"}>
              <Button
                type="submit"
                fullWidth
                // variant="contained"
                color="primary"
                className={this.classes.submit}
                onClick={this.handleSubmit}
                style={{marginTop:"20px",backgroundColor:"indigo"}}
                disableFocusRipple="true"
                
                
              >
                Confirm OTP
              </Button>
            </Link>
          </form>
        </div>
      </Container>
      </div>


















      // <form>
      //   <CardHeader color="primary">
      //     <h4>Check your Email for your Verification Code</h4>
      //   </CardHeader>
      //   <CardBody>
      //     <div
      //       style={{
      //         display: "flex",
      //         justifyContent: "center",
      //         alignItems: "center",
      //         marginBottom: 10,
      //       }}
      //     >
      //       <p style={{ display: "flex", justifyContent: "center", margin: 0 }}>
      //         Submit the one time password code sent to your email
      //       </p>
      //     </div>
      //     <CustomInput
      //       labelText="One time password"
      //       id="userOTP"
      //       formControlProps={{
      //         fullWidth: true,
      //       }}
      //       inputProps={{
      //         type: "userOTP",
      //         onChange: this.handleOTPChange,
      //         endAdornment: (
      //           <InputAdornment position="end">
      //             <Icon>lock_outline</Icon>
      //           </InputAdornment>
      //         ),
      //         autoComplete: "off",
      //       }}
      //     />
      //   </CardBody>

      //   <CardFooter
      //     style={{ display: "flex", justifyContent: "center", margin: 0 }}
      //   >
      //     <Button color="primary" size="lg" onClick={this.handleSubmit}>
      //       Authenticate Account
      //     </Button>
      //   </CardFooter>
      // </form>
    );
  }
}

export default withRouter(OTPVerifyform);
