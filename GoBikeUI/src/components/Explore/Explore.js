import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import InfoIcon from '@material-ui/icons/Info';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Header from "./Header";
import fetch from "cross-fetch";
import {config} from "../Constants";

class Explore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: new URLSearchParams(this.props.location.search).get("city"),
            isLoaded: false,
            placeData: [],
            activityData: [],
            restaurantData: [],
            hotelData: []
        };
    }

    componentDidMount() {
        const targetUrl = config.API_URL + "/place/details/" + this.state.city;
        fetch(targetUrl, {
            method:'get',
            headers: {Accept: 'application/json'},
        })
            .then((response) => response.json())
            .then((data) => {
               this.setState({
                   isLoaded: true,
                   placeData: data,
                   activityData: data.activity,
                   restaurantData: data.restaurant,
                   hotelData: data.hotel
               });
            })
            .catch((error) => {
                console.log(error);
                alert(error)
            });
    }

    //Styles
    useStyles = makeStyles((theme) => ({
        placeTitle: {
            width: '100%',
            maxWidth: 500,
            textDecoration: 'underline'
        },
        gridRoot: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
            maxWidth: '75%'
        },
        gridList: {
            width: 500,
            height: 450,
        },
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
        media: {
            height: 140,
        },
    }));
    classes = this.useStyles;

    render() {
        const { city, isLoaded, placeData, activityData, restaurantData, hotelData } = this.state;
        return (
            <div>
                {/*Top Bar*/}
                <Header/>

                {/*Place Name*/}
                <Typography className={this.classes.placeTitle} variant="h1" component="h2" gutterBottom
                            align="center">
                    {placeData.name}
                </Typography>

                {/*Short Place Description*/}
                <Typography variant="body1" gutterBottom align={"center"}>
                    {placeData.description}
                </Typography>
                <Divider variant="middle"/>

                {/*Things to Do*/}
                <div className={this.classes.gridRoot}>
                    <GridList cellHeight={300} className={this.classes.gridList} cols={3}>
                        <GridListTile key="Subheader" cols={3} style={{height: 'auto'}}>
                            <ListSubheader component="div">Things to Do</ListSubheader>
                        </GridListTile>
                        {activityData.map((tile) => (
                            <GridListTile key={tile.imageURL} cols={tile.columns || 1}>
                                <img src={tile.imageURL} alt={tile.name}/>
                                <GridListTileBar
                                    title={tile.name}
                                    subtitle={<span>{tile.description}</span>}
                                    actionIcon={
                                        <IconButton aria-label={`info about ${tile.name}`} className={this.classes.icon} href={tile.websiteURL} target="_blank">
                                            <InfoIcon/>
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
                <br/><br/><br/>
                <Divider variant="middle"/>

                {/*Restaurants*/}
                <div className={this.classes.gridRoot}>
                    <GridList cellHeight={300} className={this.classes.gridList} cols={3}>
                        <GridListTile key="Subheader" cols={3} style={{height: 'auto'}}>
                            <ListSubheader component="div">Restaurants</ListSubheader>
                        </GridListTile>
                    </GridList>
                    <Grid container spacing={5}>
                        {restaurantData.map((tile) => (
                            <Grid item md={3}>
                                <Card className={this.classes.root}>
                                    <CardActionArea href={tile.websiteURL} target="_blank">
                                        <CardMedia
                                            component="img"
                                            className={this.classes.media}
                                            height="140"
                                            image={tile.imageURL}
                                            title={tile.name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {tile.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {tile.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary" href={tile.websiteURL} target="_blank">
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
                <br/><br/><br/>
                <Divider variant="middle"/>

                {/*Hotels*/}
                <div className={this.classes.gridRoot}>
                    <GridList cellHeight={300} className={this.classes.gridList}>
                        <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
                            <ListSubheader component="div">Hotels</ListSubheader>
                        </GridListTile>
                        {hotelData.map((tile) => (
                            <GridListTile key={tile.imageURL}>
                                <img src={tile.imageURL} alt={tile.name}/>
                                <GridListTileBar
                                    title={tile.name}
                                    subtitle={<span>{tile.description}</span>}
                                    actionIcon={
                                        <IconButton aria-label={`info about ${tile.name}`} className={this.classes.icon} target="_blank" href={tile.websiteURL}>
                                            <InfoIcon/>
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
