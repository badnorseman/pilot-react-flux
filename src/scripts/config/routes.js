import React from "react";
import { DefaultRoute, Route, Router } from "react-router";
import Login from "../components/authentication/login";
import Navbar from "../components/navigation/navbar";
import Payments from "../components/payments/payment_list";
import ProductMain from "../components/products/product_main";
import Signup from "../components/authentication/signup";

export default (
  <Route path="/" handler={Navbar}>
    <DefaultRoute handler={ProductMain}/>
    <Route path="login" handler={Login}/>
    <Route path="payments" handler={Payments}/>
    <Route path="products" handler={ProductMain}/>
    <Route path="signup" handler={Signup}/>
  </Route>
)
