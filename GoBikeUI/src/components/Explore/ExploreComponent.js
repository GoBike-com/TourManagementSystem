import fetch from 'cross-fetch';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { config } from '../Constants';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import HotelIcon from '@material-ui/icons/Hotel';
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import ItineraryPopup from "../Itinerary/ItineraryPopup";

export default function ExploreComponent() {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;
    const [searchText, setSearchText] = React.useState("");
    const [place, setPlace] = React.useState("Chicago");
    const [placeData, setPlaceData] = React.useState([]);
    const [allDataLoaded, setAllDataLoaded] = React.useState(false);

    //Styles
    let useStyles = makeStyles((theme) => ({
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
    const classes = useStyles;

    React.useEffect(() => {
        let active = true;

        (async () => {
            const targetUrl = config.API_URL + "/place/search/";
            fetch(targetUrl + searchText, {
                method:'get',
                headers: {Accept: 'application/json'},
            })
                .then((response) => response.json())
                .then((data) => {
                    const results = String(data).split(",");
                    if (active) {
                        setOptions((results.length && searchText ? results : []));
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setOptions([]);
                })
        })();

        return () => {
            active = false;
        };
    }, [searchText]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    React.useEffect(() => {

        const targetUrl = config.API_URL + "/place/details/" + place;
        fetch(targetUrl, {
            method:'get',
            headers: {Accept: 'application/json'},
        })
            .then((response) => response.json())
            .then((data) => {
                setPlaceData(data);
                setAllDataLoaded(true);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [place]);

    return (
        <div>

            <Autocomplete
                clearOnBlur={false}
                id="searchbar"
                containerStyle = {{ alignItems:'center', justifyContent:'center' }}
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                onChange={(event, value, reason ) => {
                    if (value !== null) {
                        setPlace(value);
                    }
                }}
                onInputChange={(event, value, reason) => {
                    setSearchText(value);
                    console.log(searchText);
                }}
                getOptionSelected={(option, value) => option === value}
                getOptionLabel={(option) => option}
                options={options}
                loading={loading}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search places..."
                        variant="outlined"
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <React.Fragment>
                                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </React.Fragment>
                            ),
                        }}
                    />
                )}
            />

            {/*Place Name*/}
            <Typography className={classes.placeTitle} variant="h1" gutterBottom align="center">
                {allDataLoaded ? placeData.name : ""}
            </Typography>

            {/*Short Place Description*/}
            <Typography variant="body1" gutterBottom align={"center"}>
                {allDataLoaded ? placeData.description : ""}
            </Typography>

            <ItineraryPopup addToItinerary={(name) => {
                console.log(name)
                alert(name);
            }}/>

            <br/><br/><br/>
            <Divider variant="middle"/>

            {/*Things to Do*/}
            <div className={classes.gridRoot}>
                <Typography variant="h2" >
                    Things To Do
                    <LocalActivityIcon />
                </Typography>
                <GridList cellHeight={300} className={classes.gridList} cols={3}>
                    {allDataLoaded ? activityData() : ""}
                </GridList>
            </div>
            <br/><br/><br/>
            <Divider variant="middle"/>

            {/*Restaurants*/}
            <div className={classes.gridRoot}>
                <Typography variant="h2" >
                    Restaurants
                    <RestaurantIcon />
                </Typography>
                <Grid container spacing={5}>
                    {allDataLoaded ? restaurantData() : ""}
                </Grid>
            </div>
            <br/><br/><br/>
            <Divider variant="middle"/>

            {/*Hotels*/}
            <div className={classes.gridRoot}>
                <GridList cellHeight={300} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
                        <Typography variant="h2" >
                            Hotels
                            <HotelIcon />
                        </Typography>
                    </GridListTile>
                    {allDataLoaded ? hotelData() : ""}
                </GridList>
            </div>
        </div>
    );

    function activityData() {
        return placeData.activity.map((tile) => (
            <GridListTile key={tile.imageURL} cols={tile.columns || 1}>
                <img src={tile.imageURL} alt={tile.name}/>
                <GridListTileBar
                    title={tile.name}
                    subtitle={<span>{tile.description}</span>}
                    actionIcon={
                        <IconButton aria-label={`info about ${tile.name}`} className={classes.icon} href={tile.websiteURL} target="_blank">
                            <InfoIcon/>
                        </IconButton>
                    }
                />
            </GridListTile>
        ))
    }

    function restaurantData() {
        return placeData.restaurant.map((tile) => (
            <Grid item md={3}>
                <Card className={classes.root}>
                    <CardActionArea href={tile.websiteURL} target="_blank">
                        <CardMedia
                            component="img"
                            className={classes.media}
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
        ))
    }

    function hotelData() {
        return placeData.hotel.map((tile) => (
            <GridListTile key={tile.imageURL}>
                <img src={tile.imageURL} alt={tile.name}/>
                <GridListTileBar
                    title={tile.name}
                    subtitle={<span>{tile.description}</span>}
                    actionIcon={
                        <IconButton aria-label={`info about ${tile.name}`} className={classes.icon} target="_blank" href={tile.websiteURL}>
                            <InfoIcon/>
                        </IconButton>
                    }
                />
            </GridListTile>
        ))
    }
}