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

function SectionNucleoIcons() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "section section-dark section-nucleo-icons" },
      React.createElement(
        Container,
        null,
        React.createElement(
          Row,
          null,
          React.createElement(
            Col,
            { lg: "6", md: "12" },
            React.createElement(
              "h2",
              { className: "title" },
              "Nucleo Icons"
            ),
            React.createElement("br", null),
            React.createElement(
              "p",
              { className: "description" },
              "Paper Kit comes with 100 custom icons made by our friends from NucleoApp. The official package contains over 2.100 thin icons which are looking great in combination with Paper Kit Make sure you check all of them and use those that you like the most."
            ),
            React.createElement("br", null),
            React.createElement(
              Button,
              {
                className: "btn-round",
                color: "danger",
                href: "/nucleo-icons",
                target: "_blank"
              },
              "View Demo Icons"
            ),
            React.createElement(
              Button,
              {
                className: "btn-round ml-1",
                color: "danger",
                href: "https://nucleoapp.com/?ref=1712",
                outline: true,
                target: "_blank"
              },
              "View All Icons"
            )
          ),
          React.createElement(
            Col,
            { lg: "6", md: "12" },
            React.createElement(
              "div",
              { className: "icons-container" },
              React.createElement("i", { className: "nc-icon nc-time-alarm" }),
              React.createElement("i", { className: "nc-icon nc-atom" }),
              React.createElement("i", { className: "nc-icon nc-camera-compact" }),
              React.createElement("i", { className: "nc-icon nc-watch-time" }),
              React.createElement("i", { className: "nc-icon nc-key-25" }),
              React.createElement("i", { className: "nc-icon nc-diamond" }),
              React.createElement("i", { className: "nc-icon nc-user-run" }),
              React.createElement("i", { className: "nc-icon nc-layout-11" }),
              React.createElement("i", { className: "nc-icon nc-badge" }),
              React.createElement("i", { className: "nc-icon nc-bulb-63" }),
              React.createElement("i", { className: "nc-icon nc-favourite-28" }),
              React.createElement("i", { className: "nc-icon nc-planet" }),
              React.createElement("i", { className: "nc-icon nc-tie-bow" }),
              React.createElement("i", { className: "nc-icon nc-zoom-split" }),
              React.createElement("i", { className: "nc-icon nc-cloud-download-93" })
            )
          )
        )
      )
    ),
    " "
  );
}

export default SectionNucleoIcons;