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
import CImage from '../../assets/img/chicago.jpg';
import CFoodImage from '../../assets/img/chicago-pizza.jpg';
import CHotelImage from '../../assets/img/chicago-hotel.jpg';
import Header from "./Header";

class Explore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: new URLSearchParams(this.props.location.search).get("city")
        };
    }

    thingsToDoData = [
        {
            img: "",
            title: 'Image',
            description: 'This will be a short description',
            cols: 2,
            url: "Link to external site"
        },
        {
            img: CImage,
            title: 'Image',
            description: 'This will be a short description',
            cols: 1,
            url: "Link to external site"
        },
        {
            img: CImage,
            title: 'Image',
            description: 'This will be a short description',
            cols: 1,
            url: "Link to external site"
        },
        {
            img: CImage,
            title: 'Image',
            description: 'This will be a short description',
            cols: 1,
            url: "Link to external site"
        },
        {
            img: CImage,
            title: 'Image',
            description: 'This will be a short description',
            cols: 1,
            url: "Link to external site"
        },
    ];

    restaurantData = [
        {
            img: CFoodImage,
            title: 'Image',
            description: 'This will be a short description',
            url: "Link to external site"
        },
        {
            img: CFoodImage,
            title: 'Image',
            description: 'This will be a short description',
            url: "Link to external site"
        },
        {
            img: CFoodImage,
            title: 'Image',
            description: 'This will be a short description',
            url: "Link to external site"
        },
        {
            img: CFoodImage,
            title: 'Image',
            description: 'This will be a short description',
            url: "Link to external site"
        },
        {
            img: CFoodImage,
            title: 'Image',
            description: 'This will be a short description',
            url: "Link to external site"
        },
        {
            img: CFoodImage,
            title: 'Image',
            description: 'This will be a short description',
            url: "Link to external site"
        },
        {
            img: CFoodImage,
            title: 'Image',
            description: 'This will be a short description',
            url: "Link to external site"
        },
        {
            img: CFoodImage,
            title: 'Image',
            description: 'This will be a short description',
            url: "Link to external site"
        },
    ];

    hotelData = [
        {
            img: CHotelImage,
            title: 'Image',
            description: 'author',
            url: "Link to external site"
        },
        {
            img: CHotelImage,
            title: 'Image',
            description: 'author',
            url: "Link to external site"
        },
        {
            img: CHotelImage,
            title: 'Image',
            description: 'author',
            url: "Link to external site"
        },
        {
            img: CHotelImage,
            title: 'Image',
            description: 'author',
            url: "Link to external site"
        },
    ];

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
        return (
            <div>
                {/*Top Bar*/}
                <Header/>

                {/*Place Name*/}
                <Typography className={this.classes.placeTitle} variant="h1" component="h2" gutterBottom align="center">
                    {this.state.city}
                </Typography>

                {/*Short Place Description*/}
                <Typography variant="body1" gutterBottom align={"center"}>
                    Chicago, on Lake Michigan in Illinois, is among the largest cities in the U.S. Famed for its bold
                    architecture, it has a skyline punctuated by skyscrapers such as the iconic John Hancock Center,
                    1,451-ft. Willis Tower (formerly the Sears Tower) and the neo-Gothic Tribune Tower. The city is also
                    renowned for its museums, including the Art Institute of Chicago with its noted Impressionist and
                    Post-Impressionist works.
                </Typography>
                <Divider variant="middle"/>

                {/*Things to Do*/}
                <div className={this.classes.gridRoot}>
                    <GridList cellHeight={300} className={this.classes.gridList} cols={3}>
                        <GridListTile key="Subheader" cols={3} style={{height: 'auto'}}>
                            <ListSubheader component="div">Things to Do</ListSubheader>
                        </GridListTile>
                        {this.thingsToDoData.map((tile) => (
                            <GridListTile key={tile.img} cols={tile.cols || 1}>
                                <img src={tile.img} alt={tile.title}/>
                                <GridListTileBar
                                    title={tile.title}
                                    subtitle={<span>{tile.description}</span>}
                                    actionIcon={
                                        <IconButton aria-label={`info about ${tile.title}`}
                                                    className={this.classes.icon}>
                                            <InfoIcon/>
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
                <br/><br/><br/><br/>
                <Divider variant="middle"/>

                {/*Restaurants*/}
                <div className={this.classes.gridRoot}>
                    <GridList cellHeight={300} className={this.classes.gridList} cols={3}>
                        <GridListTile key="Subheader" cols={3} style={{height: 'auto'}}>
                            <ListSubheader component="div">Restaurants</ListSubheader>
                        </GridListTile>
                    </GridList>
                    <Grid container spacing={5}>
                        {this.restaurantData.map((tile) => (
                            <Grid item md={3}>
                                <Card className={this.classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            className={this.classes.media}
                                            height="140"
                                            image={tile.img}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Lizard
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {tile.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
                <br/><br/><br/><br/>
                <Divider variant="middle"/>

                {/*Hotels*/}
                <div className={this.classes.gridRoot}>
                    <GridList cellHeight={300} className={this.classes.gridList}>
                        <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
                            <ListSubheader component="div">Hotels</ListSubheader>
                        </GridListTile>
                        {this.hotelData.map((tile) => (
                            <GridListTile key={tile.img}>
                                <img src={tile.img} alt={tile.title}/>
                                <GridListTileBar
                                    title={tile.title}
                                    subtitle={<span>{tile.description}</span>}
                                    actionIcon={
                                        <IconButton aria-label={`info about ${tile.title}`}
                                                    className={this.classes.icon}>
                                            <InfoIcon/>
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
                {/*Flights*/}
                {/*<div className={this.classes.gridRoot}>*/}
                {/*    <GridList cellHeight={300} className={this.classes.gridList}>*/}
                {/*        <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>*/}
                {/*            <ListSubheader component="div">Things to Do</ListSubheader>*/}
                {/*        </GridListTile>*/}
                {/*        {this.tileData.map((tile) => (*/}
                {/*            <GridListTile key={tile.img}>*/}
                {/*                <img src={tile.img} alt={tile.title}/>*/}
                {/*                <GridListTileBar*/}
                {/*                    title={tile.title}*/}
                {/*                    subtitle={<span>{tile.description}</span>}*/}
                {/*                    actionIcon={*/}
                {/*                        <IconButton aria-label={`info about ${tile.title}`}*/}
                {/*                                    className={this.classes.icon}>*/}
                {/*                            <InfoIcon/>*/}
                {/*                        </IconButton>*/}
                {/*                    }*/}
                {/*                />*/}
                {/*            </GridListTile>*/}
                {/*        ))}*/}
                {/*    </GridList>*/}
                {/*</div>*/}
            </div>
        );
    };
}

export default Explore;
