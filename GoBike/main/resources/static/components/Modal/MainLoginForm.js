var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import image from "../../assets/img/Image3.jpg";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import classNames from "classnames";
import ReCAPTCHA from "react-google-recaptcha";
import { withStyles } from '@material-ui/core/styles';

var styles = function styles(theme) {
  return {
    root: {
      height: "100vh"
    },
    image: {
      backgroundImage: "url(" + image + ")",
      backgroundRepeat: "no-repeat",
      backgroundColor: theme.palette.type === "light" ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    },
    logo: {
      color: "green",
      click: "cursor"
    },
    websitename: {
      color: "indigo",
      fontSize: "30px"
    },
    maindiv: {
      color: "linear-gradient(315deg, #0cbaba 0%, #380036 74%)"
    }
  };
};

var MainLoginForm = function (_React$Component) {
  _inherits(MainLoginForm, _React$Component);

  function MainLoginForm(props) {
    _classCallCheck(this, MainLoginForm);

    var _this = _possibleConstructorReturn(this, (MainLoginForm.__proto__ || Object.getPrototypeOf(MainLoginForm)).call(this, props));

    _this.handleUsernameChange = function (event) {
      _this.setState({ email: event.target.value });
    };

    _this.handlePasswordChange = function (event) {
      _this.setState({ password: event.target.value });
    };

    _this.websitename = "Get Set GoBike";

    _this.state = {
      email: "",
      password: "",
      successful: "",
      showPassword: false
    };

    _this.handleUsernameChange = _this.handleUsernameChange.bind(_this);
    _this.handlePasswordChange = _this.handlePasswordChange.bind(_this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    return _this;
  }

  //   handleSubmit = () => {
  //     this.fireAndGetResponseInJSON();
  //   };


  _createClass(MainLoginForm, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;

      return React.createElement(
        "div",
        null,
        React.createElement(
          Grid,
          { container: true, component: "main", className: classes.root },
          React.createElement(CssBaseline, null),
          React.createElement(Grid, { item: true, xs: false, sm: 4, md: 7, className: classes.image }),
          React.createElement(
            Grid,
            { item: true, xs: 12, sm: 8, md: 5, component: Paper, elevation: 6, square: true },
            React.createElement(
              "div",
              { className: classes.paper },
              React.createElement(
                Typography,
                { component: "h1", variant: "h5" },
                React.createElement(
                  "div",
                  {
                    style: { textAlign: "center" },
                    className: classes.maindiv
                  },
                  React.createElement(
                    "span",
                    { className: classes.websitename },
                    this.websitename
                  ),
                  React.createElement(
                    "span",
                    null,
                    React.createElement(DirectionsBikeIcon, { className: classes.logo })
                  )
                )
              ),
              React.createElement(
                "form",
                { className: classes.form, noValidate: true },
                React.createElement(TextField, {
                  variant: "outlined",
                  margin: "normal",
                  required: true,
                  fullWidth: true,
                  id: "email",
                  label: "Email Address",
                  name: "email",
                  autoComplete: "email",
                  autoFocus: true,
                  onChange: this.handleUsernameChange
                }),
                React.createElement(TextField, {
                  variant: "outlined",
                  margin: "normal",
                  required: true,
                  fullWidth: true,
                  name: "password",
                  label: "Password",
                  type: "password",
                  id: "password",
                  autoComplete: "current-password",
                  onChange: this.handlePasswordChange
                }),
                React.createElement(FormControlLabel, {
                  control: React.createElement(Checkbox, { value: "remember", color: "primary" }),
                  label: "Remember me"
                }),
                React.createElement(
                  Button,
                  {
                    type: "submit",
                    fullWidth: true,
                    variant: "contained",
                    color: "primary",
                    className: classes.submit
                  },
                  "Sign In"
                ),
                React.createElement(
                  Grid,
                  { container: true },
                  React.createElement(
                    Grid,
                    { item: true, xs: true },
                    React.createElement(
                      Link,
                      { href: "#", variant: "body2" },
                      "Forgot password?"
                    )
                  ),
                  React.createElement(
                    Grid,
                    { item: true },
                    React.createElement(
                      Link,
                      { href: "/traveller/register", variant: "body2" },
                      "Don't have an account? Sign Up"
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return MainLoginForm;
}(React.Component);

export default withStyles(styles, { withTheme: true })(MainLoginForm);