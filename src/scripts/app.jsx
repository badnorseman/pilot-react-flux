var React = require("react");
var Products = require("./components/products");

window.React = React;

React.render(
  <Products />,
  document.getElementById("app")
);
