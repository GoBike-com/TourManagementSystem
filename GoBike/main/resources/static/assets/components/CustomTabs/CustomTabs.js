var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Icon from "@material-ui/core/Icon";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import styles from "assets/jss/material-kit-react/components/customTabsStyle.js";

var useStyles = makeStyles(styles);

export default function CustomTabs(props) {
  var _classNames;

  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var handleChange = function handleChange(event, value) {
    setValue(value);
  };
  var classes = useStyles();
  var headerColor = props.headerColor,
      plainTabs = props.plainTabs,
      tabs = props.tabs,
      title = props.title,
      rtlActive = props.rtlActive;

  var cardTitle = classNames((_classNames = {}, _defineProperty(_classNames, classes.cardTitle, true), _defineProperty(_classNames, classes.cardTitleRTL, rtlActive), _classNames));
  return React.createElement(
    Card,
    { plain: plainTabs },
    React.createElement(
      CardHeader,
      { color: headerColor, plain: plainTabs },
      title !== undefined ? React.createElement(
        "div",
        { className: cardTitle },
        title
      ) : null,
      React.createElement(
        Tabs,
        {
          value: value,
          onChange: handleChange,
          variant: "fullWidth",
          classes: {
            root: classes.tabsRoot,
            indicator: classes.displayNone
          }
        },
        tabs.map(function (prop, key) {
          var icon = {};
          if (prop.tabIcon) {
            icon = {
              icon: typeof prop.tabIcon === "string" ? React.createElement(
                Icon,
                null,
                prop.tabIcon
              ) : React.createElement(prop.tabIcon, null)
            };
          }
          return React.createElement(Tab, Object.assign({
            classes: {
              root: classes.tabRootButton,
              label: classes.tabLabel,
              selected: classes.tabSelected,
              wrapper: classes.tabWrapper
            },
            key: key,
            label: prop.tabName
          }, icon));
        })
      )
    ),
    React.createElement(
      CardBody,
      null,
      tabs.map(function (prop, key) {
        if (key === value) {
          return React.createElement(
            "div",
            { key: key },
            prop.tabContent
          );
        }
        return null;
      })
    )
  );
}

CustomTabs.propTypes = {
  headerColor: PropTypes.oneOf(["warning", "success", "danger", "info", "primary", "rose"]),
  title: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    tabName: PropTypes.string.isRequired,
    tabIcon: PropTypes.object,
    tabContent: PropTypes.node.isRequired
  })),
  rtlActive: PropTypes.bool,
  plainTabs: PropTypes.bool
};