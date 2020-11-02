import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Button from "../../assets/components/CustomButtons/Button.js";
import CardBody from "../../assets/components/Card/CardBody.js";
import CardHeader from "../../assets/components/Card/CardHeader.js";
import CustomInput from "../../assets/components/CustomInput/CustomInput.js";
import CardFooter from "../../assets/components/Card/CardFooter";
// import {Link} from "react-router-dom";
import { Link, withRouter } from "react-router-dom";
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
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { Alert, AlertTitle } from "@material-ui/lab";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { config } from '../Constants';
class NewPasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: "",
      confirmPassword: "",
      cardAnimaton: "cardHidden",
      isPasswordUpdated: "",
      hasError: "",
      isBlank: false,
      isNotMatched: false,
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(
      this
    );
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePasswordChange = (event) => {
    this.setState({ newPassword: event.target.value });
  };

  handleConfirmPasswordChange = (event) => {
    this.setState({ confirmPassword: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.newPassword === "" || this.state.confirmPassword === "") {
      return this.setState({ isBlank: true });
    }
    if (this.state.newPassword !== this.state.confirmPassword) {
      this.state.isBlank = false;
      return this.setState({ isNotMatched: true });
    }
    var targetUrl = config.API_URL + "/user/password";
    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: { 
        "Content-Type": "application/json",
        "password" :this.state.newPassword
     },
      body: JSON.stringify({
        password: this.state.newPassword,
      }),
    };
    fetch(targetUrl, requestOptions)
      .then((response) => {
        // check for error response
        if (response.status == "200") {
          return this.setState({ isPasswordUpdated: true });
          // if(this.state.isPasswordUpdated == "True"){
          //     console.log("redirecting to home page.....");
          //     this.props.history.push('/traveller/signin')
          //     // <Redirect to={'/traveller/success'} />
          // }
          // get error message from body or default to response statusText
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
    // this.setState({ isBlank : false })
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        <strong>Please enter new password!</strong>
      </Alert>
    );
  };

  myalert2 = (props) => {
    this.state.isBlank = false;
    // this.setState({ isBlank : false })
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        <strong>Entered password doesn't match!</strong>
      </Alert>
    );
  };

  myDialogue = () => {
    return (
      // alert("hello")
      <Dialog aria-labelledby="customized-dialog-title" open="true">
        <MuiDialogTitle id="customized-dialog-title">
          Password successfully changed
        </MuiDialogTitle>
        <MuiDialogContent dividers>
          <Typography gutterBottom>
            Your password has changed successfully. Please return to login page
            and try login with new password
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

  render() {
    return (
      <div>
        <div className={this.classes.root}>
          {this.state.isPasswordUpdated === true ? this.myDialogue() : null}
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
        <Container
          component="main"
          maxWidth="xs"
          style={{ alignItems: "center", marginTop: "150px" }}
        >
          <CssBaseline />

          <div className={this.classes.paper} style={{ marginTop: "100px" }}>
            <Avatar
              className={this.classes.avatar}
              style={{
                alignItems: "center",
                textAlign: "center",
                marginLeft: "180px",
                backgroundColor: "indigo",
              }}
            >
              <LockOpenIcon
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
              Reset your password
            </Typography>
            <form className={this.classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  {console.log("helllllllllllllo" + this.state.hasError)}
                  {this.state.isBlank === true ? this.myalert() : null}
                  {/* {this.setState({ isBlank : false})} */}
                  {this.state.isNotMatched === true ? this.myalert2() : null}
                  <TextField
                    autoComplete="newpassword"
                    name="newpassword"
                    variant="outlined"
                    required
                    fullWidth
                    id="newpassword"
                    label="Enter new password"
                    autoFocus
                    style={{ width: "100%", marginTop: "20px" }}
                    inputProps={{
                      type: "password",
                      onChange: this.handlePasswordChange,
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon>lock_outline</Icon>
                        </InputAdornment>
                      ),
                    }}
                    // style={{ paddingLeft:"200px", paddingTop:"50px"}}
                  />
                  <TextField
                    autoComplete="confirmPassword"
                    name="confirmPassword"
                    variant="outlined"
                    required
                    fullWidth
                    id="confirmPassword"
                    label="Enter above password"
                    autoFocus
                    style={{ width: "100%", marginTop: "20px" }}
                    inputProps={{
                      type: "password",
                      onChange: this.handleConfirmPasswordChange,
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon>lock_outline</Icon>
                        </InputAdornment>
                      ),
                    }}
                    // style={{ paddingLeft:"200px", paddingTop:"50px"}}
                  />
                </Grid>
              </Grid>
              {/* <Link to={"/traveller/signin"}> */}
              <Button
                type="submit"
                fullWidth
                // variant="contained"
                color="primary"
                // className={this.classes.submit}
                onClick={this.handleSubmit}
                style={{ marginTop: "20px", backgroundColor: "indigo" }}
                disableFocusRipple="true"
              >
                Submit password
              </Button>
              {/* </Link> */}
            </form>
          </div>
        </Container>
      </div>

      // <form>
      //     <CardHeader color="primary">
      //         <h4>Enter New Password</h4>
      //     </CardHeader>
      //     <CardBody>
      //         <CustomInput
      //             labelText="New Password"
      //             id="password"
      //             formControlProps={{
      //                 fullWidth: true
      //             }}
      //             inputProps={{
      //                 type: "password",
      //                 onChange: this.handlePasswordChange,
      //                 endAdornment: (
      //                     <InputAdornment position="end">
      //                         <Icon>
      //                             lock_outline
      //                         </Icon>
      //                     </InputAdornment>
      //                 ),
      //                 autoComplete: "off"
      //             }}
      //         />

      //         <CustomInput
      //             labelText="Confirm Password"
      //             id="confirmPassword"
      //             formControlProps={{
      //                 fullWidth: true
      //             }}
      //             inputProps={{
      //                 type: "password",
      //                 onChange: this.handleConfirmPasswordChange,
      //                 endAdornment: (
      //                     <InputAdornment position="end">
      //                         <Icon>
      //                             lock_outline
      //                         </Icon>
      //                     </InputAdornment>
      //                 ),
      //                 autoComplete: "off"
      //             }}
      //         />
      //     </CardBody>

      //     {this.state.newPassword === this.state.confirmPassword ? (
      //         <CardFooter style={{display: 'flex', justifyContent: 'center', margin: 0}}>
      //             <Link to={"/traveller/signin"}>
      //                 <Button color="primary" size="lg" onClick={this.handleSubmit}>
      //                     Submit
      //                 </Button>
      //             </Link>
      //         </CardFooter>
      //         ): (
      //         <CardFooter style={{display: 'flex', justifyContent: 'center', margin: 0}}>
      //             <Button color="primary" size="lg">
      //                 Submit
      //             </Button>
      //         </CardFooter>
      //      )}
      // </form>
    );
  }
}

export default withRouter(NewPasswordForm);
