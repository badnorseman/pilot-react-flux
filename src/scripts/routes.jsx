import React from "react";
import Router from "react-router";
import Dashboard from "./components/dashboard";
import Login from "./components/authentication/login";
import Signup from "./components/signup";
import Products from "./components/products/products";

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

module.exports = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Products}/>
    <Route name="dashboard" handler={Dashboard}/>
    <Route name="login" handler={Login}/>
    <Route name="products" handler={Products}/>
    <Route name="signup" handler={Signup}/>
  </Route>
)
