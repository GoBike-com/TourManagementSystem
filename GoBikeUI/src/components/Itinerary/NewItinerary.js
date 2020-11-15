import React from "react";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class NewItinerary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itineraries: []
        };
        this.addItinerary = this.addItinerary.bind(this);
    }

    addItinerary = (event) => {
        event.preventDefault();
        const itineraryName = prompt("What do you want to call this new itinerary?");
        if (itineraryName) {
            //TODO: Call to create a new itinerary, delete below setState call
            this.setState({
                itineraries: this.state.itineraries.concat({name: itineraryName})
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
                                    <Typography className={classes.heading}>
                                        {itinerary.name}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        This will include information about your itinerary, or a link to another page with details.
                                    </Typography>
                                </AccordionDetails>
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
