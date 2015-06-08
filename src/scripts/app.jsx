var React = require("react");
var ProductApp = require("./components/product_app");

window.React = React;

React.render(
  <ProductApp />,
  document.getElementById("app")
);
