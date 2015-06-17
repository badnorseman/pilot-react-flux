import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import { Router, Route } from "react-router";
import Products from "./components/products/products";
import Login from "./components/authentication/login";
import Logout from "./components/authentication/logout";

window.React = React

injectTapEventPlugin();

React.render(
  <div>
    <Login />
    <Logout />
    <Products />
  </div>, document.getElementById("app"));
