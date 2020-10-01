function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

var styles = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto"
  }
};

var useStyles = makeStyles(styles);

export default function GridItem(props) {
  var classes = useStyles();

  var children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, ["children", "className"]);

  return React.createElement(
    Grid,
    Object.assign({ item: true }, rest, { className: classes.grid + " " + className }),
    children
  );
}

GridItem.defaultProps = {
  className: ""
};

GridItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};