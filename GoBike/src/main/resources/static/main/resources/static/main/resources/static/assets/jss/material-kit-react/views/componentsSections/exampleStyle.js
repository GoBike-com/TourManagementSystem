import { conatinerFluid } from "assets/jss/material-kit-react.js";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

var exampleStyle = Object.assign({
  section: {
    padding: "70px 0"
  },
  container: Object.assign({}, conatinerFluid, {
    textAlign: "center !important"
  })
}, imagesStyle, {
  link: {
    textDecoration: "none"
  }
});

export default exampleStyle;