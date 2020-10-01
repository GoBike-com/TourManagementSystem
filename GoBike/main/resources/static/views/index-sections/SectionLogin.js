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
import { Button, Card, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Container, Row, Col } from "reactstrap";

// core components

function SectionLogin() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      {
        className: "section section-image section-login",
        style: {
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")"
        }
      },
      React.createElement(
        Container,
        null,
        React.createElement(
          Row,
          null,
          React.createElement(
            Col,
            { className: "mx-auto", lg: "4", md: "6" },
            React.createElement(
              Card,
              { className: "card-register" },
              React.createElement(
                "h3",
                { className: "title mx-auto" },
                "Welcome"
              ),
              React.createElement(
                "div",
                { className: "social-line text-center" },
                React.createElement(
                  Button,
                  {
                    className: "btn-neutral btn-just-icon mt-0",
                    color: "facebook",
                    href: "#pablo",
                    onClick: function onClick(e) {
                      return e.preventDefault();
                    }
                  },
                  React.createElement("i", { className: "fa fa-facebook-square" })
                ),
                React.createElement(
                  Button,
                  {
                    className: "btn-neutral btn-just-icon mt-0 ml-1",
                    color: "google",
                    href: "#pablo",
                    onClick: function onClick(e) {
                      return e.preventDefault();
                    }
                  },
                  React.createElement("i", { className: "fa fa-google-plus" })
                ),
                React.createElement(
                  Button,
                  {
                    className: "btn-neutral btn-just-icon mt-0 ml-1",
                    color: "twitter",
                    href: "#pablo",
                    onClick: function onClick(e) {
                      return e.preventDefault();
                    }
                  },
                  React.createElement("i", { className: "fa fa-twitter" })
                )
              ),
              React.createElement(
                Form,
                { className: "register-form" },
                React.createElement(
                  "label",
                  null,
                  "Email"
                ),
                React.createElement(
                  InputGroup,
                  { className: "form-group-no-border" },
                  React.createElement(
                    InputGroupAddon,
                    { addonType: "prepend" },
                    React.createElement(
                      InputGroupText,
                      null,
                      React.createElement("i", { className: "nc-icon nc-email-85" })
                    )
                  ),
                  React.createElement(Input, { placeholder: "Email", type: "email" })
                ),
                React.createElement(
                  "label",
                  null,
                  "Password"
                ),
                React.createElement(
                  InputGroup,
                  { className: "form-group-no-border" },
                  React.createElement(
                    InputGroupAddon,
                    { addonType: "prepend" },
                    React.createElement(
                      InputGroupText,
                      null,
                      React.createElement("i", { className: "nc-icon nc-key-25" })
                    )
                  ),
                  React.createElement(Input, { placeholder: "Password", type: "password" })
                ),
                React.createElement(
                  Button,
                  {
                    block: true,
                    className: "btn-round",
                    color: "danger",
                    type: "button"
                  },
                  "Register"
                )
              ),
              React.createElement(
                "div",
                { className: "forgot" },
                React.createElement(
                  Button,
                  {
                    className: "btn-link",
                    color: "danger",
                    href: "#pablo",
                    onClick: function onClick(e) {
                      return e.preventDefault();
                    }
                  },
                  "Forgot password?"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "col text-center" },
              React.createElement(
                Button,
                {
                  className: "btn-round",
                  outline: true,
                  color: "neutral",
                  href: "/register-page",
                  size: "lg",
                  target: "_blank"
                },
                "View Register Page"
              )
            )
          )
        )
      )
    ),
    " "
  );
}

export default SectionLogin;