import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import Router from "react-router";
import routes from "./config/routes";
import "./app.css";

window.React = React

injectTapEventPlugin();

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.getElementById("app"))
})
