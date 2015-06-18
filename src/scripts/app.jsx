import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import Navbar from "./components/navigation/navbar";
import Login from "./components/authentication/login";
import Logout from "./components/authentication/logout";
import Products from "./components/products/products";

window.React = React

injectTapEventPlugin();

React.render(
  <div>
    <Navbar />
    <Login />
    <Logout />
    <Products />
  </div>, document.getElementById("app"));
