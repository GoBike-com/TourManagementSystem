import React from "react";
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import {DialogContent,Dialog,DialogTitle,DialogActions} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {config} from "../Constants";
import fetch from "cross-fetch";
import Divider from "@material-ui/core/Divider";
import AccordionActions from "@material-ui/core/AccordionActions";
import 'react-bootstrap-typeahead/css/Typeahead.css';


class NewItinerary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itineraries: [],
            open:false,
            user:'',
            itineraryName:''
        };
        this.addItinerary = this.addItinerary.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleUserSearch = this.handleUserSearch.bind(this);
    }

    componentDidMount() {
        this.getAllItineraries();
    }

    handleOpen = (name) => {
        this.setState({
            open:true,
            itineraryName:name
        })
    }

     handleClose = () => {
        this.setState({
            open:false
        })
      };

    getAllItineraries = () => {
        const targetGetUrl = config.API_URL + "/itinerary/" + window.sessionStorage.getItem("username");
        fetch(targetGetUrl, {
            method:'get',
            headers: {Accept: 'application/json'},
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({itineraries: []});

                for (let i = 0; i < data.itineraryDetails.length; i++) {
                    const itineraryData = data.itineraryDetails[i];

                    const itinerary = {
                        name: itineraryData.itinerary.name,
                        startDate: itineraryData.itinerary.startDate,
                        endDate: itineraryData.itinerary.endDate,
                        createdDate: itineraryData.itinerary.createdDate,
                        createdBy: itineraryData.itinerary.createdBy,
                        flights: itineraryData.flights,
                        accommodations: itineraryData.accommodations,
                        place: ""
                    };

                    const groupMemberData = itineraryData.users;
                   // itinerary.groupMembers = groupMemberData.firstName + " " + groupMemberData.lastName;
                  // itinerary.groupMembers = groupMemberData
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

    share = () => {
        console.log(this.state.user)
        var targetUrl = config.API_URL + "/itinerary/adduser";
        const requestOptions = {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userName: window.sessionStorage.getItem("username"),
                itineraryName: this.state.itineraryName,
                newUserName: this.state.user[0]
            }),
        };

        fetch(targetUrl, requestOptions)
                .then((response) => {
                    if (response.status == "200") {
                       alert("User was added!")
                       this.setState({
                           open:false
                       })
                    }
                })
                .catch((error) => {
                    alert(error);
                    console.error("There was an error!", error);
                });
    }

    handleUserSearch = (query) => {
        //setIsLoading(true);
        console.log(query)
        var targetUrl = config.API_URL + "/user/search/"+query;
        fetch(targetUrl,{
          method: "GET",
           credentials: "include",
           headers: {'Content-Type': 'application/json', Accept: 'application/json'},
         })
         .then(res => res.json())
          .then((res) => {
            console.log(res)
           this.setState({ options: res,
                        });
            // setIsLoading(false);
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
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
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
                                        <b>Created By: </b>{itinerary.createdBy}
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
                                    <Button size="small" onClick={e => 
                                            {
                                            e.preventDefault()
                                            this.handleOpen(itinerary.name)
                                            }}>Share</Button>
                                    <Button size="small" color="primary">
                                        Edit
                                    </Button>
                                </AccordionActions>
                            </Accordion>
                            <br/>
                        </div>
                    ))}
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        className={classes.modal}
                        >
                        <DialogTitle 
                            style={{backgroundColor: '#0d47a1'}} id="simple-dialog-title">
                                Share with other traveler
                        </DialogTitle>
                        <DialogContent>
                            <div style = {{display:'flex'}}>
                                <Typography>
                                    UserName:
                                </Typography>
                                <AsyncTypeahead
                                    id="source"
                                    labelKey="name"
                                    minLength={2}
                                    onChange={(selected) => this.setState({user : selected})}
                                    onSearch={this.handleUserSearch}
                                    options={this.state.options}
                                    placeholder="Search user.."
                                />
                            </div>
                                <DialogActions>
                                {this.state.user ===''?<Button size="small" color="primary" disabled>
                                    Share
                                </Button> :<Button size="small" color="primary" onClick = {this.share}>
                                    Share
                                </Button>}
                            </DialogActions>
                        </DialogContent>
                    </Dialog>
                    {console.log("sharedwithuser " , this.state.sharedWithUser)}
          {console.log("window.localStorage.getItem('shared') " , window.localStorage.getItem('shared'))}
          {(this.state.sharedWithUser === true) || (window.localStorage.getItem('shared') === "true") ? (
              <div> 
                <Button
              variant="contained"
              color="primary"
              startIcon={<ChatIcon />}
              onClick={this.showChat}
            >
              Chat
            </Button>
           </div>)
        
           : null}
           {console.log("this.state.displayChat " , this.state.displayChat)}
           {this.state.displayChat === true ? (<ChatApp/>) : null}
                </div>
            );
        }
    }
}

export default NewItinerary;