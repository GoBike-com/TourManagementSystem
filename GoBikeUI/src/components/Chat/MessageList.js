import React from "react";
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from "@material-ui/icons/Face";
import Typography from "@material-ui/core/Typography";



class MessageList extends React.Component {
  render() {
    return (
      <div>
          {this.props.messages.map((message, index) => (
              <div>
                 <Chip style={{margin:"5px"}} label={message.senderID} />

            <Typography
              variant="p"
              noWrap
              style={{ fontSize: "15px" }}
            >
              {message.text}
            </Typography>
            </div>
          ))}
      </div>
    );
  }
}
export default MessageList;
