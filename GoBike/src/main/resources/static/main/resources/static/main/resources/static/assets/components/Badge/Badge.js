import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/components/badgeStyle.js";

var useStyles = makeStyles(styles);

export default function Badge(props) {
  var classes = useStyles();
  var color = props.color,
      children = props.children;

  return React.createElement("span", { className: classes.badge + " " + classes[color] }, children);
}

Badge.defaultProps = {
  color: "gray"
};

Badge.propTypes = {
  color: PropTypes.oneOf(["primary", "warning", "danger", "success", "info", "rose", "gray"]),
  children: PropTypes.node
};