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
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import { Button, FormGroup, InputGroupAddon, InputGroupText, InputGroup, Modal, Container, Row, Col, UncontrolledTooltip, PopoverBody, PopoverHeader, UncontrolledPopover } from "reactstrap";

// core components

function SectionJavaScript() {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      modal = _React$useState2[0],
      setModal = _React$useState2[1];

  var toggleModal = function toggleModal() {
    setModal(!modal);
  };
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "section javascript-components" },
      React.createElement(
        Container,
        null,
        React.createElement(
          "div",
          { className: "title" },
          React.createElement(
            "h2",
            null,
            "Javascript Components"
          )
        ),
        React.createElement(
          Row,
          { id: "modals" },
          React.createElement(
            Col,
            { md: "6" },
            React.createElement(
              "div",
              { className: "title" },
              React.createElement(
                "h3",
                null,
                "Modal"
              )
            ),
            React.createElement(
              Button,
              {
                className: "btn-round",
                color: "danger",
                outline: true,
                type: "button",
                onClick: toggleModal
              },
              "Launch demo modal"
            ),
            React.createElement(
              Modal,
              { isOpen: modal, toggle: toggleModal },
              React.createElement(
                "div",
                { className: "modal-header" },
                React.createElement(
                  "button",
                  {
                    "aria-label": "Close",
                    className: "close",
                    type: "button",
                    onClick: toggleModal
                  },
                  React.createElement(
                    "span",
                    { "aria-hidden": true },
                    "\xD7"
                  )
                ),
                React.createElement(
                  "h5",
                  {
                    className: "modal-title text-center",
                    id: "exampleModalLabel"
                  },
                  "Modal title"
                )
              ),
              React.createElement(
                "div",
                { className: "modal-body" },
                "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
              ),
              React.createElement(
                "div",
                { className: "modal-footer" },
                React.createElement(
                  "div",
                  { className: "left-side" },
                  React.createElement(
                    Button,
                    {
                      className: "btn-link",
                      color: "default",
                      type: "button",
                      onClick: toggleModal
                    },
                    "Never mind"
                  )
                ),
                React.createElement("div", { className: "divider" }),
                React.createElement(
                  "div",
                  { className: "right-side" },
                  React.createElement(
                    Button,
                    { className: "btn-link", color: "danger", type: "button" },
                    "Delete"
                  )
                )
              )
            )
          ),
          React.createElement(
            Col,
            { md: "6" },
            React.createElement(
              "div",
              { className: "title" },
              React.createElement(
                "h3",
                null,
                "Popovers"
              )
            ),
            React.createElement(
              Button,
              {
                className: "btn-round mr-1",
                color: "danger",
                id: "tooltip344834141",
                outline: true,
                onClick: function onClick(e) {
                  return e.target.focus();
                }
              },
              "On top"
            ),
            React.createElement(
              UncontrolledPopover,
              {
                placement: "top",
                target: "tooltip344834141",
                trigger: "focus"
              },
              React.createElement(
                PopoverHeader,
                null,
                "Popover on top"
              ),
              React.createElement(
                PopoverBody,
                null,
                "Here will be some very useful information about this popover."
              )
            ),
            React.createElement(
              Button,
              {
                className: "btn-round mr-1",
                color: "danger",
                id: "tooltip493417725",
                outline: true,
                onClick: function onClick(e) {
                  return e.target.focus();
                }
              },
              "On bottom"
            ),
            React.createElement(
              UncontrolledPopover,
              {
                placement: "bottom",
                target: "tooltip493417725",
                trigger: "focus"
              },
              React.createElement(
                PopoverHeader,
                null,
                "Popover on bottom"
              ),
              React.createElement(
                PopoverBody,
                null,
                "Here will be some very useful information about this popover."
              )
            ),
            React.createElement(
              Button,
              {
                className: "btn-round mr-1",
                color: "danger",
                id: "tooltip746845223",
                outline: true,
                onClick: function onClick(e) {
                  return e.target.focus();
                }
              },
              "On left"
            ),
            React.createElement(
              UncontrolledPopover,
              {
                placement: window.innerWidth < 768 ? "top" : "left",
                target: "tooltip746845223",
                trigger: "focus"
              },
              React.createElement(
                PopoverHeader,
                null,
                "Popover on left"
              ),
              React.createElement(
                PopoverBody,
                null,
                "Here will be some very useful information about this popover."
              )
            ),
            React.createElement(
              Button,
              {
                className: "btn-round",
                color: "danger",
                id: "tooltip909471006",
                outline: true,
                onClick: function onClick(e) {
                  return e.target.focus();
                }
              },
              "On right"
            ),
            React.createElement(
              UncontrolledPopover,
              {
                placement: window.innerWidth < 768 ? "top" : "right",
                target: "tooltip909471006",
                trigger: "focus"
              },
              React.createElement(
                PopoverHeader,
                null,
                "Popover on right"
              ),
              React.createElement(
                PopoverBody,
                null,
                "Here will be some very useful information about this popover."
              )
            )
          ),
          React.createElement("br", null),
          React.createElement(
            Col,
            { md: "6" },
            React.createElement(
              "div",
              { className: "title" },
              React.createElement(
                "h3",
                null,
                "Datepicker"
              )
            ),
            React.createElement(
              Row,
              null,
              React.createElement(
                Col,
                { sm: "6" },
                React.createElement(
                  FormGroup,
                  null,
                  React.createElement(
                    InputGroup,
                    { className: "date", id: "datetimepicker" },
                    React.createElement(ReactDatetime, {
                      inputProps: {
                        placeholder: "Datetime Picker Here"
                      }
                    }),
                    React.createElement(
                      InputGroupAddon,
                      { addonType: "append" },
                      React.createElement(
                        InputGroupText,
                        null,
                        React.createElement(
                          "span",
                          { className: "glyphicon glyphicon-calendar" },
                          React.createElement("i", { "aria-hidden": true, className: "fa fa-calendar" })
                        )
                      )
                    )
                  )
                )
              )
            )
          ),
          React.createElement(
            Col,
            { md: "6" },
            React.createElement(
              "div",
              { className: "title" },
              React.createElement(
                "h3",
                null,
                "Tooltips"
              )
            ),
            React.createElement(
              Button,
              {
                className: "btn-round mr-1",
                color: "danger",
                id: "tooltip392938669",
                outline: true
              },
              "On left"
            ),
            React.createElement(
              UncontrolledTooltip,
              {
                delay: 0,
                placement: "left",
                target: "tooltip392938669"
              },
              "On left"
            ),
            React.createElement(
              Button,
              {
                className: "btn-round mr-1",
                color: "danger",
                id: "tooltip354225297",
                outline: true
              },
              "On right"
            ),
            React.createElement(
              UncontrolledTooltip,
              {
                delay: 0,
                placement: "right",
                target: "tooltip354225297"
              },
              "On right"
            ),
            React.createElement(
              Button,
              {
                className: "btn-round mr-1",
                color: "danger",
                id: "tooltip739061283",
                outline: true
              },
              "On top"
            ),
            React.createElement(
              UncontrolledTooltip,
              {
                delay: 0,
                placement: "top",
                target: "tooltip739061283"
              },
              "On top"
            ),
            React.createElement(
              Button,
              {
                className: "btn-round",
                color: "danger",
                id: "tooltip984013562",
                outline: true
              },
              "On bottom"
            ),
            React.createElement(
              UncontrolledTooltip,
              {
                delay: 0,
                placement: "bottom",
                target: "tooltip984013562"
              },
              "On bottom"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "title" },
          React.createElement(
            "h3",
            null,
            "Carousel"
          )
        )
      )
    ),
    " "
  );
}

export default SectionJavaScript;