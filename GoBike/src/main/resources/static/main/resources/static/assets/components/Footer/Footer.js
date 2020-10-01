function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

var useStyles = makeStyles(styles);

export default function Footer(props) {
  var _classNames, _classNames2;

  var classes = useStyles();
  var whiteFont = props.whiteFont;

  var footerClasses = classNames((_classNames = {}, _defineProperty(_classNames, classes.footer, true), _defineProperty(_classNames, classes.footerWhiteFont, whiteFont), _classNames));
  var aClasses = classNames((_classNames2 = {}, _defineProperty(_classNames2, classes.a, true), _defineProperty(_classNames2, classes.footerWhiteFont, whiteFont), _classNames2));
  return React.createElement(
    "footer",
    { className: footerClasses },
    React.createElement(
      "div",
      { className: classes.container },
      React.createElement(
        "div",
        { className: classes.left },
        React.createElement(
          List,
          { className: classes.list },
          React.createElement(
            ListItem,
            { className: classes.inlineBlock },
            React.createElement(
              "a",
              {
                href: "https://www.creative-tim.com/?ref=mkr-footer",
                className: classes.block,
                target: "_blank"
              },
              "Creative Tim"
            )
          ),
          React.createElement(
            ListItem,
            { className: classes.inlineBlock },
            React.createElement(
              "a",
              {
                href: "https://www.creative-tim.com/presentation?ref=mkr-footer",
                className: classes.block,
                target: "_blank"
              },
              "About us"
            )
          ),
          React.createElement(
            ListItem,
            { className: classes.inlineBlock },
            React.createElement(
              "a",
              {
                href: "http://blog.creative-tim.com/?ref=mkr-footer",
                className: classes.block,
                target: "_blank"
              },
              "Blog"
            )
          ),
          React.createElement(
            ListItem,
            { className: classes.inlineBlock },
            React.createElement(
              "a",
              {
                href: "https://www.creative-tim.com/license?ref=mkr-footer",
                className: classes.block,
                target: "_blank"
              },
              "Licenses"
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: classes.right },
        "\xA9 ",
        1900 + new Date().getYear(),
        " , made with",
        " ",
        React.createElement(Favorite, { className: classes.icon }),
        " by",
        " ",
        React.createElement(
          "a",
          {
            href: "https://www.creative-tim.com?ref=mkr-footer",
            className: aClasses,
            target: "_blank"
          },
          "Creative Tim"
        ),
        " ",
        "for a better web."
      )
    )
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};