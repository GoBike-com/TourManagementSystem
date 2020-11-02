import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import Panel from "./Panel";
import { Grid, Paper } from "@material-ui/core";
import { Link , withRouter } from "react-router-dom";
import Button from "../../assets/components/CustomButtons/Button.js";
import CssBaseline from "@material-ui/core/CssBaseline";
import Search from './SearchComponent';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';   
import NativeSelect from '@material-ui/core/NativeSelect';
import image from "../../assets/img/img17.jpg";
import ItineraryList from "./ItineraryList";



class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isLoggedOut="",
      showitinerary:false,
    };
    // this.handleEmailIDChange = this.handleEmailIDChange.bind(this);
    this.displayItinerary = this.displayItinerary.bind(this);
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

    displayItinerary = (event) => {
    event.preventDefault();
    this.setState({showitinerary:true});
  }

    // showProcessing = () => {
    //     this.setState({showProcessing:"true"})
    // }

    render() {

    return (
        <Grid>
        <CssBaseline />
    {this.state.showitinerary === false ? 
        <div style={{display:"flex"}}>
            <div style={{
                backgroundImage: "url(" + image + ")",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width:"40%",
                marginLeft:"40px"
            }}>

            

            </div>
            
            <div style={{width:"30%",marginLeft:"30px"}}>
                <div style={{marginLeft:"30px"}}>
                <h2 style={{backgroundColor:"black",color:"white", height:"30px"}}>Who's travelling?</h2>
                <InputLabel>First and Last Name</InputLabel>
                <Input
                id="input-with-icon-adornment"
                startAdornment={
                    <InputAdornment position="start">
                    <AccountCircle />
                    </InputAdornment>
                }
                />
                <InputLabel>Phone Number</InputLabel>
                <Input
                id="input-with-icon-adornment"
                startAdornment={
                    <InputAdornment position="start">
                    <AccountCircle />
                    </InputAdornment>
                }
                />
                </div>
            <div style={{marginLeft:"30px"}}>
                    <h2 style={{backgroundColor:"black",color:"white", height:"30px"}}>How would you like to pay?</h2>
                    <div style={{display:"flex"}}>
                        <h3>Debit/Credit Card Number:</h3>
                        <TextField style={{alignItems:"right"}} id="standard-basic" label="" />
                    </div>
                    <div style={{display:"flex"}}>
                        <h3>Card Type:</h3>
                        <FormControl >
                        <NativeSelect style={{float:"right", marginLeft:"100px"}}
                        name="age"
                        // onChange={this.handleChange}
                        inputProps={{ 'aria-label': 'age' }}
                        >
                        <option value={10}>MasterCard</option>
                        <option value={20}>Visa</option>
                        <option value={30}>Voucher</option>
                        </NativeSelect>
                        </FormControl>
                    </div>
                    <div style={{display:"flex"}}>
                        <h3>Expiry date:</h3>
                        <TextField style={{marginLeft:"60px"}} id="standard-basic" label="MM/YY" />
                    </div>
                    <div style={{display:"flex"}}>
                        <h3>CVV Number:</h3>
                        <TextField style={{marginLeft:"60px"}} id="standard-basic" label="XXX" />
                    </div>
            </div>
            <Button style={{alignItems:"center",marginLeft:"110px"}} size="large" color="primary"
            onClick={this.displayItinerary}
            >Confirm your payment</Button>
            </div>
            </div>

            
 : null} 
    {console.log("this.state.showitinerary" + this.state.showitinerary)}
 {this.state.showitinerary === true ? 
            <ItineraryList /> : null
            }
        </Grid> 
    )};
}

export default Payment;
