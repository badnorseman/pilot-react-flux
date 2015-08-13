import React from "react";
import { DefaultRoute, Route, Router } from "react-router";
import Login from "../components/auth/login";
import Main from "../components/main";
import Products from "../components/products/product_main";
import Signup from "../components/auth/signup";
import Transactions from "../components/transactions/transaction_list";

export default (
  <Route path="/" handler={Main}>
    <DefaultRoute handler={Products}/>
    <Route path="login" handler={Login}/>
    <Route path="products" handler={Products}/>
    <Route path="signup" handler={Signup}/>
    <Route path="transactions" handler={Transactions}/>
  </Route>
)
