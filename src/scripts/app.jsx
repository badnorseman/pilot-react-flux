import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import Router from "react-router";
import Navbar from "./components/navigation/navbar";
import Footer from "./components/navigation/footer";
import Login from "./components/authentication/login";
import Logout from "./components/authentication/logout";
import Signup from "./components/authentication/signup";
import Products from "./components/products/products";
import Product from "./components/products/product_edit";
import NewProduct from "./components/products/product_new";

let { DefaultRoute, Route, RouteHandler } = Router

window.React = React

injectTapEventPlugin();

class App extends React.Component {
  render() {
    return(
      <div>
        <Navbar/>
        <RouteHandler/>
        <Footer/>
      </div>
    )
  }
}

let routes = (
  <Route handler={App}>
    <DefaultRoute handler={Products}/>
    <Route name="login" path="login" handler={Login}/>
    <Route name="logout" path="logout" handler={Logout}/>
    <Route name="signup" path="signup" handler={Signup}/>
    <Route name="products" path="products" handler={Products}/>
    <Route name="product" path="products/:id" handler={Product}/>
    <Route name="newProduct" path="product/new" handler={NewProduct}/>
  </Route>
)

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.getElementById("app"))
})
