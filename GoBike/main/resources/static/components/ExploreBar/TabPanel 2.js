var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HouseIcon from '@material-ui/icons/House';
import FlightIcon from '@material-ui/icons/Flight';
import RowingIcon from '@material-ui/icons/Rowing';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import { styled } from '@material-ui/core/styles';
import Accomodation from '../Accomodations/Accomondations';

function TabPanel(props) {
  var children = props.children,
      value = props.value,
      index = props.index,
      other = _objectWithoutProperties(props, ['children', 'value', 'index']);

  return React.createElement(
    'div',
    Object.assign({
      role: 'tabpanel',
      hidden: value !== index,
      id: 'scrollable-force-tabpanel-' + index,
      'aria-labelledby': 'scrollable-force-tab-' + index
    }, other),
    value === index && React.createElement(
      Box,
      { p: 3 },
      React.createElement(
        Typography,
        null,
        children
      )
    )
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: 'scrollable-force-tab-' + index,
    'aria-controls': 'scrollable-force-tabpanel-' + index
  };
}

var useStyles = makeStyles(function (theme) {
  return {
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper
    },
    tabs: {
      '&.Mui-selected': {
        outline: 'none'
      }

    }
  };
});

export default function ScrollableTabsButtonForce() {
  var classes = useStyles();

  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  return React.createElement(
    'div',
    { className: classes.root },
    React.createElement(
      AppBar,
      { position: 'static', color: 'black' },
      React.createElement(
        Tabs,
        {
          value: value,
          onChange: handleChange,
          indicatorColor: 'primary',
          textColor: 'primary',
          centered: true,
          variant: 'fullWidth',
          selectionFollowsFocus: 'True',
          outline: 'none'
        },
        React.createElement(Tab, Object.assign({ label: 'Stays', icon: React.createElement(HouseIcon, { className: classes.tabs }) }, a11yProps(0))),
        React.createElement(Tab, Object.assign({ label: 'Flights', icon: React.createElement(FlightIcon, null) }, a11yProps(1))),
        React.createElement(Tab, Object.assign({ label: 'Activities', icon: React.createElement(RowingIcon, null) }, a11yProps(2))),
        React.createElement(Tab, Object.assign({ label: 'Tours', icon: React.createElement(MotorcycleIcon, null) }, a11yProps(3)))
      )
    ),
    React.createElement(
      TabPanel,
      { value: value, index: 0 },
      React.createElement(Accomodation, null)
    ),
    React.createElement(
      TabPanel,
      { value: value, index: 1 },
      'Item Two'
    ),
    React.createElement(
      TabPanel,
      { value: value, index: 2 },
      'Item Three'
    ),
    React.createElement(
      TabPanel,
      { value: value, index: 3 },
      'Item Four'
    )
  );
}