import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import Menus from './Menus';
import {config} from "../Constants";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const shareChat = () => {
    const user = window.sessionStorage.getItem("username");
    var targetUrl = config.API_URL + "/userchat/" + user + "/false";
    const requestOptions = {
      method: "POST",
      credentials: "include",
}
fetch(targetUrl, requestOptions)
.then((response) => {
    if (response.status == "200") {
        console.log("success")
    }
})};


const logout = (event) => {
    event.preventDefault();
    shareChat();
    const targetUrl = config.API_URL + "/user/logout";

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
                console.log("redirecting to home page.....");
                sessionStorage.clear();
                window.sessionStorage.clear();
                window.location.href="/"
            }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
};

const login = (event) => {
    event.preventDefault();
    window.location.href="/traveller/signin"
}

const renderHome = (username) => {
    window.location.href=username?"/traveller/success":"/"
}

const displayButtons = (userName) =>{
    return userName? <div><Button color="inherit" onClick={logout}>
                             LOGOUT
                    </Button></div> :
                    <div>
                       {/* <Link to={window.location.origin+"/traveller/signin"}> */}
                            <Button color="inherit" onClick ={login}>
                                LOGIN 
                            </Button> 
                       {/* </Link> */}
                    </div>
}

export default function Header(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        {/*<MenuIcon />*/}
                        <Menus />
                    </IconButton>

                    <Typography
                        className={classes.title}
                        variant="h6"
                        noWrap
                        style={{ fontSize: "24px"}}
                    >
                        GoBike
                        <DirectionsBikeIcon className={classes.logo} />
                        <Typography>Welcome {props.username? props.username:'Guest'}</Typography>
                    </Typography>

                    <Typography variant="h6" className={classes.title}>
                        {props.pageName}
                    </Typography>
                        <Button color="inherit" onClick={e => {
                                                e.preventDefault()
                                                renderHome(props.username)
                                                }}>
                             <HomeIcon />
                        </Button>
                    {displayButtons(props.username)}
                    
                </Toolbar>
            </AppBar>
        </div>
    );
}