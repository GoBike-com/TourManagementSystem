import React from "react";

// mterial-ui components
import { makeStyles } from "@material-ui/core/styles";

var styles = {
  clearfix: {
    "&:after,&:before": {
      display: "table",
      content: '" "'
    },
    "&:after": {
      clear: "both"
    }
  }
};

var useStyles = makeStyles(styles);

export default function Clearfix() {
  var classes = useStyles();
  return React.createElement("div", { className: classes.clearfix });
}

Clearfix.propTypes = {};