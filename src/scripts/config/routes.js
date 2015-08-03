import React from "react";
import { DefaultRoute, Route, Router } from "react-router";
import Login from "../components/authentication/login";
import Navbar from "../components/navigation/navbar";
import ProductMain from "../components/products/product_main";
import Signup from "../components/authentication/signup";
import Transactions from "../components/transactions/transaction_list";

export default (
  <Route path="/" handler={Navbar}>
    <DefaultRoute handler={ProductMain}/>
    <Route path="login" handler={Login}/>
    <Route path="products" handler={ProductMain}/>
    <Route path="signup" handler={Signup}/>
    <Route path="transactions" handler={Transactions}/>
  </Route>
)
