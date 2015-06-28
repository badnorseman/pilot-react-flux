// Fix loggedIn
// Fix Signup to depend on loggedIn
// Move menu items into own class
// Fix toggleSidebar without jQuery
import React from "react";
import { Link } from "react-router";

export default class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {loggedIn: false}
    this.toggleSidebar = this.toggleSidebar.bind(this)
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
                <Link to="Products">
                  <i className="mdi-action-search"></i></Link>
              </li>
              <li>
                {this.state.loggedIn ? (
                  <Link to="Login">
                    <i className="mdi-action-lock-outline"></i></Link>
                ) : (
                  <Link to="Logout">
                    <i className="mdi-action-lock-open"></i></Link>
                )}
              </li>
              <li>
                {this.state.loggedIn ? (
                  <Link to="Logout">
                    <i className="mdi-action-lock-open"></i></Link>
                ) : (
                  <Link to="Login">
                    <i className="mdi-action-lock-outline"></i></Link>
                )}
              </li>
              <li>
                <Link to="Signup">
                  <i className="mdi-social-person-outline"></i></Link>
              </li>
            </ul>
            <ul className="side-nav" id="nav-mobile">
              <li><Link to="Products">Discover</Link></li>
              <li><Link to="Logout">Log Out</Link></li>
              <li><Link to="Login">Log In</Link></li>
              <li><Link to="Signup">Sign Up</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
