import React from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {ListItemText, Link ,Dialog, DialogTitle, DialogActions, DialogContent} from '@material-ui/core';
import {config} from "../Constants";
import fetch from "cross-fetch";
import Grid from "@material-ui/core/Grid";

export default function ItineraryPopup(props) {
    const [open, setOpen] = React.useState(false);
    const [itineraries, setItineraries] = React.useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        if (value !== "Cancel") {
            props.addToItinerary(value);
        }

        setOpen(false);
    };

    React.useEffect(() => {
        if(window.sessionStorage.getItem("username")){
            const targetGetUrl = config.API_URL + "/itinerary/" + window.sessionStorage.getItem("username");
            fetch(targetGetUrl, {
                method:'get',
                headers: {Accept: 'application/json'},
            })
                .then((response) => response.json())
                .then((data) => {
                    let itinerariesToAdd = [];
    
                    for (let i = 0; i < data.itineraryDetails.length; i++) {
                        const itineraryData = data.itineraryDetails[i];
    
                        const itinerary = {
                            name: itineraryData.itinerary.name,
                        };
    
                        itinerariesToAdd.push(itinerary);
                    }
                    setItineraries(itinerariesToAdd);
    
                })
                .catch((error) => {
                    console.log(error);
                });
        } else{
            window.location.href="/traveller/signin"
        }
        
    }, []);

    return (
        <div>
            <Grid item xs={12} style={{textAlign:'center'}}>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Add to Itinerary
                </Button>
            </Grid>
            <Dialog onClose={() => handleClose('Cancel')} aria-labelledby="simple-dialog-title" open={open}>
                <DialogTitle id="simple-dialog-title">Itineraries</DialogTitle>
                <DialogContent dividers>
                    <List>

                        {listItineraries()}

                        {/* <ListItem autoFocus button onClick={() => handleClose('Cancel')}>
                            <ListItemText primary="Cancel" />
                        </ListItem> */}
                    </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleClose('Cancel')} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );

    function listItineraries() {

        if(itineraries.length > 0){
            return itineraries.map((itinerary) => (
                <ListItem button onClick={() => handleClose(itinerary.name)} key={itinerary.name}>
                    <ListItemText primary={itinerary.name}/>
                </ListItem>
            ));
        } else {
            return <div>Create an itinerary <Link onClick={(e) => e.preventDefault} href="/traveller/success" color="primary">here</Link></div>
        }
    }
}