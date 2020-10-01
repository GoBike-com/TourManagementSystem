var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Alert, Container } from "reactstrap";

// core components

function SectionNotifications() {
  var _React$useState = React.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      alertSuccess = _React$useState2[0],
      setAlertSuccess = _React$useState2[1];

  var _React$useState3 = React.useState(true),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      alertWarning = _React$useState4[0],
      setAlertWarning = _React$useState4[1];

  var _React$useState5 = React.useState(true),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      alertDanger = _React$useState6[0],
      setAlertDanger = _React$useState6[1];

  return React.createElement(
    "div",
    null,
    React.createElement(
      Container,
      { className: "tim-container" },
      React.createElement(
        "div",
        { className: "title" },
        React.createElement(
          "h3",
          null,
          "Notifications"
        )
      )
    ),
    React.createElement(
      "div",
      { id: "notifications" },
      React.createElement(
        Alert,
        { color: "info" },
        React.createElement(
          Container,
          null,
          React.createElement(
            "span",
            null,
            "This is a plain notification!"
          )
        )
      ),
      React.createElement(
        Alert,
        { color: "success", isOpen: alertSuccess },
        React.createElement(
          Container,
          null,
          React.createElement(
            "button",
            {
              type: "button",
              className: "close",
              "data-dismiss": "alert",
              "aria-label": "Close",
              onClick: function onClick() {
                return setAlertSuccess(false);
              }
            },
            React.createElement("i", { className: "nc-icon nc-simple-remove" })
          ),
          React.createElement(
            "span",
            null,
            "This is a notification with close button."
          )
        )
      ),
      React.createElement(
        Alert,
        {
          className: "alert-with-icon",
          color: "warning",
          isOpen: alertWarning
        },
        React.createElement(
          Container,
          null,
          React.createElement(
            "div",
            { className: "alert-wrapper" },
            React.createElement(
              "button",
              {
                type: "button",
                className: "close",
                "data-dismiss": "alert",
                "aria-label": "Close",
                onClick: function onClick() {
                  return setAlertWarning(false);
                }
              },
              React.createElement("i", { className: "nc-icon nc-simple-remove" })
            ),
            React.createElement(
              "div",
              { className: "message" },
              React.createElement("i", { className: "nc-icon nc-bell-55" }),
              " This is a notification with close button and icon."
            )
          )
        )
      ),
      React.createElement(
        Alert,
        { className: "alert-with-icon", color: "danger", isOpen: alertDanger },
        React.createElement(
          Container,
          null,
          React.createElement(
            "div",
            { className: "alert-wrapper" },
            React.createElement(
              "button",
              {
                type: "button",
                className: "close",
                "data-dismiss": "alert",
                "aria-label": "Close",
                onClick: function onClick() {
                  return setAlertDanger(false);
                }
              },
              React.createElement("i", { className: "nc-icon nc-simple-remove" })
            ),
            React.createElement(
              "div",
              { className: "message" },
              React.createElement("i", { className: "nc-icon nc-bell-55" }),
              " This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style."
            )
          )
        )
      )
    )
  );
}

export default SectionNotifications;