import React from "react";
import ProductApp from "./components/product_app";

window.React = React;

React.render(
  <ProductApp/>,
  document.getElementById("app")
);
