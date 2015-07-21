import React from "react";
import Router from "react-router";
import App from "../app";
import Login from "./components/authentication/login";
import NewPayment from "./components/payments/payment_new"
import NewProduct from "./components/products/product_new";
import Payments from "./components/payments/payment_list";
import Product from "./components/products/product_edit";
import Products from "./components/products/product_list";
import Signup from "./components/authentication/signup";

let { DefaultRoute, Route } = Router

export default (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Products}/>
    <Route path="login" handler={Login}/>
    <Route path="payment/new" handler={NewPayment}/>
    <Route path="payments" handler={Payments}/>
    <Route path="product/new" handler={NewProduct}/>
    <Route path="products" handler={Products}/>
    <Route path="products/:id" handler={Product}/>
    <Route path="signup" handler={Signup}/>
  </Route>
)
