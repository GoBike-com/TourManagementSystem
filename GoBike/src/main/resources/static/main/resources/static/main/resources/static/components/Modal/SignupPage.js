var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;_e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }return _arr;
  }return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import Header from "../../assets/components/Header/Header.js";
import HeaderLinks from "../../assets/components/Header/HeaderLinks.js";
import GridContainer from "../../assets/components/Grid/GridContainer.js";
import GridItem from "../../assets/components/Grid/GridItem.js";
import Card from "../../assets/components/Card/Card.js";
import LoginPage from '../Modal/LoginPage';

import loginStyles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "../../assets/img/Image3.jpg";
import logo from "../../assets/img/OurLogo.jpg";
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import classNames from "classnames";
import CssBaseline from '@material-ui/core/CssBaseline';

var useLoginStyles = makeStyles(loginStyles);

var useStyles = makeStyles({

  logo: {
    color: 'green',
    click: 'cursor'
  },
  websitename: {
    color: 'white',
    fontSize: '30px'
  },
  maindiv: {
    color: 'linear-gradient(315deg, #0cbaba 0%, #380036 74%)'
  }

});

export default function SignupPage(props) {
  var _React$useState = React.useState("cardHidden"),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      cardAnimaton = _React$useState2[0],
      setCardAnimation = _React$useState2[1];

  setTimeout(function () {
    setCardAnimation("");
  }, 700);

  var loginClasses = useLoginStyles();

  var rest = _objectWithoutProperties(props, []);

  var classes = useStyles();

  var websitename = "GoBike";

  return React.createElement("div", null, React.createElement(CssBaseline, null), React.createElement("div", { style: { backgroundColor: 'black', textAlign: "center" }, className: classes.maindiv }, React.createElement("span", { className: classes.websitename }, websitename), React.createElement("span", null, React.createElement(DirectionsBikeIcon, { className: classes.logo }))), React.createElement("div", {
    className: loginClasses.pageHeader,
    style: {
      backgroundImage: "url(" + image + ")",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }, React.createElement("div", { className: loginClasses.container }, React.createElement(GridContainer, { justify: "left" }, React.createElement(GridItem, { xs: 12, sm: 12, md: 4 }, React.createElement(Card, { className: loginClasses[cardAnimaton] }, React.createElement(LoginPage, null)))))));
}