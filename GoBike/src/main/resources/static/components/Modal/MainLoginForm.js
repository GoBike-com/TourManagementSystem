import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import image from "../../assets/img/Image3.jpg";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import classNames from "classnames";
import ReCAPTCHA from "react-google-recaptcha";
import { withStyles } from '@material-ui/core/styles';




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
      email: "",
      password: "",
      successful: "",
      showPassword: false,
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  //   handleSubmit = () => {
  //     this.fireAndGetResponseInJSON();
  //   };



  websitename = "Get Set GoBike";

  render() {
    const { classes } = this.props;
    return (
    <div>

      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
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
              {/* <ReCAPTCHA onChange={this.onChange} /> */}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/traveller/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
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

export default withStyles(styles, { withTheme: true })(MainLoginForm);
