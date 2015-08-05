"use strict";
import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import Router from "react-router";
import routes from "./config/routes";
import "./app.css";

window.React = React;

injectTapEventPlugin();

Router.run(routes, Router.HashLocation, (Root, state) => {
  React.render(<Root {...state}/>, document.getElementById("app"))
})
