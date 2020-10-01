import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

var Whyus = function Whyus(props) {
  var useStyles = makeStyles({
    card: {
      maxWidth: 345
      //   margin: "5px",
    }
  });

  var classes = useStyles();

  return React.createElement(
    Grid,
    { container: true },
    React.createElement(Grid, { item: true, xs: 12, sm: 1 }),
    React.createElement(
      Grid,
      { item: true, xs: 12, sm: 10 },
      React.createElement(
        Grid,
        { container: true, spacing: 3 },
        React.createElement(
          Grid,
          { item: true, xs: 12, sm: 12 },
          React.createElement(
            Card,
            { className: classes.card },
            React.createElement(
              CardActionArea,
              null,
              React.createElement(CardMedia, {
                component: "img",
                alt: "Contemplative Reptile",
                height: "200",
                width: "300",
                image: require("../../assets/img/image13.jpg"),
                title: "Contemplative Reptile",
                className: classes.cover
              }),
              React.createElement(
                CardContent,
                null,
                React.createElement(
                  Typography,
                  { gutterBottom: true, variant: "h5", component: "h2" },
                  "Why GoBike ?"
                ),
                React.createElement(
                  Typography,
                  {
                    variant: "body2",
                    color: "textSecondary",
                    component: "p"
                  },
                  "the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                )
              )
            )
          )
        )
      ),
      React.createElement(Grid, { item: true, direction: "column", xs: 12, sm: 1 })
    )
  );
};

export default Whyus;