var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Divider from "@material-ui/core/Divider";
import Icon from "@material-ui/core/Icon";
import Popper from "@material-ui/core/Popper";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/customDropdownStyle.js";

var useStyles = makeStyles(styles);

export default function CustomDropdown(props) {
  var _classNames, _classNames2, _classNames3;

  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var handleClick = function handleClick(event) {
    if (anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  var handleClose = function handleClose(param) {
    setAnchorEl(null);
    if (props && props.onClick) {
      props.onClick(param);
    }
  };
  var handleCloseAway = function handleCloseAway(event) {
    if (anchorEl.contains(event.target)) {
      return;
    }
    setAnchorEl(null);
  };
  var classes = useStyles();
  var buttonText = props.buttonText,
      buttonIcon = props.buttonIcon,
      dropdownList = props.dropdownList,
      buttonProps = props.buttonProps,
      dropup = props.dropup,
      dropdownHeader = props.dropdownHeader,
      caret = props.caret,
      hoverColor = props.hoverColor,
      left = props.left,
      rtlActive = props.rtlActive,
      noLiPadding = props.noLiPadding;

  var caretClasses = classNames((_classNames = {}, _defineProperty(_classNames, classes.caret, true), _defineProperty(_classNames, classes.caretActive, Boolean(anchorEl)), _defineProperty(_classNames, classes.caretRTL, rtlActive), _classNames));
  var dropdownItem = classNames((_classNames2 = {}, _defineProperty(_classNames2, classes.dropdownItem, true), _defineProperty(_classNames2, classes[hoverColor + "Hover"], true), _defineProperty(_classNames2, classes.noLiPadding, noLiPadding), _defineProperty(_classNames2, classes.dropdownItemRTL, rtlActive), _classNames2));
  var icon = null;
  switch (typeof buttonIcon === "undefined" ? "undefined" : _typeof(buttonIcon)) {
    case "object":
      icon = React.createElement(props.buttonIcon, { className: classes.buttonIcon });
      break;
    case "string":
      icon = React.createElement(
        Icon,
        { className: classes.buttonIcon },
        props.buttonIcon
      );
      break;
    default:
      icon = null;
      break;
  }
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      null,
      React.createElement(
        Button,
        Object.assign({
          "aria-label": "Notifications",
          "aria-owns": anchorEl ? "menu-list" : null,
          "aria-haspopup": "true"
        }, buttonProps, {
          onClick: handleClick
        }),
        icon,
        buttonText !== undefined ? buttonText : null,
        caret ? React.createElement("b", { className: caretClasses }) : null
      )
    ),
    React.createElement(
      Popper,
      {
        open: Boolean(anchorEl),
        anchorEl: anchorEl,
        transition: true,
        disablePortal: true,
        placement: dropup ? left ? "top-start" : "top" : left ? "bottom-start" : "bottom",
        className: classNames((_classNames3 = {}, _defineProperty(_classNames3, classes.popperClose, !anchorEl), _defineProperty(_classNames3, classes.popperResponsive, true), _classNames3))
      },
      function () {
        return React.createElement(
          Grow,
          {
            "in": Boolean(anchorEl),
            id: "menu-list",
            style: dropup ? { transformOrigin: "0 100% 0" } : { transformOrigin: "0 0 0" }
          },
          React.createElement(
            Paper,
            { className: classes.dropdown },
            React.createElement(
              ClickAwayListener,
              { onClickAway: handleCloseAway },
              React.createElement(
                MenuList,
                { role: "menu", className: classes.menuList },
                dropdownHeader !== undefined ? React.createElement(
                  MenuItem,
                  {
                    onClick: function onClick() {
                      return handleClose(dropdownHeader);
                    },
                    className: classes.dropdownHeader
                  },
                  dropdownHeader
                ) : null,
                dropdownList.map(function (prop, key) {
                  if (prop.divider) {
                    return React.createElement(Divider, {
                      key: key,
                      onClick: function onClick() {
                        return handleClose("divider");
                      },
                      className: classes.dropdownDividerItem
                    });
                  }
                  return React.createElement(
                    MenuItem,
                    {
                      key: key,
                      onClick: function onClick() {
                        return handleClose(prop);
                      },
                      className: dropdownItem
                    },
                    prop
                  );
                })
              )
            )
          )
        );
      }
    )
  );
}

CustomDropdown.defaultProps = {
  caret: true,
  hoverColor: "primary"
};

CustomDropdown.propTypes = {
  hoverColor: PropTypes.oneOf(["black", "primary", "info", "success", "warning", "danger", "rose"]),
  buttonText: PropTypes.node,
  buttonIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  dropdownList: PropTypes.array,
  buttonProps: PropTypes.object,
  dropup: PropTypes.bool,
  dropdownHeader: PropTypes.node,
  rtlActive: PropTypes.bool,
  caret: PropTypes.bool,
  left: PropTypes.bool,
  noLiPadding: PropTypes.bool,
  // function that retuns the selected item
  onClick: PropTypes.func
};