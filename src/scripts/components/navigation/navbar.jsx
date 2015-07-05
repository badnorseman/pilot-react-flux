// Fix loggedIn
// Fix Signup to depend on loggedIn
// Move menu items into own class
// Fix toggleSidebar without jQuery
import React from "react";
import { Link } from "react-router";
import AuthActions from "../../actions/auth_actions";

export default class Navbar extends React.Component {
  constructor(context) {
    super(context)
    this.state = {loggedIn: false}
    this.toggleSidebar = this.toggleSidebar.bind(this)
  }

  handleLogout() {
    AuthActions.logout()
    this.context.router.transitionTo("/products")
  }

  toggleSidebar() {
    $(".button-collapse").sideNav("")
  }

  render() {
    return(
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo center">FitBird</a>
            <a href="#" data-activates="nav-mobile" className="button-collapse" onClick={this.toggleSidebar}>
              <i className="mdi-navigation-menu"></i></a>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/products">
                  <i className="mdi-action-home"></i></Link>
              </li>
              <li>
                <Link to="/payment_plans">
                  <i className="mdi-action-payment"></i></Link>
              </li>
              <li>
                {this.state.loggedIn ? (
                  <Link to="/login">
                    <i className="mdi-action-lock-outline"></i></Link>
                ) : (
                  <i className="mdi-action-lock-open" onClick={this.handleLogout.bind(this)}></i>
                )}
              </li>
              <li>
                {this.state.loggedIn ? (
                  <i className="mdi-action-lock-open" onClick={this.handleLogout.bind(this)}></i>
                ) : (
                  <Link to="/login">
                    <i className="mdi-action-lock-outline"></i></Link>
                )}
              </li>
              <li>
                <Link to="/signup">
                  <i className="mdi-social-person-outline"></i></Link>
              </li>
            </ul>
            <ul className="side-nav" id="nav-mobile">
              <li><Link to="/products">Discover</Link></li>
              <li><Link to="/logout">Log Out</Link></li>
              <li><Link to="/login">Log In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

Navbar.contextTypes = {
  router: React.PropTypes.func.isRequired
}
