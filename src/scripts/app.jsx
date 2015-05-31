import React from "react";
import Router from "react-router";
import Welcome from "./components/welcome";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard";
import SideBar from "./components/side_bar.jsx";

var { DefaultRoute, Link, Route, RouteHandler } = Router;

class App extends React.Component {
  constructor() {
    super();
    this.onOpenSideBar = this.onOpenSideBar.bind(this);
  }

  render() {
    return(
      <div>
        <SideBar ref="sidebar" />
      </div>
    );
  }

  onOpenSideBar() {
    this.refs.sidebar.toggle();
  }
};

var routes = (
  <Route handler={App}>
    <DefaultRoute handler={Welcome}/>
    <Route name="log-in" path="/login" handler={Login}/>
    <Route name="sign-up" path="/signup" handler={Signup}/>
    <Route name="dashboard" path="/dashboard" handler={Dashboard}/>
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.getElementById("app"));
});
