import React from "react";
import { DefaultRoute, Route, Router } from "react-router";
import Login from "../components/authentication/login";
import Navbar from "../components/navigation/navbar";
import NewPayment from "../components/payments/payment_new"
import NewProduct from "../components/products/product_new";
import Payments from "../components/payments/payment_list";
import Product from "../components/products/product_edit";
import Products from "../components/products/product_list";
import Signup from "../components/authentication/signup";

export default (
  <Route path="/" handler={Navbar}>
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
