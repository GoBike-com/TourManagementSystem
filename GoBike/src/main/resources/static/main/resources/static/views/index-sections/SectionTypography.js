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

function SectionTypography() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      Container,
      { className: "tim-container" },
      React.createElement(
        "div",
        { className: "title" },
        React.createElement(
          "h3",
          null,
          "Typography"
        )
      ),
      React.createElement(
        "div",
        { id: "typography" },
        React.createElement(
          Row,
          null,
          React.createElement(
            "div",
            { className: "typography-line" },
            React.createElement(
              "h1",
              null,
              React.createElement(
                "span",
                { className: "note" },
                "Header 1"
              ),
              "Thinking in textures"
            )
          ),
          React.createElement(
            "div",
            { className: "typography-line" },
            React.createElement(
              "h2",
              null,
              React.createElement(
                "span",
                { className: "note" },
                "Header 2"
              ),
              "Thinking in textures"
            )
          ),
          React.createElement(
            "div",
            { className: "typography-line" },
            React.createElement(
              "h3",
              null,
              React.createElement(
                "span",
                { className: "note" },
                "Header 3"
              ),
              "Thinking in textures"
            )
          ),
          React.createElement(
            "div",
            { className: "typography-line" },
            React.createElement(
              "h4",
              null,
              React.createElement(
                "span",
                { className: "note" },
                "Header 4"
              ),
              "Thinking in textures"
            )
          ),
          React.createElement(
            "div",
            { className: "typography-line" },
            React.createElement(
              "h5",
              null,
              React.createElement(
                "span",
                { className: "note" },
                "Header 5"
              ),
              "Thinking in textures"
            )
          ),
          React.createElement(
            "div",
            { className: "typography-line" },
            React.createElement(
              "h6",
              null,
              React.createElement(
                "span",
                { className: "note" },
                "Header 6"
              ),
              "Thinking in textures"
            )
          ),
          React.createElement(
            "div",
            { className: "typography-line" },
            React.createElement(
              "p",
              null,
              React.createElement(
                "span",
                { className: "note" },
                "Paragraph"
              ),
              "Thinking in textures"
            )
          ),
          React.createElement(
            "div",
            { className: "typography-line" },
            React.createElement(
              "span",
              { className: "note" },
              "Quote"
            ),
            React.createElement(
              "blockquote",
              { className: "blockquote" },
              React.createElement(
                "p",
                { className: "mb-0" },
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam."
              ),
              React.createElement("br", null),
              React.createElement(
                "footer",
                { className: "blockquote-footer" },
                "Someone famous in",
                " ",
                React.createElement(
                  "cite",
                  { title: "source Title" },
                  "Source Title"
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "typography-line" },
            React.createElement(
              "span",
              { className: "note" },
              "Muted text"
            ),
            React.createElement(
              "p",
              { className: "text-muted" },
              "Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh."
            )
          ),
          React.createElement(
            "div",
            { className: "typography-line" },
            React.createElement(
              "span",
              { className: "note" },
              "Primary text"
            ),
            React.createElement(
              "p",
              { className: "text-primary" },
              "Nullam id dolor id nibh ultricies vehicula ut id elit."
            )
          ),
          React.createElement(
            "div",
            { className: "typography-line" },
            React.createElement(
              "span",
              { className: "note" },
              "Success text"
            ),
            React.createElement(
              "p",
              { className: "text-success" },
              "Duis mollis, est non commodo luctus, nisi erat porttitor ligula."
            )
          ),
          React.createElement(
            "div",
            { className: "typography-line" },
            React.createElement(
              "span",
              { className: "note" },
              "Info text"
            ),
            React.createElement(
              "p",
              { className: "text-info" },
              "Maecenas sed diam eget risus varius blandit sit amet non magna."
            )
          ),
          React.createElement(
            "div",
            { className: "typography-line" },
            React.createElement(
              "span",
              { className: "note" },
              "Warning text"
            ),
            React.createElement(
              "p",
              { className: "text-warning" },
              "Etiam porta sem malesuada magna mollis euismod."
            )
          ),
          React.createElement(
            "div",
            { className: "typography-line" },
            React.createElement(
              "span",
              { className: "note" },
              "Danger text"
            ),
            React.createElement(
              "p",
              { className: "text-danger" },
              "Donec ullamcorper nulla non metus auctor fringilla."
            )
          ),
          React.createElement(
            "div",
            { className: "typography-line" },
            React.createElement(
              "h2",
              null,
              React.createElement(
                "span",
                { className: "note" },
                "Small tag"
              ),
              "Header with small subtitle ",
              React.createElement("br", null),
              React.createElement(
                "small",
                null,
                "\".small\" is a tag for the headers"
              )
            )
          )
        )
      ),
      React.createElement("br", null),
      React.createElement(
        "div",
        { id: "images" },
        React.createElement(
          Container,
          null,
          React.createElement(
            "div",
            { className: "title" },
            React.createElement(
              "h3",
              null,
              "Images"
            )
          ),
          React.createElement(
            Row,
            null,
            React.createElement(
              Col,
              { md: "3", sm: "6" },
              React.createElement(
                "h4",
                { className: "images-title" },
                "Rounded Image"
              ),
              React.createElement("img", {
                alt: "...",
                className: "img-rounded img-responsive",
                src: require("assets/img/uriel-soberanes.jpg")
              }),
              React.createElement(
                "div",
                { className: "img-details" },
                React.createElement(
                  "div",
                  { className: "author" },
                  React.createElement("img", {
                    alt: "...",
                    className: "img-circle img-no-padding img-responsive",
                    src: require("assets/img/faces/joe-gardner-2.jpg")
                  })
                ),
                React.createElement(
                  "p",
                  null,
                  "Sonia Green"
                )
              )
            ),
            React.createElement(
              Col,
              { className: "mr-auto ml-auto", md: "2", sm: "3" },
              React.createElement(
                "h4",
                { className: "images-title" },
                "Circle Image"
              ),
              React.createElement("img", {
                alt: "...",
                className: "img-circle img-no-padding img-responsive",
                src: require("assets/img/faces/kaci-baum-2.jpg")
              }),
              React.createElement(
                "p",
                { className: "text-center" },
                "Brigitte Bardot"
              )
            ),
            React.createElement(
              Col,
              { className: "mr-auto", md: "2", sm: "3" },
              React.createElement(
                "h4",
                { className: "images-title" },
                "Thumbnail"
              ),
              React.createElement("img", {
                alt: "...",
                className: "img-thumbnail img-responsive",
                src: require("assets/img/faces/erik-lucatero-2.jpg")
              }),
              React.createElement(
                "p",
                { className: "text-center" },
                "John Keynes"
              )
            )
          )
        )
      )
    )
  );
}

export default SectionTypography;