// Fix loggedIn
// Fix Signup to depend on loggedIn
// Move menu items into own class
import React from "react";
import { Link } from "react-router";

export default class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {loggedIn: false}
    this.openSidebar = this.openSidebar.bind(this)
    this.toggleLoggedIn = this.toggleLoggedIn.bind(this)
  }

  openSidebar() {
    $(".button-collapse").sideNav("show");
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
            <a href="#" data-activates="nav-mobile" className="button-collapse" onClick={this.openSidebar}>
              <i className="mdi-navigation-menu"></i></a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a onClick={this.toggleLoggedIn}>LOGIN</a>
              </li>
              <li>
                {this.state.loggedIn ? (
                  <Link to="Logout">
                    <i className="mdi-action-lock-open"></i></Link>
                ) : (
                  <Link to="Login">
                    <i className="mdi-action-lock-outline"></i>
                  </Link>
                )}
              </li>
              <li>
                <Link to="Signup">Sign Up</Link>
              </li>
            </ul>
            <ul className="side-nav" id="nav-mobile">
              <li>
                {this.state.loggedIn ? (
                  <Link to="Logout">Log Out</Link>
                ) : (
                  <Link to="Login">Log In</Link>
                )}
              </li>
              <li>
                <Link to="Signup">Sign Up</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
};
