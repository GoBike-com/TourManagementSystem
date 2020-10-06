import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

// styles
import LandingPage from "./components/LandingPage/LandingPage";
import UserRegistrationPage from './components/UserRegistrationPage/UserRegistrationPage';
import MainLoginForm from './components/Modal/MainLoginForm';
// import SignupPage from './components/Modal/SignupPage';
import Test from './components/Utility/Test';
import Dashboard from './components/Dashboard/Dashboard';

// pages


var hist = createBrowserHistory();


ReactDOM.render(
    <Router history={hist}>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/traveller/signin" exact component={MainLoginForm} />
        <Route path="/traveller/register" exact component={UserRegistrationPage} />
        <Route path="/traveller/success" exact component={Dashboard} />
      </Switch>
    </Router>,
  document.getElementById("root")
);
