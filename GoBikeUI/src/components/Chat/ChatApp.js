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
import FaceIcon from '@material-ui/icons/Face';


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

  render() {
    const { classes } = this.props;
    return (
      <Card
        style={{
          maxWidth: "40%",
          margin: "2%",
          backgroundColor: "#318CE7",
          backgroundImage: "url(" + image + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "100vh",
          width: "60vh",
        }}
      >
        <CardHeader
          style={{ backgroundColor: "purple", flex: "left", marginTop: "2%" }}
        >
          <Avatar style={{ backgroundColor: "violet", marginTop: "5%" }}>
            {console.log(username)}
            {username.substring(0, 1).toUpperCase()}
          </Avatar>
          <Typography
            gutterBottom
            variant="headline"
            component="h1"
            style={{ color: "white" }}
          >
            GoBiker {username}
          </Typography>
        </CardHeader>
        <CardContent>
          <div className={classes.root}>
            <Paper
              style={{
                height: "70vh",
                overflow: "auto",
                backgroundColor: "#DDA0DD",
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
              {this.state.messages.map((p) => {
                return (
                
                  <List component="nav">
                    <ListItem>
                     
                      <Chip
                        avatar={<Avatar style={{backgroundColor:"white"}}> {<FaceIcon />}</Avatar>}
                        label={p}
                        clickable
                        style={{backgroundColor:"indigo",color:"white"}}
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
              width: "60vh",
              height: "10vh",
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
      </Card>
    );
  }
}

export default withStyles(styles)(ChatApp);

// ReactDOM.render(<ChatComponent />, document.getElementById('root'));
