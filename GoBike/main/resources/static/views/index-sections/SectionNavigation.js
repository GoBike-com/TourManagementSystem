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
import { UncontrolledCollapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container } from "reactstrap";

// core components

function SectionNavigation() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "section section-navigation" },
      React.createElement(
        Container,
        { className: "tim-container" },
        React.createElement(
          "div",
          { className: "title" },
          React.createElement(
            "h3",
            null,
            "Navigation Areas"
          )
        )
      ),
      React.createElement(
        "div",
        { id: "navbar" },
        React.createElement(
          "div",
          {
            className: "navigation-example",
            style: {
              backgroundImage: "url(" + require("assets/img/ilya-yakover.jpg") + ")"
            }
          },
          React.createElement(
            Navbar,
            { className: "bg-primary", expand: "lg" },
            React.createElement(
              Container,
              null,
              React.createElement(
                NavbarBrand,
                { href: "#pablo", onClick: function onClick(e) {
                    return e.preventDefault();
                  } },
                "Primary Color"
              ),
              React.createElement(
                "button",
                {
                  "aria-controls": "navbarNav",
                  "aria-expanded": false,
                  "aria-label": "Toggle navigation",
                  className: "navbar-toggler navbar-toggler-right burger-menu",
                  "data-target": "#navbar-primary",
                  "data-toggle": "collapse",
                  id: "navbar-primary",
                  type: "button"
                },
                React.createElement("span", { className: "navbar-toggler-bar" }),
                React.createElement("span", { className: "navbar-toggler-bar" }),
                React.createElement("span", { className: "navbar-toggler-bar" })
              ),
              React.createElement(
                UncontrolledCollapse,
                { navbar: true, toggler: "#navbar-primary" },
                React.createElement(
                  Nav,
                  { className: "ml-auto", navbar: true },
                  React.createElement(
                    NavItem,
                    null,
                    React.createElement(
                      NavLink,
                      {
                        href: "#pablo",
                        onClick: function onClick(e) {
                          return e.preventDefault();
                        }
                      },
                      React.createElement("i", {
                        "aria-hidden": true,
                        className: "nc-icon nc-compass-05"
                      }),
                      "\xA0Discover"
                    )
                  ),
                  React.createElement(
                    NavItem,
                    null,
                    React.createElement(
                      NavLink,
                      {
                        href: "#pablo",
                        onClick: function onClick(e) {
                          return e.preventDefault();
                        }
                      },
                      React.createElement("i", {
                        "aria-hidden": true,
                        className: "nc-icon nc-single-02"
                      }),
                      "\xA0Profile"
                    )
                  ),
                  React.createElement(
                    NavItem,
                    null,
                    React.createElement(
                      NavLink,
                      {
                        href: "#pablo",
                        onClick: function onClick(e) {
                          return e.preventDefault();
                        }
                      },
                      React.createElement("i", {
                        "aria-hidden": true,
                        className: "nc-icon nc-settings-gear-65"
                      }),
                      "\xA0Settings"
                    )
                  )
                )
              )
            )
          ),
          React.createElement(
            Navbar,
            { className: "bg-info", expand: "lg" },
            React.createElement(
              Container,
              null,
              React.createElement(
                NavbarBrand,
                { href: "#pablo", onClick: function onClick(e) {
                    return e.preventDefault();
                  } },
                "Info Color"
              ),
              React.createElement(
                "button",
                {
                  "aria-controls": "navbarNav",
                  "aria-expanded": false,
                  "aria-label": "Toggle navigation",
                  className: "navbar-toggler navbar-toggler-right",
                  "data-target": "#navbar-info",
                  "data-toggle": "collapse",
                  id: "navbar-info",
                  type: "button"
                },
                React.createElement("span", { className: "navbar-toggler-bar" }),
                React.createElement("span", { className: "navbar-toggler-bar" }),
                React.createElement("span", { className: "navbar-toggler-bar" })
              ),
              React.createElement(
                UncontrolledCollapse,
                { navbar: true, toggler: "#navbar-info" },
                React.createElement(
                  Nav,
                  { className: "ml-auto", navbar: true },
                  React.createElement(
                    NavItem,
                    null,
                    React.createElement(
                      NavLink,
                      {
                        href: "#pablo",
                        onClick: function onClick(e) {
                          return e.preventDefault();
                        }
                      },
                      "Discover"
                    )
                  ),
                  React.createElement(
                    NavItem,
                    null,
                    React.createElement(
                      NavLink,
                      {
                        href: "#pablo",
                        onClick: function onClick(e) {
                          return e.preventDefault();
                        }
                      },
                      "Profile"
                    )
                  ),
                  React.createElement(
                    NavItem,
                    null,
                    React.createElement(
                      NavLink,
                      {
                        href: "#pablo",
                        onClick: function onClick(e) {
                          return e.preventDefault();
                        }
                      },
                      "Settings"
                    )
                  )
                )
              )
            )
          ),
          React.createElement(
            Navbar,
            { className: "bg-success", expand: "lg" },
            React.createElement(
              Container,
              null,
              React.createElement(
                NavbarBrand,
                { href: "#pablo", onClick: function onClick(e) {
                    return e.preventDefault();
                  } },
                "Success Color"
              ),
              React.createElement(
                "button",
                {
                  "aria-controls": "navbarNav",
                  "aria-expanded": true,
                  "aria-label": "Toggle navigation",
                  className: "navbar-toggler navbar-toggler-right",
                  "data-target": "#navbar-success",
                  "data-toggle": "collapse",
                  id: "navbar-success",
                  type: "button"
                },
                React.createElement("span", { className: "navbar-toggler-bar" }),
                React.createElement("span", { className: "navbar-toggler-bar" }),
                React.createElement("span", { className: "navbar-toggler-bar" })
              ),
              React.createElement(
                UncontrolledCollapse,
                {
                  navbar: true,
                  style: {},
                  toggler: "#navbar-success"
                },
                React.createElement(
                  Nav,
                  { className: "ml-auto", navbar: true },
                  React.createElement(
                    NavItem,
                    null,
                    React.createElement(
                      NavLink,
                      {
                        href: "#pablo",
                        onClick: function onClick(e) {
                          return e.preventDefault();
                        }
                      },
                      React.createElement("i", {
                        "aria-hidden": true,
                        className: "nc-icon nc-compass-05"
                      })
                    )
                  ),
                  React.createElement(
                    NavItem,
                    null,
                    React.createElement(
                      NavLink,
                      {
                        href: "#pablo",
                        onClick: function onClick(e) {
                          return e.preventDefault();
                        }
                      },
                      React.createElement("i", {
                        "aria-hidden": true,
                        className: "nc-icon nc-single-02"
                      })
                    )
                  ),
                  React.createElement(
                    NavItem,
                    null,
                    React.createElement(
                      NavLink,
                      {
                        href: "#pablo",
                        onClick: function onClick(e) {
                          return e.preventDefault();
                        }
                      },
                      React.createElement("i", {
                        "aria-hidden": true,
                        className: "nc-icon nc-settings-gear-65"
                      })
                    )
                  )
                )
              )
            )
          ),
          React.createElement(
            Navbar,
            { className: "bg-warning", expand: "lg" },
            React.createElement(
              Container,
              null,
              React.createElement(
                NavbarBrand,
                { href: "#pablo", onClick: function onClick(e) {
                    return e.preventDefault();
                  } },
                "Warning Color"
              ),
              React.createElement(
                "button",
                {
                  "aria-controls": "navbarNav",
                  "aria-expanded": false,
                  "aria-label": "Toggle navigation",
                  className: "navbar-toggler navbar-toggler-right",
                  "data-target": "#navbar-warning",
                  "data-toggle": "collapse",
                  id: "navbar-warning",
                  type: "button"
                },
                React.createElement("span", { className: "navbar-toggler-bar" }),
                React.createElement("span", { className: "navbar-toggler-bar" }),
                React.createElement("span", { className: "navbar-toggler-bar" })
              ),
              React.createElement(
                UncontrolledCollapse,
                { navbar: true, toggler: "#navbar-warning" },
                React.createElement(
                  Nav,
                  { className: "ml-auto", navbar: true },
                  React.createElement(
                    NavItem,
                    null,
                    React.createElement(
                      NavLink,
                      {
                        href: "#pablo",
                        onClick: function onClick(e) {
                          return e.preventDefault();
                        }
                      },
                      React.createElement("i", {
                        "aria-hidden": true,
                        className: "fa fa-facebook-official"
                      })
                    )
                  ),
                  React.createElement(
                    NavItem,
                    null,
                    React.createElement(
                      NavLink,
                      {
                        href: "#pablo",
                        onClick: function onClick(e) {
                          return e.preventDefault();
                        }
                      },
                      React.createElement("i", { "aria-hidden": true, className: "fa fa-twitter" })
                    )
                  ),
                  React.createElement(
                    NavItem,
                    null,
                    React.createElement(
                      NavLink,
                      {
                        href: "#pablo",
                        onClick: function onClick(e) {
                          return e.preventDefault();
                        }
                      },
                      React.createElement("i", { "aria-hidden": true, className: "fa fa-google-plus" })
                    )
                  ),
                  React.createElement(
                    NavItem,
                    null,
                    React.createElement(
                      NavLink,
                      {
                        href: "#pablo",
                        onClick: function onClick(e) {
                          return e.preventDefault();
                        }
                      },
                      React.createElement("i", { "aria-hidden": true, className: "fa fa-instagram" })
                    )
                  )
                )
              )
            )
          ),
          React.createElement(
            Navbar,
            { className: "bg-danger", expand: "lg" },
            React.createElement(
              Container,
              null,
              React.createElement(
                NavbarBrand,
                { href: "#pablo", onClick: function onClick(e) {
                    return e.preventDefault();
                  } },
                "Danger Color"
              ),
              React.createElement(
                "button",
                {
                  "aria-controls": "navbarNav",
                  "aria-expanded": true,
                  "aria-label": "Toggle navigation",
                  className: "navbar-toggler navbar-toggler-right",
                  "data-target": "#navbar-danger",
                  "data-toggle": "collapse",
                  id: "navbar-danger",
                  type: "button"
                },
                React.createElement("span", { className: "navbar-toggler-bar" }),
                React.createElement("span", { className: "navbar-toggler-bar" }),
                React.createElement("span", { className: "navbar-toggler-bar" })
              ),
              React.createElement(
                UncontrolledCollapse,
                {
                  navbar: true,
                  style: {},
                  toggler: "#navbar-danger"
                },
                React.createElement(
                  Nav,
                  { className: "ml-auto", navbar: true },
                  React.createElement(
                    NavItem,
                    null,
                    React.createElement(
                      NavLink,
                      {
                        href: "#pablo",
                        onClick: function onClick(e) {
                          return e.preventDefault();
                        }
                      },
                      React.createElement("i", {
                        "aria-hidden": true,
                        className: "fa fa-facebook-official"
                      }),
                      "Share"
                    )
                  ),
                  React.createElement(
                    NavItem,
                    null,
                    React.createElement(
                      NavLink,
                      {
                        href: "#pablo",
                        onClick: function onClick(e) {
                          return e.preventDefault();
                        }
                      },
                      React.createElement("i", { "aria-hidden": true, className: "fa fa-twitter" }),
                      "Tweet"
                    )
                  ),
                  React.createElement(
                    NavItem,
                    null,
                    React.createElement(
                      NavLink,
                      {
                        href: "#pablo",
                        onClick: function onClick(e) {
                          return e.preventDefault();
                        }
                      },
                      React.createElement("i", { "aria-hidden": true, className: "fa fa-pinterest" }),
                      "Pin"
                    )
                  )
                )
              )
            )
          ),
          React.createElement(
            Navbar,
            { className: "navbar-transparent pt-0", expand: "lg" },
            React.createElement(
              Container,
              null,
              React.createElement(
                NavbarBrand,
                { href: "#pablo", onClick: function onClick(e) {
                    return e.preventDefault();
                  } },
                "Transparent"
              ),
              React.createElement(
                "button",
                {
                  "aria-controls": "navbarNav",
                  "aria-expanded": false,
                  "aria-label": "Toggle navigation",
                  className: "navbar-toggler navbar-toggler-right",
                  "data-target": "#navbar-transparent",
                  "data-toggle": "collapse",
                  id: "navbar-transparent",
                  type: "button"
                },
                React.createElement("span", { className: "navbar-toggler-bar" }),
                React.createElement("span", { className: "navbar-toggler-bar" }),
                React.createElement("span", { className: "navbar-toggler-bar" })
              ),
              React.createElement(
                UncontrolledCollapse,
                { navbar: true, toggler: "#navbar-transparent" },
                React.createElement(
                  Nav,
                  { className: "ml-auto", navbar: true },
                  React.createElement(
                    NavItem,
                    null,
                    React.createElement(
                      NavLink,
                      {
                        href: "#pablo",
                        onClick: function onClick(e) {
                          return e.preventDefault();
                        }
                      },
                      React.createElement("i", {
                        "aria-hidden": true,
                        className: "fa fa-facebook-official"
                      }),
                      "Facebook"
                    )
                  ),
                  React.createElement(
                    NavItem,
                    null,
                    React.createElement(
                      NavLink,
                      {
                        href: "#pablo",
                        onClick: function onClick(e) {
                          return e.preventDefault();
                        }
                      },
                      React.createElement("i", { "aria-hidden": true, className: "fa fa-twitter" }),
                      "Twitter"
                    )
                  ),
                  React.createElement(
                    NavItem,
                    null,
                    React.createElement(
                      NavLink,
                      {
                        href: "#pablo",
                        onClick: function onClick(e) {
                          return e.preventDefault();
                        }
                      },
                      React.createElement("i", { "aria-hidden": true, className: "fa fa-instagram" }),
                      "Instagram"
                    )
                  )
                )
              )
            )
          )
        )
      )
    ),
    " "
  );
}

export default SectionNavigation;