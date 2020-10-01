import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// styles
import LandingPage from "./components/LandingPage/LandingPage";
import UserRegistrationPage from './components/UserRegistrationPage/UserRegistrationPage';
import MainLoginForm from './components/Modal/MainLoginForm';

// pages


ReactDOM.render(React.createElement(
  Router,
  null,
  React.createElement(
    Switch,
    null,
    React.createElement(Route, { path: "/", exact: true, component: LandingPage }),
    React.createElement(Route, { path: "/traveller/signin", exact: true, component: MainLoginForm }),
    React.createElement(Route, { path: "/traveller/register", exact: true, component: UserRegistrationPage })
  )
), document.getElementById("root"));