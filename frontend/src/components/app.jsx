import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import DarkPage from "./dark-page/dark-page";
import SplitPieces from "../components/split-pieces/split-pieces";

import MainPage from "./landing/landing-page";
import "../App.scss";
import BackgroundVideo from "./landing/background-video";
import Home from "./home/home_container";

import Modal from "./modal/modal";

const App = () => (
  <div className="app">
    <NavBarContainer />
    <BackgroundVideo />
    <Modal />
    <AuthRoute exact path="/" component={MainPage} />
    <Route exact path="/darkpage" component={DarkPage} />
    <Route exact path="/splitpieces" component={SplitPieces} />

    <ProtectedRoute exact path="/home" component={Home} />
    {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}

    {/* <ProtectedRoute path="/" component={Home} /> */}
  </div>
);

export default App;
