import React from "react";
import Button from "../../assets/components/CustomButtons/Button.js";
import { Link, withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import { Alert, AlertTitle } from '@material-ui/lab';

class EnterEmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailID: "",
      isVerifiedUser: "",
      hasError: false,
    };
    this.handleEmailIDChange = this.handleEmailIDChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailIDChange = (event) => {
    this.setState({ emailID: event.target.value });
  };

  // myalert = () =>  {
  //   return <div>

  //     <Alert severity="error">"This is an error alert — check it out!"</Alert>
  //   </div>

  //   // console.log("yes")
  //   }

  //   // alert("hello")

  handleSubmit = (event) => {
    event.preventDefault();
    window.sessionStorage.setItem("isRequestComingFromForgotPassword", "True");
    var targetUrl = "http://localhost:8080/traveller/verifyuser";

    fetch(targetUrl, {
      method: "post",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        emailID: this.state.emailID,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // check for error response
        console.log(data);
        if (data.isUserAvailable == true) {
          this.state.isVerifiedUser = "True";
          if (this.state.isVerifiedUser == "True") {
            console.log("redirecting to home page.....");
            this.props.history.push("/traveller/otpverify");
            // <Redirect to={'/traveller/success'} />
          }
        } else {
          this.setState({ hasError: true });
          // return this.myalert()
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
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        <strong>Entered username doesn't registered with us!</strong>
      </Alert>
    );
  };

  render() {
    // const err = {if (this.state.hasError) {
    //   // You can render any custom fallback UI
    //   return <h1>Something went wrong.</h1>;
    // }};
    // if (this.state.hasError){
    //   console.log("helloooooooooooooooooo")
    //   this.myalert()
    // }
    return (
      <div>
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
              <LockOutlinedIcon
                style={{ alignItems: "center", textAlign: "center" }}
              />
            </Avatar>
            ,
            <Typography
              component="h1"
              variant="h5"
              style={{
                alignItems: "center",
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              Forget Password
            </Typography>
            <form className={this.classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                {this.state.hasError === true ? this.myalert() : null}
                  <TextField
                    autoComplete="emailID"
                    name="emailID"
                    variant="outlined"
                    required
                    fullWidth
                    id="emailID"
                    label="Enter your username"
                    autoFocus
                    style={{ width: "100%", marginTop: "20px" }}
                    inputProps={{
                      type: "text",
                      onChange: this.handleEmailIDChange,
                    }}
                    // style={{ paddingLeft:"200px", paddingTop:"50px"}}
                  />
                </Grid>
                {console.log(this.state.hasError)}
                
              </Grid>
              <Link to={"/traveller/otpverify"}>
                <Button
                  type="submit"
                  fullWidth
                  // variant="contained"
                  color="primary"
                  className={this.classes.submit}
                  onClick={this.handleSubmit}
                  style={{ marginTop: "20px", backgroundColor: "indigo" }}
                  disableFocusRipple="true"
                >
                  Verify username
                </Button>
              </Link>
            </form>
          </div>
        </Container>
      </div>

      //       style={{
      //         backgroundColor: "white",
      //         topMargin:"60px",
      //         textAlign: "left",
      //         fontFamily: "Georgia",
      //       }}
      //     >
      //       Forgot Password
      //     </h3>
      //     <h4
      //       style={{
      //         backgroundColor: "white",
      //         topMargin:"60px",
      //         textAlign: "left",
      //         fontFamily: "Georgia",
      //       }}
      //     >
      //       Reset your password
      //     </h4>
      //   </CardHeader>
      //   <CardBody>
      //     <div
      //       style={{
      //         justifyContent: "center",
      //         alignItems: "center",
      //         marginBottom: 10,
      //       }}
      //     >
      //       <p
      //         style={{
      //           justifyContent: "center",
      //           margin: "2px",
      //           color: "red",
      //           fontFamily: "Georgia",
      //         }}
      //       >
      //         Enter your email address below and we will send you an OTP to
      //         your registered email ID.
      //       </p>
      //     </div>
      //     <TextField
      //       variant="outlined"
      //       margin="normal"
      //       required
      //       fullWidth
      //       id="username"
      //       label="Enter your username"
      //       name="username"
      //       autoComplete="username"
      //       autoFocus
      //       inputProps={{
      //           type: "text",
      //           onChange: this.handleEmailIDChange
      //         }}
      //     />
      //   </CardBody>

      //   {/* {this.state.emailID != "" ? ( */}
      //     <CardFooter
      //       style={{ display: "flex", justifyContent: "center", margin: 0 }}
      //     >
      //       <Link to={"/traveller/otpverify"}>
      //         <Button color="primary" size="lg"

      //           onClick= {this.handleSubmit}
      //         >
      //           Confrm OTP
      //         </Button>
      //       </Link>
      //     </CardFooter>
      //   {/* // )
      //   // : (
      //   //   <CardFooter */}
      //   {/* //     style={{ display: "flex", justifyContent: "center", margin: 0 }}
      //   //   >
      //   //     <Button color="primary" size="lg">
      //   //     Confrm OTP
      //   //     </Button>
      //   //   </CardFooter> */}
      //   {/* // )} */}
      // </form>
    );
  }
}

export default withRouter(EnterEmailForm);
