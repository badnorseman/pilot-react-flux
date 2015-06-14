var React = require("react/addons");
var injectTapEventPlugin = require("react-tap-event-plugin");
var Products = require("./components/products/products");

window.React = React;

injectTapEventPlugin();

React.render(
  <Products />,
  document.getElementById("app")
)
