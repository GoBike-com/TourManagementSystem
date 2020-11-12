import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Link , withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { config } from '../Constants'


class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isLoggedOut="",
    };
    // this.handleEmailIDChange = this.handleEmailIDChange.bind(this);
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

  render() {

  return (
    <Grid>
       <CssBaseline />
      <Grid container >
        <Grid item xs={10} >
        </Grid>
      </Grid>
    </Grid>
  );
};
}

export default withRouter(Review);
