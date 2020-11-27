import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import MenuIcon from '@material-ui/icons/Menu';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import RateReviewIcon from '@material-ui/icons/RateReview';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

export default function Menus() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelectedMenu = (event, place) => {
        event.preventDefault();
        window.location.href='/' + place;
    }

    return (
        <div>
            <MenuIcon
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={handleClick}
            />

            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={(event) => handleSelectedMenu(event,'itinerary')}>
                    <ListItemIcon>
                        <DescriptionIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Itineraries" />
                </MenuItem>
                <MenuItem onClick={(event) => handleSelectedMenu(event,'search')}>
                    <ListItemIcon>
                        <LocationSearchingIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Search" />
                </MenuItem>
                <MenuItem onClick={(event) => handleSelectedMenu(event,'travel')}>
                    <ListItemIcon>
                        <FlightTakeoffIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Travel" />
                </MenuItem>
                <MenuItem onClick={(event) => handleSelectedMenu(event,'accomodation')}>
                    <ListItemIcon>
                        <HomeIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Accommodation" />
                </MenuItem>
                {/* <MenuItem onClick={(event) => handleSelectedMenu(event,'chat')}>
                    <ListItemIcon>
                        <ChatBubbleIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Chat" />
                </MenuItem> */}
                <MenuItem onClick={(event) => handleSelectedMenu(event,'review')}>
                    <ListItemIcon>
                        <RateReviewIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Review and Feedback" />
                </MenuItem>
            </StyledMenu>
        </div>
    );
}
