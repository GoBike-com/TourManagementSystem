function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";

// core components

import buttonStyle from "assets/jss/material-kit-react/components/buttonStyle.js";

var makeComponentStyles = makeStyles(function () {
  return Object.assign({}, buttonStyle);
});

var RegularButton = React.forwardRef(function (props, ref) {
  var _classNames;

  var color = props.color,
      round = props.round,
      children = props.children,
      fullWidth = props.fullWidth,
      disabled = props.disabled,
      simple = props.simple,
      size = props.size,
      block = props.block,
      link = props.link,
      justIcon = props.justIcon,
      className = props.className,
      rest = _objectWithoutProperties(props, ["color", "round", "children", "fullWidth", "disabled", "simple", "size", "block", "link", "justIcon", "className"]);

  var classes = makeComponentStyles();

  var btnClasses = classNames((_classNames = {}, _defineProperty(_classNames, classes.button, true), _defineProperty(_classNames, classes[size], size), _defineProperty(_classNames, classes[color], color), _defineProperty(_classNames, classes.round, round), _defineProperty(_classNames, classes.fullWidth, fullWidth), _defineProperty(_classNames, classes.disabled, disabled), _defineProperty(_classNames, classes.simple, simple), _defineProperty(_classNames, classes.block, block), _defineProperty(_classNames, classes.link, link), _defineProperty(_classNames, classes.justIcon, justIcon), _defineProperty(_classNames, className, className), _classNames));
  return React.createElement(
    Button,
    Object.assign({}, rest, { ref: ref, className: btnClasses }),
    children
  );
});

RegularButton.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger", "rose", "white", "facebook", "twitter", "google", "github", "transparent"]),
  size: PropTypes.oneOf(["sm", "lg"]),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};

export default RegularButton;