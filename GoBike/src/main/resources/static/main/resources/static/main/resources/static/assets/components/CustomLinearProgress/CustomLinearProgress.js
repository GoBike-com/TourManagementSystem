function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
// core components
import styles from "assets/jss/material-kit-react/components/customLinearProgressStyle.js";

var useStyles = makeStyles(styles);

export default function CustomLinearProgress(props) {
  var classes = useStyles();

  var color = props.color,
      rest = _objectWithoutProperties(props, ["color"]);

  return React.createElement(LinearProgress, Object.assign({}, rest, {
    classes: {
      root: classes.root + " " + classes[color + "Background"],
      bar: classes.bar + " " + classes[color]
    }
  }));
}

CustomLinearProgress.defaultProps = {
  color: "gray"
};

CustomLinearProgress.propTypes = {
  color: PropTypes.oneOf(["primary", "warning", "danger", "success", "info", "rose", "gray"])
};