// Export routes to config/routes.js
import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import Router from "react-router";
import "./app.css";
import Login from "./components/authentication/login";
import Logout from "./components/authentication/logout";
import Navbar from "./components/navigation/navbar";
import NewPayment from "./components/payments/payment_new"
import NewProduct from "./components/products/product_new";
import Payments from "./components/payments/payment_list";
import Product from "./components/products/product_edit";
import Products from "./components/products/product_list";
import Signup from "./components/authentication/signup";

let { DefaultRoute, Route } = Router

window.React = React

injectTapEventPlugin();

class App extends React.Component {
  constructor(context) {
    super(context)
  }

  componentDidUpdate() {
    componentHandler.upgradeDom()
  }

  render() {
    return(
      <div>
        <Navbar/>
      </div>
    )
  }
}

let routes = (
  <Route handler={App}>
    <DefaultRoute handler={Products}/>
    <Route path="login" handler={Login}/>
    <Route path="logout" handler={Logout}/>
    <Route path="payment/new" handler={NewPayment}/>
    <Route path="payments" handler={Payments}/>
    <Route path="product/new" handler={NewProduct}/>
    <Route path="products" handler={Products}/>
    <Route path="products/:id" handler={Product}/>
    <Route path="signup" handler={Signup}/>
  </Route>
)

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.getElementById("app"))
})

App.contextTypes = {
  router: React.PropTypes.func.isRequired
}
