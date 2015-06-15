import React from "react/addons";
import injectTapEventPlugin from "react-tap-event-plugin";
import Products from "./components/products/products";

window.React = React;

injectTapEventPlugin();

React.render(
  <Products />,
  document.getElementById("app")
)
