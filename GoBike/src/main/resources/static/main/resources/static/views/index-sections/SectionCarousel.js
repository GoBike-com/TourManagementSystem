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
import { Card, Container, Row, Col, Carousel, CarouselItem, CarouselIndicators, CarouselCaption } from "reactstrap";

// core components

var items = [{
  src: require("assets/img/soroush-karimi.jpg"),
  altText: "Somewhere",
  caption: "Somewhere"
}, {
  src: require("assets/img/federico-beccari.jpg"),
  altText: "Somewhere else",
  caption: "Somewhere else"
}, {
  src: require("assets/img/joshua-stannard.jpg"),
  altText: "Here it is",
  caption: "Here it is"
}];

function SectionCarousel() {
  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      activeIndex = _React$useState2[0],
      setActiveIndex = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      animating = _React$useState4[0],
      setAnimating = _React$useState4[1];

  var onExiting = function onExiting() {
    setAnimating(true);
  };
  var onExited = function onExited() {
    setAnimating(false);
  };
  var next = function next() {
    if (animating) return;
    var nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  var previous = function previous() {
    if (animating) return;
    var nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  var goToIndex = function goToIndex(newIndex) {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "section pt-o", id: "carousel" },
      React.createElement(
        Container,
        null,
        React.createElement(
          Row,
          null,
          React.createElement(
            Col,
            { className: "ml-auto mr-auto", md: "8" },
            React.createElement(
              Card,
              { className: "page-carousel" },
              React.createElement(
                Carousel,
                {
                  activeIndex: activeIndex,
                  next: next,
                  previous: previous
                },
                React.createElement(CarouselIndicators, {
                  items: items,
                  activeIndex: activeIndex,
                  onClickHandler: goToIndex
                }),
                items.map(function (item) {
                  return React.createElement(
                    CarouselItem,
                    {
                      onExiting: onExiting,
                      onExited: onExited,
                      key: item.src
                    },
                    React.createElement("img", { src: item.src, alt: item.altText }),
                    React.createElement(CarouselCaption, {
                      captionText: item.caption,
                      captionHeader: ""
                    })
                  );
                }),
                React.createElement(
                  "a",
                  {
                    className: "left carousel-control carousel-control-prev",
                    "data-slide": "prev",
                    href: "#pablo",
                    onClick: function onClick(e) {
                      e.preventDefault();
                      previous();
                    },
                    role: "button"
                  },
                  React.createElement("span", { className: "fa fa-angle-left" }),
                  React.createElement(
                    "span",
                    { className: "sr-only" },
                    "Previous"
                  )
                ),
                React.createElement(
                  "a",
                  {
                    className: "right carousel-control carousel-control-next",
                    "data-slide": "next",
                    href: "#pablo",
                    onClick: function onClick(e) {
                      e.preventDefault();
                      next();
                    },
                    role: "button"
                  },
                  React.createElement("span", { className: "fa fa-angle-right" }),
                  React.createElement(
                    "span",
                    { className: "sr-only" },
                    "Next"
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

export default SectionCarousel;