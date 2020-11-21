import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { Link, withRouter } from "react-router-dom";
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import RateReviewIcon from '@material-ui/icons/RateReview';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 300,
    backgroundColor: "black",
    color: "white",
    padding: "20px",
    // borderSpacing:"2px",
  },
}));

export default function Panel() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{marginBottom:"35px"}}>
            <LocationSearchingIcon />
          </Avatar>
        </ListItemAvatar>
        <Link
          style={{
            textDecorationLine: "none",
            textAlign: "left",
            color: "white",
          }}
          to={"/search"}
        >
          <ListItemText
            primary="Search"
            secondary="find your next destination"
          />
        </Link>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{marginBottom:"35px"}}>
            <FlightTakeoffIcon />
          </Avatar>
        </ListItemAvatar>
        <Link
          style={{
            textDecorationLine: "none",
            textAlign: "left",
            color: "white",
          }}
          to={"/travel"}
        >
          <ListItemText primary="Travel" secondary="flights - buses - trains" />
        </Link>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{marginBottom:"35px"}}>
            <HomeIcon />
          </Avatar>
        </ListItemAvatar>
        <Link
          style={{
            textDecorationLine: "none",
            textAlign: "left",
            color: "white",
          }}
          to={"/accomodation"}
        >
          <ListItemText primary="Accomodation" secondary="book your stay" />
        </Link>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{marginBottom:"35px"}}>
            <DescriptionIcon />
          </Avatar>
        </ListItemAvatar>
        <Link
          style={{
            textDecorationLine: "none",
            textAlign: "left",
            color: "white",
          }}
          to={"/itinerary"}
        >
          <ListItemText primary="Itinerary" secondary="manage your bookings" />
        </Link>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{marginBottom:"35px"}}>
            <ChatBubbleIcon />
          </Avatar>
        </ListItemAvatar>
        <Link
          style={{
            textDecorationLine: "none",
            textAlign: "left",
            color: "white",
          }}
          to={"/chat"}
        >
          <ListItemText
            primary="Chat with group"
            secondary="fellow travellers"
          />
        </Link>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{marginBottom:"35px"}}>
            <RateReviewIcon />
          </Avatar>
        </ListItemAvatar>
        <Link
          style={{
            textDecorationLine: "none",
            textAlign: "left",
            color: "white",
          }}
          to={"/review"}
        >
          <ListItemText
            primary="Review and Feedback"
            secondary="rate your experience"
          />
        </Link>
      </ListItem>
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText />
      </ListItem>
      <ListItem>
        {/* <ListItemAvatar>
          <Avatar>
          </Avatar>
        </ListItemAvatar> */}
        <ListItemText />
      </ListItem>
      <ListItem>
        {/* <ListItemAvatar>
          <Avatar>
         </Avatar>
        </ListItemAvatar> */}
        <ListItemText />
      </ListItem>
      <ListItem>
        {/* <ListItemAvatar>
          <Avatar>
         </Avatar>
        </ListItemAvatar> */}
        <ListItemText />
      </ListItem>
      <ListItem>
        {/* <ListItemAvatar>
          <Avatar>
         </Avatar>
        </ListItemAvatar> */}
        <ListItemText />
      </ListItem>
      <ListItem>
        {/* <ListItemAvatar>
          <Avatar>
         </Avatar>
        </ListItemAvatar> */}
        <ListItemText />
      </ListItem>
      <ListItem>
        {/* <ListItemAvatar>
          <Avatar>
         </Avatar>
        </ListItemAvatar> */}
        <ListItemText />
      </ListItem>
      <ListItem>
        {/* <ListItemAvatar>
          <Avatar>
         </Avatar>
        </ListItemAvatar> */}
        <ListItemText />
      </ListItem>
    </List>
  );
}
