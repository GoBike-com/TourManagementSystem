import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import { Grid, Paper } from "@material-ui/core";
import { Link , withRouter } from "react-router-dom";
import Button from "../../assets/components/CustomButtons/Button.js";
import CssBaseline from "@material-ui/core/CssBaseline";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

class Explore extends React.Component {
    tileData = [
           {
                 img: "a",
                 title: 'Image',
                author: 'author',
              },
        {
            img: "a",
            title: 'Image',
            author: 'author',
        },
 ];

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 2
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
        placeTitle: {
            width: '100%',
            maxWidth: 500,
            textDecoration: 'underline'
        },
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
            maxWidth: 500,
        },
        image: {
            width: 128,
            height: 128,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
        gridList: {
            width: 500,
            height: 450,
        },
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
        gridRoot: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        }
    }));
    classes = this.useStyles;

    handleSubmit = (event) => {
        event.preventDefault();
        const targetUrl = "http://localhost:7070/user/logout"; //call backend to add to itinerary

        fetch(targetUrl,
            {
                method:'get',
                credentials: 'include',
                headers: {'Content-Type': 'application/json', Accept: 'application/json'},
            }
        ).then(
            response => {
                if (response.status == "200") {
                    alert("Added to itinerary!")
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };


    render() {
        return (
            <div>
            <Grid>
                <CssBaseline />
                <div className={this.classes.root}>
                    <AppBar position="static" style={{ backgroundColor: "indigo" }}>
                        <Toolbar>
                            <Typography
                                className={this.classes.title} variant="h6" noWrap style={{ fontSize: "24px", marginLeft:"275px", paddingRight:"800px" }}>
                                GoBike
                                <DirectionsBikeIcon className={this.classes.logo} />
                            </Typography>
                            <Link style={{float:"right"}}>
                                <Button size="sm" style={{alignItems:"right", marginRight:"10px", }} onClick= {this.handleSubmit}>
                                    Add to Itinerary
                                </Button>
                            </Link>
                        </Toolbar>
                    </AppBar>
                </div>
                <Typography className={this.classes.placeTitle} variant="h1" component="h2" gutterBottom align="center">
                    Chicago
                </Typography>
            </Grid>
                <div className={this.classes.gridRoot}>
                <GridList cellHeight={180} className={this.classes.gridList}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        <ListSubheader component="div">Things to Do</ListSubheader>
                    </GridListTile>
                    {this.tileData.map((tile) => (
                        <GridListTile key={tile.img}>
                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                subtitle={<span>{tile.author}</span>}
                                actionIcon={
                                    <IconButton aria-label={`info about ${tile.title}`} className={this.classes.icon}>
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
                </div>
            </div>
        );
    };
}

export default Explore;
