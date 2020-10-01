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
import Button from "@material-ui/core/Button";

import styles from "assets/jss/material-kit-react/components/paginationStyle.js";

var useStyles = makeStyles(styles);

export default function Pagination(props) {
  var classes = useStyles();
  var pages = props.pages,
      color = props.color;

  return React.createElement("ul", { className: classes.pagination }, pages.map(function (prop, key) {
    var _classNames;

    var paginationLink = classNames((_classNames = {}, _defineProperty(_classNames, classes.paginationLink, true), _defineProperty(_classNames, classes[color], prop.active), _defineProperty(_classNames, classes.disabled, prop.disabled), _classNames));
    return React.createElement("li", { className: classes.paginationItem, key: key }, prop.onClick !== undefined ? React.createElement(Button, { onClick: prop.onClick, className: paginationLink }, prop.text) : React.createElement(Button, {
      onClick: function onClick() {
        return alert("you've clicked " + prop.text);
      },
      className: paginationLink
    }, prop.text));
  }));
}

Pagination.defaultProps = {
  color: "primary"
};

Pagination.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    text: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["PREV", "NEXT", "..."])]).isRequired,
    onClick: PropTypes.func
  })).isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
};