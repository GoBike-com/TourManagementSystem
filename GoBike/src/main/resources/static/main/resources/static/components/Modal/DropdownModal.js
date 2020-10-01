var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function DropdownModal() {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleClickOpen = function handleClickOpen() {
    setOpen(true);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  return React.createElement(
    'div',
    null,
    React.createElement(
      Button,
      { variant: 'outlined', color: 'primary', onClick: handleClickOpen },
      'Open form dialog'
    ),
    React.createElement(
      Dialog,
      { open: open, onClose: handleClose, 'aria-labelledby': 'form-dialog-title' },
      React.createElement(
        DialogTitle,
        { id: 'form-dialog-title' },
        'Subscribe'
      ),
      React.createElement(
        DialogContent,
        null,
        React.createElement(
          DialogContentText,
          null,
          'To subscribe to this website, please enter your email address here. We will send updates occasionally.'
        ),
        React.createElement(TextField, {
          autoFocus: true,
          margin: 'dense',
          id: 'name',
          label: 'Email Address',
          type: 'email',
          fullWidth: true
        })
      ),
      React.createElement(
        DialogActions,
        null,
        React.createElement(
          Button,
          { onClick: handleClose, color: 'primary' },
          'Cancel'
        ),
        React.createElement(
          Button,
          { onClick: handleClose, color: 'primary' },
          'Subscribe'
        )
      )
    )
  );
}