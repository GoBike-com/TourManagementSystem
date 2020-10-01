import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// styles
import LandingPage from "./components/LandingPage/LandingPage";
import UserRegistrationPage from './components/UserRegistrationPage/UserRegistrationPage';
import MainLoginForm from './components/Modal/MainLoginForm';

// pages



ReactDOM.render(
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/traveller/signin" exact component={MainLoginForm} />
        <Route path="/traveller/register" exact component={UserRegistrationPage} />
      </Switch>
    </Router>,
  document.getElementById("root")
);
