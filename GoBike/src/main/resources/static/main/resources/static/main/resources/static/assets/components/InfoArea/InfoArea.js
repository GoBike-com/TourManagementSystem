function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/components/infoStyle.js";

var useStyles = makeStyles(styles);

export default function InfoArea(props) {
  var _classNames, _classNames2;

  var classes = useStyles();
  var title = props.title,
      description = props.description,
      iconColor = props.iconColor,
      vertical = props.vertical;

  var iconWrapper = classNames((_classNames = {}, _defineProperty(_classNames, classes.iconWrapper, true), _defineProperty(_classNames, classes[iconColor], true), _defineProperty(_classNames, classes.iconWrapperVertical, vertical), _classNames));
  var iconClasses = classNames((_classNames2 = {}, _defineProperty(_classNames2, classes.icon, true), _defineProperty(_classNames2, classes.iconVertical, vertical), _classNames2));
  return React.createElement("div", { className: classes.infoArea }, React.createElement("div", { className: iconWrapper }, React.createElement(props.icon, { className: iconClasses })), React.createElement("div", { className: classes.descriptionWrapper }, React.createElement("h4", { className: classes.title }, title), React.createElement("p", { className: classes.description }, description)));
}

InfoArea.defaultProps = {
  iconColor: "gray"
};

InfoArea.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconColor: PropTypes.oneOf(["primary", "warning", "danger", "success", "info", "rose", "gray"]),
  vertical: PropTypes.bool
};