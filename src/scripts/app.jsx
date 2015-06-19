import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import Router from "react-router";
import Navbar from "./components/navigation/navbar";
import Login from "./components/authentication/login";
import Logout from "./components/authentication/logout";
import Signup from "./components/authentication/signup";
import Products from "./components/products/products";
import NewProduct from "./components/products/product_new";

let DefaultRoute = Router.DefaultRoute;
let Route = Router.Route;
let RouteHandler = Router.RouteHandler;

window.React = React

injectTapEventPlugin();

const App = React.createClass({
  render() {
    return(
      <div>
        <Navbar/>
        <RouteHandler/>
      </div>
    )
  }
})

const routes = (
  <Route handler={App}>
    <DefaultRoute handler={Products}/>
    <Route name="Login" path="login" handler={Login}/>
    <Route name="Logout" path="logout" handler={Logout}/>
    <Route name="Signup" path="signup" handler={Signup}/>
    <Route name="Products" path="products" handler={Products}/>
    <Route name="NewProduct" path="product/new" handler={NewProduct}/>
  </Route>
)

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.getElementById("app"));
});
