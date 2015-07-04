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
    <Route path="login" handler={Login}/>
    <Route path="logout" handler={Logout}/>
    <Route path="signup" handler={Signup}/>
    <Route path="products" handler={Products}/>
    <Route path="products/:id" handler={Product}/>
    <Route path="product/new" handler={NewProduct}/>
  </Route>
)
