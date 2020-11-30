import fetch from 'cross-fetch';
import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { config } from '../Constants';
import {makeStyles} from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import HotelIcon from '@material-ui/icons/Hotel';
import {Button, GridListTileBar, Link, Grid, Card, CardActionArea, CardMedia, CardContent,
     CardActions, Divider, Typography, CircularProgress,TextField, IconButton,Dialog,
     DialogTitle,DialogActions,DialogContent} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import ItineraryPopup from "../Itinerary/ItineraryPopup";
import Rating from "@material-ui/lab/Rating";

export default function ExploreComponent() {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;
    const [searchText, setSearchText] = React.useState("");
    const [place, setPlace] = React.useState("Chicago");
    const [placeData, setPlaceData] = React.useState([]);
    const [allDataLoaded, setAllDataLoaded] = React.useState(false);
    const [rating, setValue] = React.useState(0);
    const [reviewOpen, setReviewOpen] = React.useState(false);

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
                console.log(data);
                setPlaceData(data);
                console.log(placeData);
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

            {/*Itinerary Popup*/}
            <ItineraryPopup addToItinerary={(name) => {
                const targetUrl = config.API_URL + "/itinerary/"+window.sessionStorage.getItem("username") + "/place";
                const requestOptions = {
                    method: "POST",
                    credentials: "include",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        placeName: place,
                        itineraryName: name
                    }),
                };

                fetch(targetUrl, requestOptions)
                    .then((response) => {
                        // check for error response
                        if (response.status == "200") {
                            alert("Added!");
                        }

                        // this.setState({ totalReactPackages: data.total })
                    })
                    .catch((error) => {
                        // this.setState({ errorMessage: error.toString() });
                        console.error("There was an error!", error);
                    });
            }}/>
            <div>
                <Typography variant="body1">
                    <div  style = {{display:'flex'}} >
                        <Rating
                            name="read-only"
                            value={placeData.ratings+''}
                            style = {{paddingRight :"1%"}}
                            readOnly
                            precision={0.5}
                        />
                        <Link
                            component="button"
                            variant="body2"
                            onClick={(e) => {
                                e.preventDefault()
                                setReviewOpen(true)
                            }}
                        >
                        {placeData.ratingsCount} users ratings
                        </Link>    
                    </div>
                </Typography>
                <Typography>
                        Provide your ratings:
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            onChange={(event, newValue) => {
                                console.log(event)
                                console.log(newValue)
                                setValue(newValue);
                                var targetUrl = config.API_URL + "/place/"+placeData.name+"/rate";
                                const requestOptions = {
                                    method: "POST",
                                    credentials: "include",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify({
                                        userName: window.sessionStorage.getItem("username"),
                                        place: placeData.name,
                                        rating: newValue,      
                                    }),
                                    };
                                fetch(targetUrl, requestOptions)
                                    .then(res => res.json())
                                    .then((res) => {
                                    console.log(res)
                                    window.location.reload(false);
                                    // setIsLoading(false);
                                    });
                                }}
                        />
                </Typography>
            </div>

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
            <Dialog
                open={reviewOpen}
                onClose={() => {
                    setReviewOpen(false);
                }}
                className={classes.modal}
                >
                <DialogTitle>
                        All Ratings <i>({parseFloat(placeData.ratings).toFixed(2)}/5)</i>
                </DialogTitle>
                <DialogContent>
                    <Typography>{allDataLoaded? displayAllRatings(placeData.ratingList): ""}</Typography>
                </DialogContent>
            </Dialog>
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
                            <Rating
                                name="simple-controlled"
                                value={2}
                                onChange={(event, newValue) => {
                                    // setValue(newValue);
                                    //TODO: Call API
                                }}
                            />
                        </IconButton>
                    }
                />
            </GridListTile>
        ))
    }

    function displayAllRatings(ratings){
        return ratings.map(rating =>(
            <div>
                <Typography> 
                   <i> {rating.user.userName}</i>
                </Typography>
                <Typography style = {{display: 'flex'}}>
                    <Rating
                        name="read-only"
                        value={rating.ratings+''}
                        style = {{paddingRight :"1%"}}
                        readOnly
                        precision={0.5}
                        size="small"
                    />
                    <label style = {{paddingLeft: '1%'}}>{rating.ratings}</label>
                </Typography>
                <Divider/>
            </div>
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
                        <Rating
                            name="simple-controlled"
                            value={2}
                            onChange={(event, newValue) => {
                                // setValue(newValue);
                                //TODO: Call API
                            }}
                        />
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
                            <Rating
                                name="simple-controlled"
                                value={2}
                                onChange={(event, newValue) => {
                                    //TODO: Call API
                                }}
                            />
                        </IconButton>
                    }
                />
            </GridListTile>
        ))
    }
}