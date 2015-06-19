// TODO
// Fix loggedIn
// Fix Signup to depend on loggedIn
// Move menu items into own class
import React from "react";
import { Link } from "react-router";

export default class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {loggedIn: false}
    this.toggle = this.toggle.bind(this)
    this.toggleLoggedIn = this.toggleLoggedIn.bind(this)
  }

  toggle() {
    $(".button-collapse").sideNav();
  }

  toggleLoggedIn() {
    this.state.loggedIn ? (
      this.setState({loggedIn: false})
    ) : (
      this.setState({loggedIn: true})
    )
  }

  render() {
    return(
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo center">FitBird</a>
            <a href="#" data-activates="mobile-side-nav" className="button-collapse" onClick={this.toggle}>
              <i className="mdi-navigation-menu"></i></a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a onClick={this.toggleLoggedIn}>LOGIN</a>
              </li>
              <li>
                {this.state.loggedIn ? (
                  <Link to="Logout">Log Out</Link>
                ) : (
                  <Link to="Login">Log In</Link>
                )}
              </li>
              <li>
                <Link to="Signup">Sign In</Link>
              </li>
            </ul>
            <ul className="side-nav" id="mobile-side-nav">
              <li>
                {this.state.loggedIn ? (
                  <Link to="Logout">Log Out</Link>
                ) : (
                  <Link to="Login">Log In</Link>
                )}
              </li>
              <li>
                <Link to="Signup">Sign In</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
};
