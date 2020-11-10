import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
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

const handleSubmit = (event) => {
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
                // this.state.isLoggedOut = "True";
                console.log("redirecting to home page.....");
                localStorage.clear();
                window.location.href="/"
            }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
};

export default function Header(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        className={classes.title}
                        variant="h6"
                        noWrap
                        style={{ fontSize: "24px"}}
                    >
                        GoBike
                        <DirectionsBikeIcon className={classes.logo} />
                        <Typography>Welcome {props.username}</Typography>
                    </Typography>

                    <Typography variant="h6" className={classes.title}>
                        {props.pageName}
                    </Typography>
                    <Button color="inherit" onClick={handleSubmit}>
                        <ExitToAppIcon />
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}