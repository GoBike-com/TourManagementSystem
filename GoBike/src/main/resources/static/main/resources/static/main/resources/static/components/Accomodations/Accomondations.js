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
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DateFnsUtils from '@date-io/date-fns';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import TimePickerr from '../Accomodations/TimePickerr';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker, TimePicker } from '@material-ui/pickers';

var useStyles = makeStyles(function (theme) {
    return {
        margin: {
            margin: 1,
            minWidth: 220
        },
        btn: {
            color: 'white',
            backgroundColor: 'indigo',
            alignItems: 'center',
            display: 'flex',
            borderRadius: 8,
            textTransform: 'none',
            marginLeft: '250px',
            marginTop: '2px',
            fontSize: '20px',
            position: 'absolute',
            width: '30%'
        },
        primary: {

            '&:hover': { // changes colors for button hover state

                backgroundColor: "amber",

                color: "black"

            }

        }
    };
});

export default function Accomodation() {
    var classes = useStyles();

    var _React$useState = React.useState(new Date('2014-08-18T21:11:54')),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        selectedDate = _React$useState2[0],
        setSelectedDate = _React$useState2[1];

    var handleDateChange = function handleDateChange(date) {
        setSelectedDate(date);
    };

    var _React$useState3 = React.useState(''),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        age = _React$useState4[0],
        setAge = _React$useState4[1];

    var _React$useState5 = React.useState(''),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        age1 = _React$useState6[0],
        setAge1 = _React$useState6[1];

    var handleChange = function handleChange(event) {
        setAge(event.target.value);
    };

    var handleChange1 = function handleChange1(event) {
        setAge1(event.target.value);
    };

    return React.createElement(Grid, { container: true, className: classes.mainbody, spacing: 4 }, React.createElement(Grid, { item: true, xs: 12, sm: 4 }, React.createElement(InputLabel, { id: 'demo-simple-select-outlined-label' }, 'Going From'), React.createElement(Select, { className: classes.margin,
        value: age,
        onChange: handleChange
    }, React.createElement(MenuItem, { value: '' }, 'Places'), React.createElement(MenuItem, { value: 10 }, 'Chicago'), React.createElement(MenuItem, { value: 20 }, 'Colorado'), React.createElement(MenuItem, { value: 30 }, 'Bloomington'))), React.createElement(Grid, { item: true, xs: 12, sm: 4 }, React.createElement(InputLabel, null, 'Going To'), React.createElement(Select, { className: classes.margin,
        value: age1,
        onChange: handleChange1
    }, React.createElement(MenuItem, { value: '' }, 'Places'), React.createElement(MenuItem, { value: 10 }, 'Chicago'), React.createElement(MenuItem, { value: 20 }, 'Colorado'), React.createElement(MenuItem, { value: 30 }, 'Bloomington'))), React.createElement(Grid, { item: true, xs: 12, sm: 4 }, React.createElement(InputLabel, null, 'Number of Travellers'), React.createElement(Select, { className: classes.margin,
        value: age1,
        onChange: handleChange1
    }, React.createElement(MenuItem, { value: '' }, 'Number of Travellers'), React.createElement(MenuItem, { value: 10 }, '1'), React.createElement(MenuItem, { value: 20 }, '2'), React.createElement(MenuItem, { value: 30 }, '3'))), React.createElement(Grid, { item: true, xs: 12, sm: 4 }, React.createElement(MuiPickersUtilsProvider, { utils: DateFnsUtils }, React.createElement(KeyboardDatePicker, {
        disableToolbar: true,
        variant: 'inline',
        format: 'MM/dd/yyyy',
        margin: 'normal',
        id: 'date-picker-inline',
        label: 'Check-in',
        font: 'Roboto ,Helvetica , Arial, sans-serif',
        value: selectedDate,
        onChange: handleDateChange,
        KeyboardButtonProps: {
            'aria-label': 'change date'
        }
    }))), React.createElement(Grid, { item: true, xs: 12, sm: 4 }, React.createElement(MuiPickersUtilsProvider, { utils: DateFnsUtils }, React.createElement(KeyboardDatePicker, {
        disableToolbar: true,
        variant: 'inline',
        format: 'MM/dd/yyyy',
        margin: 'normal',
        id: 'date-picker-inline',
        label: 'Check-out',
        value: selectedDate,
        onChange: handleDateChange,
        KeyboardButtonProps: {
            'aria-label': 'change date'
        }
    }))), React.createElement(Grid, { item: true, xs: 12, sm: 4 }, React.createElement(InputLabel, null, 'Travelling for'), React.createElement(Select, { className: classes.margin,
        value: age1,
        onChange: handleChange1
    }, React.createElement(MenuItem, { value: '' }, 'Travelling for'), React.createElement(MenuItem, { value: 10 }, '1'), React.createElement(MenuItem, { value: 20 }, '2'), React.createElement(MenuItem, { value: 30 }, '3'))), React.createElement(Grid, { item: true, xs: 12 }, React.createElement(Button, { className: classes.btn, color: 'primary', size: 'large', variant: 'contained' }, 'Search')));
}