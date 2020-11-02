import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import {Link} from "react-router-dom";
import Button from "../../assets/components/CustomButtons/Button";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import { config } from '../Constants';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 2
        },
        title: {
            flexGrow: 1,
            display: "none",
            [theme.breakpoints.up("sm")]: {
                display: "block",
            },
        },
        logo: {
            color: "green",
            click: "cursor",
        },
    }));
    classes = this.useStyles;

    handleSubmit = (event) => {
        alert("Added to itinerary!")
    };

    render() {
        return (
        <Grid>
            <CssBaseline/>
            <div className={this.classes.root}>
                <AppBar position="static" style={{backgroundColor: "indigo"}}>
                    <Toolbar>
                        <Typography
                            className={this.classes.title} variant="h6" noWrap
                            style={{fontSize: "24px", marginLeft: "275px", paddingRight: "800px"}}>
                            GoBike
                            <DirectionsBikeIcon className={this.classes.logo}/>
                        </Typography>
                        <Link style={{float: "right"}} to="/travel">
                            <Button size="sm" style={{alignItems: "right", marginRight: "10px",}}
                                    onClick={this.handleSubmit}>
                                Add to Itinerary
                            </Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>
        </Grid>
        )
    }
}

export default Header;