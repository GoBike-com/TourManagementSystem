import React from "react";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

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
            //TODO: Call to create a new itinerary
            window.location.href = "/search"
        }
    };

    render() {
        const itineraries = this.state.itineraries;
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
                </div>
            );
        }
    }
}

export default NewItinerary;
