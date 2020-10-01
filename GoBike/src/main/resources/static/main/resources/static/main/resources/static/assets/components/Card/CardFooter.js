function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "assets/jss/material-kit-react/components/cardFooterStyle.js";

var useStyles = makeStyles(styles);

export default function CardFooter(props) {
  var _classNames;

  var classes = useStyles();

  var className = props.className,
      children = props.children,
      rest = _objectWithoutProperties(props, ["className", "children"]);

  var cardFooterClasses = classNames((_classNames = {}, _defineProperty(_classNames, classes.cardFooter, true), _defineProperty(_classNames, className, className !== undefined), _classNames));
  return React.createElement("div", Object.assign({ className: cardFooterClasses }, rest), children);
}

CardFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};