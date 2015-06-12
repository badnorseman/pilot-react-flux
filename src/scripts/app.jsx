var React = require("react");
var Products = require("./components/products/products");

window.React = React;

React.render(
  <Products />,
  document.getElementById("app")
)
