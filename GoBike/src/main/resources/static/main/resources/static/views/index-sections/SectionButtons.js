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
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import { Button, Label, FormGroup, Input, InputGroupAddon, InputGroupText, InputGroup, Container, Row, Col } from "reactstrap";

function SectionButtons() {
  React.useEffect(function () {
    if (!document.getElementById("sliderRegular").classList.contains("noUi-target")) {
      Slider.create(document.getElementById("sliderRegular"), {
        start: [37.5],
        connect: [true, false],
        step: 0.5,
        range: { min: 0, max: 100 }
      });
    }
    if (!document.getElementById("sliderDouble").classList.contains("noUi-target")) {
      Slider.create(document.getElementById("sliderDouble"), {
        start: [20, 80],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 }
      });
    }
  });
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "section section-buttons" },
      React.createElement(
        Container,
        null,
        React.createElement(
          "div",
          { className: "title" },
          React.createElement(
            "h2",
            null,
            "Basic Elements"
          )
        ),
        React.createElement(
          "div",
          { id: "buttons" },
          React.createElement(
            "div",
            { className: "title" },
            React.createElement(
              "h3",
              null,
              "Buttons ",
              React.createElement("br", null),
              React.createElement(
                "small",
                null,
                "Pick your style"
              )
            )
          ),
          React.createElement(
            Row,
            null,
            React.createElement(
              Col,
              { md: "8" },
              React.createElement(
                Button,
                { color: "info", type: "button" },
                "Default"
              ),
              React.createElement(
                Button,
                { className: "btn-round ml-1", color: "info", type: "button" },
                "Round"
              ),
              React.createElement(
                Button,
                { className: "btn-round ml-1", color: "info", type: "button" },
                React.createElement("i", { className: "fa fa-heart mr-1" }),
                "With Icon"
              ),
              React.createElement(
                Button,
                {
                  className: "btn-just-icon ml-1",
                  color: "info",
                  type: "button"
                },
                React.createElement("i", { className: "fa fa-heart" })
              ),
              React.createElement(
                Button,
                { className: "btn-link ml-1", color: "info", type: "button" },
                "Simple"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "title" },
            React.createElement(
              "h3",
              null,
              React.createElement(
                "small",
                null,
                "Pick your size"
              )
            )
          ),
          React.createElement(
            Row,
            null,
            React.createElement(
              Col,
              { md: "8" },
              React.createElement(
                Button,
                {
                  color: "danger",
                  outline: true,
                  size: "sm",
                  type: "button",
                  className: "mr-1"
                },
                "Small"
              ),
              React.createElement(
                Button,
                { color: "danger", outline: true, type: "button", className: "mr-1" },
                "Regular"
              ),
              React.createElement(
                Button,
                { color: "danger", outline: true, size: "lg", type: "button" },
                "Large"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "title" },
            React.createElement(
              "h3",
              null,
              React.createElement(
                "small",
                null,
                "Pick your color"
              )
            )
          ),
          React.createElement(
            Row,
            null,
            React.createElement(
              Col,
              { md: "8" },
              React.createElement(
                Button,
                {
                  className: "btn-round mr-1",
                  color: "default",
                  outline: true,
                  type: "button"
                },
                "Default"
              ),
              React.createElement(
                Button,
                {
                  className: "btn-round mr-1",
                  color: "primary",
                  outline: true,
                  type: "button"
                },
                "Primary"
              ),
              React.createElement(
                Button,
                {
                  className: "btn-round mr-1",
                  color: "info",
                  outline: true,
                  type: "button"
                },
                "Info"
              ),
              React.createElement(
                Button,
                {
                  className: "btn-round mr-1",
                  color: "success",
                  outline: true,
                  type: "button"
                },
                "Success"
              ),
              React.createElement(
                Button,
                {
                  className: "btn-round mr-1",
                  color: "warning",
                  outline: true,
                  type: "button"
                },
                "Warning"
              ),
              React.createElement(
                Button,
                {
                  className: "btn-round mr-1",
                  color: "danger",
                  outline: true,
                  type: "button"
                },
                "Danger"
              ),
              React.createElement(
                Button,
                {
                  className: "btn-round",
                  outline: true,
                  color: "neutral",
                  type: "button"
                },
                "Neutral"
              )
            )
          ),
          React.createElement("br", null),
          React.createElement(
            Row,
            null,
            React.createElement(
              Col,
              { md: "8" },
              React.createElement(
                Button,
                {
                  className: "btn-round mr-1",
                  color: "default",
                  type: "button"
                },
                "Default"
              ),
              React.createElement(
                Button,
                {
                  className: "btn-round mr-1",
                  color: "primary",
                  type: "button"
                },
                "Primary"
              ),
              React.createElement(
                Button,
                { className: "btn-round mr-1", color: "info", type: "button" },
                "Info"
              ),
              React.createElement(
                Button,
                {
                  className: "btn-round mr-1",
                  color: "success",
                  type: "button"
                },
                "Success"
              ),
              React.createElement(
                Button,
                {
                  className: "btn-round mr-1",
                  color: "warning",
                  type: "button"
                },
                "Warning"
              ),
              React.createElement(
                Button,
                { className: "btn-round mr-1", color: "danger", type: "button" },
                "Danger"
              ),
              React.createElement(
                Button,
                { className: "btn-round", color: "neutral", type: "button" },
                "Neutral"
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "title" },
          React.createElement(
            "h3",
            null,
            "Links"
          )
        ),
        React.createElement(
          Row,
          null,
          React.createElement(
            Col,
            { md: "8" },
            React.createElement(
              Button,
              {
                className: "mr-1",
                color: "link",
                href: "#pablo",
                onClick: function onClick(e) {
                  return e.preventDefault();
                }
              },
              "Default"
            ),
            React.createElement(
              Button,
              {
                className: "btn-link mr-1",
                color: "primary",
                href: "#pablo",
                onClick: function onClick(e) {
                  return e.preventDefault();
                }
              },
              "Primary"
            ),
            React.createElement(
              Button,
              {
                className: "btn-link mr-1",
                color: "success",
                href: "#pablo",
                onClick: function onClick(e) {
                  return e.preventDefault();
                }
              },
              "Success"
            ),
            React.createElement(
              Button,
              {
                className: "btn-link mr-1",
                color: "info",
                href: "#pablo",
                onClick: function onClick(e) {
                  return e.preventDefault();
                }
              },
              "Info"
            ),
            React.createElement(
              Button,
              {
                className: "btn-link mr-1",
                color: "warning",
                href: "#pablo",
                onClick: function onClick(e) {
                  return e.preventDefault();
                }
              },
              "Warning"
            ),
            React.createElement(
              Button,
              {
                className: "btn-link mr-1",
                color: "danger",
                href: "#pablo",
                onClick: function onClick(e) {
                  return e.preventDefault();
                }
              },
              "Danger"
            ),
            React.createElement(
              Button,
              {
                className: "btn-link",
                color: "neutral",
                href: "#pablo",
                onClick: function onClick(e) {
                  return e.preventDefault();
                }
              },
              "Neutral"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "title" },
          React.createElement(
            "h3",
            null,
            "Inputs"
          )
        ),
        React.createElement(
          Row,
          null,
          React.createElement(
            Col,
            { sm: "3" },
            React.createElement(
              FormGroup,
              null,
              React.createElement(Input, { placeholder: "Default", type: "text" })
            )
          ),
          React.createElement(
            Col,
            { sm: "3" },
            React.createElement(
              FormGroup,
              { className: "has-success" },
              React.createElement(Input, {
                className: "form-control-success",
                defaultValue: "Success",
                id: "inputSuccess1",
                type: "text"
              })
            )
          ),
          React.createElement(
            Col,
            { sm: "3" },
            React.createElement(
              FormGroup,
              { className: "has-danger" },
              React.createElement(Input, {
                className: "form-control-danger",
                defaultValue: "Error",
                id: "inputDanger1",
                type: "text"
              }),
              React.createElement(
                "div",
                { className: "form-control-feedback" },
                "Sorry, that username's taken. Try another?"
              )
            )
          ),
          React.createElement(
            Col,
            { sm: "3" },
            React.createElement(
              InputGroup,
              null,
              React.createElement(Input, { placeholder: "Username", type: "text" }),
              React.createElement(
                InputGroupAddon,
                { addonType: "append" },
                React.createElement(
                  InputGroupText,
                  null,
                  React.createElement("i", { "aria-hidden": true, className: "fa fa-group" })
                )
              )
            )
          )
        ),
        React.createElement("br", null),
        React.createElement(
          Row,
          null,
          React.createElement(
            Col,
            { lg: "3", sm: "6" },
            React.createElement(
              "div",
              { className: "title" },
              React.createElement(
                "h3",
                null,
                "Checkboxes"
              )
            ),
            React.createElement(
              FormGroup,
              { check: true },
              React.createElement(
                Label,
                { check: true },
                React.createElement(Input, { defaultValue: "", type: "checkbox" }),
                "Unchecked ",
                React.createElement("span", { className: "form-check-sign" })
              )
            ),
            React.createElement(
              FormGroup,
              { check: true },
              React.createElement(
                Label,
                { check: true },
                React.createElement(Input, { defaultChecked: true, defaultValue: "", type: "checkbox" }),
                "Checked ",
                React.createElement("span", { className: "form-check-sign" })
              )
            ),
            React.createElement(
              FormGroup,
              { check: true, disabled: true },
              React.createElement(
                Label,
                { check: true },
                React.createElement(Input, { defaultValue: "", disabled: true, type: "checkbox" }),
                "Disabled unchecked ",
                React.createElement("span", { className: "form-check-sign" })
              )
            ),
            React.createElement(
              FormGroup,
              { check: true, disabled: true },
              React.createElement(
                Label,
                { check: true },
                React.createElement(Input, {
                  defaultChecked: true,
                  defaultValue: "",
                  disabled: true,
                  type: "checkbox"
                }),
                "Disabled checked ",
                React.createElement("span", { className: "form-check-sign" })
              )
            )
          ),
          React.createElement(
            Col,
            { lg: "3", sm: "6" },
            React.createElement(
              "div",
              { className: "title" },
              React.createElement(
                "h3",
                null,
                "Radio Buttons"
              )
            ),
            React.createElement(
              "div",
              { className: "form-check-radio" },
              React.createElement(
                Label,
                { check: true },
                React.createElement(Input, {
                  defaultValue: "option1",
                  id: "exampleRadios1",
                  name: "exampleRadios",
                  type: "radio"
                }),
                "Radio is off ",
                React.createElement("span", { className: "form-check-sign" })
              )
            ),
            React.createElement(
              "div",
              { className: "form-check-radio" },
              React.createElement(
                Label,
                { check: true },
                React.createElement(Input, {
                  defaultChecked: true,
                  defaultValue: "option2",
                  id: "exampleRadios2",
                  name: "exampleRadios",
                  type: "radio"
                }),
                "Radio is on ",
                React.createElement("span", { className: "form-check-sign" })
              )
            ),
            React.createElement(
              "div",
              { className: "form-check-radio disabled" },
              React.createElement(
                Label,
                { check: true },
                React.createElement(Input, {
                  defaultValue: "option3",
                  disabled: true,
                  id: "exampleRadios3",
                  name: "exampleRadios",
                  type: "radio"
                }),
                "Disabled radio is off ",
                React.createElement("span", { className: "form-check-sign" })
              )
            ),
            React.createElement(
              "div",
              { className: "form-check-radio disabled" },
              React.createElement(
                Label,
                { check: true },
                React.createElement(Input, {
                  defaultChecked: true,
                  defaultValue: "option4",
                  disabled: true,
                  id: "exampleRadios4",
                  name: "exampleRadioz",
                  type: "radio"
                }),
                "Disabled radio is on ",
                React.createElement("span", { className: "form-check-sign" })
              )
            )
          ),
          React.createElement(
            Col,
            { lg: "3", sm: "6" },
            React.createElement(
              "div",
              { className: "title" },
              React.createElement(
                "h3",
                null,
                "Toggle Buttons"
              )
            ),
            React.createElement(
              "div",
              { id: "switches" },
              React.createElement(
                "label",
                null,
                React.createElement(Switch, { onColor: "primary", offColor: "primary" })
              ),
              React.createElement("br", null),
              React.createElement(
                "label",
                null,
                React.createElement(Switch, {
                  defaultValue: false,
                  onColor: "primary",
                  offColor: "primary"
                })
              )
            )
          ),
          React.createElement(
            Col,
            { lg: "3", sm: "6" },
            React.createElement(
              "div",
              { className: "title" },
              React.createElement(
                "h3",
                null,
                "Sliders"
              )
            ),
            React.createElement("div", { className: "slider", id: "sliderRegular" }),
            React.createElement("br", null),
            React.createElement("div", { className: "slider slider-primary", id: "sliderDouble" })
          )
        )
      )
    )
  );
}

export default SectionButtons;