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
import { UncontrolledCollapse, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

function SectionNavbars() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "section section-navbars" },
      React.createElement(
        Container,
        { id: "menu-dropdown" },
        React.createElement(
          "div",
          { className: "title" },
          React.createElement(
            "h3",
            null,
            "Menu"
          )
        ),
        React.createElement("br", null),
        React.createElement(
          Row,
          null,
          React.createElement(
            Col,
            { md: "6" },
            React.createElement(
              Navbar,
              { className: "bg-primary", expand: "lg" },
              React.createElement(
                NavbarBrand,
                { href: "#pablo", onClick: function onClick(e) {
                    return e.preventDefault();
                  } },
                "Menu"
              ),
              React.createElement(
                "button",
                {
                  "aria-controls": "navbarSupportedContent",
                  "aria-expanded": false,
                  "aria-label": "Toggle navigation",
                  className: "navbar-toggler navbar-toggler-right",
                  "data-target": "#navbar-menu",
                  "data-toggle": "collapse",
                  id: "navbar-menu",
                  type: "button"
                },
                React.createElement("span", { className: "navbar-toggler-bar" }),
                React.createElement("span", { className: "navbar-toggler-bar" }),
                React.createElement("span", { className: "navbar-toggler-bar" })
              ),
              React.createElement(
                UncontrolledCollapse,
                { navbar: true, toggler: "#navbar-menu" },
                React.createElement(
                  Nav,
                  { className: "mr-auto", navbar: true },
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
                      "Link"
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
                      "Link"
                    )
                  ),
                  React.createElement(
                    UncontrolledDropdown,
                    { nav: true, inNavbar: true },
                    React.createElement(
                      DropdownToggle,
                      {
                        "aria-expanded": false,
                        "aria-haspopup": true,
                        caret: true,
                        color: "default",
                        "data-toggle": "dropdown",
                        href: "#pablo",
                        id: "dropdownMenuButton",
                        nav: true,
                        onClick: function onClick(e) {
                          return e.preventDefault();
                        },
                        role: "button"
                      },
                      "Dropdown"
                    ),
                    React.createElement(
                      DropdownMenu,
                      {
                        "aria-labelledby": "dropdownMenuButton",
                        className: "dropdown-info"
                      },
                      React.createElement(
                        DropdownItem,
                        { header: true, tag: "span" },
                        "Dropdown header"
                      ),
                      React.createElement(
                        DropdownItem,
                        {
                          href: "#pablo",
                          onClick: function onClick(e) {
                            return e.preventDefault();
                          }
                        },
                        "Action"
                      ),
                      React.createElement(
                        DropdownItem,
                        {
                          href: "#pablo",
                          onClick: function onClick(e) {
                            return e.preventDefault();
                          }
                        },
                        "Another action"
                      ),
                      React.createElement(
                        DropdownItem,
                        {
                          href: "#pablo",
                          onClick: function onClick(e) {
                            return e.preventDefault();
                          }
                        },
                        "Something else here"
                      ),
                      React.createElement(DropdownItem, { divider: true }),
                      React.createElement(
                        DropdownItem,
                        {
                          href: "#pablo",
                          onClick: function onClick(e) {
                            return e.preventDefault();
                          }
                        },
                        "Separated link"
                      ),
                      React.createElement(DropdownItem, { divider: true }),
                      React.createElement(
                        DropdownItem,
                        {
                          href: "#pablo",
                          onClick: function onClick(e) {
                            return e.preventDefault();
                          }
                        },
                        "Another separated link"
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
              Navbar,
              { className: "bg-danger", expand: "lg" },
              React.createElement(
                NavbarBrand,
                { href: "#pablo", onClick: function onClick(e) {
                    return e.preventDefault();
                  } },
                "Icons"
              ),
              React.createElement(
                "button",
                {
                  "aria-controls": "navbarSupportedContent",
                  "aria-expanded": false,
                  "aria-label": "Toggle navigation",
                  className: "navbar-toggler navbar-toggler-right",
                  "data-target": "#navbar-menu-icon",
                  "data-toggle": "collapse",
                  id: "navbar-menu-icon",
                  type: "button"
                },
                React.createElement("span", { className: "navbar-toggler-bar" }),
                React.createElement("span", { className: "navbar-toggler-bar" }),
                React.createElement("span", { className: "navbar-toggler-bar" })
              ),
              React.createElement(
                UncontrolledCollapse,
                { navbar: true, toggler: "#navbar-menu-icon" },
                React.createElement(
                  Nav,
                  { className: "ml-auto", navbar: true },
                  React.createElement(
                    NavItem,
                    { className: "active" },
                    React.createElement(
                      NavLink,
                      {
                        href: "#pablo",
                        onClick: function onClick(e) {
                          return e.preventDefault();
                        }
                      },
                      React.createElement("i", { "aria-hidden": true, className: "nc-icon nc-email-85" })
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
                    UncontrolledDropdown,
                    { nav: true, inNavbar: true },
                    React.createElement(
                      DropdownToggle,
                      {
                        "aria-expanded": false,
                        "aria-haspopup": true,
                        caret: true,
                        color: "default",
                        "data-toggle": "dropdown",
                        href: "#pablo",
                        nav: true,
                        onClick: function onClick(e) {
                          return e.preventDefault();
                        },
                        role: "button"
                      },
                      React.createElement("i", {
                        "aria-hidden": true,
                        className: "nc-icon nc-settings-gear-65"
                      })
                    ),
                    React.createElement(
                      DropdownMenu,
                      { className: "dropdown-danger", right: true },
                      React.createElement(
                        DropdownItem,
                        { header: true, tag: "span" },
                        "Dropdown header"
                      ),
                      React.createElement(
                        DropdownItem,
                        {
                          href: "#pablo",
                          onClick: function onClick(e) {
                            return e.preventDefault();
                          }
                        },
                        "Another action"
                      ),
                      React.createElement(
                        DropdownItem,
                        {
                          href: "#pablo",
                          onClick: function onClick(e) {
                            return e.preventDefault();
                          }
                        },
                        "Something else here"
                      ),
                      React.createElement(DropdownItem, { divider: true }),
                      React.createElement(
                        DropdownItem,
                        {
                          href: "#pablo",
                          onClick: function onClick(e) {
                            return e.preventDefault();
                          }
                        },
                        "Separated link"
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  );
}

export default SectionNavbars;