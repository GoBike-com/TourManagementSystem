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

// reactstrap components
import { NavItem, NavLink, Nav, Pagination, PaginationItem, PaginationLink, Progress, TabContent, TabPane, Container, Row, Col } from "reactstrap";

// core components

function SectionProgress() {
  var _React$useState = React.useState("1"),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      activeTab = _React$useState2[0],
      setActiveTab = _React$useState2[1];

  var toggle = function toggle(tab) {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "section" },
      React.createElement(
        Container,
        null,
        React.createElement(
          Row,
          null,
          React.createElement(
            Col,
            { md: "6" },
            React.createElement(
              "div",
              { className: "title" },
              React.createElement(
                "h3",
                null,
                "Progress Bar"
              ),
              React.createElement("br", null)
            ),
            React.createElement(Progress, {
              max: "100",
              value: "25",
              barClassName: "progress-bar-success"
            }),
            React.createElement("br", null),
            React.createElement(Progress, { max: "100", value: "50", barClassName: "progress-bar-info" }),
            React.createElement("br", null),
            React.createElement(Progress, {
              max: "100",
              value: "100",
              barClassName: "progress-bar-danger"
            }),
            React.createElement("br", null),
            React.createElement(
              Progress,
              { multi: true },
              React.createElement(Progress, { bar: true, max: "100", value: "15" }),
              React.createElement(Progress, {
                bar: true,
                barClassName: "progress-bar-success",
                max: "100",
                value: "30"
              }),
              React.createElement(Progress, {
                bar: true,
                barClassName: "progress-bar-warning",
                max: "100",
                value: "20"
              })
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
                "Pagination"
              ),
              React.createElement("br", null)
            ),
            React.createElement(
              "nav",
              { "aria-label": "Page navigation example" },
              React.createElement(
                Pagination,
                null,
                React.createElement(
                  PaginationItem,
                  null,
                  React.createElement(
                    PaginationLink,
                    {
                      "aria-label": "Previous",
                      href: "#pablo",
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      }
                    },
                    React.createElement("i", { "aria-hidden": true, className: "fa fa-angle-left" }),
                    React.createElement(
                      "span",
                      { className: "sr-only" },
                      "Previous"
                    )
                  )
                ),
                React.createElement(
                  PaginationItem,
                  null,
                  React.createElement(
                    PaginationLink,
                    {
                      href: "#pablo",
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      }
                    },
                    "1"
                  )
                ),
                React.createElement(
                  PaginationItem,
                  null,
                  React.createElement(
                    PaginationLink,
                    {
                      href: "#pablo",
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      }
                    },
                    "2"
                  )
                ),
                React.createElement(
                  PaginationItem,
                  null,
                  React.createElement(
                    PaginationLink,
                    {
                      href: "#pablo",
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      }
                    },
                    "3"
                  )
                ),
                React.createElement(
                  PaginationItem,
                  null,
                  React.createElement(
                    PaginationLink,
                    {
                      href: "#pablo",
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      }
                    },
                    "4"
                  )
                ),
                React.createElement(
                  PaginationItem,
                  null,
                  React.createElement(
                    PaginationLink,
                    {
                      href: "#pablo",
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      }
                    },
                    "5"
                  )
                ),
                React.createElement(
                  PaginationItem,
                  null,
                  React.createElement(
                    PaginationLink,
                    {
                      "aria-label": "Next",
                      href: "#pablo",
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      }
                    },
                    React.createElement("i", { "aria-hidden": true, className: "fa fa-angle-right" }),
                    React.createElement(
                      "span",
                      { className: "sr-only" },
                      "Next"
                    )
                  )
                )
              )
            ),
            React.createElement("br", null),
            React.createElement(
              "nav",
              { "aria-label": "..." },
              React.createElement(
                Pagination,
                null,
                React.createElement(
                  PaginationItem,
                  null,
                  React.createElement(
                    PaginationLink,
                    {
                      href: "#pablo",
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      },
                      tabIndex: "-1"
                    },
                    "Previous"
                  )
                ),
                React.createElement(
                  PaginationItem,
                  null,
                  React.createElement(
                    PaginationLink,
                    {
                      href: "#pablo",
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      }
                    },
                    "1"
                  )
                ),
                React.createElement(
                  PaginationItem,
                  null,
                  React.createElement(
                    PaginationLink,
                    {
                      href: "#pablo",
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      }
                    },
                    "2"
                  )
                ),
                React.createElement(
                  PaginationItem,
                  { className: "active" },
                  React.createElement(
                    PaginationLink,
                    {
                      href: "#pablo",
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      }
                    },
                    "3 ",
                    React.createElement(
                      "span",
                      { className: "sr-only" },
                      "(current)"
                    )
                  )
                ),
                React.createElement(
                  PaginationItem,
                  null,
                  React.createElement(
                    PaginationLink,
                    {
                      href: "#pablo",
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      }
                    },
                    "4"
                  )
                ),
                React.createElement(
                  PaginationItem,
                  null,
                  React.createElement(
                    PaginationLink,
                    {
                      href: "#pablo",
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      }
                    },
                    "5"
                  )
                ),
                React.createElement(
                  PaginationItem,
                  null,
                  React.createElement(
                    PaginationLink,
                    {
                      href: "#pablo",
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      }
                    },
                    "Next"
                  )
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
            { md: "6" },
            React.createElement(
              "div",
              { className: "title" },
              React.createElement(
                "h3",
                null,
                "Navigation Tabs"
              )
            ),
            React.createElement(
              "div",
              { className: "nav-tabs-navigation" },
              React.createElement(
                "div",
                { className: "nav-tabs-wrapper" },
                React.createElement(
                  Nav,
                  { id: "tabs", role: "tablist", tabs: true },
                  React.createElement(
                    NavItem,
                    null,
                    React.createElement(
                      NavLink,
                      {
                        className: activeTab === "1" ? "active" : "",
                        onClick: function onClick() {
                          toggle("1");
                        }
                      },
                      "Home"
                    )
                  ),
                  React.createElement(
                    NavItem,
                    null,
                    React.createElement(
                      NavLink,
                      {
                        className: activeTab === "2" ? "active" : "",
                        onClick: function onClick() {
                          toggle("2");
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
                        className: activeTab === "3" ? "active" : "",
                        onClick: function onClick() {
                          toggle("3");
                        }
                      },
                      "Messages"
                    )
                  )
                )
              )
            ),
            React.createElement(
              TabContent,
              { activeTab: activeTab, className: "text-center" },
              React.createElement(
                TabPane,
                { tabId: "1" },
                React.createElement(
                  "p",
                  null,
                  "Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD display."
                )
              ),
              React.createElement(
                TabPane,
                { tabId: "2" },
                React.createElement(
                  "p",
                  null,
                  "Here is your profile."
                )
              ),
              React.createElement(
                TabPane,
                { tabId: "3" },
                React.createElement(
                  "p",
                  null,
                  "Here are your messages."
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
                "Labels"
              )
            ),
            React.createElement(
              "label",
              { className: "label label-default mr-1" },
              "Default"
            ),
            React.createElement(
              "label",
              { className: "label label-primary mr-1" },
              "Primary"
            ),
            React.createElement(
              "label",
              { className: "label label-info mr-1" },
              "Info"
            ),
            React.createElement(
              "label",
              { className: "label label-success mr-1" },
              "Success"
            ),
            React.createElement(
              "label",
              { className: "label label-warning mr-1" },
              "Warning"
            ),
            React.createElement(
              "label",
              { className: "label label-danger" },
              "Danger"
            )
          )
        )
      )
    ),
    " "
  );
}

export default SectionProgress;