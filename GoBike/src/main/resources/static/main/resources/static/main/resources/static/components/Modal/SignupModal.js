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

import React from 'react';
import { Link } from "react-router-dom";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import LocalHospital from "@material-ui/icons/LocalHospital";
import People from "@material-ui/icons/People";
import Note from "@material-ui/icons/Note";
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import history from './../Utility/History';
import classNames from "classnames";

// core components
import Button from "../../assets/components/CustomButtons/Button";
import GridContainer from "../../assets/components/Grid/GridContainer.js";
import GridItem from "../../assets/components/Grid/GridItem.js";
import InfoArea from "../../assets/components/InfoArea/InfoArea.js";

import modalStyles from "assets/jss/material-kit-react/modalStyle.js";
import productStyles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

var Transition = React.forwardRef(function Transition(props, ref) {
  return React.createElement(Slide, Object.assign({ direction: "down", ref: ref }, props));
});

var useModalStyles = makeStyles(modalStyles);
var useProductStyles = makeStyles(productStyles);

export default function SignupModal() {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      modal = _React$useState2[0],
      setModal = _React$useState2[1];

  var modalClasses = useModalStyles();
  var productClasses = useProductStyles();

  var useStyles = makeStyles({
    ButtonGrp1: {
      backgroundColor: 'black',
      color: 'white',
      marginLeft: '252px',
      flex: 'true',
      borderRadius: '8px'
    },
    ButtonGrp2: {
      backgroundColor: 'black',
      color: 'white',
      marginRight: '12px',
      flex: 'true',
      borderRadius: '8px'
    }
  });

  var classes = useStyles();

  return React.createElement(React.Fragment, null, React.createElement(Link, { to: "traveller/signin" }, React.createElement(Button, { className: classes.ButtonGrp1 }, "Sign in")), React.createElement(Link, { to: "traveller/login" }, React.createElement(Button, { className: classes.ButtonGrp2 }, "Login")));
}