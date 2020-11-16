import React from "react";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {config} from "../Constants";
import fetch from "cross-fetch";
import Divider from "@material-ui/core/Divider";
import AccordionActions from "@material-ui/core/AccordionActions";


class NewItinerary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itineraries: []
        };
        this.addItinerary = this.addItinerary.bind(this);
    }

    componentDidMount() {
        this.getAllItineraries();
    }

    getAllItineraries = () => {
        const targetGetUrl = config.API_URL + "/itinerary/" + window.sessionStorage.getItem("username");
        fetch(targetGetUrl, {
            method:'get',
            headers: {Accept: 'application/json'},
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({itineraries: []});

                for (let i = 0; i < data.length; i++) {
                    const itineraryData = data[i].itinerary;

                    const itinerary = {
                        name: itineraryData.name,
                        startDate: itineraryData.startDate,
                        endDate: itineraryData.endDate,
                        createdDate: itineraryData.createdDate,
                        flights: [],
                        accommodations: [],
                        place: ""
                    };

                    const groupMemberData = data[i].user;
                    itinerary.groupMembers = groupMemberData.firstName + " " + groupMemberData.lastName;

                    this.setState({
                        itineraries: this.state.itineraries.concat(itinerary)
                    });
                }

            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    };

    addItinerary = (event) => {
        event.preventDefault();

        const itineraryName = prompt("What do you want to call this new itinerary?");
        if (itineraryName) {
            const targetCreateUrl = config.API_URL + "/itinerary/" + window.sessionStorage.getItem("username");
            const requestOptions = {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: itineraryName,
                    startDate: "2020-12-21",
                    endDate: "2020-12-25"
                }),
            };

            fetch(targetCreateUrl, requestOptions)
                .then((response) => {
                    if (response.status == "200") {
                        this.getAllItineraries();
                    }
                })
                .catch((error) => {
                    alert(error);
                    console.error("There was an error!", error);
                });

            // window.location.href = "/search"
        }
    };

    useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
    }));

    render() {
        const itineraries = this.state.itineraries;
        const classes = this.useStyles;

        if (itineraries.length === 0) {
            return (
                <div>
                    <Typography variant="h1" align="center">
                        Itineraries
                    </Typography>
                    <Typography variant="h5" align="center">
                        It appears you do not have any itineraries. Please select the create an itinerary button to start planning your amazing journey with GoBike.
                    </Typography>
                    <br/>
                    <Grid item xs={12} style={{textAlign:'center'}}>
                        <Button variant="contained" color="primary" onClick={this.addItinerary}>
                            Create an Itinerary
                        </Button>
                    </Grid>
                    <br/>
                </div>
            )
        } else {
            return (
                <div>
                    <Typography variant="h1" align="center">
                        Itineraries
                    </Typography>

                    <br/>
                    <Grid item xs={12} style={{textAlign:'center'}}>
                        <Button variant="contained" color="primary" onClick={this.addItinerary}>
                            Create an Itinerary
                        </Button>
                    </Grid>
                    <br/>

                    {this.state.itineraries.map((itinerary) => (
                        <div>
                            <br/>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading} variant="h3">
                                        {itinerary.name}
                                    </Typography>
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails>
                                    <Typography>
                                        This will include information about your itinerary, as well as a description if applicable.
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography>
                                        <b>Created By: </b>{itinerary.groupMembers}
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography>
                                        <b>Start Date: </b>{itinerary.startDate}
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography>
                                        <b>End Date: </b>{itinerary.endDate}
                                    </Typography>
                                </AccordionDetails>
                                <Divider />
                                <AccordionActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small" color="primary">
                                        Edit
                                    </Button>
                                </AccordionActions>
                            </Accordion>
                            <br/>
                        </div>
                    ))}
                </div>
            );
        }
    }
}

export default NewItinerary;

