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
import ForgetPassword from './components/ForgetPassword/EmailPage';
import OTPVerify from './components/OTP/OTPVerify';
import NewPassword from './components/ForgetPassword/NewPassword';
import SearchComponent from './components/Dashboard/SearchComponent';
import Accomodation from './components/Dashboard/Accomodation';
import Itinerary from './components/Dashboard/Itinerary';
import Travel from './components/Dashboard/Travel';
import Review from './components/Dashboard/Review';
import Chat from './components/Dashboard/Chat';
import GobikeMap from './components/Itinerary/GobikeMap'

// pages


var hist = createBrowserHistory();


ReactDOM.render(
    <Router history={hist}>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/traveller/signin" exact component={MainLoginForm} />
        <Route path="/traveller/register" exact component={UserRegistrationPage} />
        <Route path="/traveller/success" exact component={Dashboard} />
        <Route path="/traveller/forgetpassword" exact component={ForgetPassword} />
        <Route path="/traveller/otpverify" component={OTPVerify} />
        <Route path="/traveller/resetpassword" exact component={NewPassword} />

        <Route path="/search" exact component={SearchComponent} />
        <Route path="/accomodation" exact component={Accomodation} />
        <Route path="/itinerary" exact component={Itinerary} />
        <Route path="/travel" exact component={Travel} />
        <Route path="/review" exact component={Review} />
        <Route path="/chat" exact component={Chat} />
        <Route path="/map" exact component={GobikeMap} />


      </Switch>
    </Router>,
  document.getElementById("root")
);
