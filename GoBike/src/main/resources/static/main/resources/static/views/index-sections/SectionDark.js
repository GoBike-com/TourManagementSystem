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
import { Container, Row, Col } from "reactstrap";

// core components

function SectionDark() {
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
          null,
          React.createElement(
            Col,
            { className: "ml-auto mr-auto text-center", md: "8" },
            React.createElement(
              "h2",
              { className: "title" },
              "Completed with examples"
            ),
            React.createElement(
              "p",
              { className: "description" },
              "The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful kit."
            )
          )
        )
      )
    )
  );
}

export default SectionDark;