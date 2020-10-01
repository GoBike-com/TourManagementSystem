import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "assets/jss/material-kit-react/components/typographyStyle.js";

var useStyles = makeStyles(styles);

export default function Quote(props) {
  var text = props.text,
      author = props.author;

  var classes = useStyles();
  return React.createElement(
    "blockquote",
    { className: classes.defaultFontStyle + " " + classes.quote },
    React.createElement(
      "p",
      { className: classes.quoteText },
      text
    ),
    React.createElement(
      "small",
      { className: classes.quoteAuthor },
      author
    )
  );
}

Quote.propTypes = {
  text: PropTypes.node,
  author: PropTypes.node
};