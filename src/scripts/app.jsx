import React from "react";
import Router from "react-router";
import Welcome from "./components/welcome";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard";

var { DefaultRoute, Link, Route, RouteHandler } = Router;

class App extends React.Component {

  render() {
    return(
      <div>
      </div>
    );
  }
};

var routes = (
  <Route handler={App}>
    <DefaultRoute handler={Welcome}/>
    <Route name="login" path="/login" handler={Login}/>
    <Route name="signup" path="/signup" handler={Signup}/>
    <Route name="dashboard" path="/dashboard" handler={Dashboard}/>
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.getElementById("app"));
});
