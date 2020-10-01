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
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function SectionDownload() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "section" },
      React.createElement(
        Container,
        { className: "text-center" },
        React.createElement(
          Row,
          null,
          React.createElement(
            Col,
            { className: "ml-auto mr-auto text-center", md: "8" },
            React.createElement(
              "h2",
              { className: "title" },
              "Do you like what you see?"
            ),
            React.createElement(
              "p",
              { className: "description" },
              "Cause if you do, it can be yours for Free. Hit the button below and download it. Start a new project or give an old Bootstrap 4 project a new look."
            )
          ),
          React.createElement(
            Col,
            { className: "ml-auto mr-auto download-area", md: "5" },
            React.createElement(
              Button,
              {
                className: "btn-round",
                color: "danger",
                href: "http://www.creative-tim.com/product/paper-kit-react?ref=pkr-index-page",
                target: "_blank"
              },
              "Download free React"
            )
          )
        ),
        React.createElement(
          Row,
          { className: "text-center upgrade-pro" },
          React.createElement(
            Col,
            { className: "ml-auto mr-auto", md: "8" },
            React.createElement(
              "h2",
              { className: "title" },
              "Want more?"
            ),
            React.createElement(
              "p",
              { className: "description" },
              "We're going to launch",
              " ",
              React.createElement(
                "a",
                { className: "text-danger", href: "#pablo", disabled: true },
                "Paper Kit PRO React in a few weeks"
              ),
              ". It will have a huge number of components, sections and example pages."
            )
          ),
          React.createElement(
            Col,
            { className: "ml-auto mr-auto", sm: "5" },
            React.createElement(
              Button,
              { className: "btn-round", color: "info", href: "#pablo", disabled: true },
              React.createElement("i", { "aria-hidden": true, className: "nc-icon nc-spaceship" }),
              " ",
              "Upgrade to PRO"
            )
          )
        ),
        React.createElement(
          Row,
          { className: "justify-content-md-center sharing-area text-center" },
          React.createElement(
            Col,
            { className: "text-center", lg: "8", md: "12" },
            React.createElement(
              "h3",
              null,
              "Thank you for supporting us!"
            )
          ),
          React.createElement(
            Col,
            { className: "text-center", lg: "8", md: "12" },
            React.createElement(
              Button,
              {
                className: "twitter-sharrre btn-round",
                color: "twitter-bg",
                href: "#pablo",
                id: "tooltip3373767",
                onClick: function onClick(e) {
                  return e.preventDefault();
                }
              },
              React.createElement("i", { className: "fa fa-twitter" }),
              " Twitter"
            ),
            React.createElement(
              UncontrolledTooltip,
              { delay: 0, target: "tooltip3373767" },
              "Tweet!"
            ),
            React.createElement(
              Button,
              {
                className: "linkedin-sharrre btn-round  ml-2",
                color: "google-bg",
                href: "#pablo",
                id: "tooltip840791273",
                onClick: function onClick(e) {
                  return e.preventDefault();
                }
              },
              React.createElement("i", { className: "fa fa-google-plus" }),
              " Google"
            ),
            React.createElement(
              UncontrolledTooltip,
              { delay: 0, target: "tooltip840791273" },
              "Share!"
            ),
            React.createElement(
              Button,
              {
                className: "facebook-sharrre btn-round ml-2",
                color: "facebook-bg",
                href: "#pablo",
                id: "tooltip68961360",
                onClick: function onClick(e) {
                  return e.preventDefault();
                }
              },
              React.createElement("i", { className: "fa fa-facebook-square" }),
              " Facebook"
            ),
            React.createElement(
              UncontrolledTooltip,
              { delay: 0, target: "tooltip68961360" },
              "Share!"
            ),
            React.createElement(
              Button,
              {
                className: "sharrre btn-round ml-2",
                color: "github-bg",
                href: "https://github.com/creativetimofficial/paper-kit-react?ref=creativetim",
                target: "_blank",
                id: "tooltip864353654"
              },
              React.createElement("i", { className: "fa fa-github" }),
              " Star"
            ),
            React.createElement(
              UncontrolledTooltip,
              { delay: 0, target: "tooltip864353654" },
              "Star on Github"
            )
          )
        )
      )
    )
  );
}

export default SectionDownload;