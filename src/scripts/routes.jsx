import React from "react";
import Router from "react-router";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Signup from "./components/signup";
import Welcome from "./components/welcome";

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

module.exports = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Welcome}/>
    <Route name="dashboard" path="/dashboard" handler={Dashboard}/>
    <Route name="login" path="/login" handler={Login}/>
    <Route name="signup" path="/signup" handler={Signup}/>
    <Route name="welcome" path="/welcome" handler={Welcome}/>
  </Route>
)
