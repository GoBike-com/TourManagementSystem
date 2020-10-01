var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/components/navPillsStyle.js";

var useStyles = makeStyles(styles);

export default function NavPills(props) {
  var _classNames;

  var _React$useState = React.useState(props.active),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      active = _React$useState2[0],
      setActive = _React$useState2[1];

  var handleChange = function handleChange(event, active) {
    setActive(active);
  };
  var handleChangeIndex = function handleChangeIndex(index) {
    setActive(index);
  };
  var classes = useStyles();
  var tabs = props.tabs,
      direction = props.direction,
      color = props.color,
      horizontal = props.horizontal,
      alignCenter = props.alignCenter;

  var flexContainerClasses = classNames((_classNames = {}, _defineProperty(_classNames, classes.flexContainer, true), _defineProperty(_classNames, classes.horizontalDisplay, horizontal !== undefined), _classNames));
  var tabButtons = React.createElement(
    Tabs,
    {
      classes: {
        root: classes.root,
        fixed: classes.fixed,
        flexContainer: flexContainerClasses,
        indicator: classes.displayNone
      },
      value: active,
      onChange: handleChange,
      centered: alignCenter
    },
    tabs.map(function (prop, key) {
      var _classNames2;

      var icon = {};
      if (prop.tabIcon !== undefined) {
        icon["icon"] = React.createElement(prop.tabIcon, { className: classes.tabIcon });
      }
      var pillsClasses = classNames((_classNames2 = {}, _defineProperty(_classNames2, classes.pills, true), _defineProperty(_classNames2, classes.horizontalPills, horizontal !== undefined), _defineProperty(_classNames2, classes.pillsWithIcons, prop.tabIcon !== undefined), _classNames2));
      return React.createElement(Tab, Object.assign({
        label: prop.tabButton,
        key: key
      }, icon, {
        classes: {
          root: pillsClasses,
          selected: classes[color],
          wrapper: classes.tabWrapper
        }
      }));
    })
  );
  var tabContent = React.createElement(
    "div",
    { className: classes.contentWrapper },
    React.createElement(
      SwipeableViews,
      {
        axis: direction === "rtl" ? "x-reverse" : "x",
        index: active,
        onChangeIndex: handleChangeIndex
      },
      tabs.map(function (prop, key) {
        return React.createElement(
          "div",
          { className: classes.tabContent, key: key },
          prop.tabContent
        );
      })
    )
  );
  return horizontal !== undefined ? React.createElement(
    GridContainer,
    null,
    React.createElement(
      GridItem,
      horizontal.tabsGrid,
      tabButtons
    ),
    React.createElement(
      GridItem,
      horizontal.contentGrid,
      tabContent
    )
  ) : React.createElement(
    "div",
    null,
    tabButtons,
    tabContent
  );
}

NavPills.defaultProps = {
  active: 0,
  color: "primary"
};

NavPills.propTypes = {
  // index of the default active pill
  active: PropTypes.number,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    tabButton: PropTypes.string,
    tabIcon: PropTypes.object,
    tabContent: PropTypes.node
  })).isRequired,
  color: PropTypes.oneOf(["primary", "warning", "danger", "success", "info", "rose", "github"]),
  direction: PropTypes.string,
  horizontal: PropTypes.shape({
    tabsGrid: PropTypes.object,
    contentGrid: PropTypes.object
  }),
  alignCenter: PropTypes.bool
};