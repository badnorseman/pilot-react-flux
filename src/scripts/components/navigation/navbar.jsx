import React from "react";

export default class Navbar extends React.Component {
  constructor() {
    super()
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    $(".button-collapse").sideNav()
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
              <li><a href="">Log In</a></li>
              <li><a href="">Log Out</a></li>
            </ul>
            <ul className="side-nav" id="mobile-side-nav">
              <li><a href="">Log In</a></li>
              <li><a href="">Log Out</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
};
