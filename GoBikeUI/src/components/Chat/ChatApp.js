import React, { Component } from "react";
import Chatkit from "@pusher/chatkit-client";
import axios from "axios";
import GridContainer from "../../assets/components/Grid/GridContainer.js";
// import Logo2 from "../../assets/img/logo2.png";
import Button from "components/CustomButtons/Button.js";
import { Link } from "react-router-dom";
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import SendIcon from "@material-ui/icons/Send";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";
import MessageList from "./MessageList";
import FaceIcon from "@material-ui/icons/Face";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import "./Store";
import "./ChatApp.css";
import { CTX } from "./Store";
import { useStyles } from "@material-ui/pickers/views/Calendar/SlideTransition";
import Chip from "@material-ui/core/Chip";

const style = {
  link: {
    color: "white",
  },
  bg: {
    background: "linear-gradient(0deg, #e0e0e0 30%, #f5f5f5 90%)",
    color: "black",
    borderRadius: 5,
  },
};

export default function ChatApp() {
  const classes = useStyles();

  const { allChats, sendChatAction, user } = React.useContext(CTX);

  console.log(allChats);

  const topics = Object.keys(allChats);

  const [activeTopic, changeActiveTopic] = React.useState(topics[0]);
  const [textValue, changeTextValue] = React.useState("");

  return (
    <div>
      <Card
        raised="true"
        style={{
          width: "80%",
          marginLeft: "140px",
          marginTop: "40px",
          marginBottom: "20px",
        }}
      >
        {" "}
        <Grid container style={{ marginLeft: "50px", marginTop: "20px" }}>
          <Grid
            item
            style={{
              backgroundColor: "#49274b",
              width: "20%",
              color: "white",
              height: "50px",
            }}
          >
            View your buddies
          </Grid>
          <Grid
            item
            style={{
              height: "20px",
              width: "70%",
              color: "white",
              backgroundColor: "#49274b",
              height: "50px",
            }}
          >
            Welcome to GoBike ChatRoom
            <div>Discussion Topic : {activeTopic}</div>
          </Grid>
        </Grid>
        <Grid container style={{ marginLeft: "50px", marginBottom: "0px" }}>
          <Grid
            item
            style={{
              height: "500px",
              backgroundColor: "#49274b",
              width: "20%",
              color: "white",
            }}
          >
            <List>
              {topics.map((topic) => (
                <ListItem key={topic} style={{ cursor: "pointer" }}>
                  {/* <ListItemAvatar> */}
                  {/* <FaceIcon /> */}
                  <ListItemText
                    onClick={(e) => changeActiveTopic(e.target.innerText)}
                    primary={topic}
                  />
                  {/* </ListItemAvatar> */}
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid
            item
            style={{
              height: "500px",
              width: "70%",
              color: "#49274b",
            }}
          >
            <List style={{ padding: "10px" }}>
              {allChats[activeTopic].map((chat, i) => (
                <div key={i} style={{ display: "flex" }}>
                  <Chip
                    style={{ color: "center", alignItems: "center" }}
                    label={chat.from}
                  />
                  <Typography
                    style={{ padding: "5px", alignItems: "center" }}
                    variant="body1"
                  >
                    {chat.msg}
                  </Typography>
                </div>
              ))}
            </List>

            {/* <MessageList messages={this.state.messages} /> */}
          </Grid>
        </Grid>
        <Grid container style={{ marginLeft: "50px", marginBottom: "20px" }}>
          {/* <Grid
            item
            style={{
              width: "20%",
            }}
          >
            NewRoomForm +
          </Grid> */}
          <Grid
            item
            style={{
              // marginTop: "2px",
              marginLeft: "200px",
              width: "70%",
            }}
          >
            <div style={{ display: "flex" }}>
              <TextField
                id="outlined-basic"
                placeholder="Enter your text here..."
                variant="outlined"
                fullWidth="true"
                value={textValue}
                onChange={(e) => changeTextValue(e.target.value)}
              />
              <Button
                style={{
                  float: "right",
                  height: "50px",
                  width: "10%",
                  backgroundColor: "#49274b",
                }}
                onClick={() => {
                  sendChatAction({from: user, msg: textValue, topic:activeTopic});
                  changeTextValue('');
                }}
              >
                Send
              </Button>
            </div>
          </Grid>
          <Grid></Grid>
        </Grid>
      </Card>
    </div>
  );
}
