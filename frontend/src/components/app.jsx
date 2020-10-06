import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";

import MainPage from "./landing/landing-page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import "../App.scss";
import BackgroundVideo from "./landing/background-video";

import Modal from "./modal/modal";

const App = () => (
  <div className="app">
    <BackgroundVideo />
    <NavBarContainer />

    <AuthRoute exact path="/" component={MainPage} />
    {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
    
        {/* <ProtectedRoute path="/" component={Home} /> */}

    {/* <ProtectedRoute path="/" component={Home} /> */}
  </div>
);

export default App;
