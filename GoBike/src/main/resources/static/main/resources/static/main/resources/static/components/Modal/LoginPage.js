var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

import Icon from "@material-ui/core/Icon";
// material-ui components
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import People from "@material-ui/icons/People";
import CardBody from "../../assets/components/Card/CardBody.js";
import CardFooter from "../../assets/components/Card/CardFooter";
import CardHeader from "../../assets/components/Card/CardHeader.js";
// core components
import Button from "../../assets/components/CustomButtons/Button.js";
import CustomInput from "../../assets/components/CustomInput/CustomInput.js";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import ReCAPTCHA from "react-google-recaptcha";

var LoginPage = function (_React$Component) {
  _inherits(LoginPage, _React$Component);

  function LoginPage(props) {
    _classCallCheck(this, LoginPage);

    var _this = _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call(this, props));

    _this.handleUsernameChange = function (event) {
      _this.setState({ username: event.target.value });
    };

    _this.handlePasswordChange = function (event) {
      _this.setState({ password: event.target.value });
    };

    _this.handleSubmit = function () {
      _this.fireAndGetResponseInJSON();
    };

    _this.handleClickShowPassword = function (event) {
      _this.setState({ showPassword: !_this.state.showPassword });
    };

    _this.handleMouseDownPassword = function (event) {
      event.preventDefault();
    };

    _this.state = {
      username: "",
      password: "",
      successful: "",
      cardAnimaton: "cardHidden",
      jsonResponse: "",
      captchavalue: null,
      showPassword: false
    };
    var currentURLPath = window.location.pathname;

    _this.handleUsernameChange = _this.handleUsernameChange.bind(_this);
    _this.handlePasswordChange = _this.handlePasswordChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleClickShowPassword = _this.handleClickShowPassword.bind(_this);
    _this.handleMouseDownPassword = _this.handleMouseDownPassword.bind(_this);
    return _this;
  }

  _createClass(LoginPage, [{
    key: "render",
    value: function render() {

      return React.createElement("form", null, React.createElement(CardHeader, { color: "info" }, React.createElement("h4", { style: { font: 'inherit', fontSize: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' } }, "Log Into GoBike"), React.createElement("h4", { style: { fontSize: "30px", alignItems: "center", textAlign: "center" } }, React.createElement(FacebookIcon, { style: { fontSize: "30px", alignItems: "center", textAlign: "center" } }))), React.createElement(CardBody, null, React.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center' } }, React.createElement("p", { style: { font: 'inherit', fontSize: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '30px' } }, "First Time User?"), React.createElement(Link, { style: { textDecorationLine: "none" }, to: "register" }, React.createElement(Button, { color: "primary", simple: true,
        style: { font: 'inherit', fontSize: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' } }, "Sign Up"))), React.createElement(CustomInput, {
        labelText: "Mobile number/Email ID",
        id: "username",
        formControlProps: {
          fullWidth: true
        },
        inputProps: {
          type: "text",
          onChange: this.handleUsernameChange,
          endAdornment: React.createElement(InputAdornment, { position: "end" }, React.createElement(People, null))
        }
      }), React.createElement(CustomInput, {
        labelText: "Password",
        id: "password",
        formControlProps: {
          fullWidth: true
        },
        inputProps: {
          type: "password",
          onChange: this.handlePasswordChange,
          endAdornment: React.createElement(InputAdornment, { position: "end" }, React.createElement(IconButton, { style: { paddingRight: "2px" },
            "aria-label": "toggle password visibility",
            onClick: this.handleClickShowPassword,
            onMouseDown: this.handleMouseDownPassword
          }, this.showPassword ? React.createElement(Visibility, null) : React.createElement(VisibilityOff, null))),
          autoComplete: "off"
        }
      }), React.createElement("div", null, React.createElement(Link, { style: { textDecorationLine: "none", textAlign: 'left' }, to: "forgotpassword/email" }, React.createElement(Button, { style: { font: 'inherit', fontSize: '16px', fontWeight: '30px', textAlign: 'left', margin: '0 0 10 0' }, color: "primary", simple: true }, "Forgot password?"))), React.createElement("small", { style: { font: 'inherit', fontSize: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '30px' } }, "I agree to the Terms and Conditions & Privacy Policy"), React.createElement(ReCAPTCHA, {
        sitekey: "6LeqvL4UAAAAAGSZCz_PjOT8nMVh2CDpx_GUGyXj",
        onChange: this.onChange
      })), React.createElement(CardFooter, { style: { display: 'flex', justifyContent: 'center', margin: 0 } }, React.createElement(Button, {
        onClick: this.handleSubmit,
        style: { textAlign: "center" },
        color: "info" }, "Sign In")));
    }
  }]);

  return LoginPage;
}(React.Component);

export default withRouter(LoginPage);