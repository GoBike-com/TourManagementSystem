import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./ChatApp.css";
import image from "../../assets/img/bg2.jpg";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import PubNubReact from "pubnub-react";
import CardHeader from "assets/components/Card/CardHeader";
import FaceIcon from "@material-ui/icons/Face";

const now = new Date().getTime();

let username = window.sessionStorage.getItem("username");
if (username == null) {
  username = "GoBikers";
}

const styles = {
  card: {
    maxWidth: 345,
    margin: "0 auto" /* Added */,
    float: "none" /* Added */,
    marginbottom: "10px" /* Added */,
  },
  openCard: {
    maxWidth: "10%",
  },
  openMedia: {
    height: "109vh",
  },
  media: {
    objectFit: "cover",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
};

class Message extends Component {
  render() {
    return (
      <div>
        {" "}
        {this.props.uuid}: {this.props.text}
      </div>
    );
  }
}

class ChatApp extends Component {
  constructor(props) {
    super(props);
    this.pubnub = new PubNubReact({
      publishKey: "pub-c-af9e408a-d4a8-473c-b591-81402cdf9aaf",
      subscribeKey: "sub-c-7e76d5bc-2658-11e9-9508-c2e2c4d7488a",
      uuid: username,
    });

    this.state = {
      messages: [],
      chatInput: "",
    };
    this.pubnub.init(this);
    this.displayUsers = this.displayUsers.bind(this);
  }

  sendChat = () => {
    if (this.state.chatInput) {
      this.pubnub.publish({
        message: {
          text: this.state.chatInput,
          uuid: username,
        },
        channel: "chatting",
      });
      this.setState({ chatInput: "" });
    }
  };

  setChatInput = (event) => {
    this.setState({ chatInput: event.target.value });
  };

  componentDidMount() {
    this.pubnub.subscribe({
      channels: ["chatting"],
      withPresence: true,
    });

    this.pubnub.getMessage("chatting", (msg) => {
      this.pubnub.hereNow(
        {
          channels: ["chatting"],
          includeUUIDs: true,
          includeState: true,
        },
        (status, response) => {
          console.log(status);
          console.log(response);
        }
      );
      const { text, uuid } = msg.message;
      let messages = this.state.messages;
      messages.push(
        <Message key={this.state.messages.length} uuid={uuid} text={text} />
      );
      this.setState({
        messages: messages,
      });
    });
  }

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.sendChat();
    }
  };
  componentWillUnmount() {
    this.pubnub.unsubscribe({
      channels: ["chatting"],
    });
  }

  displayUsers = (users) => {
    {
      console.log(users.length);
    }
    users.map((disuser) => {
      {
        console.log(disuser);
      }
      return (
        <div>
          <Avatar style={{ backgroundColor: "royalblue", marginTop: "5%" }}>
            {disuser.substring(0, 1).toUpperCase()}
          </Avatar>
          <Typography
            gutterBottom
            variant="headline"
            component="h1"
            style={{ color: "white", fontSize: "48px" }}
          >
            Let's plan our trip : {disuser}
          </Typography>
        </div>
      );
    });
    // return(
    //   for (let i = 0; i < users.length; i++){

    //     <div>
    //       <Avatar style={{ backgroundColor: "royalblue", marginTop: "5%" }}>{users[i].substring(0, 1).toUpperCase()}</Avatar>
    //       <Typography
    //         gutterBottom
    //         variant="headline"
    //         component="h1"
    //         style={{ color: "white", fontSize:"48px" }}
    //       >
    //         Let's plan our trip :   {users[i]}
    //       </Typography>

    //     </div>
    //   // );
    // }
    // )
  };

  render() {
    const { classes } = this.props;
    const liveusers = this.props.chats;
    return (
      <Card
        style={{
          maxWidth: "50%",
          margin: "2%",
          backgroundColor: "royalblue",
          backgroundImage: "url(" + image + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "70vh",
          // width: "100vh",
        }}
      >
        {/* <div style={{float:"left", boxSizing: "border-box",
  "width": "50%",
  "padding": "10px"}}> */}
        {/* <div style={{float:"left", boxSizing: "border-box",
  "width": "20%",
  "padding": "10px"}}>
        <CardHeader
          style={{ backgroundColor: "purple", flex: "left", marginTop: "8%", minHeight: "100vh" }}
        >
          {liveusers.length}
          {/* {liveusers.map(p => {
            return(
              <div>
              {p}
            </div>
            )
           
          })} */}
        {/* {this.displayUsers(liveusers)} */}
        {/* {liveusers.map(u => {
            return(<h1>
              hello
            </h1>)
          })} */}
        {/* {/* {this.props.chats.map( liveusers => {
            return(
              <Avatar style={{ backgroundColor: "royalblue", marginTop: "5%" }}> */}
        {/* {console.log(liveusers)}
             {liveusers.substring(0, 1).toUpperCase()}
           </Avatar>
            )
             
          })} */}

        {/* </CardHeader> */}
        {/* </div> */}
        <div
          style={{
            boxSizing: "border-box",
            width: "80%",
            padding: "10px",
            margin: "auto",
          }}
        >
          <CardHeader
            style={{ backgroundColor: "purple", flex: "left", marginTop: "2%" }}
          >
            <Typography
              gutterBottom
              variant="headline"
              component="h1"
              style={{ color: "white", fontSize: "48px" }}
            >
              Let's plan our trip : {this.props.topic}
            </Typography>
          </CardHeader>

          <CardContent>
            <div className={classes.root}>
              <Paper
                style={{
                  height: "75vh",
                  overflow: "auto",
                  backgroundColor: "LightSkyBlue",
                }}
              >
                {/* <Typography
                    component="div"
                    style={{
                      color: "black",
                      fontSize: "20px",
                      borderRadius: "5px",
                      display: "inline-block",
                      backgroundColor: "white",
                      marginBottom: "5%",
                    }}
                  >
                    {this.state.messages}
                  </Typography> */}

                {/* {console.log("otheruser is",window.sessionStorage.getItem("otheruser") )}
                  {console.log("username is ", window.sessionStorage.getItem("username"))} */}
                {window.sessionStorage.getItem("otheruser") !== null
                  ? this.state.messages.map((p) => {
                      return (
                        <List component="nav">
                          <ListItem>
                            <Chip
                              avatar={
                                <Avatar style={{ backgroundColor: "white" }}>
                                  {" "}
                                  {<FaceIcon />}
                                </Avatar>
                              }
                              label={p}
                              clickable
                              style={{
                                backgroundColor: "indigo",
                                color: "white",
                              }}
                            />
                          </ListItem>
                        </List>
                      );
                    })
                  : this.state.messages.map((p) => {
                      return (
                        <List component="nav">
                          <ListItem>
                            <Chip
                              avatar={
                                <Avatar style={{ backgroundColor: "white" }}>
                                  {" "}
                                  {<FaceIcon />}
                                </Avatar>
                              }
                              label={p}
                              clickable
                              style={{
                                backgroundColor: "darkgreen",
                                color: "white",
                              }}
                            />
                          </ListItem>
                        </List>
                      );
                    })}
              </Paper>
            </div>
          </CardContent>
          <CardActions>
            <Input
              style={{
                backgroundColor: "white",
                width: "100%",
                padding: "5px",
                height: "13vh",
                borderRadius: "8px",
              }}
              placeholder=" Enter a message"
              value={this.state.chatInput}
              className={classes.input}
              onKeyDown={this.handleKeyPress}
              onChange={this.setChatInput}
              inputProps={{
                "aria-label": "Description",
              }}
            />
          </CardActions>
        </div>
        {/* </div> */}
      </Card>
    );
  }
}

export default withStyles(styles)(ChatApp);

// ReactDOM.render(<ChatComponent />, document.getElementById('root'));
