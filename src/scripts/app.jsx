// Export routes to config/routes.js
// Export Header to navbar.jsx
import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import Router from "react-router";
import "./app.css";
import AuthActions from "./actions/auth_actions";
import AuthStore from "./stores/auth_store";
import Footer from "./components/navigation/footer";
import Login from "./components/authentication/login";
import Logout from "./components/authentication/logout";
import NewPayment from "./components/payments/payment_new"
import NewProduct from "./components/products/product_new";
import Product from "./components/products/product_edit";
import Products from "./components/products/product_list";
import Signup from "./components/authentication/signup";

let { DefaultRoute, Link, Route, RouteHandler } = Router

window.React = React

injectTapEventPlugin();

class App extends React.Component {
  constructor(context) {
    super(context)
    this.state = {
      isLoggedIn: false,
      user: {}
    }
    this.onChange = this.onChange.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentDidMount() {
    AuthStore.addChangeListener(this.onChange)
  }

  componentWillUnmount() {
    AuthStore.removeChangeListener(this.onChange)
  }

  componentDidUpdate() {
    componentHandler.upgradeDom()
  }

  onChange() {
    this.setState({
      isLoggedIn: AuthStore.isLoggedIn(),
      user: AuthStore.getUser()
    })
  }

  handleLogout() {
    AuthActions.logout()
    this.context.router.transitionTo("/products")
  }

  render() {
    return(
      <div>
        <div className="mdl-layout mdl-js-layout mdl-layout--overlay-drawer-button">
          <header className="mdl-layout__header mdl-layout__header--waterfall">
            <div className="mdl-layout__header-row">
              <span className="mdl-layout-title">
                <Link to="/products">FitBird</Link>
              </span>
              <div className="mdl-layout-spacer"></div>
              <nav className="mdl-navigation">
                <div className="mdl-navigation__link">
                  {this.state.isLoggedIn ? (
                    <i className="material-icons" onClick={this.handleLogout}>lock</i>
                  ) : (
                    <Link to="/login">
                      <i className="material-icons">lock_open</i></Link>
                  )}
                </div>
                <div className="mdl-navigation__link">
                  <Link to="/signup">
                    <i className="material-icons">person</i></Link>
                </div>
              </nav>
            </div>
          </header>
          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">FitBird</span>
            <nav className="mdl-navigation">
              <div className="mdl-navigation__link">
                <Link to="/products">Discover</Link>
              </div>
              <div className="mdl-navigation__link">
                {this.state.isLoggedIn ? (
                  <Link to="/logout">Log Out</Link>
                ) : (
                  <Link to="/login"></Link>
                )}
              </div>
              <div className="mdl-navigation__link">
                <Link to="/signup">Sign Up</Link>
              </div>
            </nav>
          </div>
          <main className="mdl-layout__content">
            <div className="page-content">
              <RouteHandler/>
              <div className="mdl-layout-spacer"></div>
              <Footer/>
            </div>
          </main>
        </div>
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
