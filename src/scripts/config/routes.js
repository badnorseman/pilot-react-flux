import React from "react";
import Router from "react-router";
import App from "../app";
import Login from "../components/authentication/login";
import Logout from "../components/authentication/logout";
import Signup from "../components/authentication/signup";
import Products from "../components/products/products";
import Product from "../components/products/product_edit";
import NewProduct from "../components/products/product_new";

let { DefaultRoute, Route, RouteHandler } = Router

export default (
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
