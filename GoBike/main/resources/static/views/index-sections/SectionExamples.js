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
import { Button, Container, Row, Col } from "reactstrap";

// core components

function SectionExamples() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "section section-dark" },
      React.createElement(
        Container,
        null,
        React.createElement(
          Row,
          { className: "example-page" },
          React.createElement(
            Col,
            { className: "text-center", md: "6" },
            React.createElement(
              "a",
              { href: "examples/landing.html", target: "_blank" },
              React.createElement("img", {
                alt: "...",
                className: "img-rounded img-responsive",
                src: require("assets/img/examples/landing-page.png"),
                style: { width: "100%" }
              })
            ),
            React.createElement(
              Button,
              {
                className: "btn-outline-neutral btn-round",
                color: "default",
                href: "/landing-page",
                target: "_blank"
              },
              "Landing Page"
            )
          ),
          React.createElement(
            Col,
            { className: "text-center", md: "6" },
            React.createElement(
              "a",
              { href: "examples/profile.html", target: "_blank" },
              React.createElement("img", {
                alt: "...",
                className: "img-rounded img-responsive",
                src: require("assets/img/examples/profile-page.png"),
                style: { width: "100%" }
              })
            ),
            React.createElement(
              Button,
              {
                className: "btn-outline-neutral btn-round",
                color: "default",
                href: "/profile-page",
                target: "_blank"
              },
              "Profile Page"
            )
          )
        )
      )
    ),
    " "
  );
}

export default SectionExamples;