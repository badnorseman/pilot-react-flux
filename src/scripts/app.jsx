import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import Navbar from "./components/navigation/navbar";
import Products from "./components/products/products";

window.React = React

injectTapEventPlugin();

React.render(
  <div>
    <Navbar />
    <Products />
  </div>, document.getElementById("app"));
