import React from "react";
import Router from "react-router";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Signup from "./components/signup";
import Welcome from "./components/welcome";

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

window.React = React;

class App extends React.Component {
  render() {
    return (
      <div>
        <Link to="app">Home</Link>
        <Link to="login">Log In</Link>
        <Link to="signup">Sign Up</Link>

        <RouteHandler/>
      </div>
    );
  }
};

var routes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Welcome}/>
    <Route name="dashboard" path="/dashboard" handler={Dashboard}/>
    <Route name="login" path="/login" handler={Login}/>
    <Route name="signup" path="/signup" handler={Signup}/>
    <Route name="welcome" path="/welcome" handler={Welcome}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById("app"));
});
