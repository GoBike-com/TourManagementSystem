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

import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

export default function TimePickerr() {
  // The first commit of Material-UI
  var _React$useState = React.useState(new Date('2014-08-18T21:11:54')),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selectedDate = _React$useState2[0],
      setSelectedDate = _React$useState2[1];

  var handleDateChange = function handleDateChange(date) {
    setSelectedDate(date);
  };

  return React.createElement(MuiPickersUtilsProvider, { utils: DateFnsUtils }, React.createElement(Grid, { container: true, justify: 'space-around' }, React.createElement(KeyboardDatePicker, {
    disableToolbar: true,
    variant: 'inline',
    format: 'MM/dd/yyyy',
    margin: 'normal',
    id: 'date-picker-inline',
    label: 'Date picker inline',
    value: selectedDate,
    onChange: handleDateChange,
    KeyboardButtonProps: {
      'aria-label': 'change date'
    }
  }), React.createElement(KeyboardDatePicker, {
    margin: 'normal',
    id: 'date-picker-dialog',
    label: 'Date picker dialog',
    format: 'MM/dd/yyyy',
    value: selectedDate,
    onChange: handleDateChange,
    KeyboardButtonProps: {
      'aria-label': 'change date'
    }
  }), React.createElement(KeyboardTimePicker, {
    margin: 'normal',
    id: 'time-picker',
    label: 'Time picker',
    value: selectedDate,
    onChange: handleDateChange,
    KeyboardButtonProps: {
      'aria-label': 'change time'
    }
  })));
}