import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "assets/jss/material-kit-react/components/typographyStyle.js";

var useStyles = makeStyles(styles);

export default function Info(props) {
  var classes = useStyles();
  var children = props.children;

  return React.createElement("div", { className: classes.defaultFontStyle + " " + classes.infoText }, children);
}

Info.propTypes = {
  children: PropTypes.node
};