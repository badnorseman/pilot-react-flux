import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import Router from "react-router";
import Navbar from "./components/navigation/navbar";
import Footer from "./components/navigation/footer";
import Login from "./components/authentication/login";
import Logout from "./components/authentication/logout";
import Signup from "./components/authentication/signup";
import Products from "./components/products/products";
import EditProduct from "./components/products/product_edit";
import NewProduct from "./components/products/product_new";
import UploadImage from "./components/products/upload_image";

let { DefaultRoute, Route, RouteHandler } = Router;

window.React = React;

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
    <Route name="Login" path="login" handler={Login}/>
    <Route name="Logout" path="logout" handler={Logout}/>
    <Route name="Signup" path="signup" handler={Signup}/>
    <Route name="Products" path="products" handler={Products}/>
    <Route name="EditProduct" path="product/edit" handler={EditProduct}/>
    <Route name="NewProduct" path="product/new" handler={NewProduct}/>
    <Route name="UploadImage" path="product/image" handler={UploadImage}/>
  </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.getElementById("app"))
})
