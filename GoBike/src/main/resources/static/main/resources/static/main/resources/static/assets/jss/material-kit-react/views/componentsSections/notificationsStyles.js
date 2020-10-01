import { container, title } from "assets/jss/material-kit-react.js";

var notificationsStyles = {
  section: {
    backgroundColor: "#FFFFFF",
    display: "block",
    width: "100%",
    position: "relative",
    padding: "0"
  },
  title: Object.assign({}, title, {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  container: container
};

export default notificationsStyles;