import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { config } from '../Constants'
import Accomodations from '../Accomodations/Accomondations';
import img1 from "../../assets/img/hotels1.jpg";
import Typography from "@material-ui/core/Typography";



class Accomodation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
        <Grid container>
          <div style={{ width: "100%", height: "200px", overflow: "hidden", backgroundColor:"indigo", margin:"2%" }}>
            <img src={img1} style={{ height:"100%", width:"20%" }} />
            <div style={{color:"white", float:"right", margin:"3%"}}>
            <Typography style={{fontSize:"24px",fontWeight:"16px",fontStretch:"expanded"}}>Hotels, Villas, Apartments and more in GoBike</Typography>
            <Typography style={{fontSize:"18px",fontWeight:"12px",fontStretch:"expanded"}}>Find deals for any season</Typography>
            </div>
            
          </div>
          {/* <Grid item xs={10} > */}
          <Accomodations />
          {/* </Grid> */}
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(Accomodation);
