import React from "react";

export default class Navbar extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo center">FitBird</a>
            <a href="#" data-activates="mobile-nav" className="button-collapse">
              <i className="mdi-navigation-menu"></i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="">Log In</a></li>
              <li><a href="">Log Out</a></li>
            </ul>
            <ul className="side-nav" id="mobile-nav">
              <li><a href="">Log In</a></li>
              <li><a href="">Log Out</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
};
