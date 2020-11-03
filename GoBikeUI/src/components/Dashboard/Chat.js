import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import Panel from "./Panel";
import { Grid } from "@material-ui/core";
import { Link , withRouter } from "react-router-dom";
import Button from "../../assets/components/CustomButtons/Button.js";
import CssBaseline from "@material-ui/core/CssBaseline";
import ChatApp from '../Chat/ChatApp';
import Store from '../Chat/Store';
import { config } from '../Constants'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isLoggedOut="",
    };
    // this.handleEmailIDChange = this.handleEmailIDChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  useStyles = makeStyles((theme) => ({
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

  
  componentDidMount() {
    const { history } = this.props;
     window.addEventListener("popstate", () => {
     history.go(1);
   });
   }
   
  handleSubmit = (event) => {
      event.preventDefault();
      var targetUrl = config.API_URL + "/user/logout";
  
      fetch(targetUrl, 
        {
          method:'get',
          credentials: 'include',
          headers: {'Content-Type': 'application/json', Accept: 'application/json'},
      }
      ).then(
       response => {
              // check for error response
              if (response.status == "200") {
                  this.state.isLoggedOut = "True";
                  if(this.state.isLoggedOut == "True"){
                      this.state.isLoggedOut = "False";
                      console.log("redirecting to home page.....");
                      console.log(this.state.isLoggedOut);
                      localStorage.clear();
                      this.props.history.push('/traveller/signin')
                      // <Redirect to={'/traveller/success'} />
                  }
                  // get error message from body or default to response statusText
                  
              }
  
              // this.setState({ totalReactPackages: data.total })
          })
          .catch(error => {
              // this.setState({ errorMessage: error.toString() });
              console.error('There was an error!', error);
          });
    };
  

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
              style={{ fontSize: "24px", marginLeft:"275px", paddingRight:"800px" }}
            >
              GoBike
              <DirectionsBikeIcon className={this.classes.logo} />
            </Typography>
            {/* <div className={this.classes.search}>
              <div className={this.classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: this.classes.inputRoot,
                  input: this.classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                style={{marginLeft:"100px"}}
              />
            </div> */}
            
            <Link to={"/traveller/signin"} style={{float:"right"}}>
              <Button size="sm" style={{alignItems:"right", marginRight:"10px",backgroundColor:"black" }}
              
                onClick= {this.handleSubmit}
              >
                <ExitToAppIcon />
              </Button>
            </Link>
            </Toolbar>

            
        
        </AppBar>
      </div>
      <Grid container >
        <Grid item xs={2}>
          <Panel />
        </Grid>
        <Grid item xs={10} >
          <Store>
            <ChatApp />
          </Store>
        </Grid>
      </Grid>
    </Grid>
  );
};
}

export default withRouter(Chat);
